/**
 * src/pages/safety/SafetyStandards.jsx — Full implementation
 */
import { ShieldCheckIcon, ExclamationTriangleIcon, DocumentArrowDownIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import PageShell from '@/components/layout/PageShell';
import Accordion from '@/components/ui/Accordion';

const SAFETY_STATS = [
  { label: 'Safety Inspections (2024-25)', value: '4,200+', color: 'text-emerald-600' },
  { label: 'Staff Trained (2024-25)',       value: '6,800+', color: 'text-navy-700' },
  { label: 'Days Since Last Fatal Accident', value: '180+',   color: 'text-gold-600' },
  { label: 'IS Standards Implemented',      value: '28',      color: 'text-purple-600' },
];

const SAFETY_GUIDELINES = [
  { id: 'sg-1', question: 'EHV Line Work Safety (IS 5216: Part I)', answer: 'All work on EHV lines must follow IS 5216 Part I. Key requirements: (1) Permit-to-Work (PTW) system mandatory for all EHV line work; (2) Earthing of lines at both ends before work; (3) Minimum 2-person crew for live line vicinity work; (4) Approved PPE — rubber gloves, safety helmet, safety shoes, earthing clamps; (5) Hot Line Tool (HLT) work requires certification.' },
  { id: 'sg-2', question: 'Substation Safety Procedures', answer: 'Substation safety procedures under IS 5216 Part II: (1) All 400 kV / 220 kV equipment maintenance requires authorized switching orders; (2) Minimum safe distances from live equipment — 400 kV: 3.7m, 220 kV: 2.5m, 132 kV: 1.8m; (3) Access to live switchyards requires escort by qualified AE or above; (4) PTW must be issued before any EHV substation maintenance work.' },
  { id: 'sg-3', question: 'Electrical Safety During Monsoon', answer: 'During monsoon (June–October): (1) Enhanced patrolling of 132 kV and above lines after each rain storm; (2) No aerial work on transmission towers during lightning/rain without lightning risk assessment; (3) Substation earthing resistance to be tested before monsoon; (4) All safety equipment (rubber mats, earthing sets) to be tested and certified.' },
  { id: 'sg-4', question: 'Personal Protective Equipment (PPE) Requirements', answer: 'Mandatory PPE for field staff: (1) Class-2 rubber insulating gloves (tested per IS 4770) for 415V–11kV work; (2) Class-3 rubber gloves for 11kV–33kV work; (3) Safety helmet conforming to IS 2925; (4) EHV-rated safety shoes conforming to IS 15298 Part 2; (5) Safety harness conforming to IS 3521 for tower climbing; (6) Class-E arc flash PPE for substation bay work.' },
  { id: 'sg-5', question: 'Near-Miss Reporting Procedure', answer: 'All near-miss incidents must be reported within 24 hours: (1) Field staff to report to immediate supervisor; (2) Supervisor to file Form APTS-Safety-01 to the Circle Safety Officer within 24 hours; (3) Chief Engineer to be informed for incidents at 220 kV or above; (4) Investigation mandatory within 7 days; (5) Lessons-learned circular to be shared with all concerned divisions within 30 days.' },
  { id: 'sg-6', question: 'Contractor Safety Requirements', answer: 'All contractors working on APTRANSCO projects must: (1) Submit a Safety Management Plan before work commencement; (2) Provide documented proof of safety training for all workers; (3) Ensure all workers have valid electrical hazard insurance; (4) Comply with APTRANSCO EHV Safety Manual; (5) Designate a Safety Supervisor for every work site; (6) Report accidents/near-misses within 1 hour to the APTRANSCO site engineer.' },
];

const SAFETY_DOCS = [
  { name: 'EHV Safety Manual (2024 Edition)', size: '3.8 MB', url: '#' },
  { name: 'Permit-to-Work (PTW) Procedure', size: '980 KB', url: '#' },
  { name: 'Safety Statistics 2023-24',        size: '1.1 MB', url: '#' },
  { name: 'PPE Procurement Specification',    size: '650 KB', url: '#' },
  { name: 'Accident Reporting Form (APTS-Safety-01)', size: '120 KB', url: '#' },
];

export default function SafetyStandards() {
  return (
    <PageShell
      title="Safety Standards"
      subtitle="APTRANSCO's commitment to zero-accident operations"
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Safety Standards' }]}
    >
      {/* Safety commitment banner */}
      <div className="rounded-xl p-6 bg-gradient-to-r from-navy-800 to-navy-700 text-white mb-10 flex items-center gap-5">
        <ShieldCheckIcon className="w-12 h-12 text-gold-400 shrink-0" aria-hidden="true" />
        <div>
          <h2 className="text-lg font-bold text-white mb-1">Zero Accident. Zero Compromise.</h2>
          <p className="text-navy-200 text-sm max-w-2xl">
            Safety is the foundation of every operation at APTRANSCO. All field operations follow
            IS 5216 safety standards, and every employee is trained in EHV electrical safety before
            assignment to field duties.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {SAFETY_STATS.map((stat) => (
          <div key={stat.label} className="card p-4 text-center">
            <div className={`text-2xl font-extrabold tabular-nums ${stat.color}`}>{stat.value}</div>
            <p className="text-xs text-slate-400 mt-1 leading-tight">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Safety Guidelines Accordion */}
        <div className="lg:col-span-2">
          <h2 className="section-title mb-2">Safety Guidelines</h2>
          <p className="section-subtitle mb-6">Standard operating procedures for EHV field work</p>
          <Accordion items={SAFETY_GUIDELINES} allowMultiple />
        </div>

        {/* Safety Documents + Standards */}
        <aside className="flex flex-col gap-6">
          {/* Standards followed */}
          <div className="card p-5">
            <h3 className="text-sm font-bold text-navy-700 mb-4">Standards Followed</h3>
            <ul className="flex flex-col gap-2">
              {[
                'IS 5216 (Part I & II) — EHV Safety',
                'IS 3043 — Earthing',
                'IS 4770 — Rubber Gloves',
                'IS 2925 — Safety Helmets',
                'IS 15298 — Safety Footwear',
                'IS 3521 — Safety Harness',
                'CEA (Measures relating to Safety) Regulations, 2010',
                'APTRANSCO EHV Safety Manual, 2024',
              ].map((std, i) => (
                <li key={i} className="flex items-start gap-2 text-xs">
                  <CheckCircleIcon className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-slate-700">{std}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Downloads */}
          <div className="card p-5">
            <h3 className="text-sm font-bold text-navy-700 mb-4">Safety Documents</h3>
            <ul className="flex flex-col gap-3">
              {SAFETY_DOCS.map((doc) => (
                <li key={doc.name}>
                  <a href={doc.url}
                    className="flex items-start gap-2 group hover:text-navy-800 transition-colors">
                    <DocumentArrowDownIcon className="w-4 h-4 text-navy-400 shrink-0 mt-0.5 group-hover:text-navy-700" aria-hidden="true" />
                    <div>
                      <span className="text-xs font-medium text-slate-700 group-hover:text-navy-800 leading-snug block">{doc.name}</span>
                      <span className="text-xs text-slate-400">PDF · {doc.size}</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Emergency */}
          <div className="card p-5 bg-red-50 border-red-200">
            <div className="flex items-center gap-2 mb-3">
              <ExclamationTriangleIcon className="w-5 h-5 text-red-500" aria-hidden="true" />
              <h3 className="text-sm font-bold text-red-700">Emergency Contacts</h3>
            </div>
            <dl className="flex flex-col gap-2 text-sm">
              <div>
                <dt className="text-xs text-red-400">SLDC Emergency (24×7)</dt>
                <dd className="font-bold text-red-700">1912</dd>
              </div>
              <div>
                <dt className="text-xs text-red-400">Safety Officer (HQ)</dt>
                <dd className="font-bold text-red-700">+91-866-2577800</dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>
    </PageShell>
  );
}
