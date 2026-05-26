/**
 * src/hooks/useAccessibility.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Manages two global accessibility preferences:
 *
 *  1. Font size  — cycles through 3 levels: normal → large → x-large → normal
 *                  Applied as data-font-size="normal|large|x-large" on <html>
 *                  CSS in index.css scales the root font-size accordingly.
 *
 *  2. High contrast — toggles data-contrast="high" on <html>
 *                     CSS in index.css overrides design tokens for higher contrast.
 *
 * Both preferences are saved to localStorage so they persist across page reloads.
 *
 * Usage:
 *   const { fontSize, highContrast, cycleFont, toggleContrast } = useAccessibility();
 */

import { useState, useEffect } from 'react';

const FONT_SIZES = ['normal', 'large', 'x-large'];

export function useAccessibility() {
  // ── Initialize from localStorage (or default) ─────────────────────────────
  const [fontSize, setFontSize] = useState(
    () => localStorage.getItem('apt-font-size') || 'normal'
  );
  const [highContrast, setHighContrast] = useState(
    () => localStorage.getItem('apt-high-contrast') === 'true'
  );

  // ── Apply font size to <html> data attribute ──────────────────────────────
  useEffect(() => {
    document.documentElement.setAttribute('data-font-size', fontSize);
    localStorage.setItem('apt-font-size', fontSize);
  }, [fontSize]);

  // ── Apply high contrast to <html> data attribute ──────────────────────────
  useEffect(() => {
    if (highContrast) {
      document.documentElement.setAttribute('data-contrast', 'high');
    } else {
      document.documentElement.removeAttribute('data-contrast');
    }
    localStorage.setItem('apt-high-contrast', String(highContrast));
  }, [highContrast]);

  // ── Cycle font: normal → large → x-large → normal ────────────────────────
  const cycleFont = () => {
    setFontSize((prev) => {
      const idx = FONT_SIZES.indexOf(prev);
      return FONT_SIZES[(idx + 1) % FONT_SIZES.length];
    });
  };

  // ── Toggle high contrast on/off ───────────────────────────────────────────
  const toggleContrast = () => setHighContrast((prev) => !prev);

  return { fontSize, highContrast, cycleFont, toggleContrast };
}
