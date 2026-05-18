/**
 * src/pages/compliance/RegulatoryCompliance.jsx — Full implementation
 */
import { ShieldCheckIcon, CheckCircleIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import PageShell from '@/components/layout/PageShell';

const COMPLIANCES = [
  {
    id: 'cgo',
    heading: 'Central Government & CERC',
    items: [
      'Electricity Act, 2003 — Sections 38, 39 (Transmission Licensee obligations)',
      'National Electricity Policy, 2005',
      'National Tariff Policy, 2016 (amended 2021)',
      'CERC (Open Access in inter-state Transmission) Regulations, 2022',
      'CERC (Ancillary Services) Regulations, 2022',
      'Grid Code — Indian Electricity Grid Code (IEGC), 2023',
      'CEA (Measures relating to Safety & Electric Supply) Regulations, 2023',
      'CEA (Technical Standards for Construction of EHV Lines) Regulations, 2010',
    ],
  },
  {
    id: 'aperc',
    heading: 'APERC Regulations',
    items: [
      'APERC (Licensing) Regulations, 2005',
      'APERC (Tariff) Regulations, 2005 (amended)',
      'APERC (Open Access) Regulations, 2013',
      'APERC (Metering) Regulations, 2006',
      'APERC (Grid Code) Regulations, 2014',
      'APERC (Standards of Performance) Regulations, 2004',
    ],
  },
  {
    id: 'rti',
    heading: 'Transparency & RTI',
    items: [
      'Right to Information Act, 2005 — Section 4(1)(b) proactive disclosures',
      'Guidelines for Indian Government Websites (GIGW) 2.0',
      'WCAG 2.1 Level AA — Web Accessibility',
      'National Data Sharing & Accessibility Policy (NDSAP)',
    ],
  },
  {
    id: 'env',
    heading: 'Environmental & Safety',
    items: [
      'Environment Protection Act, 1986 — clearances for transmission projects',
      'Forest Conservation Act, 1980 — forest diversion for transmission corridors',
      'CEA Safety Regulations — IS standards for EHV equipment',
      'OHSAS 18001 / ISO 45001 — Occupational Health & Safety Management',
    ],
  },
];

const CERTIFICATIONS = [
  { name: 'ISO 9001:2015',  scope: 'Quality Management System — Corporate Office & Circles', validUpto: '2026' },
  { name: 'ISO 14001:2015', scope: 'Environmental Management System — selected substations',   validUpto: '2025' },
  { name: 'ISO 45001:2018', scope: 'Occupational Health & Safety — field operations',            validUpto: '2026' },
];

export default function RegulatoryCompliance() {
  return (
    <PageShell
      title="Regulatory Compliance"
      description="APTRANSCO's adherence to all applicable Central and State electricity regulations, environmental laws, and transparency mandates."
      breadcrumb={[{ label: 'Compliance', href: '/rti' }, 'Regulatory Compliance']}
    >
      <div className="max-w-4xl flex flex-col gap-10">
        {/* Intro */}
        <div className="card p-5 border-l-4 border-navy-500 flex items-start gap-4">
          <ShieldCheckIcon className="w-6 h-6 text-navy-600 shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-sm text-slate-600 leading-relaxed">
            APTRANSCO, as the State Transmission Utility (STU) and Transmission Licensee of Andhra Pradesh,
            is subject to regulation by APERC at the State level and CERC for inter-state matters.
            This page consolidates all major regulatory frameworks governing APTRANSCO&apos;s operations.
          </p>
        </div>

        {/* Compliance categories */}
        {COMPLIANCES.map((section) => (
          <section key={section.id} aria-labelledby={`comp-${section.id}`}>
            <h2 id={`comp-${section.id}`} className="section-title mb-4">{section.heading}</h2>
            <ul className="flex flex-col gap-2" role="list">
              {section.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <CheckCircleIcon className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}

        {/* Certifications */}
        <section aria-labelledby="certs-heading">
          <h2 id="certs-heading" className="section-title mb-4">ISO Certifications</h2>
          <div className="table-responsive">
            <table className="table-base">
              <thead>
                <tr>
                  <th className="table-th">Standard</th>
                  <th className="table-th">Scope</th>
                  <th className="table-th">Valid Upto</th>
                </tr>
              </thead>
              <tbody>
                {CERTIFICATIONS.map((cert) => (
                  <tr key={cert.name} className="table-tr">
                    <td className="table-td font-semibold text-navy-700">{cert.name}</td>
                    <td className="table-td text-slate-600">{cert.scope}</td>
                    <td className="table-td">{cert.validUpto}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Links */}
        <div className="card p-5 bg-navy-50 border-navy-200">
          <h2 className="text-sm font-bold text-navy-800 mb-3">Regulatory Resources</h2>
          <div className="flex flex-col gap-2">
            {[
              { label: 'APERC Orders & Regulations', href: 'https://aperc.gov.in' },
              { label: 'CERC Regulations', href: 'https://cercind.gov.in' },
              { label: 'Indian Electricity Grid Code', href: 'https://posoco.in' },
              { label: 'RTI / Proactive Disclosures', href: '/rti' },
            ].map((link) => (
              <a key={link.href}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-navy-600 hover:text-navy-800 hover:underline transition-colors">
                <ArrowTopRightOnSquareIcon className="w-4 h-4 shrink-0" aria-hidden="true" />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
