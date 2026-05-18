/**
 * src/utils/truncateText.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Word-boundary-aware text truncation helpers for cards and list views.
 */

/**
 * Truncates text to a maximum number of characters at a word boundary.
 * Appends "…" (ellipsis) if truncated.
 *
 * @param {string} text      Source text
 * @param {number} maxChars  Maximum character count (default 120)
 * @returns {string}
 */
export function truncateText(text, maxChars = 120) {
  if (!text) return '';
  if (text.length <= maxChars) return text;

  // Cut at the last space before maxChars to avoid breaking mid-word
  const cut = text.slice(0, maxChars).replace(/\s+\S*$/, '');
  return cut + '…';
}

/**
 * Truncates text to a maximum number of words.
 * Appends "…" if truncated.
 *
 * @param {string} text     Source text
 * @param {number} maxWords Maximum word count (default 25)
 * @returns {string}
 */
export function truncateWords(text, maxWords = 25) {
  if (!text) return '';
  const words = text.trim().split(/\s+/);
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(' ') + '…';
}

/**
 * Truncates to a maximum number of lines by approximating character count.
 * Useful for CSS `line-clamp` fallback in JS rendering.
 *
 * @param {string} text       Source text
 * @param {number} lines      Max visible lines (default 2)
 * @param {number} charsPerLine  Approximate chars per line (default 60)
 * @returns {string}
 */
export function truncateLines(text, lines = 2, charsPerLine = 60) {
  return truncateText(text, lines * charsPerLine);
}

/**
 * Truncates a document reference/title for compact display in cards.
 * Max 80 chars, word-boundary aware.
 *
 * @param {string} title
 * @returns {string}
 */
export function truncateTitle(title) {
  return truncateText(title, 80);
}

/**
 * Truncates a tender title for list rows — max 100 chars.
 *
 * @param {string} title
 * @returns {string}
 */
export function truncateTenderTitle(title) {
  return truncateText(title, 100);
}

/**
 * Strips HTML tags (in case content is HTML), then truncates.
 *
 * @param {string} html
 * @param {number} maxChars
 * @returns {string}
 */
export function truncateHtml(html, maxChars = 120) {
  if (!html) return '';
  const stripped = html.replace(/<[^>]+>/g, '');
  return truncateText(stripped, maxChars);
}

/**
 * Returns a short excerpt of the text (first sentence or first N chars).
 *
 * @param {string} text
 * @param {number} maxChars
 * @returns {string}
 */
export function excerpt(text, maxChars = 150) {
  if (!text) return '';
  // Try to end at first sentence
  const firstSentence = text.match(/^.+?[.!?]/)?.[0];
  if (firstSentence && firstSentence.length <= maxChars) {
    return firstSentence;
  }
  return truncateText(text, maxChars);
}
