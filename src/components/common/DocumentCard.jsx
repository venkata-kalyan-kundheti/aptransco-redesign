/**
 * src/components/common/DocumentCard.jsx
 * ─────────────────────────────────────────────────────────────────────────────
 * PDF/document download card used in Document Library, Reports, and Annual Reports.
 *
 * Props:
 *   document: { id, title, category, fileSize, date, downloadUrl, description? }
 */
import { ArrowDownTrayIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import Badge from '@/components/common/Badge';
import { formatDate } from '@/utils/formatDate';
import { truncateTitle, truncateText } from '@/utils/truncateText';

// ── File type icon colour ──────────────────────────────────────────────────────
const TYPE_COLORS = {
  pdf:   'text-red-500 bg-red-50',
  xlsx:  'text-green-600 bg-green-50',
  docx:  'text-blue-600 bg-blue-50',
  zip:   'text-amber-600 bg-amber-50',
  default: 'text-slate-500 bg-slate-100',
};

function fileExtension(url = '') {
  const m = url.match(/\.(\w+)(\?|$)/);
  return m ? m[1].toLowerCase() : 'default';
}

export default function DocumentCard({ document: doc, className = '' }) {
  const {
    id,
    title,
    category,
    fileSize,
    date,
    downloadUrl,
    description,
    fileType,
  } = doc;

  const ext       = fileType ?? fileExtension(downloadUrl);
  const iconColor = TYPE_COLORS[ext] ?? TYPE_COLORS.default;

  return (
    <article
      className={`card p-5 flex gap-4 hover:shadow-md transition-shadow duration-200 ${className}`}
      aria-labelledby={`doc-title-${id}`}
    >
      {/* Icon */}
      <div
        className={`shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${iconColor}`}
        aria-hidden="true"
      >
        <DocumentTextIcon className="w-6 h-6" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1.5 min-w-0 flex-1">
        {category && <Badge variant="default" label={category} size="sm" className="self-start" />}
        <h3
          id={`doc-title-${id}`}
          className="text-sm font-semibold text-navy-800 leading-snug"
        >
          {truncateTitle(title)}
        </h3>
        {description && (
          <p className="text-xs text-slate-500 leading-relaxed">
            {truncateText(description, 100)}
          </p>
        )}
        <div className="flex items-center gap-3 flex-wrap text-xs text-slate-400">
          {date && <time dateTime={date}>{formatDate(date)}</time>}
          {fileSize && <span>· {fileSize}</span>}
          {ext !== 'default' && <span className="uppercase font-mono font-semibold">{ext}</span>}
        </div>

        {/* Download button */}
        <a
          href={downloadUrl ?? '#'}
          className="mt-1 self-start inline-flex items-center gap-1.5 text-xs font-semibold text-navy-600 hover:text-navy-800 transition-colors"
          aria-label={`Download ${title}`}
          download
        >
          <ArrowDownTrayIcon className="w-3.5 h-3.5" aria-hidden="true" />
          Download
        </a>
      </div>
    </article>
  );
}
