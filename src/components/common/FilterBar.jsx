/**
 * src/components/common/FilterBar.jsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Filter + sort row for Tenders and Notifications list pages.
 *
 * Props:
 *   filters: Array<{ key, label, options: [{ value, label }] }>
 *   values:  { [key]: value }
 *   onChange: (key, value) => void
 *   onReset: () => void
 *   searchValue?: string
 *   onSearch?: (value) => void
 *   searchPlaceholder?: string
 *   resultCount?: number
 */
import { MagnifyingGlassIcon, FunnelIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useRef } from 'react';

export default function FilterBar({
  filters          = [],
  values           = {},
  onChange,
  onReset,
  searchValue      = '',
  onSearch,
  searchPlaceholder = 'Search…',
  resultCount,
  className        = '',
}) {
  const searchRef = useRef(null);

  const hasActiveFilters =
    searchValue.trim() !== '' ||
    filters.some((f) => values[f.key] && values[f.key] !== 'all' && values[f.key] !== '');

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {/* Search + Reset row */}
      <div className="flex items-center gap-3 flex-wrap">
        {onSearch && (
          <div className="relative flex-1 min-w-[200px]">
            <MagnifyingGlassIcon
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
              aria-hidden="true"
            />
            <input
              ref={searchRef}
              id="filter-search"
              type="search"
              value={searchValue}
              onChange={(e) => onSearch(e.target.value)}
              placeholder={searchPlaceholder}
              className="input pl-9 pr-9 h-9 text-sm w-full"
              aria-label="Search"
            />
            {searchValue && (
              <button
                type="button"
                onClick={() => { onSearch(''); searchRef.current?.focus(); }}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                aria-label="Clear search"
              >
                <XMarkIcon className="w-4 h-4" />
              </button>
            )}
          </div>
        )}

        {/* Filter selects */}
        {filters.map((filter) => (
          <div key={filter.key} className="flex items-center gap-1.5">
            <label htmlFor={`filter-${filter.key}`} className="sr-only">
              {filter.label}
            </label>
            <select
              id={`filter-${filter.key}`}
              value={values[filter.key] ?? 'all'}
              onChange={(e) => onChange?.(filter.key, e.target.value)}
              className="input h-9 text-sm pr-8 pl-3 cursor-pointer"
              aria-label={filter.label}
            >
              {filter.options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        ))}

        {/* Reset */}
        {hasActiveFilters && onReset && (
          <button
            type="button"
            onClick={onReset}
            className="inline-flex items-center gap-1.5 h-9 px-3 text-sm font-medium text-slate-500 hover:text-navy-700 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Reset all filters"
          >
            <XMarkIcon className="w-4 h-4" aria-hidden="true" />
            Reset
          </button>
        )}
      </div>

      {/* Result count */}
      {resultCount !== undefined && (
        <p className="text-xs text-slate-400" aria-live="polite">
          <FunnelIcon className="w-3 h-3 inline mr-1" aria-hidden="true" />
          {resultCount === 0
            ? 'No results match your filters.'
            : `Showing ${resultCount} result${resultCount !== 1 ? 's' : ''}`}
        </p>
      )}
    </div>
  );
}
