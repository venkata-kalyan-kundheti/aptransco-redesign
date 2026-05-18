import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// ── Self-hosted Inter (latin subset only) — served from same origin.
// No Google Fonts request: zero cross-origin latency, GDPR-safe for gov deployment.
// Latin subset covers all content; cyrillic/greek subsets excluded (save ~200 kB).
// @fontsource v5: font-display: swap is the default — text renders immediately.
import '@fontsource/inter/latin-400.css';
import '@fontsource/inter/latin-500.css';
import '@fontsource/inter/latin-600.css';
import '@fontsource/inter/latin-700.css';

import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
