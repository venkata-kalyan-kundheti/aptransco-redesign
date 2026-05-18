/**
 * src/pages/careers/Careers.jsx — Full implementation
 * ─────────────────────────────────────────────────────────────────────────────
 * Sections: Active recruitments, how to apply, eligibility, exam calendar.
 */
import {
  BriefcaseIcon, DocumentArrowDownIcon, ClockIcon,
} from '@heroicons/react/24/outline';
import PageShell from '@/components/layout/PageShell';
import { formatDate, formatDeadline } from '@/utils/formatDate';
import { getNotificationsByCategory } from '@/data/notifications';

// ── Recruitment posts data ─────────────────────────────────────────────────────
const POSTS = [
  {
    id: 'post-01',
    postName: 'Assistant Engineer (Electrical) Grade-I',
    vacancies: 312,
    qualification: 'B.Tech / B.E (Electrical Engineering)',
    payScale: '₹53,060 – ₹1,54,280 (Level-11)',
    ageLimit: '18 – 42 years (relaxation as per rules)',
    lastDate: '2026-05-31',
    notifNo: 'APTRANSCO/Recr/2026/001',
    status: 'open',
    applyUrl: '#',
    syllabus: '#',
  },
  {
    id: 'post-02',
    postName: 'Junior Accounts Officer (JAO)',
    vacancies: 48,
    qualification: 'B.Com / CA (Inter) / ICWA (Inter)',
    payScale: '₹43,490 – ₹1,28,510 (Level-8)',
    ageLimit: '18 – 42 years',
    lastDate: '2026-05-25',
    notifNo: 'APTRANSCO/Recr/2026/002',
    status: 'open',
    applyUrl: '#',
    syllabus: '#',
  },
  {
    id: 'post-03',
    postName: 'Junior Lineman (Electrical) Grade-II',
    vacancies: 420,
    qualification: 'ITI (Electrician) / Diploma (Electrical)',
    payScale: '₹21,230 – ₹63,010 (Level-3)',
    ageLimit: '18 – 35 years',
    lastDate: '2026-06-15',
    notifNo: 'APTRANSCO/Recr/2026/003',
    status: 'upcoming',
    applyUrl: '#',
    syllabus: '#',
  },
  {
    id: 'post-04',
    postName: 'Sub-Engineer (Civil)',
    vacancies: 55,
    qualification: 'Diploma in Civil Engineering',
    payScale: '₹35,120 – ₹1,04,980 (Level-6)',
    ageLimit: '18 – 42 years',
    lastDate: '2026-04-30',
    notifNo: 'APTRANSCO/Recr/2025/006',
    status: 'closed',
    applyUrl: '#',
    syllabus: '#',
  },
];

const EXAM_CALENDAR = [
  { post: 'JAO Written Examination', date: '2026-05-25', venue: 'Vijayawada, Guntur, Visakhapatnam', status: 'upcoming' },
  { post: 'AE (Electrical) – CBT Phase I', date: '2026-06-15', venue: 'All 26 Districts (Online)', status: 'upcoming' },
  { post: 'JLM Grade-II – Written Test', date: '2026-07-20', venue: 'AP-wide examination centres', status: 'upcoming' },
  { post: 'Sub-Engineer (Civil) – DV', date: '2026-05-20', venue: 'Vijayawada Corporate Office', status: 'upcoming' },
];

const STATUS_BADGE = {
  open:     { label: 'Open', cls: 'bg-green-100 text-green-700' },
  upcoming: { label: 'Upcoming', cls: 'bg-sky-100 text-sky-700' },
  closed:   { label: 'Closed', cls: 'bg-slate-100 text-slate-500' },
};

