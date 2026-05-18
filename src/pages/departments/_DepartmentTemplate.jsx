/**
 * src/pages/departments/_DepartmentTemplate.jsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Shared template for all 6 department pages.
 * Accepts a department slug and renders:
 *   PageBanner → KeyFunctions → HOD Contact → ContactInfo → UsefulLinks
 */
import { Link } from 'react-router-dom';
import {
  EnvelopeIcon, PhoneIcon, ArrowTopRightOnSquareIcon,
  CheckCircleIcon, ArrowLeftIcon,
  ComputerDesktopIcon, BoltIcon, WrenchScrewdriverIcon,
  BanknotesIcon, UserGroupIcon, AcademicCapIcon,
} from '@heroicons/react/24/outline';
import PageShell from '@/components/layout/PageShell';
import { getDepartmentBySlug } from '@/data/departments';

const ICON_MAP = {
  ComputerDesktopIcon, BoltIcon, WrenchScrewdriverIcon,
  BanknotesIcon, UserGroupIcon, AcademicCapIcon,
};

export default function DepartmentTemplate({ slug }) {
  const dept = getDepartmentBySlug(slug);

  if (!dept) {
    return (
      <PageShell title="Department Not Found"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Departments' }]}>
        <p className="text-slate-500">Department page not found.</p>
      </PageShell>
    );
  }

  const IconComp = ICON_MAP[dept.icon] ?? BoltIcon;

  return (
    <PageShell
      title={dept.name}
      subtitle={dept.tagline}
      breadcrumbs={[
        { label: 'Home',        href: '/' },
        { label: 'About',       href: '/about' },
        { label: dept.name },
      ]}
    >
      {/* Back link */}
      <Link to="/about" className="inline-flex items-center gap-2 text-sm text-navy-600 hover:text-navy-800 mb-8 font-medium">
        <ArrowLeftIcon className="w-4 h-4" aria-hidden="true" />
        Back to About
      </Link>

      {/* Hero strip */}
      <div
        className="rounded-xl p-6 text-white mb-10 flex items-center gap-5"
        style={{ background: `linear-gradient(135deg, ${dept.color} 0%, ${dept.color}cc 100%)` }}
      >
        <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
          <IconComp className="w-8 h-8 text-white" aria-hidden="true" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-white">{dept.name} Department</h1>
          <p className="text-white/80 text-sm mt-1">{dept.description}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main: Key Functions */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          {/* Key Functions */}
          <section aria-labelledby={`kf-heading-${slug}`}>
            <h2 id={`kf-heading-${slug}`} className="section-title mb-4">Key Functions</h2>
            <ul className="flex flex-col gap-3" role="list">
              {dept.keyFunctions.map((fn, i) => (
                <li key={i} className="flex items-start gap-3 card p-4">
                  <CheckCircleIcon className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-sm text-slate-700 leading-relaxed">{fn}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="flex flex-col gap-6">
          {/* HOD Card */}
          <div className="card p-5">
            <h2 className="text-sm font-bold text-navy-700 uppercase tracking-wide mb-4">Head of Department</h2>
            <div className="flex items-start gap-4">
              <div
                className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                style={{ backgroundColor: dept.color }}
                aria-hidden="true"
              >
                {dept.hod.name.split(' ').filter(w => /^[A-Z]/.test(w)).slice(1, 3).map(w => w[0]).join('')}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold text-navy-800 leading-snug">{dept.hod.name}</p>
                <p className="text-xs text-slate-500 mt-0.5">{dept.hod.designation}</p>
                {dept.hod.email && (
                  <a href={`mailto:${dept.hod.email}`}
                    className="mt-2 inline-flex items-center gap-1.5 text-xs text-navy-600 hover:underline">
                    <EnvelopeIcon className="w-3.5 h-3.5" aria-hidden="true" />
                    {dept.hod.email}
                  </a>
                )}
                {dept.hod.phone && (
                  <a href={`tel:${dept.hod.phone}`}
                    className="mt-1 inline-flex items-center gap-1.5 text-xs text-navy-600 hover:underline">
                    <PhoneIcon className="w-3.5 h-3.5" aria-hidden="true" />
                    {dept.hod.phone}
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Contacts */}
          {dept.contacts?.length > 0 && (
            <div className="card p-5">
              <h2 className="text-sm font-bold text-navy-700 uppercase tracking-wide mb-4">Key Contacts</h2>
              <ul className="flex flex-col gap-4">
                {dept.contacts.map((c, i) => (
                  <li key={i} className="text-sm border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                    <p className="text-xs text-slate-400 font-semibold uppercase">{c.role}</p>
                    <p className="font-semibold text-navy-800 mt-0.5">{c.name}</p>
                    <div className="flex flex-wrap gap-3 mt-1">
                      {c.phone && (
                        <a href={`tel:${c.phone}`} className="inline-flex items-center gap-1 text-xs text-navy-600 hover:underline">
                          <PhoneIcon className="w-3 h-3" aria-hidden="true" /> {c.phone}
                        </a>
                      )}
                      {c.email && (
                        <a href={`mailto:${c.email}`} className="inline-flex items-center gap-1 text-xs text-navy-600 hover:underline">
                          <EnvelopeIcon className="w-3 h-3" aria-hidden="true" /> Email
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Useful Links */}
          {dept.usefulLinks?.length > 0 && (
            <div className="card p-5">
              <h2 className="text-sm font-bold text-navy-700 uppercase tracking-wide mb-4">Useful Links</h2>
              <ul className="flex flex-col gap-2">
                {dept.usefulLinks.map((link, i) => (
                  <li key={i}>
                    {link.href.startsWith('http') ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-navy-600 hover:text-navy-800 hover:underline transition-colors">
                        <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        {link.label}
                      </a>
                    ) : (
                      <Link to={link.href}
                        className="inline-flex items-center gap-1.5 text-sm text-navy-600 hover:text-navy-800 hover:underline transition-colors">
                        <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>
    </PageShell>
  );
}
