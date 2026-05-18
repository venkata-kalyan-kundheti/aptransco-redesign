/**
 * src/pages/reports/DocumentLibrary.jsx — Full implementation
 * ─────────────────────────────────────────────────────────────────────────────
 * Sidebar category tree + DocumentCard grid + search.
 */
import { useState, useMemo } from 'react';
import { FolderOpenIcon } from '@heroicons/react/24/outline';
import PageShell from '@/components/layout/PageShell';
import DocumentCard from '@/components/common/DocumentCard';
import FilterBar from '@/components/common/FilterBar';
import EmptyState from '@/components/common/EmptyState';

// ── Sample document data ───────────────────────────────────────────────────────
const DOCUMENTS = [
  // Annual Reports
  { id: 'doc-01', title: 'APTRANSCO Annual Report 2024-25', category: 'Annual Reports', fileSize: '8.4 MB', date: '2025-09-15', fileType: 'pdf', downloadUrl: '#', description: 'Comprehensive performance report covering financial results, capital works, and grid statistics for FY 2024-25.' },
  { id: 'doc-02', title: 'APTRANSCO Annual Report 2023-24', category: 'Annual Reports', fileSize: '7.8 MB', date: '2024-10-01', fileType: 'pdf', downloadUrl: '#', description: 'Annual performance report for FY 2023-24 including audited accounts.' },
  { id: 'doc-03', title: 'APTRANSCO Annual Report 2022-23', category: 'Annual Reports', fileSize: '6.9 MB', date: '2023-09-20', fileType: 'pdf', downloadUrl: '#', description: 'Annual report for FY 2022-23.' },

  // APERC Orders
  { id: 'doc-04', title: 'APERC Tariff Order 2025-26 — APTRANSCO Transmission Charges', category: 'APERC Orders', fileSize: '3.2 MB', date: '2025-03-28', fileType: 'pdf', downloadUrl: '#', description: 'APERC approved transmission tariff order for FY 2025-26 including ARR and tariff computation.' },
  { id: 'doc-05', title: 'APERC Order — Open Access Regulations 2023', category: 'APERC Orders', fileSize: '1.8 MB', date: '2023-07-15', fileType: 'pdf', downloadUrl: '#', description: 'Revised APERC Open Access Regulations applicable to APTRANSCO transmission network.' },
  { id: 'doc-06', title: 'APERC Transmission Licence — APTRANSCO', category: 'APERC Orders', fileSize: '950 KB', date: '2019-04-01', fileType: 'pdf', downloadUrl: '#', description: 'Transmission Licence granted by APERC under the Electricity Act, 2003.' },

  // Technical Manuals
  { id: 'doc-07', title: 'APTRANSCO EHV Substation O&M Manual (2024 Edition)', category: 'Technical Manuals', fileSize: '12.1 MB', date: '2024-06-01', fileType: 'pdf', downloadUrl: '#', description: 'Comprehensive O&M manual for 400 kV, 220 kV and 132 kV substations covering safety, maintenance schedules, and emergency procedures.' },
  { id: 'doc-08', title: 'AP Grid Code (Amended 2023)', category: 'Technical Manuals', fileSize: '4.5 MB', date: '2023-11-01', fileType: 'pdf', downloadUrl: '#', description: 'Andhra Pradesh Grid Code governing power system operation, scheduling, and dispatch.' },
  { id: 'doc-09', title: 'SCADA/EMS User Manual v3.0', category: 'Technical Manuals', fileSize: '6.3 MB', date: '2024-02-15', fileType: 'pdf', downloadUrl: '#', description: 'User manual for the upgraded SCADA/EMS system deployed across APTRANSCO substations.' },

  // Procurement Policies
  { id: 'doc-10', title: 'APTRANSCO Procurement Policy 2023', category: 'Procurement Policies', fileSize: '1.4 MB', date: '2023-04-01', fileType: 'pdf', downloadUrl: '#', description: 'Updated procurement policy aligned with AP Transparency in Public Procurement Act, 2012 and GFR 2017.' },
  { id: 'doc-11', title: 'Standard Bid Document — Works Contracts', category: 'Procurement Policies', fileSize: '2.1 MB', date: '2024-01-10', fileType: 'pdf', downloadUrl: '#', description: 'Standard bidding document for civil and structural works contracts above ₹5 Cr.' },
  { id: 'doc-12', title: 'Delegation of Financial Powers (2024)', category: 'Procurement Policies', fileSize: '680 KB', date: '2024-03-01', fileType: 'pdf', downloadUrl: '#', description: 'Updated DFP schedule applicable to all officers and DDOs of APTRANSCO.' },

  // Power Sector Reports
  { id: 'doc-13', title: 'CEA National Power Survey 2024-25', category: 'Power Sector Reports', fileSize: '18.2 MB', date: '2025-01-10', fileType: 'pdf', downloadUrl: '#', description: 'Central Electricity Authority annual power survey covering all states including AP transmission data.' },
  { id: 'doc-14', title: 'AP Power Sector Annual Report 2024', category: 'Power Sector Reports', fileSize: '5.6 MB', date: '2024-08-20', fileType: 'pdf', downloadUrl: '#', description: 'Government of AP Energy Dept compilation covering APTRANSCO, APGENCO and DISCOMs performance.' },

  // Safety Documents
  { id: 'doc-15', title: 'EHV Safety Manual for Field Staff (2024)', category: 'Safety Documents', fileSize: '3.8 MB', date: '2024-05-01', fileType: 'pdf', downloadUrl: '#', description: 'Mandatory safety procedures for work on live and dead EHV lines and substations per IS 5216.' },
  { id: 'doc-16', title: 'Safety Statistics Report — AP Power Sector 2023-24', category: 'Safety Documents', fileSize: '1.1 MB', date: '2024-07-01', fileType: 'pdf', downloadUrl: '#', description: 'Accident and near-miss statistics for APTRANSCO and AP power sector 2023-24.' },
];

