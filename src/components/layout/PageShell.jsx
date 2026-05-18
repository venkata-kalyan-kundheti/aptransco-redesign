/**
 * src/components/layout/PageShell.jsx
 * Inner-page wrapper: breadcrumb nav + page banner + content area.
 * Every inner page uses this for visual consistency.
 *
 * Props:
 *   title        — page heading (required)
 *   description  — subtitle text shown in banner (also accepts `subtitle` as alias)
 *   breadcrumb   — array of crumbs (also accepts `breadcrumbs` as alias)
 *                  Each crumb: string | { label: string, href?: string }
 *   children     — page content
 *
 * Aliases maintained for backward compatibility with Phase 2 pages.
 */

import { Link } from 'react-router-dom';
import { HomeIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function PageShell({
  title,
  // Accept both `description` and `subtitle` (backward compat)
  description,
  subtitle,
  // Accept both `breadcrumb` and `breadcrumbs` (backward compat)
  breadcrumb,
  breadcrumbs,
  children,
}) {
  // Resolve aliases
  const desc   = description ?? subtitle;
  const crumbs = breadcrumb  ?? breadcrumbs ?? [];

  // Normalise crumbs: string → { label }  |  { label, href } passes through
  const normalisedCrumbs = crumbs.map((c) =>
    typeof c === 'string' ? { label: c } : c
  );

  return (
    <>
      {/* Page banner */}
      <div className="page-banner" aria-label="Page header">
        <div className="container-site">
          {/* Breadcrumb */}
          {normalisedCrumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="mb-3">
              <ol className="flex items-center flex-wrap gap-1 text-sm text-navy-200">
                <li>
                  <Link
                    to="/"
                    className="flex items-center hover:text-gold-300 transition-colors duration-150
                               focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-400 rounded"
                  >
                    <HomeIcon className="w-4 h-4" aria-hidden="true" />
                    <span className="sr-only">Home</span>
                  </Link>
                </li>
                {normalisedCrumbs.map((crumb, i) => (
                  <li key={i} className="flex items-center gap-1">
                    <ChevronRightIcon className="w-3.5 h-3.5 text-navy-400" aria-hidden="true" />
                    {crumb.href ? (
                      <Link
                        to={crumb.href}
                        className="hover:text-gold-300 transition-colors duration-150
                                   focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-400 rounded"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span
                        className={
                          i === normalisedCrumbs.length - 1
                            ? 'text-gold-300 font-medium'
                            : 'hover:text-gold-300 transition-colors'
                        }
                        aria-current={i === normalisedCrumbs.length - 1 ? 'page' : undefined}
                      >
                        {crumb.label}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}

          {/* Page title */}
          <h1 className="text-white">{title}</h1>
          {desc && (
            <p className="mt-2 text-navy-200 text-sm md:text-base max-w-2xl leading-relaxed">
              {desc}
            </p>
          )}
        </div>
      </div>

      {/* Page content */}
      <div className="container-site py-8 md:py-12">
        {children}
      </div>
    </>
  );
}
