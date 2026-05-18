/**
 * src/pages/vendor/VendorInfo.jsx — Full implementation
 */
import {
  ClipboardDocumentCheckIcon,
  CheckCircleIcon, ExclamationCircleIcon, EnvelopeIcon,
} from '@heroicons/react/24/outline';
import PageShell from '@/components/layout/PageShell';

const ELIGIBILITY = [
  'Registered company/firm under Indian Companies Act / LLP Act / Partnership Act',
  'Valid GST registration and PAN',
  'Minimum 3 years of experience in the relevant category of supply/work',
  'Annual turnover as per tender-specific requirements (typically ≥ 2× estimated value)',
  'EMD/Security Deposit (SD) as specified in tender documents',
  'No blacklisting by Central/State Government or PSU in the preceding 5 years',
  'Technical capability and manufacturing/service experience certificates',
];

const PROCESS_STEPS = [
  { step: '01', title: 'Obtain Tender Documents', desc: 'Download NIT and tender documents from APTRANSCO e-Procurement portal or AP State TenderSure portal. All tenders ≥ ₹ 50,000 are mandatorily on e-procurement.' },
  { step: '02', title: 'Check Eligibility & Scope', desc: 'Read the tender scope, technical specifications, and eligibility criteria. Visit the site if a site visit is mandatory and document the signed attendance.' },
  { step: '03', title: 'Pay EMD & Tender Fee', desc: 'Pay the Earnest Money Deposit (EMD) online or by DD as specified. Pay the tender processing fee (non-refundable) via portal payment gateway.' },
  { step: '04', title: 'Submit Bid Online', desc: 'Upload Technical Bid and Financial Bid separately on the e-Procurement portal before the submission deadline. No physical bids accepted for e-tenders.' },
  { step: '05', title: 'Technical Evaluation', desc: 'APTRANSCO evaluates technical qualification, factory inspection, sample testing (for equipment tenders), and past performance before opening the financial bid.' },
  { step: '06', title: 'Financial Bid Opening & LOA', desc: 'Lowest techno-commercially qualified bid receives the Letter of Award (LOA). SD to be submitted within the time specified in LOA. Work/Supply Order follows.' },
];

const CATEGORIES = [
  { id: 'c1', name: 'Transformers & Equipment',    code: 'CAT-EQP', desc: 'Power transformers, CTs, PTs, circuit breakers, insulators, GIS switchgear' },
  { id: 'c2', name: 'Transmission Lines',           code: 'CAT-TL',  desc: 'ACSR/ACSS conductors, earth wire, towers, hardware, insulators, stringing' },
  { id: 'c3', name: 'Civil & Structural',           code: 'CAT-CIV', desc: 'Substation civil works, control room construction, cable trenches, RCC structures' },
  { id: 'c4', name: 'SCADA / IT / Telecom',         code: 'CAT-IT',  desc: 'RTUs, SCADA software, fiber optic, OPLC, control cables, IT infrastructure' },
  { id: 'c5', name: 'O&M Services',                code: 'CAT-OM',  desc: 'Annual maintenance contracts for substations, line patrolling, vegetation management' },
  { id: 'c6', name: 'Miscellaneous Stores',         code: 'CAT-STR', desc: 'Safety equipment, tools, PPE, consumables, vehicles, office equipment' },
];

const DOCS_REQUIRED = [
  'Company Registration Certificate / Certificate of Incorporation',
  'GST Registration Certificate',
  'PAN Card (Company / Firm)',
  'Past Performance / Work Experience Certificates',
  'Audited Balance Sheets for the past 3 years',
  'Solvency Certificate from bankers',
  'Technical staff details / CVs (for works tenders)',
  'ISO / BIS certification (if required by tender)',
  'Power of Attorney (for authorised signatory)',
  'EMD proof and Tender Fee payment receipt',
];

export default function VendorInfo() {
  return (
    <PageShell
      title="Vendor & Contractor Information"
      description="Empanelment process, procurement policy, tender categories, and eligibility criteria for vendors and contractors."
      breadcrumb={['Vendor Information']}
    >
      <div className="max-w-4xl flex flex-col gap-10">
        {/* Intro note */}
        <div className="card p-5 border-l-4 border-gold-400 flex items-start gap-4">
          <ExclamationCircleIcon className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-sm text-slate-600 leading-relaxed">
            All APTRANSCO procurements are made through competitive bidding via the
            <strong className="text-navy-700"> AP e-Procurement Portal</strong>. No procurement is made
            through direct negotiation or middlemen. Vendors are cautioned against fraudulent
            agents claiming to represent APTRANSCO.
          </p>
        </div>

        {/* Procurement categories */}
        <section aria-labelledby="cat-heading">
          <h2 id="cat-heading" className="section-title mb-2">Procurement Categories</h2>
          <p className="section-subtitle mb-5">APTRANSCO procures in the following broad categories</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CATEGORIES.map((cat) => (
              <div key={cat.id} className="card p-4 flex items-start gap-3">
                <span className="badge badge-circular shrink-0 mt-0.5">{cat.code}</span>
                <div>
                  <p className="text-sm font-bold text-navy-700">{cat.name}</p>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Eligibility */}
        <section aria-labelledby="elig-heading">
          <h2 id="elig-heading" className="section-title mb-4">General Eligibility Criteria</h2>
          <ul className="flex flex-col gap-2" role="list">
            {ELIGIBILITY.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <CheckCircleIcon className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-slate-400 mt-3">* Specific eligibility may differ per tender — always refer to individual NIT documents.</p>
        </section>

        {/* Process */}
        <section aria-labelledby="process-heading">
          <h2 id="process-heading" className="section-title mb-6">Tender Participation Process</h2>
          <ol className="flex flex-col gap-4" role="list">
            {PROCESS_STEPS.map((s) => (
              <li key={s.step} className="card p-4 flex items-start gap-4">
                <span className="shrink-0 w-9 h-9 rounded-full bg-navy-700 text-white text-sm font-bold flex items-center justify-center">
                  {s.step}
                </span>
                <div>
                  <p className="text-sm font-bold text-navy-800">{s.title}</p>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Documents */}
        <section aria-labelledby="docs-heading">
          <h2 id="docs-heading" className="section-title mb-4">Documents Usually Required</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {DOCS_REQUIRED.map((doc, i) => (
              <div key={i} className="flex items-start gap-2 text-sm">
                <ClipboardDocumentCheckIcon className="w-4 h-4 text-navy-500 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-slate-700">{doc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <div className="card p-5 bg-navy-50 border-navy-200">
          <h2 className="text-sm font-bold text-navy-800 mb-3">Vendor Enquiries</h2>
          <div className="flex flex-col gap-2 text-sm">
            <a href="mailto:tenders@aptransco.gov.in" className="flex items-center gap-2 text-navy-600 hover:text-navy-800 hover:underline">
              <EnvelopeIcon className="w-4 h-4" aria-hidden="true" />tenders@aptransco.gov.in
            </a>
            <a href="https://tender.apeprocurement.gov.in" target="_blank" rel="noopener noreferrer"
              className="text-navy-600 hover:underline">
              AP e-Procurement Portal → tender.apeprocurement.gov.in
            </a>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
