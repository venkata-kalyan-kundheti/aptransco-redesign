/**
 * src/components/ui/LazyImage.jsx
 * ─────────────────────────────────────────────────────────────────────────────
 * A drop-in replacement for <img> that adds:
 *
 *  1. Native lazy loading  — loading="lazy" defers off-screen images.
 *                            loading="eager" for above-the-fold / LCP images.
 *  2. Async decoding       — decoding="async" so image decode doesn't block
 *                            the main thread (browser paints first, decodes later).
 *  3. Blur-up placeholder  — a low-opacity skeleton shimmer shows while the
 *                            real image loads, then fades out smoothly.
 *  4. Error fallback       — if the image fails (broken URL, 404), shows a
 *                            branded placeholder with a power-tower icon.
 *  5. Accessibility        — enforces a required `alt` prop; warns in dev if missing.
 *
 * Usage:
 *   // Below-the-fold image (lazy — default)
 *   <LazyImage src="/images/substation.jpg" alt="Kurnool 400kV substation" />
 *
 *   // Above-the-fold / hero / LCP image (eager)
 *   <LazyImage src="/images/hero-banner.jpg" alt="APTRANSCO transmission lines" eager />
 *
 *   // With explicit dimensions (always preferred for CLS prevention)
 *   <LazyImage src="/images/project.jpg" alt="Project photo" width={800} height={450} className="rounded-lg" />
 */

import { useState } from 'react';

// ── Fallback SVG icon (inline — no extra network request) ─────────────────────
function FallbackIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-10 h-10 text-slate-300"
      aria-hidden="true"
    >
      {/* Power tower / transmission icon */}
      <path d="M12 2 L12 22 M4 8 L20 8 M6 14 L18 14 M2 22 L7 14 M22 22 L17 14 M2 22 L6 8 M22 22 L18 8" />
    </svg>
  );
}

export default function LazyImage({
  src,
  alt,
  eager = false,          // set true for hero/LCP images (above the fold)
  className = '',
  width,
  height,
  objectFit = 'cover',    // CSS object-fit value
  ...rest                 // any other valid <img> props
}) {
  const [status, setStatus] = useState('loading'); // 'loading' | 'loaded' | 'error'

  // ── Dev-only warning if alt is missing ────────────────────────────────────
  if (import.meta.env.DEV && !alt) {
    console.warn('[LazyImage] Missing `alt` prop — accessibility violation. Provide a descriptive alt text.');
  }

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ width: width ?? '100%', height: height ?? '100%' }}
    >
      {/* ── Shimmer placeholder (visible while loading) ──────────────────── */}
      {status === 'loading' && (
        <div
          className="absolute inset-0 bg-slate-100 animate-pulse"
          aria-hidden="true"
        >
          {/* Subtle gradient shimmer sweep */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 50%, transparent 100%)',
              backgroundSize: '200% 100%',
              animation: 'shimmer 1.5s infinite',
            }}
          />
        </div>
      )}

      {/* ── Error fallback (visible if image fails to load) ──────────────── */}
      {status === 'error' && (
        <div
          className="absolute inset-0 bg-slate-100 flex flex-col items-center justify-center gap-2"
          role="img"
          aria-label={alt || 'Image unavailable'}
        >
          <FallbackIcon />
          <span className="text-xs text-slate-400">Image unavailable</span>
        </div>
      )}

      {/* ── The actual image ─────────────────────────────────────────────── */}
      {status !== 'error' && (
        <img
          src={src}
          alt={alt ?? ''}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          width={width}
          height={height}
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
          className="w-full h-full transition-opacity duration-500"
          style={{
            objectFit,
            opacity: status === 'loaded' ? 1 : 0,  // fade in once loaded
          }}
          {...rest}
        />
      )}
    </div>
  );
}
