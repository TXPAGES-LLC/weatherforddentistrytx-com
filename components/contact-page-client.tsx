'use client'

import Link from 'next/link'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import MobileCta from '@/components/mobile-cta'
import { events } from '@/lib/gtag'

export default function ContactPageClient() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        {/* Hero */}
        <section
          style={{ backgroundColor: '#2ec4b6' }}
          className="py-12 md:py-16 text-white"
          aria-labelledby="contact-h1"
        >
          <div className="max-w-4xl mx-auto px-4">
            <nav aria-label="Breadcrumb" className="mb-3">
              <ol className="flex items-center gap-2 text-white/70 text-sm">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-white font-medium" aria-current="page">
                  Contact
                </li>
              </ol>
            </nav>
            <h1 id="contact-h1" className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-balance mb-4">
              Get in Touch
            </h1>
            <p className="text-white/90 text-base sm:text-lg leading-relaxed max-w-2xl">
              Have questions about our services, need to schedule an appointment, or want to learn more about our practice? We&apos;re here to help.
            </p>
          </div>
        </section>

        {/* Contact info grid */}
        <section className="py-14 md:py-20 bg-white" aria-labelledby="contact-info-heading">
          <div className="max-w-4xl mx-auto px-4">
            <h2 id="contact-info-heading" className="font-serif text-2xl md:text-3xl font-bold text-foreground text-balance mb-10">
              Contact Information
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Address */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg" style={{ backgroundColor: '#eff6ff' }}>
                    <MapPinIcon />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Office Address</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    610 Eureka St<br />
                    Weatherford, TX 76086
                  </p>
                  <a
                    href="https://maps.google.com/?cid=2341254151701000531"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => events.getDirections('contact_page')}
                    className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-primary hover:underline"
                  >
                    Get Directions
                    <ArrowIcon />
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg" style={{ backgroundColor: '#eff6ff' }}>
                    <PhoneIcon />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                  <p className="text-muted-foreground mb-3">
                    <a
                      href="tel:+18175948665"
                      onClick={() => events.phoneCall('contact_page')}
                      className="font-semibold hover:text-foreground transition-colors"
                    >
                      (817) 594-8665
                    </a>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Monday–Thursday: 8am–5pm<br />
                    Friday–Sunday: Closed
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg" style={{ backgroundColor: '#eff6ff' }}>
                    <EnvelopeIcon />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Email</h3>
                  <p className="text-muted-foreground break-all">
                    <a
                      href="mailto:leemclemoredds@sbcglobal.net"
                      onClick={() => events.emailClick('contact_page')}
                      className="font-semibold hover:text-foreground transition-colors"
                    >
                      leemclemoredds@sbcglobal.net
                    </a>
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    We&apos;ll respond to your message during business hours.
                  </p>
                </div>
              </div>

              {/* Service areas */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg" style={{ backgroundColor: '#eff6ff' }}>
                    <ServiceIcon />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Service Areas</h3>
                  <p className="text-sm text-muted-foreground">
                    We proudly serve Weatherford, Aledo, Mineral Wells, Springtown, Hudson Oaks, Brock, Cresson, Granbury, Stephenville, and surrounding areas in Parker County and beyond.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick links */}
        <section className="py-14 md:py-20 bg-surface" aria-labelledby="quick-links-heading">
          <div className="max-w-4xl mx-auto px-4">
            <h2 id="quick-links-heading" className="font-serif text-2xl md:text-3xl font-bold text-foreground text-balance mb-8">
              What Can We Help You With?
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="tel:+18175948665"
                onClick={() => events.phoneCall('contact_quick_link')}
                className="flex items-start gap-3 p-5 rounded-lg bg-white border border-border hover:border-primary hover:shadow-sm transition-all group"
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#eff6ff' }}>
                  <CheckIcon />
                </span>
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">Call to Schedule an Appointment</h3>
                  <p className="text-sm text-muted-foreground mt-1">(817) 594-8665 &middot; Mon–Thu 8am–5pm</p>
                </div>
              </a>

              <Link
                href="/services/general-dentistry"
                className="flex items-start gap-3 p-5 rounded-lg bg-white border border-border hover:border-primary hover:shadow-sm transition-all group"
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#eff6ff' }}>
                  <CheckIcon />
                </span>
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">Explore Our Dental Services</h3>
                  <p className="text-sm text-muted-foreground mt-1">View general, cosmetic, pediatric, geriatric, and special needs dentistry.</p>
                </div>
              </Link>

              <Link
                href="/patient-forms"
                className="flex items-start gap-3 p-5 rounded-lg bg-white border border-border hover:border-primary hover:shadow-sm transition-all group"
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#eff6ff' }}>
                  <CheckIcon />
                </span>
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">Download Patient Forms</h3>
                  <p className="text-sm text-muted-foreground mt-1">Fill out our patient intake form before your first visit.</p>
                </div>
              </Link>

              <Link
                href="/blog"
                className="flex items-start gap-3 p-5 rounded-lg bg-white border border-border hover:border-primary hover:shadow-sm transition-all group"
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#eff6ff' }}>
                  <CheckIcon />
                </span>
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">Read Our Blog</h3>
                  <p className="text-sm text-muted-foreground mt-1">Learn tips for oral health, cosmetic options, and patient care.</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="py-12 md:py-16 text-white text-center"
          style={{ backgroundColor: '#3b82f6' }}
        >
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">Ready to Schedule Your Visit?</h2>
            <p className="text-white/90 mb-8 leading-relaxed">
              Call our Weatherford office at your convenience. Our team is ready to help you achieve a healthy, beautiful smile.
            </p>
            <a
              href="tel:+18175948665"
              onClick={() => events.phoneCall('contact_page_cta')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-lg transition-colors bg-white hover:bg-white/90"
              style={{ color: '#3b82f6' }}
              aria-label="Call (817) 594-8665"
            >
              <PhoneIcon />
              (817) 594-8665
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
      <MobileCta />
    </>
  )
}

function MapPinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: '#3b82f6' }}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: '#3b82f6' }}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
function EnvelopeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: '#3b82f6' }}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}
function ServiceIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: '#3b82f6' }}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  )
}
function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}
function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: '#3b82f6' }}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
