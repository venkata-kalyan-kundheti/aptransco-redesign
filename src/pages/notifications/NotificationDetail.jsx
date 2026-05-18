/**
 * src/pages/notifications/NotificationDetail.jsx — Full implementation
 * Route: /notifications/:id
 */
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeftIcon, DocumentArrowDownIcon, CalendarIcon,
  TagIcon, HashtagIcon, PrinterIcon, ShareIcon,
} from '@heroicons/react/24/outline';
import PageShell from '@/components/layout/PageShell';
import Badge from '@/components/common/Badge';
import { NOTIFICATIONS } from '@/data/notifications';
import { formatDate, formatRelativeTime } from '@/utils/formatDate';

// Category → badge variant map
const CAT_VARIANT = {
  circular:      'circular',
  order:         'info',
  'press-release': 'new',
  recruitment:   'upcoming',
  general:       'closed',
};

// Render the full notification body
function NotificationBody({ notification: n }) {
  return (
    <article aria-labelledby="notif-title" className="max-w-3xl">
      {/* Meta row */}
      <div className="flex flex-wrap items-center gap-3 mb-6 text-sm text-slate-500">
        <span className="flex items-center gap-1.5">
          <CalendarIcon className="w-4 h-4" aria-hidden="true" />
          <time dateTime={n.date}>{formatDate(n.date)}</time>
          <span className="text-slate-300">·</span>
          <span className="text-slate-400">{formatRelativeTime(n.date)}</span>
        </span>
        {n.refNo && (
          <span className="flex items-center gap-1.5">
            <HashtagIcon className="w-4 h-4" aria-hidden="true" />
            <span className="font-mono text-xs">{n.refNo}</span>
          </span>
        )}
        <span className="flex items-center gap-1.5">
          <TagIcon className="w-4 h-4" aria-hidden="true" />
          <Badge variant={CAT_VARIANT[n.category] ?? 'info'}>
            {n.category.replace('-', ' ')}
          </Badge>
        </span>
        {n.isNew && <Badge variant="new">New</Badge>}
      </div>

      {/* Title */}
      <h1 id="notif-title" className="text-2xl font-bold text-navy-800 leading-snug mb-5">
        {n.title}
      </h1>

      {/* Summary / body */}
      <div className="prose-sm text-slate-700 leading-relaxed mb-8">
        <p className="text-base leading-relaxed">{n.summary}</p>
        {/* Extended body text — for demo, render structured content */}
        <div className="mt-6 p-5 bg-navy-50 rounded-lg border border-navy-100">
          <p className="text-xs text-navy-500 font-semibold uppercase tracking-wide mb-2">Official Notice</p>
          <p className="text-sm text-navy-800 leading-relaxed">
            This communication is issued by the competent authority of APTRANSCO and is addressed to
            all concerned offices, divisions, and sub-divisions for immediate compliance. Any queries
            regarding this notice should be directed to the issuing department as per the reference
            number above.
          </p>
          <p className="text-sm text-navy-800 leading-relaxed mt-3">
            All Regional Chief Engineers, Superintending Engineers, and Executive Engineers are
            requested to ensure that the instructions contained herein are disseminated to field
            personnel and compliance is reported within 15 days of receipt.
          </p>
        </div>
      </div>

      {/* Download */}
      {n.documentUrl && (
        <div className="card p-5 flex items-center justify-between gap-4 mb-8">
          <div>
            <p className="text-sm font-semibold text-navy-800">Official Document / Attachment</p>
            <p className="text-xs text-slate-400 mt-0.5">PDF · {n.documentSize ?? 'N/A'}</p>
          </div>
          <a
            href={n.documentUrl}
            className="btn-primary btn-sm flex items-center gap-2"
            aria-label={`Download: ${n.title}`}
          >
            <DocumentArrowDownIcon className="w-4 h-4" aria-hidden="true" />
            Download PDF
          </a>
        </div>
      )}

      {/* Actions */}
      <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-100">
        <button
          onClick={() => window.print()}
          className="btn-ghost btn-sm flex items-center gap-2"
          aria-label="Print this notification"
        >
          <PrinterIcon className="w-4 h-4" aria-hidden="true" />
          Print
        </button>
        <button
          onClick={() => {
            if (navigator.share) {
              navigator.share({ title: n.title, url: window.location.href });
            } else {
              navigator.clipboard.writeText(window.location.href);
            }
          }}
          className="btn-ghost btn-sm flex items-center gap-2"
          aria-label="Share this notification"
        >
          <ShareIcon className="w-4 h-4" aria-hidden="true" />
          Share
        </button>
      </div>
    </article>
  );
}

// Related notifications sidebar
function RelatedNotifications({ current }) {
  const related = NOTIFICATIONS
    .filter((n) => n.id !== current.id && n.category === current.category)
    .slice(0, 4);

  if (related.length === 0) return null;

  return (
    <aside aria-labelledby="related-heading" className="lg:w-72 shrink-0">
      <h2 id="related-heading" className="text-sm font-bold text-navy-700 uppercase tracking-wide mb-4">
        Related Notifications
      </h2>
      <ul className="flex flex-col gap-3" role="list">
        {related.map((n) => (
          <li key={n.id}>
            <Link
              to={`/notifications/${n.id}`}
              className="block card p-3 hover:shadow-card-md transition-shadow duration-200 group"
            >
              <p className="text-xs font-semibold text-navy-700 leading-snug group-hover:text-navy-900 line-clamp-2">
                {n.title}
              </p>
              <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                <CalendarIcon className="w-3 h-3" aria-hidden="true" />
                {formatDate(n.date)}
              </p>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        to="/notifications"
        className="btn-secondary btn-sm mt-4 w-full justify-center"
      >
        All Notifications
      </Link>
    </aside>
  );
}

export default function NotificationDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const notification = NOTIFICATIONS.find((n) => n.id === id);

  if (!notification) {
    return (
      <PageShell
        title="Notification Not Found"
        breadcrumb={[{ label: 'Notifications', href: '/notifications' }, 'Not Found']}
      >
        <div className="text-center py-16">
          <p className="text-slate-500 mb-4">This notification could not be found or may have been archived.</p>
          <Link to="/notifications" className="btn-primary">
            ← Back to Notifications
          </Link>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell
      title="Notification Detail"
      breadcrumb={[
        { label: 'Notifications', href: '/notifications' },
        notification.category.replace('-', ' '),
        notification.title.length > 50
          ? notification.title.slice(0, 47) + '…'
          : notification.title,
      ]}
    >
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="btn-ghost btn-sm flex items-center gap-2 mb-6 -ml-2"
        aria-label="Go back"
      >
        <ArrowLeftIcon className="w-4 h-4" aria-hidden="true" />
        Back
      </button>

      {/* Main layout */}
      <div className="flex flex-col lg:flex-row gap-10">
        <NotificationBody notification={notification} />
        <RelatedNotifications current={notification} />
      </div>
    </PageShell>
  );
}
