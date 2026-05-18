/**
 * src/components/common/Pagination.jsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Page navigation: prev/next + numbered pages + items-per-page select.
 *
 * Props:
 *   page:        current page (1-indexed)
 *   totalPages:  total number of pages
 *   perPage:     items per page
 *   perPageOptions: [10, 20, 50]
 *   onPageChange:   (page) => void
 *   onPerPageChange:(perPage) => void
 *   totalItems:  total item count (for display)
 */
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

export default function Pagination({
  page,
  totalPages,
  perPage,
  perPageOptions = [10, 20, 50],
  onPageChange,
  onPerPageChange,
  totalItems,
  className = '',
}) {
  if (totalPages <= 1 && !onPerPageChange) return null;

  // Build visible page buttons (max 7 visible)
  function pageNumbers() {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    const pages = new Set([1, totalPages, page]);
    for (let i = Math.max(2, page - 1); i <= Math.min(totalPages - 1, page + 1); i++) {
      pages.add(i);
    }
    return [...pages].sort((a, b) => a - b);
  }

  const pages = pageNumbers();

  function renderPages() {
    const result = [];
    let prev = null;
    for (const p of pages) {
      if (prev !== null && p - prev > 1) {
        result.push(
          <span key={`ellipsis-${p}`} className="px-1 text-slate-400 select-none">
            …
          </span>
        );
      }
      result.push(
        <button
          key={p}
          type="button"
          onClick={() => onPageChange?.(p)}
          aria-current={p === page ? 'page' : undefined}
          className={[
            'w-9 h-9 rounded-lg text-sm font-medium transition-colors duration-100',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-400',
            p === page
              ? 'bg-navy-700 text-white'
              : 'text-slate-600 hover:bg-navy-50 hover:text-navy-700',
          ].join(' ')}
        >
          {p}
        </button>
      );
      prev = p;
    }
    return result;
  }

  const start = (page - 1) * perPage + 1;
  const end   = Math.min(page * perPage, totalItems ?? page * perPage);

  return (
    <nav
      aria-label="Pagination"
      className={`flex flex-wrap items-center justify-between gap-4 ${className}`}
    >
      {/* Items info */}
      <p className="text-xs text-slate-400" aria-live="polite">
        {totalItems !== undefined
          ? `Showing ${start}–${end} of ${totalItems} items`
          : `Page ${page} of ${totalPages}`}
      </p>

      {/* Page buttons */}
      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={() => onPageChange?.(page - 1)}
          disabled={page <= 1}
          className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 hover:bg-navy-50 hover:text-navy-700 disabled:opacity-40 disabled:pointer-events-none transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-400"
          aria-label="Previous page"
        >
          <ChevronLeftIcon className="w-4 h-4" />
        </button>

        {renderPages()}

        <button
          type="button"
          onClick={() => onPageChange?.(page + 1)}
          disabled={page >= totalPages}
          className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 hover:bg-navy-50 hover:text-navy-700 disabled:opacity-40 disabled:pointer-events-none transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-400"
          aria-label="Next page"
        >
          <ChevronRightIcon className="w-4 h-4" />
        </button>
      </div>

      {/* Per page selector */}
      {onPerPageChange && (
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <label htmlFor="per-page-select">Rows per page:</label>
          <select
            id="per-page-select"
            value={perPage}
            onChange={(e) => { onPerPageChange(Number(e.target.value)); onPageChange?.(1); }}
            className="input h-8 text-xs px-2"
          >
            {perPageOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      )}
    </nav>
  );
}
