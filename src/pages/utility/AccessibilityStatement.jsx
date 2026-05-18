/**
 * src/pages/utility/AccessibilityStatement.jsx — Full implementation
 * WCAG 2.1 AA conformance claim + known issues + contact.
 */
import { CheckCircleIcon, ExclamationCircleIcon, ClockIcon } from '@heroicons/react/24/outline';
import PageShell from '@/components/layout/PageShell';

const CONFORMANCES = [
  'All pages have descriptive title tags and meta descriptions.',
  'Heading hierarchy (h1 → h6) is logical and sequential on all pages.',
  'All interactive elements are keyboard navigable with visible focus indicators.',
  'Colour contrast ratios meet WCAG 2.1 AA (minimum 4.5:1 for text).',
  'All images have descriptive alt attributes (or empty alt for decorative images).',
  'ARIA roles, labels, and live regions are used for dynamic content.',
  'Form fields have associated labels and inline validation messages.',
  'Language attribute (lang="en") is set on the HTML element.',
  'Skip navigation link is available at the top of each page.',
  'All table headers are marked with <th> and appropriate scope attributes.',
  'Accordion and tabs use ARIA expanded / selected patterns.',
  'PDF documents are tagged for accessibility where available.',
];

const KNOWN_ISSUES = [
  { issue: 'Interactive AP state map (Operations page) — keyboard navigation limited', status: 'in-progress', target: 'Q3 2026' },
  { issue: 'Older PDF documents in Document Library may not be fully tagged', status: 'planned', target: 'Q4 2026' },
  { issue: 'Video content (if added) will need captions', status: 'planned', target: 'Ongoing' },
];

export default function AccessibilityStatement() {
  return (
    <PageShell
      title="Accessibility Statement"
      description="Our commitment to making this website accessible to everyone"
      breadcrumb={['Accessibility']}
    >
      <div className="max-w-3xl flex flex-col gap-8">

        {/* Commitment */}
        <div className="card border-l-4 border-navy-500 p-5">
          <p className="text-sm text-slate-600 leading-relaxed">
            APTRANSCO is committed to ensuring digital accessibility for people with disabilities.
            We continually improve the user experience for everyone and apply relevant accessibility
            standards. This website aims to conform to the{' '}
            <strong className="text-navy-700">Web Content Accessibility Guidelines (WCAG) 2.1, Level AA</strong>{' '}
            as mandated by the Guidelines for Indian Government Websites (GIGW) and the Rights of
            Persons with Disabilities Act, 2016.
          </p>
        </div>

        {/* Conformance Status */}
        <section aria-labelledby="conformance-heading">
          <h2 id="conformance-heading" className="section-title mb-2">Conformance Status</h2>
          <p className="section-subtitle mb-5">Features implemented for WCAG 2.1 AA compliance</p>
          <ul className="flex flex-col gap-2" role="list">
            {CONFORMANCES.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircleIcon className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Known Issues */}
        <section aria-labelledby="issues-heading">
          <h2 id="issues-heading" className="section-title mb-2">Known Accessibility Issues</h2>
          <p className="section-subtitle mb-5">Items being actively worked on</p>
          <div className="flex flex-col gap-3">
            {KNOWN_ISSUES.map((item, i) => (
              <div key={i} className="card p-4 flex items-start gap-4">
                <ExclamationCircleIcon className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-slate-700">{item.issue}</p>
                  <p className="text-xs text-slate-400 mt-0.5 flex items-center gap-1">
                    <ClockIcon className="w-3 h-3" aria-hidden="true" />
                    Target: {item.target}
                  </p>
                </div>
                <span className={`shrink-0 text-xs font-semibold px-2 py-1 rounded-full ${
                  item.status === 'in-progress' ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-500'
                }`}>
                  {item.status === 'in-progress' ? 'In Progress' : 'Planned'}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Technical info */}
        <section aria-labelledby="tech-heading">
          <h2 id="tech-heading" className="section-title mb-4">Technical Specifications</h2>
          <dl className="card p-5 flex flex-col gap-3 text-sm">
            {[
              { term: 'Standard', def: 'WCAG 2.1, Level AA' },
              { term: 'Technology', def: 'HTML5, CSS3, React 18, ARIA' },
              { term: 'Tested with', def: 'Chrome + NVDA, Firefox + JAWS, macOS VoiceOver, keyboard-only navigation' },
              { term: 'Last Audit', def: 'April 2026 (internal review)' },
              { term: 'Next Audit', def: 'October 2026' },
              { term: 'Statement prepared', def: '01 May 2026' },
            ].map((row) => (
              <div key={row.term} className="flex flex-col sm:flex-row gap-1 pb-3 border-b border-slate-100 last:border-0 last:pb-0">
                <dt className="text-xs text-slate-400 font-semibold uppercase tracking-wide sm:w-36 shrink-0">{row.term}</dt>
                <dd className="text-slate-700">{row.def}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Contact */}
        <section aria-labelledby="a11y-contact-heading" className="card p-5 bg-navy-50 border-navy-200">
          <h2 id="a11y-contact-heading" className="text-base font-bold text-navy-800 mb-2">Feedback & Contact</h2>
          <p className="text-sm text-slate-600 mb-3 leading-relaxed">
            If you experience accessibility barriers on this website, please contact us. We take
            all accessibility issues seriously and aim to respond within 5 working days.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:webmaster@aptransco.gov.in" className="btn-primary btn-sm">Email Webmaster</a>
            <a href="/contact" className="btn-secondary btn-sm">Contact Form</a>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
