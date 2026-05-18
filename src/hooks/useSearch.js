/**
 * src/hooks/useSearch.js
 * Client-side search logic: query, results, loading state, debounce.
 *
 * Usage:
 *   const { query, setQuery, results, isSearching } = useSearch(items, {
 *     keys: ['title', 'refNo', 'summary'],
 *     minLength: 2,
 *     debounceMs: 250,
 *   });
 */
import { useState, useEffect, useMemo } from 'react';

/**
 * Simple debounce helper (no lodash dependency).
 */
function useDebounce(value, delay) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debounced;
}

/**
 * Searches an array of objects by the given keys.
 *
 * @param {Array}  items         The full data array to search
 * @param {Object} options
 * @param {string[]} options.keys       Object keys to match against
 * @param {number}   options.minLength  Minimum query length before searching (default 2)
 * @param {number}   options.debounceMs Debounce delay in ms (default 250)
 */
export default function useSearch(items = [], { keys = ['title'], minLength = 2, debounceMs = 250 } = {}) {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, debounceMs);

  const isSearching = query.length >= minLength;

  const results = useMemo(() => {
    const q = debouncedQuery.trim().toLowerCase();
    if (q.length < minLength) return [];

    return items.filter((item) =>
      keys.some((key) => {
        const val = item[key];
        if (!val) return false;
        return String(val).toLowerCase().includes(q);
      })
    );
  }, [debouncedQuery, items, keys, minLength]);

  function clearQuery() {
    setQuery('');
  }

  return { query, setQuery, results, isSearching, clearQuery, debouncedQuery };
}
