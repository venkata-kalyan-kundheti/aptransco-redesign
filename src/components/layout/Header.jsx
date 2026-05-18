/**
 * src/components/layout/Header.jsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Full site header with:
 *   - Skip-to-content link (WCAG 2.1 AA)
 *   - Top utility bar  (navy-700 bg)  — quick links + social badges
 *   - Logo bar                        — logo + org name + search
 *   - Desktop navbar                  — horizontal nav with dropdown menus
 *   - Mobile hamburger                — slide-out drawer with accordion
 *
 * Accessibility:
 *   - aria-expanded on all toggles
 *   - aria-label / aria-haspopup on nav buttons
 *   - role="dialog" + aria-modal on mobile drawer
 *   - focus trap inside mobile drawer when open
 *   - Keyboard: Escape closes dropdown / drawer
 *   - All icons are aria-hidden="true" with text alternatives
 */

import { useState, useRef, useEffect, useCallback } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  BoltIcon,
  GlobeAltIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';

import { NAV_ITEMS, getParentNavItem } from '@/data/navConfig';
import { ORG_FULL_NAME, ORG_SHORT_NAME, TOP_BAR_LINKS } from '@/utils/constants';

// ── Tiny hook: close on outside click ─────────────────────────────────────────
function useOutsideClick(ref, onClose) {
  useEffect(() => {
    function handler(e) {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    }
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [ref, onClose]);
}

// ── Tiny hook: close on Escape key ────────────────────────────────────────────
function useEscape(onClose) {
  useEffect(() => {
    function handler(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);
}

// ═════════════════════════════════════════════════════════════════════════════
// TOP UTILITY BAR
// ═════════════════════════════════════════════════════════════════════════════
function TopBar() {
  return (
    <div className="bg-navy-700 text-slate-200" role="complementary" aria-label="Utility links">
      <div className="container-site">
        <div className="flex items-center justify-between py-1.5 text-xs">
          {/* Left: Quick links */}
          <nav aria-label="Quick utility links">
            <ul className="flex items-center gap-4">
              {TOP_BAR_LINKS.map((link) => (
                <li key={link.id}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gold-300 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-400 rounded"
                      aria-label={`${link.label} (opens in new tab)`}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="hover:text-gold-300 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-400 rounded"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Right: ISO badge + accessibility selector */}
          <div className="hidden sm:flex items-center gap-3">
            <span
              className="border border-navy-500 rounded px-2 py-0.5 text-2xs tracking-wide font-medium text-slate-300"
              aria-label="ISO 9001:2015 certified"
            >
              ISO 9001:2015
            </span>
            <span className="text-slate-500" aria-hidden="true">|</span>
            <button
              className="hover:text-gold-300 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-400 rounded"
              aria-label="Adjust text size"
              title="Adjust text size"
            >
              <span className="text-2xs font-bold">A</span>
              <span className="text-xs font-bold ml-0.5">A</span>
            </button>
            <button
              className="hover:text-gold-300 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-400 rounded"
              aria-label="Switch to high contrast mode"
              title="High contrast"
            >
              <GlobeAltIcon className="w-3.5 h-3.5 inline" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ═════════════════════════════════════════════════════════════════════════════
// LOGO BAR (logo + org name + search)
// ═════════════════════════════════════════════════════════════════════════════
function LogoBar({ onSearchOpen }) {
  return (
    <div className="bg-white border-b border-slate-200">
      <div className="container-site">
        <div className="flex items-center justify-between py-3 gap-4">
          {/* Logo + Org Name */}
          <Link
            to="/"
            className="flex items-center gap-3 flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded"
            aria-label={`${ORG_FULL_NAME} — home`}
          >
            {/*
              SVG logo: preloaded in <head>, served from /public/logo.svg.
              width/height explicit → prevents layout shift (CLS).
              loading="eager" on LCP element — no lazy deferral.
            */}
            <img
              src="/logo.svg"
              alt="APTRANSCO logo"
              width="48"
              height="48"
              loading="eager"
              decoding="async"
              className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0"
            />

            <div>
              <div className="text-navy-700 font-bold text-lg md:text-xl leading-tight">
                {ORG_SHORT_NAME}
              </div>
              <div className="text-slate-500 text-xs md:text-sm leading-tight hidden sm:block">
                {ORG_FULL_NAME}
              </div>
            </div>
          </Link>

          {/* Right: AP Govt emblem + Search button */}
          <div className="flex items-center gap-3">
            {/* Govt of AP badge */}
            <span className="hidden md:block text-xs text-slate-400 text-right leading-tight">
              Government of<br />Andhra Pradesh
            </span>

            {/* Search button */}
            <button
              onClick={onSearchOpen}
              className="flex items-center gap-2 border border-slate-200 rounded-md px-3 py-2
                         text-sm text-slate-500 hover:border-navy-400 hover:text-navy-700
                         transition-colors duration-150 min-h-[44px]
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
              aria-label="Search the website"
              aria-expanded="false"
            >
              <MagnifyingGlassIcon className="w-4 h-4" aria-hidden="true" />
              <span className="hidden sm:block">Search</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ═════════════════════════════════════════════════════════════════════════════
// DESKTOP DROPDOWN ITEM
// ═════════════════════════════════════════════════════════════════════════════
function NavDropdown({ item, isActive }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const closeMenu = useCallback(() => setOpen(false), []);

  useOutsideClick(ref, closeMenu);
  useEscape(closeMenu);

  const hasChildren = item.children && item.children.length > 0;

  if (!hasChildren) {
    return (
      <li>
        <NavLink
          to={item.href}
          end={item.href === '/'}
          className={({ isActive: a }) =>
            `nav-item${a ? ' nav-item-active' : ''}`
          }
        >
          {item.label}
        </NavLink>
      </li>
    );
  }

  return (
    <li className="relative" ref={ref}>
      <button
        onClick={() => setOpen((p) => !p)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className={`nav-item flex items-center gap-1 ${isActive ? 'nav-item-active' : ''}`}
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={`dropdown-${item.id}`}
        id={`nav-btn-${item.id}`}
      >
        {item.label}
        <ChevronDownIcon
          className={`w-3.5 h-3.5 transition-transform duration-150 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      {/* Dropdown panel */}
      {open && (
        <div
          id={`dropdown-${item.id}`}
          role="region"
          aria-labelledby={`nav-btn-${item.id}`}
          className="dropdown-panel"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <ul role="list">
            {item.children.map((child) => (
              <li key={child.id}>
                <NavLink
                  to={child.href}
                  className={({ isActive: a }) =>
                    `dropdown-item${a ? ' bg-navy-50 text-navy-700 font-medium' : ''}`
                  }
                  onClick={closeMenu}
                >
                  {child.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}

// ═════════════════════════════════════════════════════════════════════════════
// DESKTOP NAVBAR
// ═════════════════════════════════════════════════════════════════════════════
function DesktopNavbar({ onMobileMenuOpen }) {
  const location = useLocation();
  const activeParent = getParentNavItem(location.pathname);

  return (
    <div className="bg-navy-500 shadow-nav no-print" aria-label="Main navigation wrapper">
      <div className="container-site">
        <div className="flex items-center justify-between">
          {/* Desktop nav — hidden on mobile */}
          <nav
            className="hidden lg:block"
            aria-label="Main navigation"
            id="main-nav"
          >
            <ul className="flex items-center gap-0.5 py-1" role="list">
              {NAV_ITEMS.map((item) => (
                <NavDropdown
                  key={item.id}
                  item={item}
                  isActive={activeParent?.id === item.id}
                />
              ))}
            </ul>
          </nav>

          {/* Mobile: Hamburger button (visible only below lg) */}
          <div className="flex items-center lg:hidden py-2">
            {/* Logo text on nav bar for mobile context */}
            <span className="text-white font-semibold text-sm mr-auto pl-1">
              {ORG_SHORT_NAME}
            </span>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden p-2 rounded-md text-white
                       hover:bg-navy-600 active:bg-navy-700
                       transition-colors duration-150 min-h-[44px] min-w-[44px]
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
            onClick={onMobileMenuOpen}
            aria-label="Open navigation menu"
            aria-expanded="false"
            aria-controls="mobile-nav-drawer"
          >
            <Bars3Icon className="w-6 h-6" aria-hidden="true" />
          </button>

          {/* Right side: Phone quick link on desktop */}
          <div className="hidden lg:flex items-center gap-2 text-xs text-navy-200 py-2">
            <PhoneIcon className="w-3.5 h-3.5" aria-hidden="true" />
            <a
              href="tel:+918662577777"
              className="hover:text-white transition-colors duration-150"
              aria-label="Call APTRANSCO: +91-866-2577777"
            >
              +91-866-2577777
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ═════════════════════════════════════════════════════════════════════════════
// MOBILE MENU ACCORDION ITEM
// ═════════════════════════════════════════════════════════════════════════════
function MobileAccordionItem({ item, onClose }) {
  const [open, setOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  if (!hasChildren) {
    return (
      <li>
        <NavLink
          to={item.href}
          className={({ isActive }) =>
            `flex items-center justify-between py-3 px-4 text-sm font-medium border-b border-navy-600
             transition-colors duration-150 min-h-[44px]
             ${isActive ? 'bg-gold-400 text-navy-700' : 'text-white hover:bg-navy-600'}`
          }
          onClick={onClose}
        >
          {item.label}
          <ChevronRightIcon className="w-4 h-4 opacity-50" aria-hidden="true" />
        </NavLink>
      </li>
    );
  }

  return (
    <li>
      <button
        onClick={() => setOpen((p) => !p)}
        className={`flex w-full items-center justify-between py-3 px-4 text-sm font-medium border-b border-navy-600
                    transition-colors duration-150 min-h-[44px]
                    ${open ? 'bg-navy-800 text-gold-400' : 'text-white hover:bg-navy-600'}`}
        aria-expanded={open}
        aria-controls={`mobile-accordion-${item.id}`}
      >
        {item.label}
        <ChevronDownIcon
          className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <ul
          id={`mobile-accordion-${item.id}`}
          className="bg-navy-800"
          role="list"
        >
          {item.children.map((child) => (
            <li key={child.id}>
              <NavLink
                to={child.href}
                className={({ isActive }) =>
                  `block py-2.5 px-8 text-sm border-b border-navy-700 min-h-[44px] flex items-center
                   transition-colors duration-150
                   ${isActive ? 'text-gold-400 font-medium' : 'text-navy-200 hover:text-white hover:bg-navy-700'}`
                }
                onClick={onClose}
              >
                {child.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

// ═════════════════════════════════════════════════════════════════════════════
// MOBILE SLIDE-OUT DRAWER
// ═════════════════════════════════════════════════════════════════════════════
function MobileMenu({ isOpen, onClose }) {
  const drawerRef = useRef(null);
  const closeButtonRef = useRef(null);
  const navigate = useNavigate();

  useEscape(onClose);

  // Focus management: move focus to close button when drawer opens
  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isOpen]);

  // Focus trap inside drawer
  useEffect(() => {
    if (!isOpen) return;

    const focusable = drawerRef.current?.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    if (!focusable || focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    function trap(e) {
      if (e.key !== 'Tab') return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener('keydown', trap);
    return () => document.removeEventListener('keydown', trap);
  }, [isOpen]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleSearch = (e) => {
    e.preventDefault();
    const q = e.target.elements.q?.value?.trim();
    if (q) {
      onClose();
      navigate(`/search?q=${encodeURIComponent(q)}`);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-navy-900/60 z-overlay lg:hidden"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        id="mobile-nav-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className="fixed inset-y-0 left-0 w-80 max-w-full bg-navy-700 z-modal
                   flex flex-col lg:hidden overflow-y-auto
                   shadow-2xl"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-navy-600 flex-shrink-0">
          <Link
            to="/"
            onClick={onClose}
            className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded"
            aria-label={`${ORG_SHORT_NAME} home`}
          >
            <div className="w-8 h-8 bg-navy-900 rounded-full flex items-center justify-center" aria-hidden="true">
              <BoltIcon className="w-5 h-5 text-gold-400" />
            </div>
            <span className="text-white font-bold text-base">{ORG_SHORT_NAME}</span>
          </Link>

          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="p-2 rounded-md text-white hover:bg-navy-600 min-h-[44px] min-w-[44px]
                       flex items-center justify-center
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400
                       transition-colors duration-150"
            aria-label="Close navigation menu"
          >
            <XMarkIcon className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Search inside drawer */}
        <form
          onSubmit={handleSearch}
          className="px-4 py-3 border-b border-navy-600 flex-shrink-0"
          role="search"
          aria-label="Search the website"
        >
          <div className="relative">
            <MagnifyingGlassIcon
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
              aria-hidden="true"
            />
            <input
              type="search"
              name="q"
              placeholder="Search APTRANSCO…"
              className="input pl-9 bg-navy-800 border-navy-600 text-white placeholder:text-navy-300
                         focus:ring-gold-400 focus:border-gold-400"
              aria-label="Search query"
            />
          </div>
        </form>

        {/* Nav items */}
        <nav aria-label="Mobile navigation" className="flex-1">
          <ul role="list">
            {NAV_ITEMS.map((item) => (
              <MobileAccordionItem key={item.id} item={item} onClose={onClose} />
            ))}
          </ul>
        </nav>

        {/* Drawer footer */}
        <div className="px-4 py-4 border-t border-navy-600 flex-shrink-0">
          <a
            href="tel:+918662577777"
            className="flex items-center gap-2 text-sm text-navy-200 hover:text-white transition-colors duration-150"
            aria-label="Call APTRANSCO: +91-866-2577777"
          >
            <PhoneIcon className="w-4 h-4" aria-hidden="true" />
            +91-866-2577777
          </a>
          <p className="text-xs text-navy-400 mt-2">
            {ORG_FULL_NAME}
          </p>
        </div>
      </div>
    </>
  );
}

// ═════════════════════════════════════════════════════════════════════════════
// INLINE SEARCH OVERLAY (keyboard shortcut / button trigger)
// ═════════════════════════════════════════════════════════════════════════════
function SearchOverlay({ isOpen, onClose }) {
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEscape(onClose);

  useEffect(() => {
    if (isOpen && inputRef.current) inputRef.current.focus();
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const q = inputRef.current?.value?.trim();
    if (q) {
      onClose();
      navigate(`/search?q=${encodeURIComponent(q)}`);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-navy-900/70 z-overlay"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className="fixed top-0 left-0 right-0 bg-white z-modal shadow-nav p-4"
        role="dialog"
        aria-modal="true"
        aria-label="Search"
      >
        <div className="container-site">
          <form onSubmit={handleSubmit} className="flex items-center gap-3" role="search">
            <MagnifyingGlassIcon className="w-5 h-5 text-slate-400 flex-shrink-0" aria-hidden="true" />
            <input
              ref={inputRef}
              type="search"
              name="q"
              placeholder="Search tenders, notifications, reports, departments…"
              className="flex-1 text-base border-0 outline-none text-slate-700 placeholder:text-slate-400 bg-transparent"
              aria-label="Search query"
            />
            <button
              type="submit"
              className="btn-primary btn-sm"
              aria-label="Submit search"
            >
              Search
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 transition-colors duration-150
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded"
              aria-label="Close search"
            >
              <XMarkIcon className="w-5 h-5" aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

// ═════════════════════════════════════════════════════════════════════════════
// MAIN HEADER EXPORT
// ═════════════════════════════════════════════════════════════════════════════
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen]         = useState(false);

  const openMobileMenu  = useCallback(() => setMobileMenuOpen(true),  []);
  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);
  const openSearch      = useCallback(() => setSearchOpen(true),      []);
  const closeSearch     = useCallback(() => setSearchOpen(false),     []);

  return (
    <>
      {/* ── Skip link — first focusable element ───────────────────────── */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* ── Sticky header wrapper ──────────────────────────────────────── */}
      <header
        role="banner"
        className="sticky top-0 z-header shadow-header"
        aria-label="Site header"
      >
        <TopBar />
        <LogoBar onSearchOpen={openSearch} />
        <DesktopNavbar onMobileMenuOpen={openMobileMenu} />
      </header>

      {/* ── Mobile drawer (rendered outside header for z-index) ─────────── */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={closeMobileMenu} />

      {/* ── Search overlay ──────────────────────────────────────────────── */}
      <SearchOverlay isOpen={searchOpen} onClose={closeSearch} />
    </>
  );
}
