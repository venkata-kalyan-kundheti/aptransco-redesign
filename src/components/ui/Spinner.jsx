/**
 * src/components/ui/Spinner.jsx
 * Loading spinner — Suspense fallback + inline loading states.
 *
 * Wrapped in React.memo: this component has no dependencies and is rendered
 * on every route transition. Memoisation prevents unnecessary re-renders
 * when parent state changes while loading is in progress.
 */
import { memo } from 'react';

const Spinner = memo(function Spinner({ fullPage = false, label = 'Loading…' }) {
  const ring = (
    <div
      role="status"
      aria-label={label}
      aria-live="polite"
      className="flex flex-col items-center justify-center gap-3"
    >
      {/* CSS border-trick spinner — zero JS, GPU-composited via transform */}
      <div
        className="w-10 h-10 rounded-full border-4 border-slate-200 border-t-navy-500 animate-spin"
        aria-hidden="true"
      />
      <span className="text-sm text-slate-400">{label}</span>
    </div>
  );

  if (fullPage) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        {ring}
      </div>
    );
  }

  return ring;
});

export default Spinner;
