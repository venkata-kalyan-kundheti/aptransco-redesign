/** @type {import('tailwindcss').Config} */
export default {
  // ── JIT content scan ──────────────────────────────────────────────────────
  // Precise paths: Tailwind JIT scans ONLY these files for class names.
  // The tighter the glob, the faster the build and the smaller the CSS output.
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
    // Explicitly exclude heavy files that don't contain Tailwind classes:
    // '!./src/**/*.test.{js,jsx}',  ← uncomment when tests exist
  ],

  // Safelist: classes that are assembled dynamically at runtime so the JIT
  // purger cannot detect them statically.
  safelist: [
    // Badge variants (composed as `badge-${variant}` in Badge.jsx)
    'badge-tender', 'badge-circular', 'badge-new', 'badge-urgent',
    'badge-info', 'badge-open', 'badge-closed', 'badge-upcoming',
    // Nav active states (set dynamically by NavLink)
    'nav-item-active',
    // Dropdown panel (shown/hidden by JS, not class purging)
    'dropdown-panel', 'dropdown-item',
    // z-index utilities used in inline styles (Modal, Overlay)
    { pattern: /^z-(dropdown|sticky|header|overlay|modal|toast)$/ },
  ],

  theme: {
    extend: {
      // ── Color System ───────────────────────────────────────────────────────
      // Values match CSS custom properties in index.css exactly.
      // When Tailwind generates `text-navy-700`, the value comes from here.
      colors: {
        navy: {
          50:  '#EEF2F9',
          100: '#D5DFF0',
          200: '#ABBFE1',
          300: '#7A96CC',
          400: '#4A6DB5',
          500: '#1A4A8A',   // primary nav, headers
          600: '#163D74',
          700: '#0C2D5E',   // darkest — top bar, footer
          800: '#091F42',
          900: '#050F21',
        },
        gold: {
          50:  '#FFF8EC',
          100: '#FDEDC8',
          200: '#FBDB94',
          300: '#F9C85F',
          400: '#F5A623',   // primary CTA buttons, active states
          500: '#E0901A',
          600: '#B97010',
          700: '#8A500A',
          800: '#5C3405',
          900: '#2E1A02',
        },
        slate: {
          50:  '#F4F6FA',   // page background
          100: '#E8ECF4',   // card backgrounds
          200: '#D0D7E8',   // borders
          300: '#A8B4CC',   // muted text, dividers
          400: '#7A8BAA',
          500: '#546480',
          600: '#3D4D66',
          700: '#2A3650',   // body text
          800: '#1A2338',
          900: '#0D1220',
        },
        // Semantic — map to CSS variable values so both Tailwind classes
        // and CSS var() references resolve to the same colour.
        success: {
          DEFAULT: '#1A7A3F',
          light:   '#EAF5EE',
        },
        warning: {
          DEFAULT: '#B97010',
          light:   '#FFF8EC',
        },
        danger: {
          DEFAULT: '#9B1D1D',
          light:   '#FDF0F0',
        },
        info: {
          DEFAULT: '#1A4A8A',
          light:   '#EEF2F9',
        },
      },

      // ── Typography ─────────────────────────────────────────────────────────
      fontFamily: {
        // System-font stack as fallback — renders immediately before Inter loads
        sans:  ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        serif: ['Georgia', 'serif'],
        mono:  ['JetBrains Mono', 'Consolas', 'monospace'],
      },

      // ── Font Size extras ───────────────────────────────────────────────────
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.875rem' }],  // 10px — fine print
      },

      // ── Spacing extras ─────────────────────────────────────────────────────
      // Only the values actually used in the codebase. Remove '88', '96', '128'
      // if they're never referenced — they bloat the spacing scale.
      spacing: {
        '4.5': '1.125rem',  // 18px — used for tight padding
        '13':  '3.25rem',
        '15':  '3.75rem',
        '18':  '4.5rem',
        '22':  '5.5rem',
        '88':  '22rem',     // sidebar width
        '128': '32rem',
      },

      // ── Border Radius ──────────────────────────────────────────────────────
      borderRadius: {
        'xs': '0.125rem',  // 2px — tight badge corners
      },

      // ── Box Shadow ─────────────────────────────────────────────────────────
      // Navy-tinted shadows look more professional than plain black
      boxShadow: {
        'card':    '0 1px 3px 0 rgb(12 45 94 / 0.08), 0 1px 2px -1px rgb(12 45 94 / 0.06)',
        'card-md': '0 4px 6px -1px rgb(12 45 94 / 0.10), 0 2px 4px -2px rgb(12 45 94 / 0.08)',
        'nav':     '0 2px 8px 0 rgb(12 45 94 / 0.15)',
        'header':  '0 1px 4px 0 rgb(12 45 94 / 0.12)',
      },

      // ── Max Width ──────────────────────────────────────────────────────────
      maxWidth: {
        'site': '1280px',  // .container-site max-width
      },

      // ── Z-Index ────────────────────────────────────────────────────────────
      zIndex: {
        'dropdown': '100',
        'sticky':   '200',
        'header':   '300',
        'overlay':  '400',
        'modal':    '500',
        'toast':    '600',
      },

      // ── Transitions ────────────────────────────────────────────────────────
      transitionDuration: {
        '150': '150ms',
        '250': '250ms',
      },

      // ── Animation ──────────────────────────────────────────────────────────
      // Defined here so Tailwind generates the class; actual keyframes in CSS.
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%':   { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in':   'fadeIn 0.2s ease-out both',
        'slide-down':'slideDown 0.15s ease-out both',
      },
    },
  },

  plugins: [
    // No heavy UI plugins (no @tailwindcss/forms, no @tailwindcss/typography)
    // to keep build size minimal.
  ],
};
