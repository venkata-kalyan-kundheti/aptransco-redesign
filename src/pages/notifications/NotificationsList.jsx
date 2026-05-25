/**
 * src/pages/notifications/NotificationsList.jsx — Full implementation
 * ─────────────────────────────────────────────────────────────────────────────
 * Features: Tabs (All/Circulars/Orders/Press Releases/Recruitment/General),
 *           search, date sort, NotificationCard grid, Pagination, EmptyState.
 *           Deep-link: ?tab=<value> OR ?category=<value> (both supported).
 */
import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageShell from '@/components/layout/PageShell';
import Tabs from '@/components/ui/Tabs';
import NotificationCard from '@/components/common/NotificationCard';
import FilterBar from '@/components/common/FilterBar';
import Pagination from '@/components/common/Pagination';
import EmptyState from '@/components/common/EmptyState';
import { NOTIFICATIONS, NOTIFICATION_CATEGORIES } from '@/data/notifications';

const PER_PAGE = 9;

const SORT_OPTIONS = [
  { value: 'date-desc', label: 'Newest First' },
  { value: 'date-asc',  label: 'Oldest First' },
];

export default function NotificationsList() {
  const [searchParams] = useSearchParams();
  // Support ?tab= and ?category= as equivalent deep-link params
  const initialTab = searchParams.get('tab') ?? searchParams.get('category') ?? 'all';
  const validTab   = NOTIFICATION_CATEGORIES.some((c) => c.value === initialTab) ? initialTab : 'all';

  const [activeTab, setActiveTab] = useState(validTab);
  const [search,    setSearch]    = useState('');
  const [sort,      setSort]      = useState('date-desc');
  const [page,      setPage]      = useState(1);

  // Build tab counts
  const tabsWithCounts = NOTIFICATION_CATEGORIES.map((cat) => ({
    value: cat.value,
    label: cat.label,
    count: cat.value === 'all'
      ? NOTIFICATIONS.length
      : NOTIFICATIONS.filter((n) => n.category === cat.value).length,
  }));

  // Filter + sort
  const filtered = useMemo(() => {
    let result = NOTIFICATIONS;

    if (activeTab !== 'all') {
      result = result.filter((n) => n.category === activeTab);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result  = result.filter(
        (n) =>
          n.title.toLowerCase().includes(q) ||
          n.refNo?.toLowerCase().includes(q) ||
          n.summary?.toLowerCase().includes(q)
      );
    }

    result = [...result].sort((a, b) =>
      sort === 'date-asc'
        ? new Date(a.date) - new Date(b.date)
        : new Date(b.date) - new Date(a.date)
    );

    return result;
  }, [activeTab, search, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const paginated  = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  function handleTabChange(value) {
    setActiveTab(value);
    setPage(1);
  }

  function handleReset() {
    setSearch('');
    setSort('date-desc');
    setPage(1);
  }

  return (
    <PageShell
      title="Notifications & News"
      subtitle="Circulars, administrative orders, press releases, announcements and recruitment notices"
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Notifications & News' }]}
    >
      {/* Category Tabs */}
      <Tabs
        id="notifications"
        tabs={tabsWithCounts}
        active={activeTab}
        onChange={handleTabChange}
        className="mb-6"
      />

      {/* Filters */}
      <FilterBar
        filters={[{ key: 'sort', label: 'Sort', options: SORT_OPTIONS }]}
        values={{ sort }}
        onChange={(_, v) => { setSort(v); setPage(1); }}
        onReset={handleReset}
        searchValue={search}
        onSearch={(v) => { setSearch(v); setPage(1); }}
        searchPlaceholder="Search notifications by title, ref no…"
        resultCount={filtered.length}
        className="mb-6"
      />

      {/* Cards */}
      {paginated.length === 0 ? (
        <EmptyState
          title="No notifications found"
          message="Try a different category tab or clear the search."
          action={{ label: 'Clear Search', onClick: handleReset }}
        />
      ) : (
        <>
          <div
            id="notifications-panel-all"
            role="tabpanel"
            aria-labelledby={`notifications-tab-${activeTab}`}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8"
          >
            {paginated.map((notif) => (
              <NotificationCard key={notif.id} notification={notif} />
            ))}
          </div>

          <Pagination
            page={page}
            totalPages={totalPages}
            perPage={PER_PAGE}
            onPageChange={setPage}
            totalItems={filtered.length}
          />
        </>
      )}
    </PageShell>
  );
}
