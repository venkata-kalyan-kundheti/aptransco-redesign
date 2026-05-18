/**
 * src/pages/about/VisionMission.jsx — Full implementation
 */
import { SparklesIcon, RocketLaunchIcon, HeartIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import PageShell from '@/components/layout/PageShell';

const VALUES = [
  { icon: SparklesIcon,       title: 'Excellence',   desc: 'Striving for the highest standards in transmission infrastructure, grid reliability, and customer service.' },
  { icon: CheckCircleIcon,    title: 'Integrity',    desc: 'Transparent governance, ethical procurement, and accountability in every function of the organisation.' },
  { icon: RocketLaunchIcon,   title: 'Innovation',   desc: 'Embracing SCADA, GIS, drone inspection, and smart grid technologies for a future-ready transmission network.' },
  { icon: HeartIcon,          title: 'Safety First', desc: 'Zero-accident culture through rigorous IS standards compliance and continuous safety training for all field personnel.' },
];

const OBJECTIVES = [
  'Achieve pan-state 400 kV & 220 kV ring network by 2028 for N-1 contingency security.',
  'Reduce transmission losses below 2.5% through HVDC and advanced conductors.',
  'Evacuate 10,000 MW of new renewable energy by 2030 under AP Green Energy Corridor.',
  'Achieve 100% online SCADA/EMS monitoring for all 1,038 substations by 2026.',
  'Implement digital twin for transmission network for predictive maintenance.',
  'Attain ISO 55001 Asset Management certification for all major substations.',
];

export default function VisionMission() {
  return (
    <PageShell
      title="Vision, Mission & Values"
      subtitle="Strategic direction guiding APTRANSCO's growth"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Vision & Mission' },
      ]}
    >
      {/* Vision */}
      <div className="card border-l-4 border-gold-400 p-6 mb-8">
        <div className="flex items-center gap-3 mb-3">
          <SparklesIcon className="w-6 h-6 text-gold-500" aria-hidden="true" />
          <h2 className="text-xl font-bold text-navy-800">Our Vision</h2>
        </div>
        <blockquote className="text-lg text-navy-700 font-medium leading-relaxed italic">
          &ldquo;To be the most reliable, efficient and sustainable State Transmission Utility in India &mdash;
          enabling Andhra Pradesh&apos;s growth through a world-class EHV transmission network.&rdquo;
        </blockquote>
      </div>

      {/* Mission */}
      <div className="card border-l-4 border-navy-500 p-6 mb-10">
        <div className="flex items-center gap-3 mb-3">
          <RocketLaunchIcon className="w-6 h-6 text-navy-600" aria-hidden="true" />
          <h2 className="text-xl font-bold text-navy-800">Our Mission</h2>
        </div>
        <p className="text-slate-600 leading-relaxed">
          To plan, develop, operate and maintain the Extra High Voltage transmission network with
          the highest standards of reliability, efficiency and safety — ensuring non-discriminatory
          open access, supporting renewable energy integration, and delivering value to the
          Government of Andhra Pradesh, distribution companies, consumers, and all stakeholders.
        </p>
      </div>

      {/* Core Values */}
      <section className="mb-12" aria-labelledby="values-heading">
        <h2 id="values-heading" className="section-title mb-2">Core Values</h2>
        <p className="section-subtitle mb-6">The principles that drive every decision at APTRANSCO</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {VALUES.map((val) => {
            const Icon = val.icon;
            return (
              <div key={val.title} className="card p-5 flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="shrink-0 w-12 h-12 bg-navy-50 rounded-xl flex items-center justify-center">
                  <Icon className="w-6 h-6 text-navy-600" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-navy-800 mb-1">{val.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{val.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Strategic Objectives */}
      <section aria-labelledby="objectives-heading">
        <h2 id="objectives-heading" className="section-title mb-2">Strategic Objectives</h2>
        <p className="section-subtitle mb-6">Targets driving APTRANSCO&apos;s 2030 roadmap</p>
        <ol className="flex flex-col gap-4">
          {OBJECTIVES.map((obj, i) => (
            <li key={i} className="card p-4 flex items-start gap-4">
              <span className="shrink-0 w-8 h-8 rounded-full bg-navy-700 text-white text-sm font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <p className="text-sm text-slate-700 leading-relaxed">{obj}</p>
            </li>
          ))}
        </ol>
      </section>
    </PageShell>
  );
}
