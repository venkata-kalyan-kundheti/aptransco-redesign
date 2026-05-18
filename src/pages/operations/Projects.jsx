/**
 * src/pages/operations/Projects.jsx — Full implementation
 */
import { CheckBadgeIcon, ClockIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import PageShell from '@/components/layout/PageShell';
import Badge from '@/components/common/Badge';

const PROJECTS = [
  {
    id: 'p1', status: 'ongoing',
    name: '400 kV Kurnool–Nandyal Transmission Line',
    capacity: '400 kV, 200 km', region: 'Rayalaseema',
    start: 'Apr 2024', target: 'Mar 2026', cost: '₹ 890 Cr',
    desc: 'New 400 kV D/C transmission line from Kurnool Pool to Nandyal to evacuate power from Kurnool Solar Park (1,500 MW). Includes 2 new 400 kV bays.',
  },
  {
    id: 'p2', status: 'ongoing',
    name: 'Green Energy Corridor Phase-II — AP Component',
    capacity: '765 kV & 400 kV', region: 'Pan-AP',
    start: 'Jan 2024', target: 'Dec 2026', cost: '₹ 4,200 Cr',
    desc: 'Inter-state transmission system to evacuate 10,000 MW of renewable energy under the National Green Energy Corridor scheme (ISTS component funded by ADB).',
  },
  {
    id: 'p3', status: 'upcoming',
    name: 'Visakhapatnam Metropolitan Grid Strengthening',
    capacity: '220 kV, 3 new SS', region: 'North Zone',
    start: 'Jul 2025', target: 'Jun 2027', cost: '₹ 620 Cr',
    desc: 'Three new 220 kV substations at Bheemunipatnam, Anakapalle Port, and Visakhapatnam Steel to support industrial growth and Bharat Petroleum expansion.',
  },
  {
    id: 'p4', status: 'completed',
    name: 'SCADA/EMS Phase-II Modernisation',
    capacity: '250 substations', region: 'Pan-AP',
    start: 'Apr 2022', target: 'Mar 2024', cost: '₹ 310 Cr',
    desc: 'Advanced SCADA/EMS system integrated with SLDC across 250 EHV substations. Enables real-time monitoring, remote operation, and predictive maintenance.',
  },
  {
    id: 'p5', status: 'completed',
    name: '400 kV Kurnool Solar Park SS Commissioning',
    capacity: '400 kV, 2×500 MVA', region: 'Rayalaseema',
    start: 'Apr 2023', target: 'Dec 2023', cost: '₹ 280 Cr',
    desc: 'New 400/220 kV substation commissioned ahead of schedule to support 900 MW Kurnool Ultra Mega Solar Park evacuation with State-of-Art GIS switchgear.',
  },
  {
    id: 'p6', status: 'upcoming',
    name: 'Amaravati Capital Region Transmission Infrastructure',
    capacity: '220 kV, 5 new SS', region: 'East Zone',
    start: 'Oct 2025', target: 'Mar 2028', cost: '₹ 1,100 Cr',
    desc: 'Dedicated EHV infrastructure for Amaravati Capital City including 5 new 220 kV substations, 220 kV underground cable system, and associated transmission lines.',
  },
];

const STATUS_MAP = {
  ongoing:   { variant: 'new',      label: 'Ongoing',   icon: WrenchScrewdriverIcon },
  upcoming:  { variant: 'upcoming', label: 'Upcoming',  icon: ClockIcon },
  completed: { variant: 'open',     label: 'Completed', icon: CheckBadgeIcon },
};

export default function Projects() {
  return (
    <PageShell
      title="Projects"
      description="Major capital projects — new transmission lines, substations, and grid modernisation initiatives."
      breadcrumb={['Operations', 'Projects']}
    >
      {/* Summary bar */}
      <div className="grid grid-cols-3 gap-4 mb-10">
        {[
          { label: 'Ongoing',   count: PROJECTS.filter(p => p.status === 'ongoing').length,   color: 'bg-emerald-50 text-emerald-700' },
          { label: 'Upcoming',  count: PROJECTS.filter(p => p.status === 'upcoming').length,  color: 'bg-amber-50 text-amber-700' },
          { label: 'Completed', count: PROJECTS.filter(p => p.status === 'completed').length, color: 'bg-slate-100 text-slate-600' },
        ].map((s) => (
          <div key={s.label} className={`card p-4 text-center ${s.color}`}>
            <div className="text-2xl font-bold">{s.count}</div>
            <div className="text-xs font-medium mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Project cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {PROJECTS.map((project) => {
          const s = STATUS_MAP[project.status];
          const _Icon = s.icon;
          return (
            <div key={project.id} className="card p-5 flex flex-col gap-3">
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-base font-bold text-navy-800 leading-snug">{project.name}</h2>
                <Badge variant={s.variant}>{s.label}</Badge>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">{project.desc}</p>

              <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs mt-1">
                {[
                  { label: 'Capacity / Scope', value: project.capacity },
                  { label: 'Region',           value: project.region },
                  { label: 'Start Date',        value: project.start },
                  { label: 'Target Date',       value: project.target },
                  { label: 'Project Cost',      value: project.cost },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <dt className="text-slate-400 font-semibold uppercase tracking-wide">{label}</dt>
                    <dd className="text-slate-700 font-medium mt-0.5">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          );
        })}
      </div>

      {/* Note */}
      <p className="mt-8 text-xs text-slate-400 text-center">
        Project details are indicative and subject to revision. For official project status, contact CE (Projects), APTRANSCO.
      </p>
    </PageShell>
  );
}
