/**
 * src/pages/utility/employees/EmployeePortal.jsx — Full implementation
 * Route: /employees
 */
import {
  LockClosedIcon, UserCircleIcon, ComputerDesktopIcon,
  DocumentTextIcon, PhoneIcon, EnvelopeIcon, ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/outline';
import PageShell from '@/components/layout/PageShell';

const PORTAL_SERVICES = [
  { icon: UserCircleIcon,     title: 'Employee Self Service',   desc: 'View payslips, leave balance, service book, and personal details.', href: '#', external: true },
  { icon: DocumentTextIcon,   title: 'e-Office',                desc: 'File movement, correspondence tracking, and digital approvals.', href: 'https://eoffice.ap.gov.in', external: true },
  { icon: ComputerDesktopIcon,title: 'Webmail',                 desc: 'Official APTRANSCO email for all officers and staff.', href: '#', external: true },
  { icon: DocumentTextIcon,   title: 'Pay Slip Download',       desc: 'Download monthly pay slips for salary and PF reconciliation.', href: '#', external: true },
  { icon: DocumentTextIcon,   title: 'Leave Management',        desc: 'Apply, approve, and track leave requests online.', href: '#', external: true },
  { icon: DocumentTextIcon,   title: 'Property Returns',        desc: 'Submit annual property statements as required by AP government.', href: '#', external: true },
];

const IMPORTANT_POLICIES = [
  { title: 'APTRANSCO Service Regulations 2022',      href: '#' },
  { title: 'Revised Pay Scales GO — GO Ms. No. 86',   href: '#' },
  { title: 'Leave Rules & CL/EL/SCL Guidelines',      href: '#' },
  { title: 'TA/DA Rules for Field & Outstation Duty', href: '#' },
  { title: 'Medical Reimbursement Procedures',         href: '#' },
  { title: 'Departmental Promotion Policy 2024',       href: '#' },
  { title: 'Transfer & Posting Guidelines',            href: '#' },
  { title: 'Conduct Rules & Disciplinary Procedures',  href: '#' },
];

const CONTACTS = [
  { dept: 'HRD / Establishment',  phone: '+91-866-2577740', email: 'hrd@aptransco.gov.in' },
  { dept: 'Pay & Accounts',        phone: '+91-866-2577780', email: 'gm.finance@aptransco.gov.in' },
  { dept: 'Vigilance',             phone: '+91-866-2577800', email: 'vigilance@aptransco.gov.in' },
  { dept: 'PRTI (Training)',       phone: '+91-866-2577900', email: 'prti@aptransco.gov.in' },
];

export default function EmployeePortal() {
  return (
    <PageShell
      title="Employee Portal"
      description="Online services, policies, and departmental contacts for APTRANSCO employees and officers."
      breadcrumb={['Employee Portal']}
    >
      {/* Login notice */}
      <div className="card p-5 mb-10 border-l-4 border-gold-400 flex items-start gap-4">
        <LockClosedIcon className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" aria-hidden="true" />
        <p className="text-sm text-slate-600 leading-relaxed">
          Employee Self-Service portals require your <strong className="text-navy-700">APTRANSCO Employee ID and password</strong>.
          For password resets, contact IT Helpdesk at <a href="mailto:ithelpdesk@aptransco.gov.in" className="text-navy-600 hover:underline">ithelpdesk@aptransco.gov.in</a> or call <a href="tel:+918662577770" className="text-navy-600 hover:underline">+91-866-2577770</a>.
        </p>
      </div>

      {/* Portal services */}
      <section aria-labelledby="services-heading" className="mb-12">
        <h2 id="services-heading" className="section-title mb-6">Online Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PORTAL_SERVICES.map((svc) => {
            const Icon = svc.icon;
            return (
              <a
                key={svc.title}
                href={svc.href}
                target={svc.external ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="card-hover p-5 flex flex-col gap-3 group"
                aria-label={svc.title}
              >
                <div className="w-11 h-11 rounded-xl bg-navy-50 flex items-center justify-center group-hover:bg-navy-700 transition-colors duration-200">
                  <Icon className="w-6 h-6 text-navy-600 group-hover:text-white transition-colors duration-200" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-navy-800 text-sm group-hover:text-navy-900">{svc.title}</p>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{svc.desc}</p>
                </div>
                {svc.external && (
                  <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5 text-slate-300 mt-auto" aria-hidden="true" />
                )}
              </a>
            );
          })}
        </div>
      </section>

      {/* Policies */}
      <section aria-labelledby="policies-heading" className="mb-12">
        <h2 id="policies-heading" className="section-title mb-6">Important Circulars & Policies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {IMPORTANT_POLICIES.map((policy) => (
            <a
              key={policy.title}
              href={policy.href}
              className="card p-4 flex items-center gap-3 hover:shadow-card-md transition-shadow group"
            >
              <DocumentTextIcon className="w-5 h-5 text-navy-400 shrink-0" aria-hidden="true" />
              <span className="text-sm text-navy-700 font-medium group-hover:text-navy-900">{policy.title}</span>
            </a>
          ))}
        </div>
      </section>

      {/* HR Contacts */}
      <section aria-labelledby="hr-contacts-heading">
        <h2 id="hr-contacts-heading" className="section-title mb-4">HR & Employee Contacts</h2>
        <div className="table-responsive">
          <table className="table-base">
            <thead>
              <tr>
                <th className="table-th">Department</th>
                <th className="table-th">Phone</th>
                <th className="table-th">Email</th>
              </tr>
            </thead>
            <tbody>
              {CONTACTS.map((row) => (
                <tr key={row.dept} className="table-tr">
                  <td className="table-td font-medium text-navy-700">{row.dept}</td>
                  <td className="table-td">
                    <a href={`tel:${row.phone.replace(/\s/g,'')}`} className="flex items-center gap-1 text-xs text-navy-600 hover:underline">
                      <PhoneIcon className="w-3.5 h-3.5" aria-hidden="true" />{row.phone}
                    </a>
                  </td>
                  <td className="table-td">
                    <a href={`mailto:${row.email}`} className="flex items-center gap-1 text-xs text-navy-600 hover:underline">
                      <EnvelopeIcon className="w-3.5 h-3.5" aria-hidden="true" />{row.email}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </PageShell>
  );
}
