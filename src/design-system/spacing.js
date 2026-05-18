/**
 * src/design-system/spacing.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Spacing scale reference — Tailwind's default 4px base scale + project
 * additions defined in tailwind.config.js.
 *
 * Use these in JS contexts only. In JSX, always prefer Tailwind classes.
 */

/** Base unit: 4px */
const BASE = 4;

/** @type {(n: number) => string} px value from a Tailwind spacing key — available for JS consumers */
function _px(n) { return `${n * BASE}px`; }

/**
 * Tailwind spacing scale (0–96, plus project additions).
 * Key   → Tailwind class suffix → px value
 */
export const SPACING = {
  0:    { class: 'p-0 / m-0',    px: '0px' },
  0.5:  { class: 'p-0.5',        px: '2px' },
  1:    { class: 'p-1',          px: '4px' },
  1.5:  { class: 'p-1.5',        px: '6px' },
  2:    { class: 'p-2',          px: '8px' },
  2.5:  { class: 'p-2.5',        px: '10px' },
  3:    { class: 'p-3',          px: '12px' },
  3.5:  { class: 'p-3.5',        px: '14px' },
  4:    { class: 'p-4',          px: '16px' },
  5:    { class: 'p-5',          px: '20px' },
  6:    { class: 'p-6',          px: '24px' },
  7:    { class: 'p-7',          px: '28px' },
  8:    { class: 'p-8',          px: '32px' },
  9:    { class: 'p-9',          px: '36px' },
  10:   { class: 'p-10',         px: '40px' },
  11:   { class: 'p-11',         px: '44px' },
  12:   { class: 'p-12',         px: '48px' },
  14:   { class: 'p-14',         px: '56px' },
  16:   { class: 'p-16',         px: '64px' },
  20:   { class: 'p-20',         px: '80px' },
  24:   { class: 'p-24',         px: '96px' },

  // ── Project additions (tailwind.config.js) ─────────────────────────────────
  '4.5': { class: 'p-4.5',      px: '18px', note: 'project addition' },
  13:    { class: 'p-13',       px: '52px', note: 'project addition' },
  15:    { class: 'p-15',       px: '60px', note: 'project addition' },
  18:    { class: 'p-18',       px: '72px', note: 'project addition' },
  22:    { class: 'p-22',       px: '88px', note: 'project addition' },
  88:    { class: 'p-88',       px: '352px',note: 'project addition — sidebar width' },
  96:    { class: 'p-96',       px: '384px',note: 'project addition' },
  128:   { class: 'p-128',      px: '512px',note: 'project addition' },
};

/** Component-specific spacing conventions */
export const COMPONENT_SPACING = {
  containerPadding:    { mobile: 'px-4', tablet: 'sm:px-6', desktop: 'lg:px-8' },
  sectionPadding:      { mobile: 'py-8', desktop: 'md:py-12' },
  cardPadding:         'p-5',
  cardPaddingLarge:    'p-6 md:p-8',
  navItemPadding:      'px-3 py-2',
  buttonPaddingSm:     'px-3 py-1.5',
  buttonPaddingMd:     'px-4 py-2',
  buttonPaddingLg:     'px-6 py-3',
  gridGapSm:           'gap-4',
  gridGapMd:           'gap-6',
  gridGapLg:           'gap-8',
  touchTarget:         'min-h-[44px]',  // WCAG 2.5.5 minimum touch target
  focusRingOffset:     'ring-offset-2',
};

/** Max widths */
export const MAX_WIDTHS = {
  site:   '1280px',  // max-w-site (tailwind.config.js addition)
  prose:  '672px',   // max-w-2xl — body text / policy pages
  narrow: '448px',   // max-w-md  — forms, modal inner content
};

export default SPACING;
