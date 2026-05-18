/**
 * src/pages/compliance/RTI.jsx — Full implementation
 * ─────────────────────────────────────────────────────────────────────────────
 * 17 mandatory Section 4(1)(b) disclosures, CPIO info, application process.
 */
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import PageShell from '@/components/layout/PageShell';
import Accordion from '@/components/ui/Accordion';

// ── Section 4(1)(b) — 17 mandatory disclosures ───────────────────────────────
const DISCLOSURES = [
  { id: 'rti-01', question: 'i. Particulars of Organisation, Functions and Duties', answer: 'APTRANSCO is the State Transmission Utility of Andhra Pradesh constituted under the AP Electricity Reforms Act, 1998. It is responsible for planning, development, operation and maintenance of EHV (Extra High Voltage) transmission lines and substations across the state.' },
  { id: 'rti-02', question: 'ii. Powers and Duties of Officers and Employees', answer: 'The powers and duties of officers at various levels — from the CMD down to Junior Engineers — are defined in the AP Electricity Reforms Act, 1998 and APTRANSCO service regulations. The CMD is the apex authority. Directors head functional divisions. Chief Engineers manage circles. Superintending Engineers manage divisions and Executing Engineers manage sub-divisions.' },
  { id: 'rti-03', question: 'iii. Procedure Followed in Decision-Making Process', answer: 'Major decisions relating to capital works (above ₹10 Cr) are approved by the Board of Directors. Procurement is governed by the AP Transparency in Public Procurement Act, 2012. Technical matters are decided by competent authorities as per delegation of financial powers. All orders are available for inspection.' },
  { id: 'rti-04', question: 'iv. Norms Set by APTRANSCO for Discharge of Functions', answer: 'APTRANSCO follows: (1) AP Grid Code for system operation, (2) IS standards for equipment, (3) CEA regulations for construction, (4) APERC regulations for open access and transmission charges, (5) AP Electricity Regulatory Commission (Conduct of Business) Regulations for licensing.' },
  { id: 'rti-05', question: 'v. Rules, Regulations, Instructions, Manuals and Records', answer: 'Key regulations: AP Electricity Reforms Act 1998, Electricity Act 2003, AP Grid Code, APERC Transmission Licence Conditions, APTRANSCO Service Regulations, Financial Code, Budget Manual, Store Purchase Rules. Copies are available at the Corporate Office, Vijayawada.' },
  { id: 'rti-06', question: 'vi. Statement of Categories of Documents Held', answer: 'Documents held by APTRANSCO include: (a) Technical drawings, GIS maps of transmission lines; (b) Substation equipment manuals; (c) Procurement files & tender documents; (d) Employee service records; (e) Financial accounts & audit reports; (f) APERC orders & filings; (g) Board meeting minutes.' },
  { id: 'rti-07', question: 'vii. Particulars of any Arrangement for Consultation with Public', answer: 'APTRANSCO invites public comments on APERC tariff petitions. Annual tariff hearings are held at APERC where consumer groups may participate. For open access requests, a Public Hearing mechanism is defined under APERC Open Access Regulations.' },
  { id: 'rti-08', question: 'viii. Statement of Boards, Councils, Committees', answer: 'APTRANSCO\'s Board of Directors: Chairman & Managing Director, 4 Executive Directors (Functional), 3 Board Members (including independent and Government nominee directors). Various sub-committees: Technical Committee, Audit Committee, Procurement Committee, Vigilance Committee.' },
  { id: 'rti-09', question: 'ix. Directory of Officers and Employees', answer: 'A directory of all officers up to the level of Assistant Engineer is maintained at the HR Department, Vidyut Soudha, Vijayawada. Requests for specific contact information may be made to the CPIO.' },
  { id: 'rti-10', question: 'x. Monthly Remuneration Received by Each Officer', answer: 'Pay scales are governed by the AP Electricity Employees (Revised) Pay Scales, 2015. CMD receives pay as per the Seventh Pay Commission with applicable allowances. Officers are paid as per their grade pay bands. Aggregate salary expenditure is published in the Annual Report.' },
  { id: 'rti-11', question: 'xi. Budget Allocated and Expenditure', answer: 'APTRANSCO\'s Annual Budget for FY 2025-26: Capital Works — ₹3,800 Cr; O&M — ₹1,200 Cr; Debt Servicing — ₹850 Cr. Budget vs expenditure is reviewed quarterly by the Board. Copies of approved budget are available at Finance Department and the APTRANSCO Annual Report.' },
  { id: 'rti-12', question: 'xii. Manner of Execution of Subsidy Programmes', answer: 'APTRANSCO does not directly administer consumer subsidies. Government of AP-directed subsidies to DISCOMs are metered and accounted under the tariff orders of APERC. Cross-subsidy and subsidy pass-through details are included in each tariff order.' },
  { id: 'rti-13', question: 'xiii. Particulars of Recipients of Concessions, Permits, Authorisations', answer: 'Open Access grantees (entities permitted to use APTRANSCO transmission network) are listed in the SLDC monthly report. Transmission licence details are available in the APERC annual report.' },
  { id: 'rti-14', question: 'xiv. Details of Information Available in Electronic Form', answer: 'The following information is available on this website: Tenders & NITs, Notifications & Circulars, Annual Reports, RTI disclosures, Tariff orders, Press releases, Leadership directory. The SLDC website (sldc.ap.gov.in) has real-time grid data.' },
  { id: 'rti-15', question: 'xv. Particulars of Facilities Available to Citizens for Obtaining Information', answer: 'Citizens may: (1) Submit RTI applications to the CPIO at Vidyut Soudha, Vijayawada; (2) Access documents on this website; (3) Inspect documents at the Corporate Office during working hours (Mon–Fri, 10 AM–5 PM); (4) Write to grievance@aptransco.gov.in; (5) Call grievance helpline 1912.' },
  { id: 'rti-16', question: 'xvi. Names, Designations and Other Particulars of PIOs', answer: 'Central Public Information Officer (CPIO): Sri T. Nagaraju, DGM (HR), Vidyut Soudha, Vijayawada. Email: rti@aptransco.gov.in. First Appellate Authority: Director (HR), APTRANSCO, Vidyut Soudha, Vijayawada.' },
  { id: 'rti-17', question: 'xvii. Such Other Information as may be Prescribed', answer: 'APTRANSCO publishes quarterly performance reports, transmission loss data, major outage reports, and procurement summaries. These are available on this website and filed with APERC annually.' },
];

