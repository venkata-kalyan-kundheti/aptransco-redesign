/**
 * src/pages/operations/TransmissionNetwork.jsx — Full implementation
 */
import {
  BoltIcon, BuildingOffice2Icon, MapPinIcon, CheckBadgeIcon,
} from '@heroicons/react/24/outline';
import PageShell from '@/components/layout/PageShell';
import { NETWORK_STATS_DETAILED, SUBSTATION_BREAKUP, ZONES, KEY_ACHIEVEMENTS } from '@/data/stats';

const ICON_MAP = { BoltIcon, BuildingOffice2Icon, MapPinIcon, CheckBadgeIcon };

export default function TransmissionNetwork() {
  return (
    <PageShell
      title="Transmission Network"
      description="APTRANSCO operates Andhra Pradesh's Extra High Voltage backbone — 33,010 km of transmission lines and 1,038 substations across 26 districts."
      breadcrumb={[{ label: 'Operations', href: '/network' }, 'Transmission Network']}
    >
      {/* Key Stats Grid */}
      <section aria-labelledby="stats-heading" className="mb-12">
        <h2 id="stats-heading" className="section-title mb-2">Network at a Glance</h2>
        <p className="section-subtitle mb-6">As of Financial Year 2025-26</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {NETWORK_STATS_DETAILED.map((stat) => {
            const Icon = ICON_MAP[stat.icon] ?? BoltIcon;
            return (
              <div key={stat.id} className="card p-5 text-center">
                <div className={`mx-auto mb-3 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center ${stat.color}`}>
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <div className="text-2xl font-bold text-navy-700">{stat.value}<span className="text-sm font-normal text-slate-400 ml-1">{stat.unit}</span></div>
                <p className="text-xs text-slate-500 mt-1 font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Substation Breakup Table */}
      <section aria-labelledby="ss-heading" className="mb-12">
        <h2 id="ss-heading" className="section-title mb-6">Substation Breakup by Voltage</h2>
        <div className="table-responsive">
          <table className="table-base">
            <thead>
              <tr>
                <th className="table-th">Voltage Level</th>
                <th className="table-th">No. of Substations</th>
                <th className="table-th">Transformation Capacity</th>
              </tr>
            </thead>
            <tbody>
              {SUBSTATION_BREAKUP.map((row) => (
                <tr key={row.voltage} className="table-tr">
                  <td className="table-td font-semibold text-navy-700">{row.voltage}</td>
                  <td className="table-td">{row.count}</td>
                  <td className="table-td">{row.capacity}</td>
                </tr>
              ))}
              <tr className="bg-navy-50">
                <td className="table-td font-bold text-navy-700">Total</td>
                <td className="table-td font-bold text-navy-700">1,038</td>
                <td className="table-td font-bold text-navy-700">1,08,000 MVA</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Zone-wise Presence */}
      <section aria-labelledby="zones-heading" className="mb-12">
        <h2 id="zones-heading" className="section-title mb-6">Zone-Wise Operations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {ZONES.map((zone) => (
            <div key={zone.id} className="card p-5">
              <div className="flex items-center gap-2 mb-4">
                <MapPinIcon className="w-5 h-5 text-navy-500" aria-hidden="true" />
                <h3 className="font-bold text-navy-700">{zone.name}</h3>
              </div>
              <dl className="text-sm space-y-2">
                <div className="flex justify-between">
                  <dt className="text-slate-500">Headquarters</dt>
                  <dd className="font-medium text-navy-700">{zone.hq}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-500">Circles</dt>
                  <dd className="font-medium text-navy-700">{zone.circles}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-500">Substations</dt>
                  <dd className="font-medium text-navy-700">{zone.substations}</dd>
                </div>
              </dl>
              <div className="mt-4 pt-3 border-t border-slate-100">
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wide mb-1">Districts</p>
                <p className="text-xs text-slate-600">{zone.districts.join(' · ')}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Achievements */}
      <section aria-labelledby="ach-heading">
        <h2 id="ach-heading" className="section-title mb-6">Key Achievements</h2>
        <div className="flex flex-col gap-3">
          {KEY_ACHIEVEMENTS.map((item, i) => (
            <div key={i} className="card p-4 flex items-start gap-4">
              <span className="shrink-0 text-xs font-bold text-navy-500 bg-navy-50 rounded px-2 py-1 mt-0.5">{item.year}</span>
              <p className="text-sm text-slate-700">{item.achievement}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
