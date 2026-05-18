/**
 * src/utils/formatDate.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Intl.DateTimeFormat wrapper for consistent date formatting across the app.
 * All functions accept ISO date strings (YYYY-MM-DD) or Date objects.
 */

// ── Base formatter ─────────────────────────────────────────────────────────────
const LOCALE = 'en-IN';

/**
 * Formats a date as "08 May 2026" (DD Mon YYYY).
 * @param {string|Date} date
 * @returns {string}
 */
export function formatDate(date) {
  if (!date) return '—';
  try {
    const d = typeof date === 'string' ? new Date(date) : date;
    return new Intl.DateTimeFormat(LOCALE, {
      day:   '2-digit',
      month: 'short',
      year:  'numeric',
    }).format(d);
  } catch {
    return String(date);
  }
}

/**
 * Formats a date as "08/05/2026" (DD/MM/YYYY).
 * @param {string|Date} date
 * @returns {string}
 */
export function formatDateShort(date) {
  if (!date) return '—';
  try {
    const d = typeof date === 'string' ? new Date(date) : date;
    return new Intl.DateTimeFormat(LOCALE, {
      day:   '2-digit',
      month: '2-digit',
      year:  'numeric',
    }).format(d);
  } catch {
    return String(date);
  }
}

/**
 * Formats a date as "May 2026" (Mon YYYY) — for month-level display.
 * @param {string|Date} date
 * @returns {string}
 */
export function formatMonthYear(date) {
  if (!date) return '—';
  try {
    const d = typeof date === 'string' ? new Date(date) : date;
    return new Intl.DateTimeFormat(LOCALE, {
      month: 'long',
      year:  'numeric',
    }).format(d);
  } catch {
    return String(date);
  }
}

/**
 * Returns a relative time label like "2 days ago", "in 5 days", or "Just now".
 * Falls back to formatDate() if older than 30 days.
 * @param {string|Date} date
 * @returns {string}
 */
export function formatRelativeTime(date) {
  if (!date) return '—';
  try {
    const d      = typeof date === 'string' ? new Date(date) : date;
    const now    = new Date();
    const diffMs = d.getTime() - now.getTime();
    const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));

    if (Math.abs(diffDays) < 1)       return 'Today';
    if (diffDays === 1)                return 'Tomorrow';
    if (diffDays === -1)               return 'Yesterday';
    if (diffDays > 1 && diffDays <= 30)  return `in ${diffDays} days`;
    if (diffDays < -1 && diffDays >= -30) return `${Math.abs(diffDays)} days ago`;

    // Fallback to absolute date for older entries
    return formatDate(d);
  } catch {
    return String(date);
  }
}

/**
 * Returns true if a date is within the past N days (default 7).
 * Used to show "NEW" badge on notifications.
 * @param {string|Date} date
 * @param {number} days
 * @returns {boolean}
 */
export function isRecent(date, days = 7) {
  if (!date) return false;
  try {
    const d      = typeof date === 'string' ? new Date(date) : date;
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - days);
    return d >= cutoff;
  } catch {
    return false;
  }
}

/**
 * Returns true if a date is in the past (deadline has passed).
 * @param {string|Date} date
 * @returns {boolean}
 */
export function isExpired(date) {
  if (!date) return false;
  try {
    const d = typeof date === 'string' ? new Date(date) : date;
    return d < new Date();
  } catch {
    return false;
  }
}

/**
 * Formats deadline with urgency: "Closes 28 May 2026 (in 20 days)"
 * or "Closed 10 May 2026" if expired.
 * @param {string|Date} date
 * @returns {{ label: string, isExpired: boolean, urgency: 'normal'|'soon'|'expired' }}
 */
export function formatDeadline(date) {
  if (!date) return { label: '—', isExpired: false, urgency: 'normal' };
  try {
    const d       = typeof date === 'string' ? new Date(date) : date;
    const expired = isExpired(d);
    const now     = new Date();
    const diffMs  = d.getTime() - now.getTime();
    const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

    if (expired) {
      return { label: `Closed ${formatDate(d)}`, isExpired: true, urgency: 'expired' };
    }
    if (diffDays <= 5) {
      return { label: `Closes ${formatDate(d)} (${diffDays}d left)`, isExpired: false, urgency: 'soon' };
    }
    return { label: `Closes ${formatDate(d)} (in ${diffDays} days)`, isExpired: false, urgency: 'normal' };
  } catch {
    return { label: String(date), isExpired: false, urgency: 'normal' };
  }
}