const CATEGORIES = ['All', 'Annual Reports', 'APERC Orders', 'Technical Manuals', 'Procurement Policies', 'Power Sector Reports', 'Safety Documents'];

export default function DocumentLibrary() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    let result = DOCUMENTS;
    if (activeCategory !== 'All') result = result.filter(d => d.category === activeCategory);
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(d =>
        d.title.toLowerCase().includes(q) || d.category.toLowerCase().includes(q) || d.description?.toLowerCase().includes(q)
      );
    }
    return result;
  }, [activeCategory, search]);

  return (
    <PageShell
      title="Document Library"
      subtitle="Reports, manuals, regulatory orders and policy documents"
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Document Library' }]}
    >
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar category tree */}
        <aside className="lg:w-56 shrink-0" aria-label="Document categories">
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Categories</h2>
          <nav>
            <ul className="flex flex-col gap-1">
              {CATEGORIES.map(cat => (
                <li key={cat}>
                  <button
                    type="button"
                    onClick={() => { setActiveCategory(cat); setSearch(''); }}
                    className={[
                      'w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150',
                      'flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-400',
                      activeCategory === cat
                        ? 'bg-navy-700 text-white'
                        : 'text-slate-600 hover:bg-navy-50 hover:text-navy-700',
                    ].join(' ')}
                    aria-current={activeCategory === cat ? 'page' : undefined}
                  >
                    <FolderOpenIcon className="w-4 h-4 shrink-0" aria-hidden="true" />
                    {cat}
                    <span className={`ml-auto text-xs ${activeCategory === cat ? 'text-navy-200' : 'text-slate-400'}`}>
                      {cat === 'All' ? DOCUMENTS.length : DOCUMENTS.filter(d => d.category === cat).length}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main content */}
        <div className="flex-1 min-w-0">
          <FilterBar
            searchValue={search}
            onSearch={setSearch}
            searchPlaceholder="Search documents…"
            resultCount={filtered.length}
            onReset={() => setSearch('')}
            className="mb-6"
          />

          {filtered.length === 0 ? (
            <EmptyState
              title="No documents found"
              message="Try a different category or clear the search."
              action={{ label: 'Clear Search', onClick: () => setSearch('') }}
            />
          ) : (
            <div className="flex flex-col gap-4">
              {filtered.map(doc => (
                <DocumentCard key={doc.id} document={doc} />
              ))}
            </div>
          )}
        </div>
      </div>
    </PageShell>
  );
}
