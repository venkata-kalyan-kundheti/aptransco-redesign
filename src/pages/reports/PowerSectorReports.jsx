/**
 * src/pages/reports/PowerSectorReports.jsx — Full implementation
 */
import { DocumentArrowDownIcon, CalendarIcon } from '@heroicons/react/24/outline';
import PageShell from '@/components/layout/PageShell';

const REPORTS = [
  {
    category: 'State Power Sector',
    items: [
      { title: 'AP Power Sector — Status Report 2024-25', date: 'Mar 2025', size: '3.2 MB', href: '#' },
      { title: 'AP Power Sector — Status Report 2023-24', date: 'Mar 2024', size: '2.9 MB', href: '#' },
      { title: 'AP Power Sector — Status Report 2022-23', date: 'Mar 2023', size: '2.7 MB', href: '#' },
    ],
  },
  {
    category: 'Renewable Energy',
    items: [
      { title: 'AP Renewable Energy Integration Report 2024-25', date: 'Apr 2025', size: '1.8 MB', href: '#' },
      { title: 'Green Energy Corridor Progress Report', date: 'Jan 2025', size: '2.1 MB', href: '#' },
      { title: 'Solar & Wind Evacuation Infrastructure Report', date: 'Nov 2024', size: '1.5 MB', href: '#' },
    ],
  },
  {
    category: 'National / Central Reports',
    items: [
      { title: 'MOP — Annual Report on Power Sector 2024-25', date: 'Jul 2025', size: '8.4 MB', href: 'https://powermin.gov.in' },
      { title: 'CEA — General Review of Power Sector 2024', date: 'Feb 2025', size: '5.6 MB', href: 'https://cea.nic.in' },
      { title: 'POSOCO — Annual Report 2024-25',              date: 'Jun 2025', size: '4.2 MB', href: 'https://posoco.in' },
    ],
  },
  {
    category: 'Grid Performance',
    items: [
      { title: 'APTRANSCO Transmission System Performance Report 2024-25', date: 'May 2025', size: '1.4 MB', href: '#' },
      { title: 'SLDC — Grid Frequency Analysis Report Q4 2024-25',         date: 'Apr 2025', size: '0.9 MB', href: '#' },
      { title: 'Transmission Loss Reduction — Technical Report',            date: 'Dec 2024', size: '1.1 MB', href: '#' },
    ],
  },
];

export default function PowerSectorReports() {
  return (
    <PageShell
      title="Power Sector Reports"
      description="State and national power sector reports, renewable energy integration reports, and SLDC grid performance publications."
      breadcrumb={[{ label: 'Reports', href: '/documents' }, 'Power Sector Reports']}
    >
      <div className="flex flex-col gap-10">
        {REPORTS.map((section) => (
          <section key={section.category} aria-labelledby={`psr-${section.category.replace(/\s/g, '-')}`}>
            <h2
              id={`psr-${section.category.replace(/\s/g, '-')}`}
              className="text-base font-bold text-navy-600 uppercase tracking-wide mb-4"
            >
              {section.category}
            </h2>
            <div className="flex flex-col gap-3">
              {section.items.map((report, i) => (
                <div key={i} className="card p-4 flex items-center justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-navy-800 leading-snug">{report.title}</p>
                    <p className="text-xs text-slate-400 mt-1 flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <CalendarIcon className="w-3.5 h-3.5" aria-hidden="true" />{report.date}
                      </span>
                      <span className="badge badge-circular">{report.size}</span>
                    </p>
                  </div>
                  <a
                    href={report.href}
                    target={report.href.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="btn-secondary btn-sm shrink-0 flex items-center gap-1.5"
                    aria-label={`Download ${report.title}`}
                  >
                    <DocumentArrowDownIcon className="w-3.5 h-3.5" aria-hidden="true" />
                    PDF
                  </a>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </PageShell>
  );
}
