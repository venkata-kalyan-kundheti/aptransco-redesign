/**
 * src/pages/utility/ImportantLinks.jsx — Full implementation
 * Uses QUICK_LINK_CATEGORIES and QUICK_LINKS from quickLinks.js
 */
import { useState } from 'react';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import PageShell from '@/components/layout/PageShell';
import { QUICK_LINK_CATEGORIES, getQuickLinksByCategory } from '@/data/quickLinks';

const CATEGORY_COLORS = {
  all:        '#1A4A8A',
  employee:   '#1A7A3F',
  technical:  '#0C2D5E',
  regulatory: '#B97010',
  public:     '#9B1D1D',
};

export default function ImportantLinks() {
  const [active, setActive] = useState('all');

  const displayed = getQuickLinksByCategory(active);

  return (
    <PageShell
      title="Important Links"
      description="Quick access to government portals, regulatory bodies, employee resources, and public services."
      breadcrumb={['Important Links']}
    >
      {/* Category filter tabs */}
      <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Link categories">
        {QUICK_LINK_CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            role="tab"
            aria-selected={active === cat.value}
            onClick={() => setActive(cat.value)}
            className={`px-3 py-1.5 text-xs font-semibold rounded-full border transition-colors duration-150
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-400 ${
              active === cat.value
                ? 'bg-navy-700 text-white border-navy-700'
                : 'bg-white text-slate-500 border-slate-200 hover:border-navy-300 hover:text-navy-700'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Links grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayed.map((link) => (
          <a
            key={link.id}
            href={link.href}
            target={link.external ? '_blank' : '_self'}
            rel="noopener noreferrer"
            className="card p-4 flex items-start gap-3 hover:shadow-card-md transition-shadow duration-200 group"
            aria-label={`${link.label}${link.external ? ' — opens in new tab' : ''}`}
          >
            {/* Color dot */}
            <div
              className="shrink-0 w-2.5 h-2.5 rounded-full mt-1.5"
              style={{ backgroundColor: CATEGORY_COLORS[link.category] ?? '#1A4A8A' }}
              aria-hidden="true"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-semibold text-navy-800 group-hover:text-navy-900 leading-snug">
                  {link.label}
                </span>
                {link.external && (
                  <ArrowTopRightOnSquareIcon
                    className="w-3.5 h-3.5 text-slate-300 group-hover:text-navy-500 shrink-0 transition-colors"
                    aria-hidden="true"
                  />
                )}
              </div>
              {link.description && (
                <p className="text-xs text-slate-400 mt-0.5 leading-snug">{link.description}</p>
              )}
              <p className="text-xs text-navy-400 mt-1 truncate font-mono">{link.href}</p>
            </div>
          </a>
        ))}
      </div>

      {displayed.length === 0 && (
        <p className="text-center text-slate-400 py-12">No links in this category.</p>
      )}

      <p className="mt-8 text-xs text-slate-400 text-center">
        External links open official government and regulatory portals. APTRANSCO is not responsible for third-party site content.
      </p>
    </PageShell>
  );
}
