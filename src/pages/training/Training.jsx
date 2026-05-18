/**
 * src/pages/training/Training.jsx — Full implementation
 */
import {
  AcademicCapIcon, UserGroupIcon,
  BookOpenIcon, MapPinIcon, ArrowTopRightOnSquareIcon, CheckCircleIcon,
} from '@heroicons/react/24/outline';
import PageShell from '@/components/layout/PageShell';
import Badge from '@/components/common/Badge';

const TRAINING_CATEGORIES = [
  {
    id: 'technical', title: 'Technical Training', icon: BookOpenIcon, colour: 'bg-navy-50 text-navy-700',
    programmes: ['EHV Substation Operation & Maintenance','SCADA/EMS Operation for Engineers','Protection Systems & Relay Testing','Transformer Oil Testing & Maintenance','GIS Switchgear Handling & Safety','Transmission Line Inspection (Drone-based)','Power Cables — Installation & Fault Location'],
  },
  {
    id: 'safety', title: 'Safety & Compliance', icon: CheckCircleIcon, colour: 'bg-emerald-50 text-emerald-700',
    programmes: ['Electrical Safety for Field Personnel (IS 5216)','Permit-to-Work (PTW) System','First Aid & CPR for Electrical Accidents','Firefighting in Electrical Installations','PPE Usage & Heights Safety'],
  },
  {
    id: 'management', title: 'Management & Leadership', icon: UserGroupIcon, colour: 'bg-gold-50 text-gold-700',
    programmes: ['Public Procurement & Tendering (AP PFMS)','Contract Management for Engineers','Leadership Development Programme','RTI Act — PIO & APIO Obligations','Anti-Corruption & Vigilance Awareness'],
  },
  {
    id: 'ict', title: 'IT & Digital Skills', icon: AcademicCapIcon, colour: 'bg-blue-50 text-blue-700',
    programmes: ['SAP / ERP for Engineers','GIS Mapping for Transmission Assets','Digital Document Management (e-Office)','Cybersecurity for Critical Infrastructure','Data Analytics for Grid Performance'],
  },
];

const SCHEDULE = [
  { id: 'tp-1', title: 'EHV Substation O&M — Batch 14', date: '2026-06-02', duration: '5 Days', venue: 'PRTI, Vijayawada', seats: 30, status: 'open' },
  { id: 'tp-2', title: 'SCADA/EMS Operation Refresher', date: '2026-06-09', duration: '3 Days', venue: 'PRTI, Vijayawada', seats: 20, status: 'open' },
  { id: 'tp-3', title: 'Drone-Based Line Inspection', date: '2026-06-16', duration: '2 Days', venue: 'Field Training Yard', seats: 15, status: 'open' },
  { id: 'tp-4', title: 'Electrical Safety & PTW System', date: '2026-06-23', duration: '1 Day', venue: 'PRTI, Vijayawada', seats: 40, status: 'open' },
  { id: 'tp-5', title: 'Contract Management for Engineers', date: '2026-07-07', duration: '3 Days', venue: 'PRTI, Vijayawada', seats: 25, status: 'upcoming' },
  { id: 'tp-6', title: 'Protection Systems & Relay Testing', date: '2026-07-14', duration: '5 Days', venue: 'PRTI, Vijayawada', seats: 20, status: 'upcoming' },
];

export default function Training() {
  return (
    <PageShell
      title="Training — PRTI"
      description="Power Research and Training Institute (PRTI) — technical, safety and leadership programmes for APTRANSCO engineers."
      breadcrumb={['Training & PRTI']}
    >
      {/* About PRTI */}
      <section aria-labelledby="prti-heading" className="mb-10">
        <div className="card p-6 flex flex-col md:flex-row gap-5 border-l-4 border-navy-500">
          <div className="shrink-0 w-14 h-14 rounded-xl bg-navy-700 flex items-center justify-center">
            <AcademicCapIcon className="w-7 h-7 text-gold-400" aria-hidden="true" />
          </div>
          <div>
            <h2 id="prti-heading" className="text-lg font-bold text-navy-800 mb-3">
              Power Research and Training Institute (PRTI), Vijayawada
            </h2>
            <dl className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-2 text-sm">
              {[['Established','1975'],['Location','Vijayawada, AP'],['Capacity','500 trainees/year'],['Programmes','40+ courses/year'],['Affiliation','APTRANSCO Corporate']].map(([l,v]) => (
                <div key={l}><dt className="text-xs text-slate-400 font-semibold uppercase">{l}</dt><dd className="text-slate-700 font-medium mt-0.5">{v}</dd></div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Programme categories */}
      <section aria-labelledby="prog-heading" className="mb-10">
        <h2 id="prog-heading" className="section-title mb-6">Training Programmes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {TRAINING_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.id} className="card p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${cat.colour}`}>
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-navy-800">{cat.title}</h3>
                </div>
                <ul className="flex flex-col gap-1.5" role="list">
                  {cat.programmes.map((p, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-navy-400 mt-1.5" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Schedule */}
      <section aria-labelledby="sched-heading" className="mb-10">
        <h2 id="sched-heading" className="section-title mb-6">Upcoming Training Calendar (Jun–Jul 2026)</h2>
        <div className="table-responsive">
          <table className="table-base">
            <thead><tr><th className="table-th">Programme</th><th className="table-th">Date</th><th className="table-th">Duration</th><th className="table-th">Venue</th><th className="table-th">Seats</th><th className="table-th">Status</th></tr></thead>
            <tbody>
              {SCHEDULE.map((p) => (
                <tr key={p.id} className="table-tr">
                  <td className="table-td font-medium text-navy-700">{p.title}</td>
                  <td className="table-td text-sm text-slate-600">{new Date(p.date).toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'})}</td>
                  <td className="table-td text-slate-600">{p.duration}</td>
                  <td className="table-td text-xs text-slate-500 flex items-center gap-1"><MapPinIcon className="w-3 h-3 shrink-0" aria-hidden="true" />{p.venue}</td>
                  <td className="table-td text-center">{p.seats}</td>
                  <td className="table-td"><Badge variant={p.status === 'open' ? 'open' : 'upcoming'}>{p.status === 'open' ? 'Open' : 'Upcoming'}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Registration */}
      <section aria-labelledby="reg-heading">
        <h2 id="reg-heading" className="section-title mb-4">Nomination & Registration</h2>
        <div className="card p-5 flex flex-col sm:flex-row gap-5">
          <div className="flex-1">
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              Nominations must be routed through the HOD/Controlling Officer at least <strong>7 days before</strong> programme date. Outstation candidates are eligible for TA/DA as per APTRANSCO rules.
            </p>
            <dl className="text-sm flex flex-col gap-2">
              <div><dt className="text-xs font-semibold text-slate-400 uppercase">Contact PRTI</dt><dd className="text-navy-700">prti@aptransco.gov.in · +91-866-2577900</dd></div>
              <div><dt className="text-xs font-semibold text-slate-400 uppercase">Address</dt><dd className="text-slate-600">PRTI, Ramachandrapuram, Vijayawada – 520 013</dd></div>
            </dl>
          </div>
          <div className="shrink-0 flex flex-col gap-2">
            <a href="#" className="btn-primary flex items-center gap-2"><ArrowTopRightOnSquareIcon className="w-4 h-4" aria-hidden="true" />Nomination Form</a>
            <a href="mailto:prti@aptransco.gov.in" className="btn-secondary btn-sm">Email PRTI</a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
