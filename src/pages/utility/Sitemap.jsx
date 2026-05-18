/**
 * src/pages/utility/Sitemap.jsx — Full implementation
 * Auto-generated hierarchical sitemap from navConfig + additional utility pages.
 */
import { Link } from 'react-router-dom';
import {
  HomeIcon, ChevronRightIcon, DocumentTextIcon, BellAlertIcon,
  BriefcaseIcon, BuildingOffice2Icon, ScaleIcon, FolderOpenIcon,
  MapIcon, PhoneIcon, InformationCircleIcon,
} from '@heroicons/react/24/outline';
import PageShell from '@/components/layout/PageShell';
import { NAV_ITEMS } from '@/data/navConfig';

const ICON_MAP = {
  about: BuildingOffice2Icon, operations: MapIcon,
  tenders: DocumentTextIcon, notifications: BellAlertIcon,
  reports: FolderOpenIcon, departments: BuildingOffice2Icon,
  compliance: ScaleIcon, careers: BriefcaseIcon, contact: PhoneIcon,
};

const EXTRA_PAGES = [
  {
    heading: 'Utility Pages',
    items: [
      { label: 'Search Results', href: '/search' },
      { label: 'Frequently Asked Questions', href: '/faq' },
      { label: 'Important Links', href: '/links' },
    ],
  },
  {
    heading: 'Legal & Accessibility',
    items: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Disclaimer', href: '/disclaimer' },
      { label: 'Accessibility Statement', href: '/accessibility' },
    ],
  },
];

function SitemapSection({ item }) {
  const Icon = ICON_MAP[item.id] ?? DocumentTextIcon;
  return (
    <div className="card p-5">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
        <div className="w-8 h-8 bg-navy-50 rounded flex items-center justify-center shrink-0" aria-hidden="true">
          <Icon className="w-4 h-4 text-navy-600" />
        </div>
        <Link to={item.href} className="text-sm font-bold text-navy-700 hover:text-navy-500 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded">
          {item.label}
        </Link>
      </div>
      {item.children && (
        <ul className="space-y-2 pl-2" role="list">
          {item.children.map((child) => (
            <li key={child.id} className="flex items-start gap-2">
              <ChevronRightIcon className="w-3.5 h-3.5 text-slate-300 shrink-0 mt-0.5" aria-hidden="true" />
              <Link to={child.href} className="text-sm text-slate-600 hover:text-navy-600 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-400 rounded">
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Sitemap() {
  return (
    <PageShell
      title="Sitemap"
      description="Complete map of the APTRANSCO website — find any page in one glance."
      breadcrumb={['Sitemap']}
    >
      {/* Homepage */}
      <div className="flex items-center gap-3 mb-8 p-4 bg-navy-700 rounded-lg">
        <HomeIcon className="w-5 h-5 text-gold-400 shrink-0" aria-hidden="true" />
        <Link to="/" className="text-sm font-bold text-white hover:text-gold-300 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded">
          Home — APTRANSCO Official Website
        </Link>
      </div>

      {/* Main nav */}
      <section aria-labelledby="sitemap-main-heading" className="mb-10">
        <h2 id="sitemap-main-heading" className="section-title mb-6">Main Sections</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {NAV_ITEMS.map((item) => (
            <SitemapSection key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Extra pages */}
      <section aria-labelledby="sitemap-extra-heading">
        <h2 id="sitemap-extra-heading" className="section-title mb-6">Additional Pages</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {EXTRA_PAGES.map((section) => (
            <div key={section.heading} className="card p-5">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
                <div className="w-8 h-8 bg-slate-100 rounded flex items-center justify-center shrink-0" aria-hidden="true">
                  <InformationCircleIcon className="w-4 h-4 text-slate-500" />
                </div>
                <span className="text-sm font-bold text-navy-700">{section.heading}</span>
              </div>
              <ul className="space-y-2 pl-2" role="list">
                {section.items.map((link) => (
                  <li key={link.href} className="flex items-start gap-2">
                    <ChevronRightIcon className="w-3.5 h-3.5 text-slate-300 shrink-0 mt-0.5" aria-hidden="true" />
                    <Link to={link.href} className="text-sm text-slate-600 hover:text-navy-600 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-400 rounded">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <p className="mt-8 text-xs text-slate-400 text-center">
        This website covers 35+ pages across all major public information categories.
      </p>
    </PageShell>
  );
}
