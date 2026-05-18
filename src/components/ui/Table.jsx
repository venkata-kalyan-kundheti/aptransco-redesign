/**
 * src/components/ui/Table.jsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Responsive data table with sort headers, striped rows, horizontal scroll.
 *
 * Usage:
 *   <Table
 *     columns={[{ key: 'refNo', label: 'Ref No', sortable: true, width: '150px' }]}
 *     rows={tenders}
 *     sortKey="date"
 *     sortDir="desc"
 *     onSort={(key) => handleSort(key)}
 *     emptyMessage="No records found."
 *   />
 *
 * Each column can have: key, label, sortable, width, align ('left'|'right'|'center'), render(row)
 */
import { ChevronUpDownIcon, ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/20/solid';

export default function Table({
  columns  = [],
  rows     = [],
  sortKey,
  sortDir  = 'asc',
  onSort,
  emptyMessage = 'No records found.',
  caption,
  className = '',
}) {
  function SortIcon({ colKey }) {
    if (!onSort) return null;
    if (sortKey !== colKey) {
      return <ChevronUpDownIcon className="w-4 h-4 text-slate-400" aria-hidden="true" />;
    }
    return sortDir === 'asc'
      ? <ChevronUpIcon   className="w-4 h-4 text-navy-600" aria-hidden="true" />
      : <ChevronDownIcon className="w-4 h-4 text-navy-600" aria-hidden="true" />;
  }

  return (
    <div className={`w-full overflow-x-auto rounded-lg border border-slate-200 ${className}`}>
      <table className="min-w-full text-sm">
        {caption && (
          <caption className="sr-only">{caption}</caption>
        )}
        <thead className="bg-navy-700 text-white">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                scope="col"
                style={col.width ? { width: col.width, minWidth: col.width } : {}}
                className={[
                  'px-4 py-3 font-semibold text-left whitespace-nowrap',
                  col.align === 'right'  ? 'text-right'  : '',
                  col.align === 'center' ? 'text-center' : '',
                  col.sortable && onSort ? 'cursor-pointer select-none hover:bg-navy-600 transition-colors' : '',
                ].join(' ')}
                onClick={col.sortable && onSort ? () => onSort(col.key) : undefined}
                aria-sort={
                  col.sortable && sortKey === col.key
                    ? sortDir === 'asc' ? 'ascending' : 'descending'
                    : col.sortable ? 'none' : undefined
                }
              >
                <span className="inline-flex items-center gap-1">
                  {col.label}
                  {col.sortable && <SortIcon colKey={col.key} />}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-slate-100">
          {rows.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="px-4 py-10 text-center text-slate-400"
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            rows.map((row, rowIdx) => (
              <tr
                key={row.id ?? rowIdx}
                className={rowIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}
              >
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className={[
                      'px-4 py-3 align-top',
                      col.align === 'right'  ? 'text-right'  : '',
                      col.align === 'center' ? 'text-center' : '',
                    ].join(' ')}
                  >
                    {col.render ? col.render(row) : (row[col.key] ?? '—')}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
