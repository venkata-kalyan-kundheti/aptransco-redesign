/**
 * src/pages/about/AboutAPTRANSCO.jsx — Full implementation
 * ─────────────────────────────────────────────────────────────────────────────
 * Sections:
 *  1. Overview / About us narrative
 *  2. Key Facts grid (established, type, regulator, HQ)
 *  3. Network Stats highlight bar
 *  4. Key Achievements timeline
 *  5. Organisation summary + leadership teaser
 *  6. Departments overview grid
 */
import { Link } from 'react-router-dom';
import {
  BuildingOffice2Icon,
  CalendarDaysIcon,
  MapPinIcon,
  ScaleIcon,
  BoltIcon,
  CheckBadgeIcon,
  ArrowRightIcon,
  TrophyIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import PageShell from '@/components/layout/PageShell';
import DepartmentCard from '@/components/common/DepartmentCard';
import {
  ORG_FULL_NAME,
  ORG_ESTABLISHED, ORG_TYPE, REGULATOR, CONTACT, NETWORK_STATS,
} from '@/utils/constants';
import { DEPARTMENTS } from '@/data/departments';
import { KEY_ACHIEVEMENTS } from '@/data/stats';

const KEY_FACTS = [
  { icon: CalendarDaysIcon,    label: 'Established',          value: ORG_ESTABLISHED },
  { icon: BuildingOffice2Icon, label: 'Organisation Type',    value: ORG_TYPE },
  { icon: ScaleIcon,           label: 'Regulatory Authority', value: REGULATOR },
  { icon: MapPinIcon,          label: 'Headquarters',         value: `${CONTACT.headOffice.address}` },
  { icon: UserGroupIcon,       label: 'Workforce',            value: '20,000+ Employees' },
  { icon: BoltIcon,            label: 'Jurisdiction',         value: 'All 26 Districts of Andhra Pradesh' },
];

export default function AboutAPTRANSCO() {
  return (
    <PageShell
      title="About APTRANSCO"
      subtitle="Andhra Pradesh Transmission Corporation Limited — State Transmission Utility"
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
    >
      {/* ── 1. Introduction ─────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 flex flex-col gap-5">
          <h2 className="text-2xl font-bold text-navy-800">
            Who We Are
          </h2>
          <p className="text-slate-600 leading-relaxed">
            <strong className="text-navy-700">{ORG_FULL_NAME} (APTRANSCO)</strong> is the State
            Transmission Utility (STU) of Andhra Pradesh, incorporated under the Andhra Pradesh
            Electricity Reforms Act, 1998. APTRANSCO is responsible for the planning, construction,
            operation, and maintenance of the Extra High Voltage (EHV) transmission network
            across the entire state.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Established in {ORG_ESTABLISHED} following the unbundling of the erstwhile APSEB,
            APTRANSCO operates under the jurisdiction of the{' '}
            <strong className="text-navy-700">Andhra Pradesh Electricity Regulatory Commission
            (APERC)</strong> and functions as the backbone of AP&apos;s power infrastructure &mdash; wheeling
            electricity from generating stations to distribution companies that serve millions
            of consumers statewide.
          </p>
          <p className="text-slate-600 leading-relaxed">
            With over <strong className="text-navy-700">32,000 km of EHV transmission lines</strong> and
            more than <strong className="text-navy-700">1,038 substations</strong> spread across all
            26 districts, APTRANSCO is one of the largest and most efficient state transmission
            utilities in India &mdash; achieving the country&apos;s lowest transmission loss of just{' '}
            <strong className="text-emerald-700">2.8%</strong>.
          </p>
          <div className="flex flex-wrap gap-3 mt-2">
            <Link to="/about/leadership" className="btn-primary btn-md">
              Board &amp; Leadership <ArrowRightIcon className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link to="/about/vision-mission" className="btn-secondary btn-md">
              Vision &amp; Mission
            </Link>
          </div>
        </div>

        {/* Quick facts sidebar */}
        <div className="card p-5 h-fit">
          <h3 className="text-sm font-bold text-navy-700 mb-4 uppercase tracking-wide">Quick Facts</h3>
          <dl className="flex flex-col gap-4">
            {KEY_FACTS.map((fact, i) => {
              const Icon = fact.icon;
              return (
                <div key={i} className="flex items-start gap-3">
                  <div className="shrink-0 w-8 h-8 rounded-lg bg-navy-50 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-navy-600" aria-hidden="true" />
                  </div>
                  <div>
                    <dt className="text-xs text-slate-400 font-medium">{fact.label}</dt>
                    <dd className="text-sm text-navy-800 font-semibold mt-0.5 leading-snug">{fact.value}</dd>
                  </div>
                </div>
              );
            })}
          </dl>
        </div>
      </div>

      {/* ── 2. Network Stats ─────────────────────────────────────────────── */}
      <section className="bg-navy-700 text-white rounded-xl p-6 mb-12" aria-labelledby="stats-heading">
        <h2 id="stats-heading" className="text-lg font-bold text-white mb-5 text-center">
          APTRANSCO at a Glance
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {NETWORK_STATS.map((stat) => (
            <div key={stat.id} className="text-center py-2">
              <div className="text-gold-400 text-2xl font-extrabold leading-none mb-1 tabular-nums">
                {stat.value}
                {stat.unit && <span className="text-sm font-medium ml-0.5 text-gold-300">{stat.unit}</span>}
              </div>
              <div className="text-navy-300 text-xs leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. Key Achievements Timeline ─────────────────────────────────── */}
      <section className="mb-12" aria-labelledby="achievements-heading">
        <h2 id="achievements-heading" className="section-title mb-2">Key Achievements</h2>
        <p className="section-subtitle mb-6">Recent milestones in transmission excellence</p>
        <ol className="relative border-l-2 border-navy-200 ml-4 flex flex-col gap-6">
          {KEY_ACHIEVEMENTS.map((ach, i) => (
            <li key={i} className="relative pl-7">
              <span className="absolute -left-[11px] top-0.5 w-5 h-5 rounded-full bg-navy-700 ring-4 ring-white flex items-center justify-center">
                <TrophyIcon className="w-2.5 h-2.5 text-gold-400" aria-hidden="true" />
              </span>
              <time className="text-xs font-bold text-navy-500 uppercase tracking-wide">{ach.year}</time>
              <p className="text-sm text-slate-700 mt-0.5 leading-snug">{ach.achievement}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ── 4. Mandates ──────────────────────────────────────────────────── */}
      <section className="mb-12" aria-labelledby="mandates-heading">
        <h2 id="mandates-heading" className="section-title mb-2">Statutory Mandates</h2>
        <p className="section-subtitle mb-6">Functions assigned under the Electricity Act, 2003</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: 'Transmission Licensing',
              desc: 'Hold and operate under a Transmission Licence granted by APERC for wheeling bulk power across the EHV grid.',
            },
            {
              title: 'Non-Discriminatory Open Access',
              desc: 'Provide open access to the transmission network to all eligible entities on non-discriminatory terms under APERC regulations.',
            },
            {
              title: 'Grid Code Compliance',
              desc: 'Operate the grid in accordance with the AP Grid Code and national Grid Code with full SLDC coordination.',
            },
            {
              title: 'Transmission Planning',
              desc: 'Prepare and implement the Annual Transmission Plan (ATP) for capacity augmentation aligned with demand growth.',
            },
            {
              title: 'Asset Management',
              desc: 'Maintain all 400 kV, 220 kV and 132 kV transmission assets to ensure reliability, availability and safety standards.',
            },
            {
              title: 'Tariff Filings',
              desc: 'File Annual Revenue Requirement (ARR) and tariff petitions before APERC for recovery of transmission costs.',
            },
          ].map((item) => (
            <div key={item.title} className="card p-5 flex items-start gap-4">
              <div className="shrink-0 w-8 h-8 bg-gold-50 rounded-lg flex items-center justify-center">
                <CheckBadgeIcon className="w-4 h-4 text-gold-600" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-navy-800 mb-1">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. Departments Overview ───────────────────────────────────────── */}
      <section aria-labelledby="depts-heading">
        <div className="flex items-end justify-between mb-6 gap-4">
          <div>
            <h2 id="depts-heading" className="section-title">Our Departments</h2>
            <p className="section-subtitle">Six specialised divisions driving APTRANSCO&apos;s mission</p>
          </div>
          <Link to="/departments/telecom-it" className="btn-secondary btn-sm shrink-0">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {DEPARTMENTS.map((dept) => (
            <DepartmentCard key={dept.id} department={dept} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
