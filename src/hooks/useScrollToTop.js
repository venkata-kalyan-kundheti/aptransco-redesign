/**
 * src/hooks/useScrollToTop.js
 * Auto-scroll to top on route change.
 * Extracted from App.jsx (was inline as ScrollToTop component).
 */
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
}
