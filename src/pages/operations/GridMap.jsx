/**
 * src/pages/operations/GridMap.jsx — Full implementation
 * Route: /grid-map
 *
 * AP State grid map — SVG-based schematic showing the 3 transmission zones,
 * key 400kV/220kV substations, and transmission corridors.
 * No third-party map library needed — pure inline SVG.
 */
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import PageShell from '@/components/layout/PageShell';
import { ZONES, SUBSTATION_BREAKUP } from '@/data/stats';

// Key substations to display on the schematic map
const KEY_SUBSTATIONS = [
  { id: 'ss-kurnool',   name: 'Kurnool Solar SS',   kv: '400', zone: 'south', x: 28, y: 65 },
  { id: 'ss-tirupati',  name: 'Tirupati SS',         kv: '220', zone: 'south', x: 35, y: 85 },
  { id: 'ss-vijayawada',name: 'Vijayawada Pool',     kv: '400', zone: 'east',  x: 58, y: 55 },
  { id: 'ss-guntur',    name: 'Guntur SS',            kv: '220', zone: 'east',  x: 55, y: 68 },
  { id: 'ss-vizag',     name: 'Visakhapatnam Pool',  kv: '400', zone: 'north', x: 80, y: 28 },
  { id: 'ss-kakinada',  name: 'Kakinada SS',         kv: '220', zone: 'north', x: 78, y: 42 },
  { id: 'ss-ongole',    name: 'Ongole SS',            kv: '220', zone: 'south', x: 52, y: 80 },
  { id: 'ss-anantapur', name: 'Anantapur SS',         kv: '132', zone: 'south', x: 22, y: 72 },
  { id: 'ss-nellore',   name: 'Nellore SS',           kv: '220', zone: 'south', x: 52, y: 88 },
  { id: 'ss-rajahmundry',name: 'Rajahmundry SS',     kv: '220', zone: 'north', x: 72, y: 40 },
];

// Transmission corridors (SVG line coordinates)
const CORRIDORS = [
  { from: { x: 58, y: 55 }, to: { x: 80, y: 28 }, kv: '400' },
  { from: { x: 58, y: 55 }, to: { x: 35, y: 85 }, kv: '400' },
  { from: { x: 58, y: 55 }, to: { x: 28, y: 65 }, kv: '220' },
  { from: { x: 80, y: 28 }, to: { x: 72, y: 40 }, kv: '220' },
  { from: { x: 72, y: 40 }, to: { x: 78, y: 42 }, kv: '220' },
  { from: { x: 55, y: 68 }, to: { x: 52, y: 80 }, kv: '220' },
  { from: { x: 52, y: 80 }, to: { x: 52, y: 88 }, kv: '132' },
  { from: { x: 28, y: 65 }, to: { x: 22, y: 72 }, kv: '132' },
];

const KV_COLORS = { '400': '#1A4A8A', '220': '#F5A623', '132': '#1A7A3F' };
const ZONE_COLORS = { north: '#1A4A8A', south: '#E0901A', east: '#1A7A3F' };

