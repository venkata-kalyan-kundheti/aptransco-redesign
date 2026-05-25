/**
 * src/pages/Home.jsx — Full homepage implementation
 * ─────────────────────────────────────────────────────────────────────────────
 * Sections:
 *  1. HeroBanner  — rotating slides, network stats headline
 *  2. StatsBar    — 6 live network metrics
 *  3. WhatsNew    — latest notifications (tabbed)
 *  4. QuickAccessGrid — 6 quick tiles
 *  5. LiveDataWidget — mocked grid frequency + demand
 *  6. ProjectsSection — 3 featured projects
 *  7. ElectricityCustomers — DISCOM links
 */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  BoltIcon,
  DocumentTextIcon,
  BellAlertIcon,
  BriefcaseIcon,
  EyeIcon,
  FolderOpenIcon,
  PhoneIcon,
  ArrowRightIcon,
  SignalIcon,
  MapPinIcon,
  CheckBadgeIcon,
  ClockIcon,
  BuildingStorefrontIcon,
} from '@heroicons/react/24/outline';

import { NETWORK_STATS, QUICK_ACCESS_TILES } from '@/utils/constants';
import { getLatestNotifications, NOTIFICATION_CATEGORIES } from '@/data/notifications';
import { getActiveTenders } from '@/data/tenders';
import NotificationCard from '@/components/common/NotificationCard';
import TenderCard from '@/components/common/TenderCard';

// ── Icon map for Quick Access tiles ───────────────────────────────────────────
const ICON_MAP = {
  DocumentTextIcon:       DocumentTextIcon,
  BellAlertIcon:          BellAlertIcon,
  EyeIcon:                EyeIcon,
  BriefcaseIcon:          BriefcaseIcon,
  FolderOpenIcon:         FolderOpenIcon,
  PhoneIcon:              PhoneIcon,
  BuildingStorefrontIcon: BuildingStorefrontIcon,
};

// ── Hero slides ────────────────────────────────────────────────────────────────
const HERO_SLIDES = [
  {
    id: 'slide-1',
    headline: 'Powering Progress.\nConnecting Andhra Pradesh.',
    sub: 'APTRANSCO operates 32,000+ km of EHV transmission lines across all 26 districts — the backbone of Andhra Pradesh\'s power economy.',
    cta: { label: 'Our Network', to: '/operations/network' },
    ctaSecondary: { label: 'Tenders', to: '/tenders' },
    accent: 'from-navy-900 via-navy-800 to-navy-700',
  },
  {
    id: 'slide-2',
    headline: 'Lowest Transmission Loss\nin India — 2.8%',
    sub: 'Recognized by the Ministry of Power as the Best State Transmission Utility for 2025 with record-low transmission losses.',
    cta: { label: 'Annual Reports', to: '/reports/annual' },
    ctaSecondary: { label: 'About Us', to: '/about' },
    accent: 'from-navy-900 via-[#1a3a5c] to-[#0f2d4a]',
  },
  {
    id: 'slide-3',
    headline: '1,038 EHV Substations\nServing All of Andhra Pradesh',
    sub: 'From 400 kV GIS substations to 132 kV rural feeders — reliable, round-the-clock power transmission for homes and industries.',
    cta: { label: 'Projects', to: '/operations/projects' },
    ctaSecondary: { label: 'Notifications', to: '/notifications' },
    accent: 'from-navy-900 via-navy-800 to-[#1e3d5e]',
  },
];

// ── Featured Projects ─────────────────────────────────────────────────────────
const FEATURED_PROJECTS = [
  {
    id: 'proj-1',
    name: '400 kV GIS Substation — Kurnool Solar Park',
    status: 'commissioned',
    location: 'Kurnool, AP',
    capacity: '2 × 500 MVA',
    date: '2026-05-03',
    description: 'Dedicated GIS substation for evacuation of 2,000 MW Kurnool Ultra Mega Solar Park power.',
    color: 'bg-emerald-100 text-emerald-700',
  },
  {
    id: 'proj-2',
    name: '220 kV Transmission Line — Ongole–Narasaraopet',
    status: 'in-progress',
    location: 'Prakasam / Palnadu Dist.',
    capacity: '85 km D/C line',
    date: '2026-06-01',
    description: 'New 220 kV double-circuit line to relieve overloading on the southern corridor.',
    color: 'bg-amber-100 text-amber-700',
  },
  {
    id: 'proj-3',
    name: 'SCADA / EMS Upgrade Phase-II',
    status: 'in-progress',
    location: 'Statewide (250 SS)',
    capacity: '250 Substations',
    date: '2026-02-28',
    description: 'Modernisation of SCADA/EMS to enable real-time automated grid monitoring and control.',
    color: 'bg-blue-100 text-blue-700',
  },
];

