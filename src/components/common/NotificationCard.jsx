/**
 * src/components/common/NotificationCard.jsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Card for a single notification / circular / order / press release.
 */
import { Link } from 'react-router-dom';
import { ArrowDownTrayIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import Badge from '@/components/common/Badge';
import { formatDate } from '@/utils/formatDate';


export default function NotificationCard({ notification, className = '' }) {
  const {
    id,
    refNo,
    category,
    title,
    summary,
    date,
    isNew,
    documentUrl,
    documentSize,
    deadline,
  } = notification;

  return (
    <article
      className={`card p-5 flex flex-col gap-3 hover:shadow-md transition-shadow duration-200 ${className}`}
      aria-labelledby={`notif-title-${id}`}
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2 flex-wrap">
          <Badge variant={category} />
          {isNew && (
            <span className="inline-flex items-center px-2 py-0.5 text-xs font-bold rounded-full bg-gold-400 text-navy-900 uppercase tracking-wide">
              New
            </span>
          )}
        </div>
        <time
          dateTime={date}
          className="text-xs text-slate-400 shrink-0 whitespace-nowrap"
        >
          {formatDate(date)}
        </time>
      </div>

      {/* Title */}
      <h3
        id={`notif-title-${id}`}
        className="text-sm font-semibold text-navy-800 leading-snug line-clamp-2"
      >
        {title}
      </h3>

      {/* Ref no */}
      {refNo && (
        <p className="text-xs text-slate-400 font-mono">{refNo}</p>
      )}

      {/* Summary */}
      {summary && (
        <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
          {summary}
        </p>
      )}

      {/* Deadline (recruitment) */}
      {deadline && (
        <p className="text-xs text-amber-700 font-medium">
          Last Date: {formatDate(deadline)}
        </p>
      )}

      {/* Actions */}
      <div className="flex items-center gap-3 mt-auto pt-2 border-t border-slate-100">
        {documentUrl && documentUrl !== '#' ? (
          <a
            href={documentUrl}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy-600 hover:text-navy-800 transition-colors"
            aria-label={`Download ${title}`}
          >
            <ArrowDownTrayIcon className="w-3.5 h-3.5" aria-hidden="true" />
            Download{documentSize ? ` (${documentSize})` : ''}
          </a>
        ) : (
          <Link
            to={`/notifications/${id}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy-600 hover:text-navy-800 transition-colors"
          >
            <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" aria-hidden="true" />
            View Details
          </Link>
        )}
      </div>
    </article>
  );
}
