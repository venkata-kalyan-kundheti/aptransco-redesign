/**
 * src/pages/tenders/TenderDetail.jsx — Full implementation
 * ─────────────────────────────────────────────────────────────────────────────
 * Shows full tender info: header, timeline, spec table, corrigendum history,
 * download button, back navigation.
 */
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeftIcon,
  ArrowDownTrayIcon,
  ExclamationCircleIcon,
  CalendarDaysIcon,
  CurrencyRupeeIcon,
  ClockIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';
import PageShell from '@/components/layout/PageShell';
import Badge from '@/components/common/Badge';
import { getTenderById } from '@/data/tenders';
import { formatDate, formatDeadline } from '@/utils/formatDate';

function InfoRow({ label, value, highlight }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start gap-1 py-3 border-b border-slate-100 last:border-0">
      <dt className="text-xs font-semibold text-slate-400 uppercase tracking-wide sm:w-40 shrink-0">{label}</dt>
      <dd className={`text-sm font-medium ${highlight ? 'text-red-600' : 'text-slate-800'}`}>{value ?? '—'}</dd>
    </div>
  );
}

export default function TenderDetail() {
  const { id } = useParams();
  const tender  = getTenderById(id);

  if (!tender) {
    return (
      <PageShell
        title="Tender Not Found"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Tenders', href: '/tenders' },
          { label: 'Not Found' },
        ]}
      >
        <div className="py-16 text-center">
          <ExclamationCircleIcon className="w-16 h-16 text-slate-200 mx-auto mb-4" aria-hidden="true" />
          <h2 className="text-xl font-bold text-navy-800 mb-2">Tender record not found</h2>
          <p className="text-slate-400 mb-6">The tender you are looking for may have been removed or the ID is incorrect.</p>
          <Link to="/tenders" className="btn-primary btn-md">
            <ArrowLeftIcon className="w-4 h-4" aria-hidden="true" />
            Back to Tenders
          </Link>
        </div>
      </PageShell>
    );
  }

  const deadline  = formatDeadline(tender.closingDate);

  return (
    <PageShell
      title={tender.title}
      subtitle={tender.refNo}
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Tenders', href: '/tenders' },
        { label: `Tender ${tender.refNo.split('/').slice(-1)[0]}` },
      ]}
    >
      <div className="max-w-4xl">
        {/* Back */}
        <Link
          to="/tenders"
          className="inline-flex items-center gap-2 text-sm text-navy-600 hover:text-navy-800 mb-6 font-medium"
        >
          <ArrowLeftIcon className="w-4 h-4" aria-hidden="true" />
          Back to Tenders
        </Link>

        {/* Header card */}
        <div className="card p-6 mb-6">
          <div className="flex flex-wrap items-start gap-3 mb-4">
            <Badge variant={tender.status} />
            <Badge variant={tender.category} size="sm" />
            {tender.corrigendum?.length > 0 && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-full bg-amber-50 text-amber-700 ring-1 ring-amber-200">
                <ExclamationCircleIcon className="w-3 h-3" aria-hidden="true" />
                Corrigendum Issued
              </span>
            )}
          </div>

          <h1 className="text-xl font-bold text-navy-900 mb-2 leading-snug">{tender.title}</h1>
          <p className="text-sm text-slate-400 font-mono mb-4">{tender.refNo}</p>

          {tender.description && (
            <p className="text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
              {tender.description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Key Dates */}
          <div className="lg:col-span-2 card p-5">
            <h2 className="text-sm font-bold text-navy-700 mb-3 flex items-center gap-2">
              <CalendarDaysIcon className="w-4 h-4" aria-hidden="true" />
              Key Dates
            </h2>
            <dl>
              <InfoRow label="Issued Date"    value={formatDate(tender.issuedDate)} />
              <InfoRow label="Closing Date"   value={deadline.label} highlight={deadline.urgency === 'soon'} />
              <InfoRow label="Opening Date"   value={formatDate(tender.openingDate)} />
              {tender.awardedTo && <InfoRow label="Awarded To"  value={tender.awardedTo} />}
              {tender.awardedValue && <InfoRow label="Awarded Value" value={tender.awardedValue} />}
            </dl>
          </div>

          {/* Financial */}
          <div className="card p-5">
            <h2 className="text-sm font-bold text-navy-700 mb-3 flex items-center gap-2">
              <CurrencyRupeeIcon className="w-4 h-4" aria-hidden="true" />
              Financial Details
            </h2>
            <dl>
              <InfoRow label="Est. Value"   value={tender.estimatedValue} />
              <InfoRow label="EMD"          value={tender.emd} />
              <InfoRow label="Document Fee" value={tender.documentFee} />
            </dl>

            {/* Download NIT */}
            <a
              href={tender.downloadUrl ?? '#'}
              className="mt-5 w-full btn-primary btn-md flex items-center justify-center gap-2"
              aria-label={`Download NIT for ${tender.title}`}
            >
              <ArrowDownTrayIcon className="w-4 h-4" aria-hidden="true" />
              Download NIT / RFP
            </a>
          </div>
        </div>

        {/* Corrigendum history */}
        {tender.corrigendum?.length > 0 && (
          <div className="card p-5 mb-6">
            <h2 className="text-sm font-bold text-navy-700 mb-4 flex items-center gap-2">
              <ExclamationCircleIcon className="w-4 h-4 text-amber-500" aria-hidden="true" />
              Corrigendum History
            </h2>
            <ol className="flex flex-col gap-3">
              {tender.corrigendum.map((c) => (
                <li
                  key={c.no}
                  className="flex items-start gap-4 text-sm"
                >
                  <span className="shrink-0 w-6 h-6 rounded-full bg-amber-100 text-amber-700 font-bold text-xs flex items-center justify-center">
                    {c.no}
                  </span>
                  <div>
                    <p className="font-medium text-slate-700">{c.subject}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{formatDate(c.date)}</p>
                  </div>
                  <a href="#" className="ml-auto shrink-0 text-xs text-navy-600 hover:underline font-medium" aria-label="Download corrigendum">
                    Download
                  </a>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Status timeline */}
        <div className="card p-5">
          <h2 className="text-sm font-bold text-navy-700 mb-4 flex items-center gap-2">
            <ClockIcon className="w-4 h-4" aria-hidden="true" />
            Tender Timeline
          </h2>
          <ol className="relative border-l border-navy-200 ml-3 flex flex-col gap-6 pl-6">
            {[
              { label: 'NIT Published',   date: tender.issuedDate,  done: true },
              { label: 'Bid Submission Closes', date: tender.closingDate, done: new Date(tender.closingDate) < new Date() },
              { label: 'Bid Opening',     date: tender.openingDate, done: new Date(tender.openingDate) < new Date() },
              tender.awardedTo ? { label: 'Contract Awarded', date: null, done: true, highlight: tender.awardedTo } : null,
            ].filter(Boolean).map((step, i) => (
              <li key={i} className="relative">
                <span className={`absolute -left-9 flex items-center justify-center w-5 h-5 rounded-full ring-4 ring-white ${step.done ? 'bg-navy-700' : 'bg-slate-200'}`}>
                  <CheckCircleIcon className={`w-3 h-3 ${step.done ? 'text-white' : 'text-slate-400'}`} aria-hidden="true" />
                </span>
                <p className={`text-sm font-semibold ${step.done ? 'text-navy-800' : 'text-slate-400'}`}>{step.label}</p>
                {step.date && <p className="text-xs text-slate-400 mt-0.5">{formatDate(step.date)}</p>}
                {step.highlight && <p className="text-xs text-emerald-600 font-medium mt-0.5">{step.highlight}</p>}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </PageShell>
  );
}
