/**
 * src/pages/utility/ContactFeedback.jsx — Full implementation
 * ─────────────────────────────────────────────────────────────────────────────
 * Contact form with validation + office directory + helpline.
 */
import { useState } from 'react';
import {
  EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon,
  CheckCircleIcon, ExclamationCircleIcon, PaperAirplaneIcon,
} from '@heroicons/react/24/outline';
import PageShell from '@/components/layout/PageShell';

const OFFICES = [
  {
    name: 'APTRANSCO Corporate Office',
    address: 'Vidyut Soudha, Hyderabad Road, Vijayawada – 520 013',
    phone: '+91-866-2577777',
    fax: '+91-866-2577123',
    email: 'cmd@aptransco.gov.in',
    hours: 'Mon – Fri: 10:00 AM – 5:00 PM',
    map: 'https://maps.google.com/?q=Vidyut+Soudha+Vijayawada',
  },
  {
    name: 'SLDC (State Load Despatch Centre)',
    address: 'Medikondur Road, Gannavaram, Krishna District – 521 101',
    phone: '+91-866-2571234',
    fax: '',
    email: 'sldc@aptransco.gov.in',
    hours: '24 × 7 (System Operations)',
    map: 'https://sldc.ap.gov.in',
  },
  {
    name: 'PRTI (Power Research & Training Institute)',
    address: 'PRTI Campus, Vijayawada – 520 010',
    phone: '+91-866-2577790',
    fax: '',
    email: 'principal.prti@aptransco.gov.in',
    hours: 'Mon – Fri: 9:00 AM – 5:30 PM',
    map: '',
  },
];

const SUBJECT_OPTIONS = [
  'General Enquiry',
  'Tender / Procurement',
  'Open Access Request',
  'Recruitment / HR',
  'RTI Application',
  'Grievance / Complaint',
  'Media / Press',
  'Other',
];

function FieldError({ msg }) {
  if (!msg) return null;
  return (
    <p className="text-xs text-red-600 mt-1 flex items-center gap-1" role="alert">
      <ExclamationCircleIcon className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
      {msg}
    </p>
  );
}

