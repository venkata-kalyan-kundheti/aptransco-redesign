/**
 * src/pages/about/OrganizationChart.jsx — Full implementation
 * Textual org chart (no SVG library needed — pure CSS grid)
 */
import PageShell from '@/components/layout/PageShell';
import { UserCircleIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline';

const ORG_STRUCTURE = [
  {
    level: 1,
    title: 'Board of Directors',
    color: 'bg-navy-700 text-white',
    nodes: [
      { name: 'Chairman & Managing Director (CMD)', sub: 'IAS Officer, Govt. of AP' },
    ],
  },
  {
    level: 2,
    title: 'Directors',
    color: 'bg-navy-500 text-white',
    nodes: [
      { name: 'Director (Finance)', sub: 'CFO & Director' },
      { name: 'Director (Technical)', sub: 'Chief Engineer Grade' },
      { name: 'Director (Projects)', sub: 'Projects & Planning' },
      { name: 'Director (HR & Admin)', sub: 'HR, IR & Administration' },
    ],
  },
  {
    level: 3,
    title: 'Chief Engineers',
    color: 'bg-navy-100 text-navy-800',
    nodes: [
      { name: 'CE (Grid & Transmission)', sub: 'O&M — All Zones' },
      { name: 'CE (Projects)', sub: 'New Works & Capital Projects' },
      { name: 'CE (Electrical)', sub: 'Equipment & Standards' },
      { name: 'CE (Civil)', sub: 'Civil & Buildings' },
      { name: 'CE (Telecom & IT)', sub: 'SCADA, EMS, IT Systems' },
      { name: 'FA & CAO', sub: 'Finance & Accounts' },
    ],
  },
  {
    level: 4,
    title: 'Circle / Zonal Level',
    color: 'bg-slate-100 text-slate-700',
    nodes: [
      { name: 'Superintending Engineers (SE)', sub: '3 Zones × 4-5 Circles each' },
      { name: 'Executive Engineers (EE)', sub: 'Division level — O&M & Projects' },
      { name: 'Assistant Executive Engineers (AEE)', sub: 'Sub-Division level' },
      { name: 'Assistant Engineers (AE)', sub: 'Section / Substation level' },
    ],
  },
];

const STATUTORY_COMMITTEES = [
  'Audit Committee',
  'HR & Remuneration Committee',
  'Tender Committee',
  'Safety Review Committee',
  'Purchase Committee',
  'IT Steering Committee',
];

export default function OrganizationChart() {
  return (
    <PageShell
      title="Organization Chart"
      description="APTRANSCO's management hierarchy from Board of Directors to field-level operations."
      breadcrumb={[{ label: 'About', href: '/about' }, 'Organization Chart']}
    >
      {/* Visual hierarchy */}
      <section aria-labelledby="org-heading" className="mb-12">
        <h2 id="org-heading" className="section-title mb-6">Management Hierarchy</h2>
        <div className="flex flex-col items-center gap-0">
          {ORG_STRUCTURE.map((tier, ti) => (
            <div key={tier.level} className="w-full flex flex-col items-center">
              {/* Connector line */}
              {ti > 0 && (
                <div className="w-0.5 h-6 bg-slate-300" aria-hidden="true" />
              )}

              {/* Tier label */}
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                Level {tier.level} — {tier.title}
              </div>

              {/* Nodes */}
              <div
                className={`w-full grid gap-3 mb-1 ${
                  tier.nodes.length === 1 ? 'max-w-xs' :
                  tier.nodes.length <= 3 ? 'grid-cols-1 sm:grid-cols-3 max-w-2xl' :
                  'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl'
                }`}
              >
                {tier.nodes.map((node, ni) => (
                  <div
                    key={ni}
                    className={`${tier.color} rounded-lg p-3 text-center shadow-card`}
                  >
                    <UserCircleIcon className="w-6 h-6 mx-auto mb-1 opacity-70" aria-hidden="true" />
                    <p className="text-sm font-bold leading-snug">{node.name}</p>
                    <p className="text-xs opacity-75 mt-0.5">{node.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Statutory Committees */}
      <section aria-labelledby="committees-heading">
        <h2 id="committees-heading" className="section-title mb-4">Statutory Committees</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {STATUTORY_COMMITTEES.map((name) => (
            <div key={name} className="card p-4 flex items-center gap-3">
              <BuildingOffice2Icon className="w-5 h-5 text-navy-500 shrink-0" aria-hidden="true" />
              <span className="text-sm text-navy-700 font-medium">{name}</span>
            </div>
          ))}
        </div>
      </section>

      <p className="mt-8 text-xs text-slate-400 text-center">
        For the official organization chart PDF, please contact HR &amp; Admin Department, APTRANSCO Corporate Office.
      </p>
    </PageShell>
  );
}
