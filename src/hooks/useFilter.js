/**
 * src/hooks/useFilter.js
 * Filter + sort logic for list pages.
 * Manages filter values, applies them to a dataset, and handles reset.
 *
 * Usage:
 *   const { filters, setFilter, resetFilters, filtered } = useFilter(items, {
 *     filterFns: {
 *       status:   (item, val) => val === 'all' || item.status === val,
 *       category: (item, val) => val === 'all' || item.category === val,
 *     },
 *     sortFns: {
 *       'date-desc': (a, b) => new Date(b.date) - new Date(a.date),
 *     },
 *     defaults: { status: 'all', category: 'all', sort: 'date-desc' },
 *   });
 */
import { useState, useMemo } from 'react';

export default function useFilter(
  items = [],
  { filterFns = {}, sortFns = {}, defaults = {} } = {}
) {
  const [filters, setFiltersState] = useState(defaults);

  function setFilter(key, value) {
    setFiltersState((prev) => ({ ...prev, [key]: value }));
  }

  function resetFilters() {
    setFiltersState(defaults);
  }

  const filtered = useMemo(() => {
    let result = [...items];

    // Apply each filter function
    for (const [key, fn] of Object.entries(filterFns)) {
      const val = filters[key];
      if (val !== undefined) {
        result = result.filter((item) => fn(item, val));
      }
    }

    // Apply sort
    const sortKey = filters.sort;
    if (sortKey && sortFns[sortKey]) {
      result.sort(sortFns[sortKey]);
    }

    return result;
  }, [items, filters, filterFns, sortFns]);

  return { filters, setFilter, resetFilters, filtered };
}
