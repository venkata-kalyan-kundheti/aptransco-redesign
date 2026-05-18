/**
 * src/design-system/StyleGuidePreview.jsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Visual style guide page — dev only route: /style-guide
 * Renders every design token, component variant, and type scale in one place.
 */
import { useState } from 'react';
import { BoltIcon } from '@heroicons/react/24/outline';
import Accordion from '@/components/ui/Accordion';
import Spinner from '@/components/ui/Spinner';
import Badge from '@/components/common/Badge';
import { COLORS, COLOR_USAGE } from './colors';
import { COMPONENT_SPACING } from './spacing';

// ── Section wrapper ────────────────────────────────────────────────────────────
function Section({ title, id, children }) {
  return (
    <section id={id} aria-labelledby={`sg-${id}`} className="py-10 border-b border-slate-200 last:border-0">
      <h2 id={`sg-${id}`} className="text-2xl font-semibold text-navy-700 mb-6">{title}</h2>
      {children}
    </section>
  );
}

// Use inline style for color swatches — Tailwind can't purge dynamic class names
function Swatch({ label, hex }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="w-16 h-16 rounded-lg border border-slate-200 shadow-sm"
        style={{ backgroundColor: hex }}
        title={hex}
        aria-label={`${label}: ${hex}`}
      />
      <span className="text-xs text-slate-600 text-center font-mono leading-tight">
        {label}<br /><span className="text-slate-400">{hex}</span>
      </span>
    </div>
  );
}

