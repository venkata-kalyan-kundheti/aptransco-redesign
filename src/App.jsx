/**
 * src/App.jsx
 * Root component: BrowserRouter + lazy-loaded routes + Header + Footer.
 * All page components use React.lazy() for code splitting.
 */

import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Spinner from '@/components/ui/Spinner';
import ErrorBoundary from '@/components/ui/ErrorBoundary';

// ── Lazy page imports ─────────────────────────────────────────────────────────
const Home              = lazy(() => import('@/pages/Home'));
const AboutAPTRANSCO    = lazy(() => import('@/pages/about/AboutAPTRANSCO'));
const VisionMission     = lazy(() => import('@/pages/about/VisionMission'));
const OrganizationChart = lazy(() => import('@/pages/about/OrganizationChart'));
const BoardLeadership   = lazy(() => import('@/pages/about/BoardLeadership'));
const ContactDirectory  = lazy(() => import('@/pages/about/ContactDirectory'));
const TransmissionNetwork = lazy(() => import('@/pages/operations/TransmissionNetwork'));
const Projects          = lazy(() => import('@/pages/operations/Projects'));
const GridMap           = lazy(() => import('@/pages/operations/GridMap'));
const RegulatoryCompliance = lazy(() => import('@/pages/compliance/RegulatoryCompliance'));
const TendersList       = lazy(() => import('@/pages/tenders/TendersList'));
const TenderDetail      = lazy(() => import('@/pages/tenders/TenderDetail'));
const NotificationsList   = lazy(() => import('@/pages/notifications/NotificationsList'));
const NotificationDetail  = lazy(() => import('@/pages/notifications/NotificationDetail'));
const Training            = lazy(() => import('@/pages/training/Training'));
const EmployeePortal      = lazy(() => import('@/pages/utility/employees/EmployeePortal'));
const Careers           = lazy(() => import('@/pages/careers/Careers'));
const VendorInfo        = lazy(() => import('@/pages/vendor/VendorInfo'));
const RTI               = lazy(() => import('@/pages/compliance/RTI'));
const TariffRegulatory  = lazy(() => import('@/pages/compliance/TariffRegulatory'));
const DocumentLibrary   = lazy(() => import('@/pages/reports/DocumentLibrary'));
const AnnualReports     = lazy(() => import('@/pages/reports/AnnualReports'));
const PowerSectorReports = lazy(() => import('@/pages/reports/PowerSectorReports'));
const SafetyStandards   = lazy(() => import('@/pages/safety/SafetyStandards'));
const TelecomIT         = lazy(() => import('@/pages/departments/TelecomIT'));
const GridTransmission  = lazy(() => import('@/pages/departments/GridTransmission'));
const ProjectsDept      = lazy(() => import('@/pages/departments/ProjectsDept'));
const FinanceAccounts   = lazy(() => import('@/pages/departments/FinanceAccounts'));
const HRAdmin           = lazy(() => import('@/pages/departments/HRAdmin'));
const TrainingPRTI      = lazy(() => import('@/pages/departments/TrainingPRTI'));
const SearchResults     = lazy(() => import('@/pages/utility/SearchResults'));
const ContactFeedback   = lazy(() => import('@/pages/utility/ContactFeedback'));
const FAQ               = lazy(() => import('@/pages/utility/FAQ'));
const ImportantLinks    = lazy(() => import('@/pages/utility/ImportantLinks'));
const Sitemap           = lazy(() => import('@/pages/utility/Sitemap'));
const PrivacyPolicy     = lazy(() => import('@/pages/utility/PrivacyPolicy'));
const Disclaimer        = lazy(() => import('@/pages/utility/Disclaimer'));
const AccessibilityStatement = lazy(() => import('@/pages/utility/AccessibilityStatement'));
const NotFound          = lazy(() => import('@/pages/utility/NotFound'));
const StyleGuidePreview = lazy(() => import('@/design-system/StyleGuidePreview'));


// ── Scroll to top on route change ────────────────────────────────────────────
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

// ── Route tree ───────────────────────────────────────────────────────────────
function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main id="main-content" tabIndex="-1" className="min-h-screen outline-none">
        <ErrorBoundary>
          <Suspense fallback={<Spinner fullPage />}>
          <Routes>
            <Route path="/"                              element={<Home />} />
            {/* About */}
            <Route path="/about"                         element={<AboutAPTRANSCO />} />
            <Route path="/about/vision-mission"          element={<VisionMission />} />
            <Route path="/about/organization"            element={<OrganizationChart />} />
            <Route path="/about/leadership"              element={<BoardLeadership />} />
            <Route path="/about/contacts"                element={<ContactDirectory />} />
            {/* Operations */}
            <Route path="/network"                       element={<TransmissionNetwork />} />
            <Route path="/projects"                      element={<Projects />} />
            <Route path="/grid-map"                      element={<GridMap />} />
            <Route path="/operations/network"            element={<TransmissionNetwork />} />
            <Route path="/operations/projects"           element={<Projects />} />
            {/* Tenders */}
            <Route path="/tenders"                       element={<TendersList />} />
            <Route path="/tenders/:id"                   element={<TenderDetail />} />
            {/* Notifications */}
            <Route path="/notifications"                 element={<NotificationsList />} />
            <Route path="/notifications/:id"             element={<NotificationDetail />} />
            {/* Training */}
            <Route path="/training"                      element={<Training />} />
            {/* Employee Portal */}
            <Route path="/employees"                     element={<EmployeePortal />} />
            {/* Stakeholder */}
            <Route path="/careers"                       element={<Careers />} />
            <Route path="/vendor"                        element={<VendorInfo />} />
            {/* Compliance */}
            <Route path="/rti"                           element={<RTI />} />
            <Route path="/regulatory"                    element={<TariffRegulatory />} />
            <Route path="/regulatory-compliance"         element={<RegulatoryCompliance />} />
            <Route path="/safety"                        element={<SafetyStandards />} />
            {/* Reports */}
            <Route path="/documents"                     element={<DocumentLibrary />} />
            <Route path="/reports/annual"                element={<AnnualReports />} />
            <Route path="/reports/power-sector"          element={<PowerSectorReports />} />
            {/* Departments */}
            <Route path="/departments/telecom-it"        element={<TelecomIT />} />
            <Route path="/departments/grid-transmission" element={<GridTransmission />} />
            <Route path="/departments/projects"          element={<ProjectsDept />} />
            <Route path="/departments/finance"           element={<FinanceAccounts />} />
            <Route path="/departments/hr-admin"          element={<HRAdmin />} />
            <Route path="/departments/training"          element={<TrainingPRTI />} />
            {/* Utility */}
            <Route path="/search"                        element={<SearchResults />} />
            <Route path="/contact"                       element={<ContactFeedback />} />
            <Route path="/faq"                           element={<FAQ />} />
            <Route path="/links"                         element={<ImportantLinks />} />
            <Route path="/sitemap"                       element={<Sitemap />} />
            <Route path="/privacy-policy"                element={<PrivacyPolicy />} />
            <Route path="/disclaimer"                    element={<Disclaimer />} />
            <Route path="/accessibility"                 element={<AccessibilityStatement />} />
            <Route path="/style-guide"                   element={<StyleGuidePreview />} />
            {/* 404 catch-all */}
            <Route path="*"                              element={<NotFound />} />
          </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
