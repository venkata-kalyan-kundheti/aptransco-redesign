/**
 * src/components/common/TenderCard.jsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Card for a single tender entry in the Tenders list.
 */
import { Link } from 'react-router-dom';
import { ArrowDownTrayIcon, ChevronRightIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';
import Badge from '@/components/common/Badge';
import { formatDate, formatDeadline } from '@/utils/formatDate';
import { truncateText } from '@/utils/truncateText';

export default function TenderCard({ tender, className = '' }) {
  const {
    id,
    refNo,
    category,
    title,
    issuedDate,
    closingDate,
    estimatedValue,
    emd,
    status,
    downloadUrl,
    corrigendum = [],
  } = tender;

  const deadline = formatDeadline(closingDate);

  return (
    <article
      className={`card p-5 flex flex-col gap-3 hover:shadow-md transition-shadow duration-200 ${className}`}
      aria-labelledby={`tender-title-${id}`}
    >
      {/* Badge row */}
      <div className="flex items-center gap-2 flex-wrap">
        <Badge variant={status} />
        <Badge variant={category} size="sm" />
        {corrigendum.length > 0 && (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-full bg-amber-50 text-amber-700 ring-1 ring-amber-200">
            <ExclamationCircleIcon className="w-3 h-3" aria-hidden="true" />
            Corrigendum {corrigendum.length > 1 ? `(×${corrigendum.length})` : ''}
          </span>
        )}
      </div>

      {/* Title */}
      <h3
        id={`tender-title-${id}`}
        className="text-sm font-semibold text-navy-800 leading-snug"
      >
        {truncateText(title, 100)}
      </h3>

      {/* Ref No */}
      <p className="text-xs text-slate-400 font-mono">{refNo}</p>

      {/* Dates + Value grid */}
      <dl className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs">
        <div>
          <dt className="text-slate-400">Issued</dt>
          <dd className="text-slate-700 font-medium">{formatDate(issuedDate)}</dd>
        </div>
        <div>
          <dt className="text-slate-400">Closing</dt>
          <dd className={`font-medium ${deadline.urgency === 'soon' ? 'text-red-600' : deadline.urgency === 'expired' ? 'text-slate-400' : 'text-slate-700'}`}>
            {formatDate(closingDate)}
          </dd>
        </div>
        {estimatedValue && (
          <div>
            <dt className="text-slate-400">Estimated Value</dt>
            <dd className="text-slate-700 font-medium">{estimatedValue}</dd>
          </div>
        )}
        {emd && (
          <div>
            <dt className="text-slate-400">EMD</dt>
            <dd className="text-slate-700 font-medium">{emd}</dd>
          </div>
        )}
      </dl>

      {/* Deadline urgency banner */}
      {deadline.urgency === 'soon' && (
        <p className="text-xs font-semibold text-red-600 flex items-center gap-1">
          <ExclamationCircleIcon className="w-3.5 h-3.5" aria-hidden="true" />
          {deadline.label}
        </p>
      )}

      {/* Actions */}
      <div className="flex items-center justify-between gap-3 mt-auto pt-2 border-t border-slate-100">
        <Link
          to={`/tenders/${id}`}
          className="inline-flex items-center gap-1 text-xs font-semibold text-navy-600 hover:text-navy-800 transition-colors"
        >
          View Details
          <ChevronRightIcon className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>
        {downloadUrl && (
          <a
            href={downloadUrl}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy-600 hover:text-navy-800 transition-colors"
            aria-label={`Download NIT for ${title}`}
          >
            <ArrowDownTrayIcon className="w-3.5 h-3.5" aria-hidden="true" />
            NIT / RFP
          </a>
        )}
      </div>
    </article>
  );
}
