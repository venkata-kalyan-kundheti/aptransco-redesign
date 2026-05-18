import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  build: {
    // Target modern browsers — allows smaller ES2020+ output, no need for old polyfills
    target: ['es2020', 'chrome80', 'firefox78', 'safari13'],

    // Raise chunk warning threshold (heroicons icons can be large individually)
    chunkSizeWarningLimit: 400,

    // Enable CSS code splitting — each chunk gets its own CSS file
    cssCodeSplit: true,

    // Minify with esbuild (default, fast) — switch to 'terser' only if further size reduction is critical
    minify: 'esbuild',

    // Source maps: false in production for smaller output
    sourcemap: false,

    // Report gzip-compressed sizes in build output for honest measurement
    reportCompressedSize: true,

    rollupOptions: {
      output: {
        // ── Granular manual chunks ──────────────────────────────────────────
        // Splitting vendor from app code ensures browsers cache React separately
        // from frequently-changing app code.
        manualChunks(id) {
          // React runtime — barely changes, long cache TTL
          if (id.includes('node_modules/react/') ||
              id.includes('node_modules/react-dom/') ||
              id.includes('node_modules/scheduler/')) {
            return 'react-vendor';
          }
          // Router — changes rarely
          if (id.includes('node_modules/react-router-dom/') ||
              id.includes('node_modules/@remix-run/') ||
              id.includes('node_modules/react-router/')) {
            return 'router-vendor';
          }
          // Heroicons — tree-shake friendly but still sizeable; isolate for caching
          if (id.includes('node_modules/@heroicons/')) {
            return 'icons-vendor';
          }
        },

        // Deterministic file names with content hash for long-term browser caching
        entryFileNames:  'assets/[name]-[hash].js',
        chunkFileNames:  'assets/[name]-[hash].js',
        assetFileNames:  'assets/[name]-[hash][extname]',
      },
    },
  },

  // ── Dev server optimisation ─────────────────────────────────────────────────
  server: {
    // Pre-bundle only what's needed (speeds up cold start)
    open: false,
  },

  // ── Dependency pre-bundling (esbuild) ──────────────────────────────────────
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@heroicons/react/24/outline',
    ],
    // Exclude large optional packages that are never imported
    exclude: [],
  },
});