export default function StyleGuidePreview() {
  const [_demoModalOpen, _setDemoModalOpen] = useState(false);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Guide header */}
      <div className="bg-navy-700 text-white py-10">
        <div className="container-site">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-navy-900 rounded-full flex items-center justify-center">
              <BoltIcon className="w-5 h-5 text-gold-400" aria-hidden="true" />
            </div>
            <span className="text-gold-400 text-sm font-medium uppercase tracking-wide">Design System</span>
          </div>
          <h1 className="text-white text-3xl font-bold">APTRANSCO Style Guide</h1>
          <p className="text-navy-200 mt-2 text-sm">
            Visual reference for all design tokens, components, and patterns used across the site.
          </p>
          <p className="text-navy-400 text-xs mt-3">Dev-only page · Route: /style-guide · Not linked from main navigation</p>
        </div>
      </div>

      <div className="container-site py-8">
        {/* Quick nav */}
        <nav aria-label="Style guide sections" className="mb-10 card p-4 flex flex-wrap gap-x-4 gap-y-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wide mr-2 self-center">Jump to:</span>
          {['colors','typography','buttons','badges','cards','accordion','spinner','forms','spacing','usage-table'].map((s) => (
            <a
              key={s}
              href={`#${s}`}
              className="text-xs text-navy-600 hover:text-navy-800 underline underline-offset-2 capitalize font-medium"
            >
              {s.replace('-', ' ')}
            </a>
          ))}
        </nav>

        {/* ── Colors ─────────────────────────────────────────────────────────── */}
        <Section title="Color Palette" id="colors">
          {['navy', 'gold', 'slate'].map((palette) => (
            <div key={palette} className="mb-8">
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-4 capitalize">{palette}</h3>
              <div className="flex flex-wrap gap-4">
                {Object.entries(COLORS[palette]).map(([shade, hex]) => (
                  <Swatch key={shade} label={`${palette}-${shade}`} hex={hex} />
                ))}
              </div>
            </div>
          ))}

          <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-4">Semantic Colors</h3>
          <div className="flex flex-wrap gap-4 mb-6">
            <Swatch label="success" hex={COLORS.success.DEFAULT} />
            <Swatch label="success-light" hex={COLORS.success.light} />
            <Swatch label="warning" hex={COLORS.warning.DEFAULT} />
            <Swatch label="warning-light" hex={COLORS.warning.light} />
            <Swatch label="danger" hex={COLORS.danger.DEFAULT} />
            <Swatch label="danger-light" hex={COLORS.danger.light} />
            <Swatch label="info" hex={COLORS.info.DEFAULT} />
            <Swatch label="info-light" hex={COLORS.info.light} />
          </div>
        </Section>

        {/* ── Usage Table ─────────────────────────────────────────────────────── */}
        <Section title="Color Usage Reference" id="usage-table">
          <div className="table-responsive">
            <table className="table-base">
              <thead>
                <tr>
                  <th className="table-th">Element</th>
                  <th className="table-th">Token</th>
                  <th className="table-th">Tailwind Class</th>
                </tr>
              </thead>
              <tbody>
                {COLOR_USAGE.map((row) => (
                  <tr key={row.element} className="table-tr">
                    <td className="table-td text-slate-700">{row.element}</td>
                    <td className="table-td font-mono text-xs text-navy-600">{row.token}</td>
                    <td className="table-td font-mono text-xs text-slate-500">{row.className}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* ── Typography ─────────────────────────────────────────────────────── */}
        <Section title="Typography Scale" id="typography">
          <div className="flex flex-col gap-5 bg-white rounded-lg border border-slate-200 p-6">
            {[
              { label: 'H1 — text-3xl font-bold', el: 'h1', content: 'Page Title Heading' },
              { label: 'H2 — text-2xl font-semibold', el: 'h2', content: 'Section Heading' },
              { label: 'H3 — text-xl font-semibold', el: 'h3', content: 'Sub-Section Heading' },
              { label: 'H4 — text-base font-semibold', el: 'h4', content: 'Card Title' },
            ].map(({ label, el: El, content }) => (
              <div key={label} className="pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                <span className="text-xs text-slate-400 block mb-1">{label}</span>
                <El className="text-navy-700">{content}</El>
              </div>
            ))}
            <div className="pb-4 border-b border-slate-100">
              <span className="text-xs text-slate-400 block mb-1">Body — text-base / text-slate-700</span>
              <p className="text-slate-700">Body text uses Inter at 16px, weight 400. Line height 1.625 (leading-relaxed). Used for paragraph content across the site. Minimum contrast ratio 7:1 on white background (AAA).</p>
            </div>
            <div className="pb-4 border-b border-slate-100">
              <span className="text-xs text-slate-400 block mb-1">Small / Meta — text-sm / text-slate-500</span>
              <p className="text-sm text-slate-500">Small text for metadata, dates, file sizes, ref numbers, and secondary labels.</p>
            </div>
            <div>
              <span className="text-xs text-slate-400 block mb-1">Section label — text-xs font-bold uppercase tracking-wide</span>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">Section Category Label · NAV GROUP</p>
            </div>
          </div>
        </Section>

        {/* ── Buttons ────────────────────────────────────────────────────────── */}
        <Section title="Buttons" id="buttons">
          <div className="flex flex-wrap items-center gap-4 p-6 bg-white rounded-lg border border-slate-200 mb-4">
            <div className="flex flex-col items-start gap-2">
              <span className="text-xs text-slate-400">.btn-primary</span>
              <button className="btn-primary">Primary Button</button>
            </div>
            <div className="flex flex-col items-start gap-2">
              <span className="text-xs text-slate-400">.btn-secondary</span>
              <button className="btn-secondary">Secondary Button</button>
            </div>
            <div className="flex flex-col items-start gap-2">
              <span className="text-xs text-slate-400">.btn-ghost</span>
              <button className="btn-ghost">Ghost Button</button>
            </div>
            <div className="flex flex-col items-start gap-2">
              <span className="text-xs text-slate-400">.btn-sm</span>
              <button className="btn-primary btn-sm">Small Button</button>
            </div>
            <div className="flex flex-col items-start gap-2">
              <span className="text-xs text-slate-400">.btn-lg</span>
              <button className="btn-primary btn-lg">Large Button</button>
            </div>
            <div className="flex flex-col items-start gap-2">
              <span className="text-xs text-slate-400">disabled</span>
              <button className="btn-primary" disabled>Disabled</button>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 p-6 bg-navy-700 rounded-lg">
            <span className="text-xs text-navy-300 w-full">On dark background:</span>
            <button className="btn-primary">Primary on Dark</button>
            <button className="btn border border-white text-white hover:bg-navy-600 btn-sm">Outline on Dark</button>
          </div>
        </Section>

        {/* ── Badges ─────────────────────────────────────────────────────────── */}
        <Section title="Badges" id="badges">
          <div className="flex flex-wrap gap-3 p-6 bg-white rounded-lg border border-slate-200">
            {['tender','circular','new','urgent','info','open','closed','upcoming'].map((v) => (
              <div key={v} className="flex flex-col items-center gap-1.5">
                <Badge variant={v}>{v.charAt(0).toUpperCase() + v.slice(1)}</Badge>
                <span className="text-xs text-slate-400 font-mono">.badge-{v}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Cards ──────────────────────────────────────────────────────────── */}
        <Section title="Cards" id="cards">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <span className="text-xs text-slate-400 block mb-2">.card</span>
              <div className="card p-5">
                <h4>Standard Card</h4>
                <p className="text-sm text-slate-500 mt-1">White bg, border-slate-200, shadow-card, rounded-lg.</p>
              </div>
            </div>
            <div>
              <span className="text-xs text-slate-400 block mb-2">.card-hover</span>
              <div className="card-hover p-5 cursor-pointer">
                <h4>Hover Card</h4>
                <p className="text-sm text-slate-500 mt-1">Adds shadow-card-md on hover for interactive feel.</p>
              </div>
            </div>
            <div>
              <span className="text-xs text-slate-400 block mb-2">.card + border-l-4 accent</span>
              <div className="card p-5 border-l-4 border-navy-500">
                <h4>Accent Card</h4>
                <p className="text-sm text-slate-500 mt-1">Used for important callouts and policy info.</p>
              </div>
            </div>
          </div>
        </Section>

        {/* ── Accordion ──────────────────────────────────────────────────────── */}
        <Section title="Accordion" id="accordion">
          <p className="text-sm text-slate-500 mb-4">Used on FAQ page and department pages. Follows ARIA disclosure pattern.</p>
          <Accordion
            items={[
              { id: 'sg-a1', question: 'What is the Accordion component used for?', answer: 'Used on the FAQ page for categorised Q&A and department pages for key functions. Follows WAI-ARIA disclosure pattern with aria-expanded and aria-controls attributes.' },
              { id: 'sg-a2', question: 'Does it support multiple open panels simultaneously?', answer: 'By default only one panel is open at a time (accordion behaviour). Pass allowMultiple={true} to allow several panels open at once.' },
              { id: 'sg-a3', question: 'Is keyboard navigation supported?', answer: 'Yes. Each button receives focus via Tab key. Space/Enter toggles the panel. Focus indicator uses the gold ring consistent with the global focus style.' },
            ]}
          />
        </Section>

        {/* ── Spinner ────────────────────────────────────────────────────────── */}
        <Section title="Spinner / Loading States" id="spinner">
          <div className="flex items-center gap-10 p-6 bg-white rounded-lg border border-slate-200 flex-wrap">
            <div className="flex flex-col items-center gap-2">
              <Spinner />
              <span className="text-xs text-slate-400">Default (navy)</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-8 h-8 rounded-full border-4 border-slate-200 border-t-gold-400 animate-spin" role="status" aria-label="Loading" />
              <span className="text-xs text-slate-400">Gold variant</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-4 h-4 rounded-full border-2 border-slate-200 border-t-navy-500 animate-spin" role="status" aria-label="Loading" />
              <span className="text-xs text-slate-400">Inline small</span>
            </div>
          </div>
        </Section>

        {/* ── Form Inputs ─────────────────────────────────────────────────────── */}
        <Section title="Form Elements" id="forms">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white rounded-lg border border-slate-200">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="sg-input-default" className="text-xs font-semibold text-slate-600">
                Text Input (.input)
              </label>
              <input id="sg-input-default" type="text" className="input" placeholder="Enter value…" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="sg-input-search" className="text-xs font-semibold text-slate-600">
                Search Input
              </label>
              <input id="sg-input-search" type="search" className="input" placeholder="Search…" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="sg-input-disabled" className="text-xs font-semibold text-slate-600">
                Disabled State
              </label>
              <input id="sg-input-disabled" type="text" className="input" placeholder="Disabled" disabled />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="sg-select" className="text-xs font-semibold text-slate-600">
                Select
              </label>
              <select id="sg-select" className="input">
                <option>Option A</option>
                <option>Option B</option>
                <option>Option C</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5 md:col-span-2">
              <label htmlFor="sg-textarea" className="text-xs font-semibold text-slate-600">
                Textarea
              </label>
              <textarea id="sg-textarea" className="input resize-none" rows={3} placeholder="Enter message…" />
            </div>
          </div>
        </Section>

        {/* ── Spacing ────────────────────────────────────────────────────────── */}
        <Section title="Spacing Conventions" id="spacing">
          <p className="text-sm text-slate-500 mb-4">Component-level spacing standards. Always use these over ad-hoc values.</p>
          <div className="table-responsive">
            <table className="table-base">
              <thead>
                <tr>
                  <th className="table-th">Context</th>
                  <th className="table-th">Value / Class</th>
                  <th className="table-th">Note</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(COMPONENT_SPACING).map(([key, val]) => (
                  <tr key={key} className="table-tr">
                    <td className="table-td font-mono text-xs text-navy-600">{key}</td>
                    <td className="table-td font-mono text-xs text-slate-500">
                      {typeof val === 'string' ? val : Object.values(val).join(' / ')}
                    </td>
                    <td className="table-td text-xs text-slate-400">
                      {key === 'touchTarget' ? 'WCAG 2.5.5 minimum 44×44px' : ''}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* Footer note */}
        <div className="py-8 text-center text-xs text-slate-400">
          <p>APTRANSCO Design System · Version 1.0 · May 2026</p>
          <p className="mt-1">This page is excluded from the production build sitemap and search index.</p>
        </div>
      </div>
    </div>
  );
}