export default function GridMap() {
  return (
    <PageShell
      title="AP Grid Map"
      description="Schematic map of APTRANSCO's Extra High Voltage transmission network across Andhra Pradesh — 400 kV, 220 kV, and 132 kV corridors and key substations."
      breadcrumb={[{ label: 'Operations', href: '/network' }, 'Grid Map']}
    >
      <div className="flex flex-col lg:flex-row gap-8">

        {/* SVG Schematic Map */}
        <section aria-labelledby="map-heading" className="flex-1">
          <h2 id="map-heading" className="section-title mb-4">Transmission Network Schematic</h2>
          <div className="card p-4">
            <div className="min-h-[300px] sm:min-h-0">
            <svg
              viewBox="0 0 100 100"
              className="w-full max-w-2xl mx-auto block"
              role="img"
              aria-label="Schematic map of AP transmission network showing 3 zones, key substations and 400kV/220kV/132kV corridors"
            >
              {/* Background */}
              <rect x="0" y="0" width="100" height="100" fill="#F4F6FA" rx="2" />

              {/* Zone background regions (simplified) */}
              <rect x="60" y="10" width="38" height="50" fill="#EEF2F9" rx="1" opacity="0.6" />
              <text x="79" y="18" textAnchor="middle" fontSize="2.8" fill="#1A4A8A" fontWeight="bold">NORTH ZONE</text>

              <rect x="5" y="40" width="55" height="55" fill="#FFF8EC" rx="1" opacity="0.6" />
              <text x="32" y="48" textAnchor="middle" fontSize="2.8" fill="#B97010" fontWeight="bold">SOUTH ZONE</text>

              <rect x="42" y="42" width="32" height="32" fill="#F0FBF4" rx="1" opacity="0.6" />
              <text x="58" y="50" textAnchor="middle" fontSize="2.8" fill="#1A7A3F" fontWeight="bold">EAST ZONE</text>

              {/* Transmission corridors */}
              {CORRIDORS.map((c, i) => (
                <line
                  key={i}
                  x1={c.from.x} y1={c.from.y}
                  x2={c.to.x}   y2={c.to.y}
                  stroke={KV_COLORS[c.kv]}
                  strokeWidth={c.kv === '400' ? 0.8 : c.kv === '220' ? 0.5 : 0.3}
                  strokeDasharray={c.kv === '132' ? '1,0.5' : 'none'}
                  opacity="0.85"
                />
              ))}

              {/* Substations */}
              {KEY_SUBSTATIONS.map((ss) => (
                <g key={ss.id} transform={`translate(${ss.x},${ss.y})`}>
                  <circle
                    r={ss.kv === '400' ? 2.2 : ss.kv === '220' ? 1.6 : 1.2}
                    fill={KV_COLORS[ss.kv]}
                    stroke="white"
                    strokeWidth="0.4"
                  />
                  <text
                    x="2.8" y="0.8"
                    fontSize="1.9"
                    fill="#2A3650"
                    fontWeight={ss.kv === '400' ? 'bold' : 'normal'}
                  >
                    {ss.name}
                  </text>
                </g>
              ))}

              {/* Legend */}
              <g transform="translate(2, 2)">
                <rect x="0" y="0" width="30" height="18" fill="white" fillOpacity="0.9" rx="1" />
                <text x="15" y="3" textAnchor="middle" fontSize="2" fill="#546480" fontWeight="bold">LEGEND</text>
                {[['400 kV', KV_COLORS['400']], ['220 kV', KV_COLORS['220']], ['132 kV', KV_COLORS['132']]].map(([label, color], i) => (
                  <g key={label} transform={`translate(2, ${5 + i * 4})`}>
                    <line x1="0" y1="1" x2="6" y2="1" stroke={color} strokeWidth={i === 0 ? 0.8 : i === 1 ? 0.5 : 0.3} strokeDasharray={i === 2 ? '1,0.5' : 'none'} />
                    <text x="7.5" y="2.2" fontSize="2" fill="#546480">{label}</text>
                  </g>
                ))}
                <g transform="translate(16, 5)">
                  <circle cx="2" cy="1" r="1.5" fill={KV_COLORS['400']} stroke="white" strokeWidth="0.3" />
                  <text x="4.5" y="2.2" fontSize="2" fill="#546480">400kV SS</text>
                </g>
                <g transform="translate(16, 9)">
                  <circle cx="2" cy="1" r="1" fill={KV_COLORS['220']} stroke="white" strokeWidth="0.3" />
                  <text x="4.5" y="2.2" fontSize="2" fill="#546480">220kV SS</text>
                </g>
                <g transform="translate(16, 13)">
                  <circle cx="2" cy="1" r="0.7" fill={KV_COLORS['132']} stroke="white" strokeWidth="0.3" />
                  <text x="4.5" y="2.2" fontSize="2" fill="#546480">132kV SS</text>
                </g>
              </g>
            </svg>
            </div>
            <p className="text-xs text-slate-400 text-center mt-2">
              Schematic representation only — not to geographic scale. For detailed GIS map, visit SLDC portal.
            </p>
          </div>
        </section>

        {/* Side panel */}
        <div className="lg:w-80 shrink-0 flex flex-col gap-5">

          {/* Zone Summary */}
          <section aria-labelledby="zones-map-heading">
            <h2 id="zones-map-heading" className="section-title mb-4">Operational Zones</h2>
            <div className="flex flex-col gap-3">
              {ZONES.map((zone) => (
                <div key={zone.id} className="card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className="w-3 h-3 rounded-full shrink-0"
                      style={{ backgroundColor: ZONE_COLORS[zone.id] }}
                      aria-hidden="true"
                    />
                    <h3 className="font-bold text-navy-800 text-sm">{zone.name}</h3>
                  </div>
                  <dl className="text-xs flex flex-col gap-1">
                    <div className="flex justify-between">
                      <dt className="text-slate-400">HQ</dt>
                      <dd className="font-medium text-navy-700">{zone.hq}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-slate-400">Substations</dt>
                      <dd className="font-medium text-navy-700">{zone.substations}</dd>
                    </div>
                  </dl>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="ss-breakup-heading">
            <h2 id="ss-breakup-heading" className="section-title mb-4">Substation Breakup</h2>
            <div className="table-responsive">
              <table className="table-base">
                <thead>
                  <tr>
                    <th className="table-th">Voltage</th>
                    <th className="table-th">Count</th>
                    <th className="table-th">Capacity</th>
                  </tr>
                </thead>
                <tbody>
                  {SUBSTATION_BREAKUP.map((row) => (
                    <tr key={row.voltage} className="table-tr">
                      <td className="table-td font-semibold" style={{ color: KV_COLORS[row.voltage.replace(' kV','').trim()] }}>
                        {row.voltage}
                      </td>
                      <td className="table-td">{row.count}</td>
                      <td className="table-td text-xs">{row.capacity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* External GIS link */}
          <a
            href="https://sldc.ap.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex items-center justify-center gap-2"
          >
            <ArrowTopRightOnSquareIcon className="w-4 h-4" aria-hidden="true" />
            Live Grid Data — SLDC Portal
          </a>
        </div>
      </div>
    </PageShell>
  );
}