export default function RTI() {
  return (
    <PageShell
      title="RTI / Public Disclosures"
      subtitle="Right to Information — Mandatory disclosures under Section 4(1)(b) of RTI Act, 2005"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'RTI / Disclosures' },
      ]}
    >
      {/* Intro */}
      <div className="card border-l-4 border-gold-400 p-5 mb-8">
        <p className="text-sm text-slate-600 leading-relaxed">
          In compliance with <strong className="text-navy-700">Section 4(1)(b) of the Right to Information Act, 2005</strong>,
          APTRANSCO publishes the following 17 mandatory disclosures. Citizens may file RTI applications
          by writing to the CPIO at the address below or by using the Central Government RTI portal.
        </p>
      </div>

      {/* CPIO Info */}
      <section className="mb-10" aria-labelledby="cpio-heading">
        <h2 id="cpio-heading" className="section-title mb-4">Public Information Officers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="card p-5">
            <h3 className="text-sm font-bold text-navy-700 mb-3">Central Public Information Officer (CPIO)</h3>
            <dl className="flex flex-col gap-2 text-sm">
              <div><dt className="text-xs text-slate-400">Name</dt><dd className="font-medium text-navy-800">Sri T. Nagaraju</dd></div>
              <div><dt className="text-xs text-slate-400">Designation</dt><dd className="font-medium text-navy-800">DGM (HR), APTRANSCO</dd></div>
              <div><dt className="text-xs text-slate-400">Address</dt><dd className="font-medium text-navy-800">Vidyut Soudha, Hyderabad Road, Vijayawada – 520 013</dd></div>
              <div className="flex items-center gap-2">
                <EnvelopeIcon className="w-4 h-4 text-navy-500" aria-hidden="true" />
                <a href="mailto:rti@aptransco.gov.in" className="text-navy-600 hover:underline">rti@aptransco.gov.in</a>
              </div>
            </dl>
          </div>
          <div className="card p-5">
            <h3 className="text-sm font-bold text-navy-700 mb-3">First Appellate Authority</h3>
            <dl className="flex flex-col gap-2 text-sm">
              <div><dt className="text-xs text-slate-400">Designation</dt><dd className="font-medium text-navy-800">Director (HR &amp; Administration)</dd></div>
              <div><dt className="text-xs text-slate-400">Address</dt><dd className="font-medium text-navy-800">Vidyut Soudha, Hyderabad Road, Vijayawada – 520 013</dd></div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="w-4 h-4 text-navy-500" aria-hidden="true" />
                <span>+91-866-2577740</span>
              </div>
              <div className="flex items-center gap-2">
                <EnvelopeIcon className="w-4 h-4 text-navy-500" aria-hidden="true" />
                <a href="mailto:dir.hr@aptransco.gov.in" className="text-navy-600 hover:underline">dir.hr@aptransco.gov.in</a>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* How to apply */}
      <section className="mb-10" aria-labelledby="apply-heading">
        <h2 id="apply-heading" className="section-title mb-4">How to File an RTI Application</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { step: '1', title: 'Online Portal', desc: 'Visit rtionline.gov.in — the Central Government RTI portal. Select APTRANSCO under AP State Public Authorities.', href: 'https://rtionline.gov.in' },
            { step: '2', title: 'By Post / In Person', desc: 'Send a written application to CPIO address along with RTI fee of ₹10 (Demand Draft / IPO / Court Fee Stamp).', href: null },
            { step: '3', title: 'Expected Timeline', desc: 'CPIO will reply within 30 days. Appeals to First Appellate Authority within 90 days. Second appeal to CIC thereafter.', href: null },
          ].map((item) => (
            <div key={item.step} className="card p-5 flex flex-col gap-3">
              <div className="w-8 h-8 rounded-full bg-navy-700 text-white font-bold flex items-center justify-center text-sm">
                {item.step}
              </div>
              <h3 className="text-sm font-bold text-navy-800">{item.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              {item.href && (
                <a href={item.href} target="_blank" rel="noopener noreferrer"
                  className="text-xs font-semibold text-navy-600 hover:underline mt-auto">
                  Visit Portal →
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 17 Disclosures */}
      <section aria-labelledby="disclosures-heading">
        <h2 id="disclosures-heading" className="section-title mb-2">
          Mandatory Disclosures — Section 4(1)(b)
        </h2>
        <p className="section-subtitle mb-6">All 17 clauses as required under the RTI Act, 2005</p>
        <Accordion items={DISCLOSURES} allowMultiple />
      </section>
    </PageShell>
  );
}
