/**
 * postcss.config.js
 * ─────────────────────────────────────────────────────────────────────────────
 * PostCSS pipeline:
 *   1. tailwindcss  — generates utility classes (JIT, purges unused)
 *   2. autoprefixer — adds vendor prefixes for target browser matrix
 *
 * cssnano is NOT added here because Vite's esbuild minifier handles CSS
 * minification during `vite build` — adding cssnano would double-process.
 * For more aggressive CSS minification, enable `build.cssMinify: 'lightningcss'`
 * in vite.config.js (requires `lightningcss` package).
 */
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      // Target browsers: covers ~97% of Indian web users (Chrome, Samsung Browser,
      // UC Browser, Firefox). Avoids generating unnecessary prefixes for IE.
      overrideBrowserslist: [
        'last 2 Chrome versions',
        'last 2 Firefox versions',
        'last 2 Safari versions',
        'last 2 Edge versions',
        'Android >= 6',
        'iOS >= 12',
      ],
      // Remove outdated prefixes automatically
      cascade: false,
      remove: true,
    },
  },
};
