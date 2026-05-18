/**
 * src/pages/reports/AnnualReports.jsx — Full implementation
 */
import { useState } from 'react';
import { ArrowDownTrayIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';
import PageShell from '@/components/layout/PageShell';

const REPORTS = [
  { year: '2024-25', title: 'APTRANSCO Annual Report 2024-25', size: '8.4 MB', highlights: ['Lowest transmission loss in India — 2.8%', 'National Award — Best Transmission Utility', 'Commissioned 400 kV GIS SS at Kurnool Solar Park', '2,200 km new lines added'], url: '#', status: 'latest' },
  { year: '2023-24', title: 'APTRANSCO Annual Report 2023-24', size: '7.8 MB', highlights: ['Transmission loss reduced to 3.1%', 'SCADA upgrade initiated at 150 substations', 'MoU with PGCIL for inter-state corridor', '₹3,200 Cr capital expenditure'], url: '#', status: 'published' },
  { year: '2022-23', title: 'APTRANSCO Annual Report 2022-23', size: '6.9 MB', highlights: ['990 substations operational', '2,000 km 132 kV lines added', 'ISO 9001:2015 recertification', '18,500 employees strength'], url: '#', status: 'published' },
  { year: '2021-22', title: 'APTRANSCO Annual Report 2021-22', size: '6.2 MB', highlights: ['Statewide SCADA Phase-I launched', '400 kV GIS technology adopted', 'Renewable evacuation capacity doubled'], url: '#', status: 'published' },
  { year: '2020-21', title: 'APTRANSCO Annual Report 2020-21', size: '5.8 MB', highlights: ['Operations maintained during COVID-19', 'CAPEX ₹2,400 Cr despite pandemic', 'Remote monitoring deployed at 200 SS'], url: '#', status: 'published' },
  { year: '2019-20', title: 'APTRANSCO Annual Report 2019-20', size: '5.4 MB', highlights: ['AP bifurcation full stabilisation', 'New HQ at Vidyut Soudha, Vijayawada', 'Record 1,020 substations operational'], url: '#', status: 'published' },
];

export default function AnnualReports() {
  const [expanded, setExpanded] = useState('2024-25');

  return (
    <PageShell
      title="Annual Reports"
      subtitle="Audited financial statements and performance reports"
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Reports', href: '/documents' }, { label: 'Annual Reports' }]}
    >
      <p className="text-slate-600 text-sm max-w-2xl mb-8 leading-relaxed">
        APTRANSCO publishes Annual Reports covering financial results, capital expenditure, grid
        performance, HR statistics, and future plans. These reports are audited by the Comptroller
        and Auditor General (CAG) of India and tabled before the Andhra Pradesh Legislative Assembly.
      </p>

      <div className="flex flex-col gap-4">
        {REPORTS.map((report) => (
          <article
            key={report.year}
            className={`card overflow-hidden transition-shadow duration-200 hover:shadow-md ${expanded === report.year ? 'ring-2 ring-navy-200' : ''}`}
          >
            <button
              type="button"
              onClick={() => setExpanded(expanded === report.year ? null : report.year)}
              className="w-full flex items-center gap-4 p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-navy-400"
              aria-expanded={expanded === report.year}
            >
              {/* Year badge */}
              <div className={`shrink-0 px-3 py-1.5 rounded-lg font-bold text-sm tabular-nums ${
                report.status === 'latest' ? 'bg-gold-100 text-gold-700' : 'bg-slate-100 text-slate-600'
              }`}>
                {report.year}
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold text-navy-800">{report.title}</h3>
                <p className="text-xs text-slate-400 mt-0.5 flex items-center gap-2">
                  <CalendarDaysIcon className="w-3.5 h-3.5" aria-hidden="true" />
                  PDF · {report.size}
                  {report.status === 'latest' && (
                    <span className="ml-2 px-2 py-0.5 rounded-full bg-gold-50 text-gold-700 font-semibold">Latest</span>
                  )}
                </p>
              </div>

              <a
                href={report.url}
                onClick={e => e.stopPropagation()}
                className="shrink-0 btn-primary btn-sm inline-flex items-center gap-1.5 z-10"
                aria-label={`Download annual report ${report.year}`}
              >
                <ArrowDownTrayIcon className="w-3.5 h-3.5" aria-hidden="true" />
                Download
              </a>
            </button>

            {/* Expanded highlights */}
            {expanded === report.year && (
              <div className="px-5 pb-5 border-t border-slate-100">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-4 mb-3">Key Highlights</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {report.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-navy-400 mt-2" aria-hidden="true" />
                      <span className="text-slate-700">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        ))}
      </div>
    </PageShell>
  );
}