export default function Careers() {
  const recruitmentNotifs = getNotificationsByCategory('recruitment');

  return (
    <PageShell
      title="Careers & Recruitment"
      subtitle="Job notifications, eligibility criteria and exam information"
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Careers' }]}
    >
      {/* Intro banner */}
      <div className="card border-l-4 border-gold-400 p-5 mb-10 flex items-start gap-4">
        <BriefcaseIcon className="w-8 h-8 text-gold-500 shrink-0 mt-0.5" aria-hidden="true" />
        <div>
          <h2 className="text-base font-bold text-navy-800 mb-1">Join APTRANSCO</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            APTRANSCO recruits engineers, technicians, administrative and finance staff through
            competitive examinations. All recruitments are conducted through the official
            notification process. Candidates are advised to refer only to the official website
            for authentic information. Beware of fraudulent recruitment agencies.
          </p>
        </div>
      </div>

      {/* ── Active Recruitment Posts ───────────────────────────────────────── */}
      <section className="mb-12" aria-labelledby="posts-heading">
        <h2 id="posts-heading" className="section-title mb-2">Current Recruitment Notifications</h2>
        <p className="section-subtitle mb-6">Open and upcoming posts as on May 2026</p>

        <div className="flex flex-col gap-5">
          {POSTS.map((post) => {
            const deadline = formatDeadline(post.lastDate);
            const badge = STATUS_BADGE[post.status];
            return (
              <article key={post.id} className="card p-5 hover:shadow-md transition-shadow duration-200">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    {/* Status + Notification No */}
                    <div className="flex items-center gap-2 flex-wrap mb-2">
                      <span className={`inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-full ${badge.cls}`}>
                        {badge.label}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">{post.notifNo}</span>
                    </div>

                    <h3 className="text-base font-bold text-navy-800 mb-3">{post.postName}</h3>

                    {/* Details grid */}
                    <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-2 text-sm">
                      <div>
                        <dt className="text-xs text-slate-400">Vacancies</dt>
                        <dd className="font-bold text-navy-700 text-lg">{post.vacancies}</dd>
                      </div>
                      <div>
                        <dt className="text-xs text-slate-400">Qualification</dt>
                        <dd className="font-medium text-slate-700 text-sm">{post.qualification}</dd>
                      </div>
                      <div>
                        <dt className="text-xs text-slate-400">Pay Scale</dt>
                        <dd className="font-medium text-slate-700 text-sm">{post.payScale}</dd>
                      </div>
                      <div>
                        <dt className="text-xs text-slate-400">Age Limit</dt>
                        <dd className="font-medium text-slate-700 text-sm">{post.ageLimit}</dd>
                      </div>
                    </dl>

                    {/* Deadline */}
                    <p className={`mt-3 text-xs font-semibold flex items-center gap-1
                      ${deadline.urgency === 'soon' ? 'text-red-600' : deadline.urgency === 'expired' ? 'text-slate-400' : 'text-slate-600'}`}>
                      <ClockIcon className="w-3.5 h-3.5" aria-hidden="true" />
                      Last Date: {deadline.label}
                    </p>
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-col gap-2 shrink-0">
                    {post.status !== 'closed' && (
                      <a href={post.applyUrl} className="btn-primary btn-sm text-center">
                        Apply Online
                      </a>
                    )}
                    <a href={post.syllabus} className="btn-secondary btn-sm inline-flex items-center gap-1.5">
                      <DocumentArrowDownIcon className="w-3.5 h-3.5" aria-hidden="true" />
                      Notification
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ── Exam Calendar ─────────────────────────────────────────────────── */}
      <section className="mb-12" aria-labelledby="calendar-heading">
        <h2 id="calendar-heading" className="section-title mb-2">Examination Calendar</h2>
        <p className="section-subtitle mb-6">Upcoming tests and document verification schedules</p>
        <div className="card overflow-hidden">
          <table className="min-w-full text-sm">
            <thead className="bg-navy-700 text-white">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Post / Event</th>
                <th className="px-4 py-3 text-left font-semibold">Date</th>
                <th className="px-4 py-3 text-left font-semibold">Venue</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {EXAM_CALENDAR.map((exam, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="px-4 py-3 font-medium text-navy-800">{exam.post}</td>
                  <td className="px-4 py-3 text-slate-700">
                    <time dateTime={exam.date}>{formatDate(exam.date)}</time>
                  </td>
                  <td className="px-4 py-3 text-slate-600">{exam.venue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── How to Apply ──────────────────────────────────────────────────── */}
      <section className="mb-12" aria-labelledby="apply-heading">
        <h2 id="apply-heading" className="section-title mb-4">How to Apply</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { step: '1', title: 'Read Notification', desc: 'Download and read the official recruitment notification thoroughly before applying.' },
            { step: '2', title: 'Register Online', desc: 'Visit the APTRANSCO online portal, create your profile and fill the application form.' },
            { step: '3', title: 'Upload Documents', desc: 'Upload photograph, signature, and relevant educational/experience certificates.' },
            { step: '4', title: 'Pay Exam Fee', desc: 'Pay the prescribed application fee online via Net Banking / UPI / Credit / Debit card.' },
          ].map(item => (
            <div key={item.step} className="card p-5 text-center flex flex-col items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-navy-700 text-white font-bold flex items-center justify-center text-base">{item.step}</div>
              <h3 className="text-sm font-bold text-navy-800">{item.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Recent Recruitment Notices ────────────────────────────────────── */}
      <section aria-labelledby="recent-heading">
        <h2 id="recent-heading" className="section-title mb-4">Recent Recruitment Notices</h2>
        <div className="flex flex-col gap-3">
          {recruitmentNotifs.map(notif => (
            <div key={notif.id} className="card p-4 flex items-center gap-4">
              <div className="shrink-0 w-2 h-2 rounded-full bg-navy-500 mt-0.5" aria-hidden="true" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-navy-800 line-clamp-1">{notif.title}</p>
                <p className="text-xs text-slate-400 mt-0.5">{notif.refNo} · {formatDate(notif.date)}</p>
              </div>
              {notif.isNew && (
                <span className="shrink-0 px-2 py-0.5 text-xs font-bold rounded-full bg-gold-100 text-gold-700">New</span>
              )}
              <a href={notif.documentUrl} className="shrink-0 btn-secondary btn-sm">Download</a>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