const STATUS_LABELS = {
  commissioned: { label: 'Commissioned', cls: 'bg-emerald-100 text-emerald-700' },
  'in-progress': { label: 'In Progress',  cls: 'bg-amber-100 text-amber-700' },
  planning:      { label: 'Planning',      cls: 'bg-sky-100 text-sky-700' },
};

// ── DISCOM Links ───────────────────────────────────────────────────────────────
const DISCOMS = [
  {
    id: 'apspdcl',
    name: 'APSPDCL',
    full: 'Southern Power Distribution Company of AP',
    districts: 'Nellore, Prakasam, Kurnool, Kadapa, Anantapur, Chittoor',
    href: 'https://apspdcl.in',
    color: 'bg-blue-700',
  },
  {
    id: 'apepdcl',
    name: 'APEPDCL',
    full: 'Eastern Power Distribution Company of AP',
    districts: 'Visakhapatnam, East Godavari, West Godavari, Krishna, Srikakulam, Vizianagaram',
    href: 'https://apepdcl.in',
    color: 'bg-teal-700',
  },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeTab,   setActiveTab]   = useState('all');

  // Auto-rotate hero
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((s) => (s + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const allNotifications = getLatestNotifications(12);
  const filteredNotifs   = activeTab === 'all'
    ? allNotifications
    : allNotifications.filter((n) => n.category === activeTab);

  const activeTenders = getActiveTenders().slice(0, 3);
  const slide         = HERO_SLIDES[activeSlide];

  return (
    <div>
      {/* ── 1. Hero Banner ─────────────────────────────────────────────────── */}
      <section
        className={`relative bg-gradient-to-br ${slide.accent} text-white py-20 md:py-28 overflow-hidden transition-all duration-700`}
        aria-labelledby="hero-heading"
      >
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
          aria-hidden="true"
        />

        {/* Gold accent blob */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400 opacity-10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />

        <div className="container-site relative z-10 text-center">
          {/* Logo badge */}
          <div className="flex justify-center mb-6" aria-hidden="true">
            <div className="w-20 h-20 bg-gold-400 rounded-full flex items-center justify-center shadow-lg ring-4 ring-gold-400/30">
              <BoltIcon className="w-10 h-10 text-navy-900" />
            </div>
          </div>

          {/* Headline */}
          <h1
            id="hero-heading"
            className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4 tracking-tight whitespace-pre-line"
            key={slide.id}
          >
            {slide.headline}
          </h1>
          <p className="text-navy-200 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            {slide.sub}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link to={slide.cta.to} className="btn-primary btn-lg shadow-lg">
              {slide.cta.label}
            </Link>
            <Link
              to={slide.ctaSecondary.to}
              className="btn btn-lg bg-transparent border-2 border-white text-white hover:bg-white/10"
            >
              {slide.ctaSecondary.label}
            </Link>
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center gap-2" role="tablist" aria-label="Hero slides">
            {HERO_SLIDES.map((s, i) => (
              <button
                key={s.id}
                role="tab"
                aria-selected={i === activeSlide}
                aria-label={`Slide ${i + 1}`}
                onClick={() => setActiveSlide(i)}
                className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                  i === activeSlide ? 'bg-gold-400 w-8' : 'bg-white/30 w-3 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. Stats Bar ───────────────────────────────────────────────────── */}
      <section className="bg-navy-800 text-white py-6" aria-label="Network statistics">
        <div className="container-site">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-x divide-navy-600/50">
            {NETWORK_STATS.map((stat) => (
              <div key={stat.id} className="py-4 px-5 text-center">
                <div className="text-gold-400 text-2xl font-extrabold tabular-nums leading-none mb-1">
                  {stat.value}
                  {stat.unit && <span className="text-sm font-medium ml-1 text-gold-300">{stat.unit}</span>}
                </div>
                <div className="text-navy-300 text-xs mt-1 leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. What's New ──────────────────────────────────────────────────── */}
      <section className="py-14 bg-white" aria-labelledby="whats-new-heading">
        <div className="container-site">
          {/* Header */}
          <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
            <div>
              <h2 id="whats-new-heading" className="section-title">What&apos;s New</h2>
              <p className="section-subtitle">Latest circulars, orders & announcements</p>
            </div>
            <Link to="/notifications" className="btn-secondary btn-sm shrink-0">
              View All <ArrowRightIcon className="w-3.5 h-3.5 ml-1 inline" aria-hidden="true" />
            </Link>
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mb-6" role="tablist" aria-label="Notification categories">
            {[{ value: 'all', label: 'All' }, ...NOTIFICATION_CATEGORIES.slice(1)].map((tab) => (
              <button
                key={tab.value}
                role="tab"
                aria-selected={activeTab === tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-400 ${
                  activeTab === tab.value
                    ? 'bg-navy-700 text-white border-navy-700'
                    : 'bg-white text-slate-500 border-slate-200 hover:border-navy-300 hover:text-navy-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredNotifs.slice(0, 6).map((notif) => (
              <NotificationCard key={notif.id} notification={notif} />
            ))}
          </div>

          {filteredNotifs.length === 0 && (
            <p className="text-center text-slate-400 py-10">No notifications in this category.</p>
          )}
        </div>
      </section>

      {/* ── 4. Quick Access Grid ───────────────────────────────────────────── */}
      <section className="py-14 bg-slate-50" aria-labelledby="quick-access-heading">
        <div className="container-site">
          <h2 id="quick-access-heading" className="section-title text-center mb-2">Quick Access</h2>
          <p className="section-subtitle text-center mb-8">Find the most-requested information in one click</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {QUICK_ACCESS_TILES.map((tile) => {
              const IconComp = ICON_MAP[tile.icon] ?? DocumentTextIcon;
              return (
                <Link
                  key={tile.id}
                  to={tile.href}
                  className="card-hover p-5 text-center flex flex-col items-center gap-3 group"
                  aria-label={tile.label}
                >
                  <div
                    className="w-14 h-14 bg-navy-50 rounded-xl flex items-center justify-center group-hover:bg-navy-700 group-hover:shadow-lg transition-all duration-200"
                    aria-hidden="true"
                  >
                    <IconComp className="w-7 h-7 text-navy-600 group-hover:text-white transition-colors duration-200" />
                  </div>
                  <span className="text-sm font-semibold text-navy-700 group-hover:text-navy-900">{tile.label}</span>
                  <span className="text-xs text-slate-400 leading-tight">{tile.desc}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. Active Tenders + Live Data ──────────────────────────────────── */}
      <section className="py-14 bg-white" aria-labelledby="tenders-live-heading">
        <div className="container-site grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Active Tenders (2/3) */}
          <div className="lg:col-span-2">
            <div className="flex items-end justify-between mb-6 gap-4">
              <div>
                <h2 id="tenders-live-heading" className="section-title">Active Tenders</h2>
                <p className="section-subtitle">Open procurement notices &amp; upcoming NITs</p>
              </div>
              <Link to="/tenders" className="btn-secondary btn-sm shrink-0">
                All Tenders <ArrowRightIcon className="w-3.5 h-3.5 ml-1 inline" aria-hidden="true" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activeTenders.map((t) => (
                <TenderCard key={t.id} tender={t} />
              ))}
            </div>
          </div>

          {/* Live Grid Data Widget (1/3) */}
          <div>
            <h2 className="section-title mb-2">Grid Snapshot</h2>
            <p className="section-subtitle mb-6">Real-time indicators (illustrative)</p>
            <div className="card p-6 flex flex-col gap-6">
              {/* Frequency */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <SignalIcon className="w-4 h-4 text-navy-500" aria-hidden="true" />
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Grid Frequency</span>
                </div>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-extrabold text-emerald-600 tabular-nums">49.98</span>
                  <span className="text-base text-slate-400 mb-1">Hz</span>
                </div>
                <div className="mt-2 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full rounded-full bg-emerald-500" style={{ width: '82%' }} />
                </div>
                <p className="text-xs text-slate-400 mt-1">Normal range: 49.90 – 50.05 Hz</p>
              </div>

              {/* Peak Demand */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <BoltIcon className="w-4 h-4 text-navy-500" aria-hidden="true" />
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Peak Demand</span>
                </div>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-extrabold text-navy-700 tabular-nums">14,280</span>
                  <span className="text-base text-slate-400 mb-1">MW</span>
                </div>
                <div className="mt-2 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full rounded-full bg-navy-500" style={{ width: '68%' }} />
                </div>
                <p className="text-xs text-slate-400 mt-1">Installed capacity: ~21,000 MW</p>
              </div>

              {/* Transmission Loss */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <CheckBadgeIcon className="w-4 h-4 text-navy-500" aria-hidden="true" />
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Transmission Loss</span>
                </div>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-extrabold text-gold-500 tabular-nums">2.8</span>
                  <span className="text-base text-slate-400 mb-1">%</span>
                </div>
                <p className="text-xs text-emerald-600 font-semibold mt-1">✓ Lowest in India (National Award 2025)</p>
              </div>

              <div className="text-xs text-slate-300 flex items-center gap-1 mt-auto pt-2 border-t border-slate-100">
                <ClockIcon className="w-3 h-3" aria-hidden="true" />
                <span>Indicative data — Live data via SLDC</span>
                <a href="https://sldc.ap.gov.in" target="_blank" rel="noopener noreferrer" className="ml-auto text-navy-500 hover:underline">SLDC ↗</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Featured Projects ───────────────────────────────────────────── */}
      <section className="py-14 bg-navy-50" aria-labelledby="projects-heading">
        <div className="container-site">
          <div className="flex items-end justify-between mb-8 gap-4">
            <div>
              <h2 id="projects-heading" className="section-title">Featured Projects</h2>
              <p className="section-subtitle">Ongoing and recently commissioned infrastructure</p>
            </div>
            <Link to="/operations/projects" className="btn-secondary btn-sm shrink-0">
              All Projects <ArrowRightIcon className="w-3.5 h-3.5 ml-1 inline" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURED_PROJECTS.map((proj) => {
              const st = STATUS_LABELS[proj.status] ?? STATUS_LABELS.planning;
              return (
                <article
                  key={proj.id}
                  className="card overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-200"
                >
                  {/* Top colour band */}
                  <div className={`h-2 ${proj.status === 'commissioned' ? 'bg-emerald-500' : proj.status === 'in-progress' ? 'bg-amber-400' : 'bg-sky-400'}`} />
                  <div className="p-5 flex flex-col gap-3 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-full ${st.cls}`}>
                        {st.label}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-navy-800 leading-snug">{proj.name}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{proj.description}</p>
                    <dl className="grid grid-cols-2 gap-x-3 gap-y-1 text-xs mt-auto">
                      <div>
                        <dt className="text-slate-400 flex items-center gap-1">
                          <MapPinIcon className="w-3 h-3" aria-hidden="true" /> Location
                        </dt>
                        <dd className="text-slate-700 font-medium">{proj.location}</dd>
                      </div>
                      <div>
                        <dt className="text-slate-400">Capacity / Scope</dt>
                        <dd className="text-slate-700 font-medium">{proj.capacity}</dd>
                      </div>
                    </dl>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 7. Electricity Customers / DISCOM Links ────────────────────────── */}
      <section className="py-12 bg-navy-700 text-white" aria-labelledby="customers-heading">
        <div className="container-site">
          <div className="text-center mb-8">
            <h2 id="customers-heading" className="text-2xl font-bold text-white mb-2">Electricity Distribution</h2>
            <p className="text-navy-200 text-sm">APTRANSCO supplies bulk power to these distribution companies serving AP consumers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {DISCOMS.map((discom) => (
              <a
                key={discom.id}
                href={discom.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-4 p-5 rounded-xl bg-navy-600/60 border border-navy-500/40 hover:bg-navy-600 hover:border-navy-400 transition-all duration-200"
              >
                <div className={`shrink-0 w-14 h-14 rounded-xl ${discom.color} flex items-center justify-center font-bold text-white text-xs text-center leading-tight`}>
                  {discom.name.slice(0, 3)}
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-white text-base mb-0.5 group-hover:text-gold-300 transition-colors">
                    {discom.name}
                  </h3>
                  <p className="text-xs text-navy-300 mb-1">{discom.full}</p>
                  <p className="text-xs text-navy-400 line-clamp-2">{discom.districts}</p>
                </div>
              </a>
            ))}
          </div>

          <p className="text-center text-navy-400 text-xs mt-8">
            For electricity connections, billing, and consumer complaints — contact your respective DISCOM.
          </p>
        </div>
      </section>
    </div>
  );
}
