/**
 * src/pages/utility/Disclaimer.jsx — Full implementation
 */
import PageShell from '@/components/layout/PageShell';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const SECTIONS = [
  {
    id: 'general',
    heading: 'General Disclaimer',
    content: `The information on this website is published by the Andhra Pradesh Transmission Corporation Limited (APTRANSCO) for public information purposes only. While every effort has been made to ensure accuracy and currency of the information, APTRANSCO does not guarantee that the information is complete, accurate, or up to date at all times.

The content on this website is subject to change without notice. APTRANSCO shall not be held responsible for any inaccuracies, errors, or omissions in the content of this website or for any actions taken based on such information.`,
  },
  {
    id: 'no-warranty',
    heading: 'No Warranty',
    content: `This website and its contents are provided "as is" without any express or implied warranties of any kind, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.

APTRANSCO does not warrant that:
• The website will be available at all times or free from errors
• Information contained herein is complete or current
• The website is free from viruses or other harmful components
• Use of the information will achieve any particular result`,
  },
  {
    id: 'tender',
    heading: 'Tender and Procurement Information',
    content: `Tender documents, notices, and corrigenda published on this website are for reference and convenience only. In case of any discrepancy between the content on this website and the official tender documents published on the AP State e-Procurement portal (tender.apeprocurement.gov.in), the version on the e-Procurement portal shall prevail.

Prospective bidders are advised to obtain official tender documents and verify all details directly from the concerned circle/division office of APTRANSCO before submission of bids. APTRANSCO shall not be liable for any loss arising from reliance on information displayed on this website for tendering purposes.`,
  },
  {
    id: 'official-docs',
    heading: 'Official Documents and Orders',
    content: `Government orders, circulars, notifications, and regulatory documents displayed on this website are provided for convenient public access. These documents are reproduced from official sources, but the original signed/printed documents issued by the competent authority shall be considered the authentic version.

In all legal, regulatory, or administrative proceedings, only the original duly signed documents shall be considered authoritative.`,
  },
  {
    id: 'links',
    heading: 'External Links',
    content: `This website contains hyperlinks to external websites including the AP e-Procurement portal, APERC, Ministry of Power, SLDC, NIC portals, and DISCOM websites. These links are provided for the user's convenience only.

APTRANSCO does not endorse or take responsibility for the accuracy, reliability, or content of any linked external website. The inclusion of a hyperlink does not imply any endorsement or recommendation by APTRANSCO. APTRANSCO is not responsible for the availability of external websites.`,
  },
  {
    id: 'technical',
    heading: 'Technical Data and Statistics',
    content: `Network statistics, generation data, grid frequency, and technical parameters displayed on this website are indicative figures for public information purposes. Real-time and precise operational data is available through the SLDC portal (sldc.ap.gov.in).

For official reporting, regulatory filings, or project proposals, verify all technical data directly with the concerned APTRANSCO department.`,
  },
  {
    id: 'liability',
    heading: 'Limitation of Liability',
    content: `To the fullest extent permitted by applicable law, APTRANSCO, its officers, directors, and employees shall not be liable for:

• Any direct, indirect, incidental, special, or consequential damages arising from use of this website
• Loss of data, profits, business, or goodwill resulting from use or inability to use this website
• Errors, inaccuracies, or omissions in any content on this website
• Any delay, failure, or interruption in service of this website
• Actions taken by third parties as a result of information published on this website`,
  },
  {
    id: 'intellectual-property',
    heading: 'Intellectual Property',
    content: `The design, layout, and original content of this website are the property of APTRANSCO. Government data, statistics, official documents, and photographs relating to official APTRANSCO activities may be reproduced for non-commercial, educational, or informational purposes with appropriate attribution.

The APTRANSCO logo and brand marks are registered. Unauthorised commercial use of any content from this website is prohibited.`,
  },
  {
    id: 'jurisdiction',
    heading: 'Governing Law and Jurisdiction',
    content: `This Disclaimer and your use of this website are governed by the laws of India. Any dispute arising out of or in connection with the use of this website shall be subject to the exclusive jurisdiction of the courts at Vijayawada, Andhra Pradesh, India.`,
  },
  {
    id: 'updates',
    heading: 'Updates to This Disclaimer',
    content: `APTRANSCO reserves the right to modify this Disclaimer at any time without prior notice. The updated Disclaimer will be published on this page with a revised effective date. Continued use of this website after any such changes constitutes your acceptance of the updated Disclaimer.

Effective Date: 01 May 2026`,
  },
];

export default function Disclaimer() {
  return (
    <PageShell
      title="Disclaimer"
      description="Important information about the accuracy, reliability, and use of content on this website."
      breadcrumb={['Disclaimer']}
    >
      <div className="max-w-3xl">
        {/* Warning banner */}
        <div className="flex items-start gap-3 p-4 mb-8 bg-amber-50 border border-amber-200 rounded-lg">
          <ExclamationTriangleIcon className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-sm text-amber-800 leading-relaxed">
            Please read this Disclaimer carefully before using the APTRANSCO website.
            By accessing or using this website, you accept the terms of this Disclaimer in full.
          </p>
        </div>

        {/* Sections */}
        <div className="flex flex-col gap-8">
          {SECTIONS.map((section) => (
            <section key={section.id} aria-labelledby={`disc-h-${section.id}`}>
              <h2 id={`disc-h-${section.id}`} className="text-base font-semibold text-navy-700 mb-3 pb-2 border-b border-slate-100">
                {section.heading}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            </section>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-10 card p-5 bg-navy-50 border-navy-200">
          <h2 className="text-sm font-bold text-navy-800 mb-2">Questions About This Disclaimer?</h2>
          <p className="text-sm text-slate-600 mb-3">
            For queries relating to this Disclaimer, contact the Web Information Manager.
          </p>
          <a href="mailto:webmaster@aptransco.gov.in" className="btn-secondary btn-sm inline-flex">
            webmaster@aptransco.gov.in
          </a>
        </div>
      </div>
    </PageShell>
  );
}
