/**
 * src/pages/tenders/TendersList.jsx — Full implementation
 * ─────────────────────────────────────────────────────────────────────────────
 * Features: FilterBar (status + category + search), TenderCard grid,
 *           Pagination, EmptyState, sort by date/value, result count.
 */
import { useState, useMemo } from 'react';
import PageShell from '@/components/layout/PageShell';
import TenderCard from '@/components/common/TenderCard';
import FilterBar from '@/components/common/FilterBar';
import Pagination from '@/components/common/Pagination';
import EmptyState from '@/components/common/EmptyState';
import { TENDERS, TENDER_STATUSES, TENDER_CATEGORIES } from '@/data/tenders';

const PER_PAGE = 9;

const SORT_OPTIONS = [
  { value: 'date-desc',  label: 'Newest First' },
  { value: 'date-asc',   label: 'Oldest First' },
  { value: 'close-asc',  label: 'Closing Soon' },
];

export default function TendersList() {
  const [search,  setSearch]  = useState('');
  const [filters, setFilters] = useState({ status: 'all', category: 'all', sort: 'date-desc' });
  const [page,    setPage]    = useState(1);
  const [perPage, setPerPage] = useState(PER_PAGE);

  function handleFilter(key, value) {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setPage(1);
  }

  function handleReset() {
    setSearch('');
    setFilters({ status: 'all', category: 'all', sort: 'date-desc' });
    setPage(1);
  }

  // Filter + sort
  const filtered = useMemo(() => {
    let result = TENDERS;

    if (filters.status !== 'all') {
      result = result.filter((t) => t.status === filters.status);
    }
    if (filters.category !== 'all') {
      result = result.filter((t) => t.category === filters.category);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result  = result.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.refNo.toLowerCase().includes(q) ||
          t.description?.toLowerCase().includes(q)
      );
    }

    // Sort
    result = [...result].sort((a, b) => {
      switch (filters.sort) {
        case 'date-asc':  return new Date(a.issuedDate) - new Date(b.issuedDate);
        case 'close-asc': return new Date(a.closingDate) - new Date(b.closingDate);
        default:          return new Date(b.issuedDate) - new Date(a.issuedDate);
      }
    });

    return result;
  }, [search, filters]);

  // Paginate
  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const paginated  = filtered.slice((page - 1) * perPage, page * perPage);

  // Stats for summary bar
  const openCount     = TENDERS.filter((t) => t.status === 'open').length;
  const upcomingCount = TENDERS.filter((t) => t.status === 'upcoming').length;

  const FILTER_DEFS = [
    { key: 'status',   label: 'Status',   options: TENDER_STATUSES },
    { key: 'category', label: 'Category', options: TENDER_CATEGORIES },
    { key: 'sort',     label: 'Sort By',  options: SORT_OPTIONS },
  ];

  return (
    <PageShell
      title="Tenders & Procurement"
      subtitle="Active NITs, RFPs, EOIs and awarded contracts"
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Tenders' }]}
    >
      {/* Summary strip */}
      <div className="flex flex-wrap gap-4 mb-8">
        <div className="card px-5 py-3 flex items-center gap-3 min-w-[130px]">
          <div className="text-2xl font-extrabold text-navy-700">{openCount}</div>
          <div className="text-xs text-slate-500 leading-tight">Open<br />Tenders</div>
        </div>
        <div className="card px-5 py-3 flex items-center gap-3 min-w-[130px]">
          <div className="text-2xl font-extrabold text-sky-600">{upcomingCount}</div>
          <div className="text-xs text-slate-500 leading-tight">Upcoming<br />Tenders</div>
        </div>
        <div className="card px-5 py-3 flex items-center gap-3 min-w-[130px]">
          <div className="text-2xl font-extrabold text-slate-600">{TENDERS.length}</div>
          <div className="text-xs text-slate-500 leading-tight">Total<br />Records</div>
        </div>
      </div>

      {/* Filter bar */}
      <FilterBar
        filters={FILTER_DEFS}
        values={filters}
        onChange={handleFilter}
        onReset={handleReset}
        searchValue={search}
        onSearch={(v) => { setSearch(v); setPage(1); }}
        searchPlaceholder="Search tenders by title, ref no…"
        resultCount={filtered.length}
        className="mb-6"
      />

      {/* Results */}
      {paginated.length === 0 ? (
        <EmptyState
          title="No tenders match your criteria"
          message="Try changing the status filter or search term. Open tenders are listed first."
          action={{ label: 'Reset Filters', onClick: handleReset }}
        />
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {paginated.map((tender) => (
              <TenderCard key={tender.id} tender={tender} />
            ))}
          </div>

          <Pagination
            page={page}
            totalPages={totalPages}
            perPage={perPage}
            onPageChange={setPage}
            onPerPageChange={(pp) => { setPerPage(pp); setPage(1); }}
            totalItems={filtered.length}
          />
        </>
      )}
    </PageShell>
  );
}