export default function ContactFeedback() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function validate() {
    const errs = {};
    if (!form.name.trim())    errs.name    = 'Name is required.';
    if (!form.email.trim())   errs.email   = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email address.';
    if (!form.subject)        errs.subject = 'Please select a subject.';
    if (!form.message.trim()) errs.message = 'Message is required.';
    else if (form.message.trim().length < 20) errs.message = 'Message must be at least 20 characters.';
    if (form.phone && !/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, ''))) {
      errs.phone = 'Enter a valid 10-digit Indian mobile number.';
    }
    return errs;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitting(true);
    // Simulate API call
    await new Promise(r => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
  }

  return (
    <PageShell
      title="Contact Us"
      subtitle="Write to us, visit our offices, or call the grievance helpline"
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact Us' }]}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* ── Contact Form (2/3) ────────────────────────────────────────── */}
        <div className="lg:col-span-2">
          {submitted ? (
            <div className="card p-10 flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
                <CheckCircleIcon className="w-9 h-9 text-emerald-600" aria-hidden="true" />
              </div>
              <h2 className="text-xl font-bold text-navy-800">Message Sent Successfully</h2>
              <p className="text-sm text-slate-500 max-w-sm">
                Thank you for contacting APTRANSCO. We will respond to your query within 2 working
                days at the email address you provided.
              </p>
              <button
                type="button"
                onClick={() => { setForm({ name: '', email: '', phone: '', subject: '', message: '' }); setSubmitted(false); }}
                className="btn-secondary btn-md mt-2"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="card p-6 flex flex-col gap-5" aria-label="Contact form">
              <h2 className="text-lg font-bold text-navy-800">Send Us a Message</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input id="contact-name" name="name" type="text" value={form.name}
                    onChange={handleChange} placeholder="Your full name"
                    className={`input ${errors.name ? 'border-red-400 focus:ring-red-400' : ''}`}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    aria-invalid={!!errors.name} />
                  <FieldError msg={errors.name} />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input id="contact-email" name="email" type="email" value={form.email}
                    onChange={handleChange} placeholder="you@example.com"
                    className={`input ${errors.email ? 'border-red-400 focus:ring-red-400' : ''}`}
                    aria-invalid={!!errors.email} />
                  <FieldError msg={errors.email} />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-medium text-slate-700 mb-1">
                    Mobile Number <span className="text-slate-400 text-xs">(optional)</span>
                  </label>
                  <input id="contact-phone" name="phone" type="tel" value={form.phone}
                    onChange={handleChange} placeholder="10-digit mobile number"
                    className={`input ${errors.phone ? 'border-red-400 focus:ring-red-400' : ''}`}
                    aria-invalid={!!errors.phone} />
                  <FieldError msg={errors.phone} />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="contact-subject" className="block text-sm font-medium text-slate-700 mb-1">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <select id="contact-subject" name="subject" value={form.subject}
                    onChange={handleChange}
                    className={`input ${errors.subject ? 'border-red-400 focus:ring-red-400' : ''}`}
                    aria-invalid={!!errors.subject}>
                    <option value="">Select a subject…</option>
                    {SUBJECT_OPTIONS.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  <FieldError msg={errors.subject} />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea id="contact-message" name="message" rows={5} value={form.message}
                  onChange={handleChange} placeholder="Describe your query or feedback in detail…"
                  className={`input resize-none ${errors.message ? 'border-red-400 focus:ring-red-400' : ''}`}
                  aria-invalid={!!errors.message} />
                <div className="flex justify-between mt-1">
                  <FieldError msg={errors.message} />
                  <span className="text-xs text-slate-300 ml-auto">{form.message.length} chars</span>
                </div>
              </div>

              <button type="submit" disabled={submitting}
                className="btn-primary btn-md self-start inline-flex items-center gap-2">
                {submitting ? (
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" aria-hidden="true" />
                ) : (
                  <PaperAirplaneIcon className="w-4 h-4" aria-hidden="true" />
                )}
                {submitting ? 'Sending…' : 'Send Message'}
              </button>

              <p className="text-xs text-slate-400">
                For urgent matters, call the grievance helpline <strong>1912</strong> (24×7).
              </p>
            </form>
          )}
        </div>

        {/* ── Sidebar: Offices + Helpline ──────────────────────────────── */}
        <aside className="flex flex-col gap-6">
          {/* Grievance Helpline */}
          <div className="card p-5 bg-navy-700 text-white">
            <h2 className="text-sm font-bold text-white mb-3 uppercase tracking-wide">Grievance Helpline</h2>
            <div className="text-4xl font-extrabold text-gold-400 mb-1">1912</div>
            <p className="text-navy-300 text-xs">Available 24 × 7 for power-related complaints and emergencies.</p>
          </div>

          {/* Office cards */}
          {OFFICES.map((office) => (
            <div key={office.name} className="card p-5 flex flex-col gap-3">
              <h3 className="text-sm font-bold text-navy-800">{office.name}</h3>
              <dl className="flex flex-col gap-2 text-xs">
                <div className="flex items-start gap-2">
                  <MapPinIcon className="w-3.5 h-3.5 text-slate-400 mt-0.5 shrink-0" aria-hidden="true" />
                  <dd className="text-slate-600 leading-snug">{office.address}</dd>
                </div>
                {office.phone && (
                  <div className="flex items-center gap-2">
                    <PhoneIcon className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />
                    <a href={`tel:${office.phone}`} className="text-navy-600 hover:underline">{office.phone}</a>
                  </div>
                )}
                {office.email && (
                  <div className="flex items-center gap-2">
                    <EnvelopeIcon className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />
                    <a href={`mailto:${office.email}`} className="text-navy-600 hover:underline">{office.email}</a>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <ClockIcon className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />
                  <dd className="text-slate-600">{office.hours}</dd>
                </div>
              </dl>
            </div>
          ))}
        </aside>
      </div>
    </PageShell>
  );
}
