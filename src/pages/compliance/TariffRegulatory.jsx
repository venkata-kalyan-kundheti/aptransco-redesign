/**
 * src/pages/compliance/TariffRegulatory.jsx — Full implementation
 */
import { DocumentArrowDownIcon, CalendarIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import PageShell from '@/components/layout/PageShell';

const TARIFF_ORDERS = [
  { year: 'FY 2025-26', order: 'APERC Order No. 2/2025 dt. 31 Mar 2025', type: 'ARR & Tariff', status: 'Current', href: '#' },
  { year: 'FY 2024-25', order: 'APERC Order No. 3/2024 dt. 29 Mar 2024', type: 'ARR & Tariff', status: 'Past',    href: '#' },
  { year: 'FY 2023-24', order: 'APERC Order No. 2/2023 dt. 31 Mar 2023', type: 'ARR & Tariff', status: 'Past',    href: '#' },
  { year: 'FY 2022-23', order: 'APERC Order No. 1/2022 dt. 30 Mar 2022', type: 'ARR & Tariff', status: 'Past',    href: '#' },
];

const FILINGS = [
  { title: 'Annual Revenue Requirement (ARR) Petition 2025-26',      date: 'Nov 2024', type: 'ARR Petition',   href: '#' },
  { title: 'True-Up Petition for FY 2023-24',                         date: 'Aug 2024', type: 'True-Up',        href: '#' },
  { title: 'Multi Year Tariff (MYT) Petition 2025-30',                date: 'Oct 2024', type: 'MYT Petition',  href: '#' },
  { title: 'Open Access Charges Petition 2024-25',                    date: 'Jan 2024', type: 'Open Access',    href: '#' },
  { title: 'Capital Investment Plan (CIP) for FY 2025-26',            date: 'Dec 2023', type: 'CIP',            href: '#' },
];

const CHARGES = [
  { head: 'Transmission Charges (FY 2025-26)', value: '₹ 12,840 Cr', note: 'ARR approved by APERC' },
  { head: 'Point of Connection (PoC) Charges', value: 'As per CERC regulations', note: 'For inter-state transactions' },
  { head: 'Open Access Application Fee',       value: '₹ 5,000',     note: 'Per application (non-refundable)' },
  { head: 'Short-Term Open Access (STOA)',      value: 'As per APERC order', note: 'Scheduling charges extra' },
  { head: 'Long-Term Open Access (LTOA)',       value: 'As per APERC order', note: 'Subject to capacity availability' },
];

export default function TariffRegulatory() {
  return (
    <PageShell
      title="Tariff & Regulatory"
      description="APERC tariff orders, regulatory filings, and charges applicable to transmission open access in Andhra Pradesh."
      breadcrumb={[{ label: 'Compliance', href: '/rti' }, 'Tariff & Regulatory']}
    >
      <div className="max-w-4xl flex flex-col gap-10">
        {/* Tariff Orders */}
        <section aria-labelledby="tariff-orders-heading">
          <h2 id="tariff-orders-heading" className="section-title mb-2">APERC Tariff Orders</h2>
          <p className="section-subtitle mb-5">Annual Revenue Requirement &amp; Tariff Orders issued by APERC</p>
          <div className="table-responsive">
            <table className="table-base">
              <thead>
                <tr>
                  <th className="table-th">Year</th>
                  <th className="table-th">Order Reference</th>
                  <th className="table-th">Type</th>
                  <th className="table-th">Status</th>
                  <th className="table-th">Download</th>
                </tr>
              </thead>
              <tbody>
                {TARIFF_ORDERS.map((row) => (
                  <tr key={row.year} className="table-tr">
                    <td className="table-td font-semibold text-navy-700">{row.year}</td>
                    <td className="table-td text-slate-600">{row.order}</td>
                    <td className="table-td">{row.type}</td>
                    <td className="table-td">
                      <span className={`badge ${row.status === 'Current' ? 'badge-open' : 'badge-closed'}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="table-td">
                      <a href={row.href} className="inline-flex items-center gap-1 text-xs text-navy-600 hover:text-navy-800 font-medium">
                        <DocumentArrowDownIcon className="w-3.5 h-3.5" aria-hidden="true" />PDF
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Regulatory Filings */}
        <section aria-labelledby="filings-heading">
          <h2 id="filings-heading" className="section-title mb-2">Regulatory Filings</h2>
          <p className="section-subtitle mb-5">Petitions and filings made by APTRANSCO before APERC</p>
          <div className="flex flex-col gap-3">
            {FILINGS.map((f, i) => (
              <div key={i} className="card p-4 flex items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-navy-800 leading-snug">{f.title}</p>
                  <p className="text-xs text-slate-400 mt-1 flex items-center gap-2">
                    <CalendarIcon className="w-3.5 h-3.5" aria-hidden="true" />{f.date}
                    <span className="badge badge-circular">{f.type}</span>
                  </p>
                </div>
                <a href={f.href} className="btn-secondary btn-sm shrink-0">
                  <DocumentArrowDownIcon className="w-3.5 h-3.5" aria-hidden="true" />PDF
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Charges */}
        <section aria-labelledby="charges-heading">
          <h2 id="charges-heading" className="section-title mb-2">Applicable Charges</h2>
          <p className="section-subtitle mb-5">Transmission and open access charges at a glance</p>
          <div className="table-responsive">
            <table className="table-base">
              <thead>
                <tr>
                  <th className="table-th">Charge Head</th>
                  <th className="table-th">Rate / Value</th>
                  <th className="table-th">Note</th>
                </tr>
              </thead>
              <tbody>
                {CHARGES.map((row, i) => (
                  <tr key={i} className="table-tr">
                    <td className="table-td font-medium text-navy-700">{row.head}</td>
                    <td className="table-td font-semibold">{row.value}</td>
                    <td className="table-td text-slate-500 text-xs">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* External links */}
        <div className="card p-5 bg-navy-50 border-navy-200">
          <h2 className="text-sm font-bold text-navy-800 mb-3">Regulatory Bodies</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'APERC — AP Electricity Regulatory Commission', href: 'https://aperc.gov.in' },
              { label: 'CERC — Central Electricity Regulatory Commission', href: 'https://cercind.gov.in' },
              { label: 'Ministry of Power', href: 'https://powermin.gov.in' },
            ].map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-navy-600 hover:text-navy-800 hover:underline">
                <ArrowTopRightOnSquareIcon className="w-4 h-4" aria-hidden="true" />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
