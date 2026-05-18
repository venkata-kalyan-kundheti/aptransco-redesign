/**
 * src/design-system/colors.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Color token reference — mirrors tailwind.config.js exactly.
 * Use these in JS contexts (e.g., chart configs, SVG fills, canvas).
 * In JSX/CSS, prefer the Tailwind utility classes documented below.
 */

export const COLORS = {
  // ── Navy ───────────────────────────────────────────────────────────────────
  navy: {
    50:  '#EEF2F9',  // bg-navy-50   — dropdown hover bg, light tints
    100: '#D5DFF0',  // bg-navy-100
    200: '#ABBFE1',  // bg-navy-200
    300: '#7A96CC',  // bg-navy-300
    400: '#4A6DB5',  // bg-navy-400
    500: '#1A4A8A',  // bg-navy-500  ← Primary nav, headers, section headings
    600: '#163D74',  // bg-navy-600
    700: '#0C2D5E',  // bg-navy-700  ← Darkest: top bar, footer, page banners
    800: '#091F42',  // bg-navy-800
    900: '#050F21',  // bg-navy-900
  },

  // ── Gold ───────────────────────────────────────────────────────────────────
  gold: {
    50:  '#FFF8EC',  // bg-gold-50   — tender badge bg
    100: '#FDEDC8',  // bg-gold-100
    200: '#FBDB94',  // bg-gold-200
    300: '#F9C85F',  // bg-gold-300
    400: '#F5A623',  // bg-gold-400  ← Primary CTA, active nav, focus rings
    500: '#E0901A',  // bg-gold-500
    600: '#B97010',  // bg-gold-600  — warning semantic
    700: '#8A500A',  // bg-gold-700  — tender badge text
    800: '#5C3405',  // bg-gold-800
    900: '#2E1A02',  // bg-gold-900
  },

  // ── Slate ──────────────────────────────────────────────────────────────────
  slate: {
    50:  '#F4F6FA',  // bg-slate-50  ← Page background
    100: '#E8ECF4',  // bg-slate-100 ← Card backgrounds, table stripes
    200: '#D0D7E8',  // bg-slate-200 ← Borders, dividers
    300: '#A8B4CC',  // bg-slate-300 ← Muted text, placeholders
    400: '#7A8BAA',  // bg-slate-400 ← Meta text, timestamps
    500: '#546480',  // bg-slate-500
    600: '#3D4D66',  // bg-slate-600
    700: '#2A3650',  // bg-slate-700 ← Body text
    800: '#1A2338',  // bg-slate-800
    900: '#0D1220',  // bg-slate-900
  },

  // ── Semantic ───────────────────────────────────────────────────────────────
  success: {
    DEFAULT: '#1A7A3F',
    light:   '#EAF5EE',
  },
  warning: {
    DEFAULT: '#B97010',  // same as gold-600
    light:   '#FFF8EC',  // same as gold-50
  },
  danger: {
    DEFAULT: '#9B1D1D',
    light:   '#FDF0F0',
  },
  info: {
    DEFAULT: '#1A4A8A',  // same as navy-500
    light:   '#EEF2F9',  // same as navy-50
  },
};

// ── Color Usage Reference ──────────────────────────────────────────────────────
export const COLOR_USAGE = [
  { element: 'Top utility bar',        token: 'navy.700', className: 'bg-navy-700' },
  { element: 'Main navigation',        token: 'navy.500', className: 'bg-navy-500 text-white' },
  { element: 'Active nav item',        token: 'gold.400', className: 'bg-gold-400 text-navy-700' },
  { element: 'Primary CTA button',     token: 'gold.400', className: 'bg-gold-400 text-navy-700' },
  { element: 'Secondary button',       token: 'navy.500', className: 'border border-navy-500 text-navy-500' },
  { element: 'Page background',        token: 'slate.50', className: 'bg-slate-50' },
  { element: 'Card background',        token: 'white',    className: 'bg-white' },
  { element: 'Card border',            token: 'slate.200',className: 'border-slate-200' },
  { element: 'Section heading',        token: 'navy.700', className: 'text-navy-700' },
  { element: 'Body text',              token: 'slate.700',className: 'text-slate-700' },
  { element: 'Muted / meta text',      token: 'slate.400',className: 'text-slate-400' },
  { element: 'Footer background',      token: 'navy.700', className: 'bg-navy-700 text-slate-100' },
  { element: 'Badge — Tender',         token: 'gold.50 / gold.700', className: 'bg-gold-50 text-gold-700' },
  { element: 'Badge — Circular',       token: 'navy.50 / navy.600', className: 'bg-navy-50 text-navy-600' },
  { element: 'Badge — New',            token: 'success',  className: 'bg-success-light text-success' },
  { element: 'Focus ring',             token: 'gold.400', className: 'ring-2 ring-gold-400 ring-offset-2' },
];

export default COLORS;
