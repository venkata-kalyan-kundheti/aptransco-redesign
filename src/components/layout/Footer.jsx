/**
 * src/components/layout/Footer.jsx
 * Full-width footer: Navy-700 bg, link columns, social links, copyright.
 */

import { Link } from 'react-router-dom';
import { BoltIcon } from '@heroicons/react/24/outline';
import {
  ORG_FULL_NAME,
  ORG_SHORT_NAME,
  ORG_TAGLINE,
  CONTACT,
  FOOTER_LINKS,
} from '@/utils/constants';

function FooterColumn({ heading, links }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-3">
        {heading}
      </h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              to={link.href}
              className="text-sm text-slate-300 hover:text-gold-300 transition-colors duration-150
                         focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-400 rounded"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="bg-navy-700 text-slate-100 no-print" aria-label="Site footer">
      {/* Main footer body */}
      <div className="container-site py-10 md:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              to="/"
              className="flex items-center gap-2 mb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded w-fit"
              aria-label={`${ORG_SHORT_NAME} — home`}
            >
              <div className="w-10 h-10 bg-navy-900 rounded-full flex items-center justify-center" aria-hidden="true">
                <BoltIcon className="w-5 h-5 text-gold-400" />
              </div>
              <span className="font-bold text-white text-lg">{ORG_SHORT_NAME}</span>
            </Link>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              {ORG_TAGLINE}
            </p>
            <address className="not-italic text-xs text-slate-400 leading-relaxed">
              {CONTACT.headOffice.address}
            </address>
            <div className="mt-3 text-xs text-slate-400 space-y-1">
              <div>
                <a
                  href={`tel:${CONTACT.headOffice.phone}`}
                  className="hover:text-gold-300 transition-colors duration-150"
                  aria-label={`Phone: ${CONTACT.headOffice.phone}`}
                >
                  {CONTACT.headOffice.phone}
                </a>
              </div>
              <div>
                <a
                  href={`mailto:${CONTACT.headOffice.email}`}
                  className="hover:text-gold-300 transition-colors duration-150"
                >
                  {CONTACT.headOffice.email}
                </a>
              </div>
            </div>
          </div>

          {/* Link columns */}
          <FooterColumn heading="Organisation"   links={FOOTER_LINKS.organisation} />
          <FooterColumn heading="Information"    links={FOOTER_LINKS.information} />
          <FooterColumn heading="Compliance"     links={FOOTER_LINKS.compliance} />
          <FooterColumn heading="Useful Links"   links={FOOTER_LINKS.utility} />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-600">
        <div className="container-site py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
            <p>
              © {year} {ORG_FULL_NAME}. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link to="/privacy-policy" className="hover:text-gold-300 transition-colors duration-150">Privacy Policy</Link>
              <Link to="/disclaimer"     className="hover:text-gold-300 transition-colors duration-150">Disclaimer</Link>
              <Link to="/accessibility"  className="hover:text-gold-300 transition-colors duration-150">Accessibility</Link>
              <Link to="/sitemap"        className="hover:text-gold-300 transition-colors duration-150">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
