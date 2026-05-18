/**
 * src/components/common/EmptyState.jsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Empty search results / no-data illustration with message and optional action.
 *
 * Props:
 *   title:    string
 *   message:  string
 *   icon:     React node (optional, defaults to search icon illustration)
 *   action:   { label, onClick } (optional CTA)
 */
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function EmptyState({
  title   = 'No results found',
  message = 'Try adjusting your search or filter criteria.',
  icon,
  action,
  className = '',
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center py-16 px-6 text-center ${className}`}
      role="status"
      aria-live="polite"
    >
      {/* Illustration */}
      <div className="mb-5 w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center" aria-hidden="true">
        {icon ?? (
          <MagnifyingGlassIcon className="w-10 h-10 text-slate-300" />
        )}
      </div>

      <h3 className="text-base font-semibold text-navy-800 mb-2">{title}</h3>
      <p className="text-sm text-slate-400 max-w-sm leading-relaxed">{message}</p>

      {action && (
        <button
          type="button"
          onClick={action.onClick}
          className="mt-6 btn-secondary btn-sm"
        >
          {action.label}
        </button>
      )}
    </div>
  );
}
