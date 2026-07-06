'use client'

import { useState } from 'react'
import Link from 'next/link'

const PHONE = '(817) 594-8665'
const PHONE_HREF = 'tel:+18175948665'

const services = [
  { label: 'General Dentistry', href: '/services/general-dentistry' },
  { label: 'Cosmetic Dentistry', href: '/services/cosmetic-dentistry' },
  { label: 'Pediatric Dentistry', href: '/services/pediatric-dentistry' },
  { label: 'Geriatric Dentistry', href: '/services/geriatric-dentistry' },
  { label: 'Special Needs Dentistry', href: '/services/special-needs-dentistry' },
]

const areas = [
  { label: 'Weatherford', href: '/areas/weatherford' },
  { label: 'Aledo', href: '/areas/aledo' },
  { label: 'Mineral Wells', href: '/areas/mineral-wells' },
  { label: 'Springtown', href: '/areas/springtown' },
  { label: 'Hudson Oaks', href: '/areas/hudson-oaks' },
  { label: 'Brock', href: '/areas/brock' },
  { label: 'Cresson', href: '/areas/cresson' },
  { label: 'Granbury', href: '/areas/granbury' },
  { label: 'Stephenville', href: '/areas/stephenville' },
]

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [areasOpen, setAreasOpen] = useState(false)

  return (
    <>
      {/* Top bar */}
      <div style={{ backgroundColor: '#2ec4b6' }} className="text-white text-sm py-2 hidden md:block">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <span className="text-white/90">Serving Weatherford, TX &amp; Parker County since 1991</span>
          <div className="flex items-center gap-6">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-1.5 font-semibold text-white hover:text-white/80 transition-colors"
              aria-label={`Call us at ${PHONE}`}
            >
              <PhoneIcon />
              {PHONE}
            </a>
            <a
              href="https://maps.google.com/?cid=2341254151701000531"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors"
            >
              <MapPinIcon />
              Get Directions
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex flex-col leading-tight" aria-label="F. Lee McLemore DDS - Home">
              <span className="font-bold text-lg text-foreground leading-tight">F. Lee McLemore, DDS</span>
              <span className="text-xs" style={{ color: '#2ec4b6' }}>Family &amp; Cosmetic Dentistry</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              <Link href="/" className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-surface">
                Home
              </Link>

              {/* Services dropdown */}
              <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                <button
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-surface"
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                >
                  Services
                  <ChevronDownIcon />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-border py-1 z-50">
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="block px-4 py-2.5 text-sm text-foreground hover:bg-surface hover:text-primary transition-colors"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Areas dropdown */}
              <div className="relative" onMouseEnter={() => setAreasOpen(true)} onMouseLeave={() => setAreasOpen(false)}>
                <button
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-surface"
                  aria-expanded={areasOpen}
                  aria-haspopup="true"
                >
                  Areas Served
                  <ChevronDownIcon />
                </button>
                {areasOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-border py-1 z-50">
                    {areas.map((a) => (
                      <Link
                        key={a.href}
                        href={a.href}
                        className="block px-4 py-2.5 text-sm text-foreground hover:bg-surface hover:text-primary transition-colors"
                      >
                        {a.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/blog" className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-surface">
                Blog
              </Link>

              <Link href="/contact" className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-surface">
                Contact
              </Link>

              <Link
                href="/patient-forms"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-md border border-border text-foreground hover:bg-surface hover:text-primary transition-colors"
              >
                <FileIcon />
                Patient Forms
              </Link>

              <a
                href={PHONE_HREF}
                className="ml-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-colors bg-blue-500 hover:bg-blue-600"
                aria-label={`Call us at ${PHONE}`}
              >
                <PhoneIcon />
                {PHONE}
              </a>
            </nav>

            {/* Mobile: phone + hamburger */}
            <div className="flex items-center gap-3 lg:hidden">
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center w-10 h-10 rounded-lg text-white"
                style={{ backgroundColor: '#3b82f6' }}
                aria-label={`Call ${PHONE}`}
              >
                <PhoneIcon />
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="flex items-center justify-center w-10 h-10 rounded-lg border border-border text-foreground"
                aria-expanded={mobileOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-border bg-white" id="mobile-menu">
            <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
              <Link href="/" className="px-3 py-3 text-sm font-medium text-foreground hover:text-primary rounded-md hover:bg-surface" onClick={() => setMobileOpen(false)}>
                Home
              </Link>
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full px-3 py-3 text-sm font-medium text-foreground hover:text-primary rounded-md hover:bg-surface"
                  aria-expanded={servicesOpen}
                >
                  Services <ChevronDownIcon />
                </button>
                {servicesOpen && (
                  <div className="ml-4 mt-1 flex flex-col gap-0.5">
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="px-3 py-2.5 text-sm text-muted-foreground hover:text-primary rounded-md hover:bg-surface"
                        onClick={() => setMobileOpen(false)}
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <div>
                <button
                  onClick={() => setAreasOpen(!areasOpen)}
                  className="flex items-center justify-between w-full px-3 py-3 text-sm font-medium text-foreground hover:text-primary rounded-md hover:bg-surface"
                  aria-expanded={areasOpen}
                >
                  Areas Served <ChevronDownIcon />
                </button>
                {areasOpen && (
                  <div className="ml-4 mt-1 flex flex-col gap-0.5">
                    {areas.map((a) => (
                      <Link
                        key={a.href}
                        href={a.href}
                        className="px-3 py-2.5 text-sm text-muted-foreground hover:text-primary rounded-md hover:bg-surface"
                        onClick={() => setMobileOpen(false)}
                      >
                        {a.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link href="/blog" className="px-3 py-3 text-sm font-medium text-foreground hover:text-primary rounded-md hover:bg-surface" onClick={() => setMobileOpen(false)}>
                Blog
              </Link>
              <Link href="/contact" className="px-3 py-3 text-sm font-medium text-foreground hover:text-primary rounded-md hover:bg-surface" onClick={() => setMobileOpen(false)}>
                Contact
              </Link>
              <Link
                href="/patient-forms"
                className="flex items-center gap-2 px-3 py-3 text-sm font-medium text-foreground hover:text-primary rounded-md hover:bg-surface"
                onClick={() => setMobileOpen(false)}
              >
                <FileIcon />
                Patient Forms
              </Link>
              <div className="mt-3 pt-3 border-t border-border flex flex-col gap-2">
                <a
                  href={PHONE_HREF}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-semibold text-white"
                  style={{ backgroundColor: '#3b82f6' }}
                >
                  <PhoneIcon /> Call {PHONE}
                </a>
                <a
                  href="https://maps.google.com/?cid=2341254151701000531"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-semibold border border-border text-foreground hover:bg-surface"
                >
                  <MapPinIcon /> Get Directions
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.81-.81a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function MapPinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function FileIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  )
}

function ChevronDownIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}
