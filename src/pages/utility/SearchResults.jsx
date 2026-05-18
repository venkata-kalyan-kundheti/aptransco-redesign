/**
 * src/pages/utility/SearchResults.jsx — Full implementation
 * ─────────────────────────────────────────────────────────────────────────────
 * Searches across tenders + notifications using useSearch hook.
 * Shows categorised results with type badges.
 */
import { useSearchParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import PageShell from '@/components/layout/PageShell';
import NotificationCard from '@/components/common/NotificationCard';
import TenderCard from '@/components/common/TenderCard';
import EmptyState from '@/components/common/EmptyState';
import useSearch from '@/hooks/useSearch';
import { NOTIFICATIONS } from '@/data/notifications';
import { TENDERS } from '@/data/tenders';

// Merge all searchable content with a type tag
const ALL_CONTENT = [
  ...NOTIFICATIONS.map(n => ({ ...n, _type: 'notification' })),
  ...TENDERS.map(t => ({ ...t, _type: 'tender', date: t.issuedDate })),
];

export default function SearchResults() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Capture the URL param value at mount time via ref so the effect below
  // can safely list only stable deps (setQuery) and still run only once.
  const initialQRef = useRef(searchParams.get('q') ?? '');

  const { query, setQuery, results, isSearching } = useSearch(ALL_CONTENT, {
    keys: ['title', 'refNo', 'summary', 'description'],
    minLength: 2,
    debounceMs: 200,
  });

  // Sync URL ?q= → search state on mount only.
  // setQuery is stable (useCallback inside useSearch), so listing it is safe.
  useEffect(() => {
    if (initialQRef.current) setQuery(initialQRef.current);
  }, [setQuery]);

  // Mirror search state back to the URL so the address bar stays bookmarkable.
  // setSearchParams is stable across renders (react-router-dom guarantee).
  useEffect(() => {
    if (query) setSearchParams({ q: query }, { replace: true });
    else setSearchParams({}, { replace: true });
  }, [query, setSearchParams]);

  const notifications = results.filter(r => r._type === 'notification');
  const tenders       = results.filter(r => r._type === 'tender');

  return (
    <PageShell
      title="Search Results"
      description={isSearching ? `${results.length} result${results.length !== 1 ? 's' : ''} for "${query}"` : 'Search across tenders, notifications and circulars.'}
      breadcrumb={['Search']}
    >
      {/* Search input */}
      <div className="relative max-w-xl mb-10">
        <MagnifyingGlassIcon
          className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none"
          aria-hidden="true"
        />
        <input
          id="search-input"
          type="search"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search tenders, notifications, circulars…"
          autoFocus
          className="input pl-10 h-12 text-base w-full shadow-sm"
          aria-label="Search all content"
        />
      </div>

      {/* Results */}
      {!isSearching && (
        <div className="text-center py-16 text-slate-400">
          <MagnifyingGlassIcon className="w-12 h-12 mx-auto mb-3 text-slate-200" aria-hidden="true" />
          <p className="text-sm">Type at least 2 characters to search across tenders and notifications.</p>
        </div>
      )}

      {isSearching && results.length === 0 && (
        <EmptyState
          title={`No results for "${query}"`}
          message="Try different keywords, or browse Tenders and Notifications directly."
        />
      )}

      {isSearching && results.length > 0 && (
        <div className="flex flex-col gap-10">
          {/* Tenders */}
          {tenders.length > 0 && (
            <section aria-labelledby="search-tenders-heading">
              <h2 id="search-tenders-heading" className="text-sm font-bold text-navy-500 uppercase tracking-widest mb-4">
                Tenders ({tenders.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tenders.map(t => <TenderCard key={t.id} tender={t} />)}
              </div>
            </section>
          )}

          {/* Notifications */}
          {notifications.length > 0 && (
            <section aria-labelledby="search-notifs-heading">
              <h2 id="search-notifs-heading" className="text-sm font-bold text-navy-500 uppercase tracking-widest mb-4">
                Notifications ({notifications.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {notifications.map(n => <NotificationCard key={n.id} notification={n} />)}
              </div>
            </section>
          )}
        </div>
      )}
    </PageShell>
  );
}
