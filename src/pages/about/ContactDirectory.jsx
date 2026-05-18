/**
 * src/pages/about/ContactDirectory.jsx — Full implementation
 */
import { PhoneIcon, EnvelopeIcon, MapPinIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline';
import PageShell from '@/components/layout/PageShell';

const OFFICES = [
  {
    id: 'corporate',
    name: 'Corporate Office',
    address: 'Vidyut Soudha, Khairatabad, Vijayawada – 520 013, Andhra Pradesh',
    phone: ['+91-866-2577777', '+91-866-2577000'],
    fax: '+91-866-2574999',
    email: 'cmd@aptransco.gov.in',
    hours: 'Mon–Fri: 10:00 AM – 5:30 PM',
  },
  {
    id: 'north-zone',
    name: 'North Zone Office (Visakhapatnam)',
    address: 'APTRANSCO North Zone, NAD Junction, Visakhapatnam – 530 009',
    phone: ['+91-891-2700100'],
    email: 'se.nz@aptransco.gov.in',
    hours: 'Mon–Sat: 9:00 AM – 5:00 PM',
  },
  {
    id: 'south-zone',
    name: 'South Zone Office (Tirupati)',
    address: 'APTRANSCO South Zone, Renigunta Road, Tirupati – 517 501',
    phone: ['+91-877-2220100'],
    email: 'se.sz@aptransco.gov.in',
    hours: 'Mon–Sat: 9:00 AM – 5:00 PM',
  },
  {
    id: 'east-zone',
    name: 'East Zone Office (Vijayawada)',
    address: 'APTRANSCO East Zone, Eluru Road, Vijayawada – 520 002',
    phone: ['+91-866-2435100'],
    email: 'se.ez@aptransco.gov.in',
    hours: 'Mon–Sat: 9:00 AM – 5:00 PM',
  },
];

const DEPT_CONTACTS = [
  { dept: 'Chairman & Managing Director',  phone: '+91-866-2577700', email: 'cmd@aptransco.gov.in' },
  { dept: 'Director (Projects)',            phone: '+91-866-2577710', email: 'dir.projects@aptransco.gov.in' },
  { dept: 'Director (Operations)',          phone: '+91-866-2577720', email: 'dir.operations@aptransco.gov.in' },
  { dept: 'Director (Finance)',             phone: '+91-866-2577730', email: 'dir.finance@aptransco.gov.in' },
  { dept: 'Director (HR & Admin)',          phone: '+91-866-2577740', email: 'dir.hr@aptransco.gov.in' },
  { dept: 'CE (Grid Transmission)',         phone: '+91-866-2577750', email: 'ce.grid@aptransco.gov.in' },
  { dept: 'CE (Projects)',                  phone: '+91-866-2577760', email: 'ce.projects@aptransco.gov.in' },
  { dept: 'CE (Telecom & IT / SCADA)',      phone: '+91-866-2577770', email: 'ce.telecom@aptransco.gov.in' },
  { dept: 'Public Grievance Officer',       phone: '+91-866-2577100', email: 'grievance@aptransco.gov.in' },
  { dept: 'RTI / CPIO',                     phone: '+91-866-2577200', email: 'cpio@aptransco.gov.in' },
];

export default function ContactDirectory() {
  return (
    <PageShell
      title="Contact Directory"
      description="Official contact information for APTRANSCO's Corporate Office, Zonal Offices, and key departments."
      breadcrumb={[{ label: 'About', href: '/about' }, 'Contact Directory']}
    >
      {/* Offices */}
      <section aria-labelledby="offices-heading" className="mb-12">
        <h2 id="offices-heading" className="section-title mb-2">Regional Offices</h2>
        <p className="section-subtitle mb-6">Corporate headquarters and three operational zones</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {OFFICES.map((office) => (
            <div key={office.id} className="card p-5 flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <BuildingOffice2Icon className="w-5 h-5 text-navy-500 shrink-0 mt-0.5" aria-hidden="true" />
                <h3 className="font-bold text-navy-800 text-base">{office.name}</h3>
              </div>
              <dl className="flex flex-col gap-2 text-sm">
                <div className="flex items-start gap-2">
                  <MapPinIcon className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <dd className="text-slate-600">{office.address}</dd>
                </div>
                {office.phone.map((ph) => (
                  <div key={ph} className="flex items-center gap-2">
                    <PhoneIcon className="w-4 h-4 text-slate-400 shrink-0" aria-hidden="true" />
                    <a href={`tel:${ph.replace(/\s/g, '')}`} className="text-navy-600 hover:text-navy-800 hover:underline">{ph}</a>
                  </div>
                ))}
                <div className="flex items-center gap-2">
                  <EnvelopeIcon className="w-4 h-4 text-slate-400 shrink-0" aria-hidden="true" />
                  <a href={`mailto:${office.email}`} className="text-navy-600 hover:text-navy-800 hover:underline">{office.email}</a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 text-slate-400 shrink-0 text-xs leading-4 font-bold text-center">⏱</span>
                  <dd className="text-slate-500 text-xs">{office.hours}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </section>

      {/* Department Directory */}
      <section aria-labelledby="dept-dir-heading">
        <h2 id="dept-dir-heading" className="section-title mb-2">Departmental Contact Directory</h2>
        <p className="section-subtitle mb-6">All numbers are at Corporate Office, Vijayawada unless noted</p>
        <div className="table-responsive">
          <table className="table-base">
            <thead>
              <tr>
                <th className="table-th">Department / Officer</th>
                <th className="table-th">Phone</th>
                <th className="table-th">Email</th>
              </tr>
            </thead>
            <tbody>
              {DEPT_CONTACTS.map((row) => (
                <tr key={row.dept} className="table-tr">
                  <td className="table-td font-medium text-navy-700">{row.dept}</td>
                  <td className="table-td">
                    <a href={`tel:${row.phone.replace(/\s/g, '')}`} className="text-navy-600 hover:underline text-xs">{row.phone}</a>
                  </td>
                  <td className="table-td">
                    <a href={`mailto:${row.email}`} className="text-navy-600 hover:underline text-xs">{row.email}</a>
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
