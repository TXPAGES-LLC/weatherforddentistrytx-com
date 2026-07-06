'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import MobileCta from '@/components/mobile-cta'

const LeafletMap = dynamic(() => import('@/components/leaflet-map'), { ssr: false })

const PHONE = '(817) 594-8665'
const PHONE_HREF = 'tel:+18175948665'
const CITY = 'Mineral Wells'
const STATE = 'TX'

const services = [
  {
    label: 'General Dentistry',
    href: '/services/general-dentistry',
    description:
      'Routine exams, fillings, and preventive care for Mineral Wells families. We focus on long-term oral health with thorough cleanings and early detection of potential issues.',
  },
  {
    label: 'Cosmetic Dentistry',
    href: '/services/cosmetic-dentistry',
    description:
      'Transform your smile with whitening, veneers, or bonding treatments. Mineral Wells patients appreciate our straightforward recommendations and lasting cosmetic results.',
  },
  {
    label: 'Pediatric Dentistry',
    href: '/services/pediatric-dentistry',
    description:
      'Children from Mineral Wells receive gentle, age-appropriate dental care. We help kids feel comfortable and build healthy habits that last into adulthood.',
  },
  {
    label: 'Geriatric Dentistry',
    href: '/services/geriatric-dentistry',
    description:
      'Seniors in Mineral Wells trust us for denture adjustments, dry mouth solutions, and compassionate care tailored to the unique needs of aging teeth and gums.',
  },
  {
    label: 'Special Needs Dentistry',
    href: '/services/special-needs-dentistry',
    description:
      'Patients with disabilities or special requirements receive unhurried, adaptive care. We modify our approach to ensure every Mineral Wells resident feels welcome.',
  },
]

const faqs = [
  {
    q: 'How long is the drive from Mineral Wells to your office?',
    a: 'Our Weatherford office is about 25 minutes southeast of Mineral Wells via US-180. It is the closest full-service dental practice for many Palo Pinto County residents.',
  },
  {
    q: 'Do you offer payment plans for Mineral Wells patients?',
    a: 'Yes. We offer flexible payment options and work with most dental insurance plans. Ask our team about financing for larger treatments.',
  },
  {
    q: 'Can I schedule an appointment for the same day?',
    a: 'For emergencies, call us first thing in the morning and we will do our best to see you that day. Routine appointments are typically available within a week or two.',
  },
  {
    q: 'Is your office wheelchair accessible?',
    a: 'Yes. Our facility is fully accessible, with ground-level entry and wide doorways throughout the office.',
  },
  {
    q: 'Do you treat patients who have not seen a dentist in years?',
    a: 'Absolutely. We see patients at every stage of dental health — no judgment, just a clear plan to get you back on track.',
  },
]

export default function MineralWellsPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">

        {/* Hero */}
        <section
          style={{ backgroundColor: '#2ec4b6' }}
          className="py-14 md:py-20 text-white"
          aria-labelledby="page-h1"
        >
          <div className="max-w-4xl mx-auto px-4">
            <nav aria-label="Breadcrumb" className="mb-5">
              <ol className="flex items-center gap-2 text-white/70 text-sm">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/" className="hover:text-white transition-colors">Areas Served</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-white font-medium" aria-current="page">{CITY}</li>
              </ol>
            </nav>

            <h1
              id="page-h1"
              className="font-serif text-4xl md:text-5xl font-bold text-balance mb-5"
            >
              Services in {CITY}, {STATE}
            </h1>

            <p className="text-white/90 text-lg leading-relaxed max-w-2xl text-pretty mb-8">
              Mineral Wells residents rely on F. Lee McLemore, DDS for trusted dental care just a short
              drive away. Our Weatherford practice offers comprehensive services — from routine cleanings
              to specialized care for seniors and patients with special needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-base transition-colors"
                style={{ backgroundColor: '#3b82f6', color: '#ffffff' }}
                aria-label={`Call our office at ${PHONE}`}
              >
                <PhoneIcon />
                Call {PHONE}
              </a>
              <a
                href="https://www.google.com/maps/place/?q=place_id:ChIJ2341254151701000531"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-base bg-white/20 text-white hover:bg-white/30 transition-colors border border-white/30"
                aria-label="Get directions to our office"
              >
                <MapPinIcon />
                Get Directions
              </a>
            </div>
          </div>
        </section>

        {/* Local intro */}
        <section className="py-12 bg-white border-b border-border">
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-muted-foreground leading-relaxed text-base max-w-3xl">
              Mineral Wells has a rich history as a health and wellness destination, and quality healthcare
              remains important to the community. Our Weatherford office provides Mineral Wells families with
              convenient access to modern dental care without driving into the Dallas-Fort Worth metro.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="py-14 md:py-20 bg-surface" aria-labelledby="services-heading">
          <div className="max-w-4xl mx-auto px-4">
            <h2
              id="services-heading"
              className="font-serif text-2xl md:text-3xl font-bold text-foreground text-balance mb-10"
            >
              Dental Services Available in {CITY}, {STATE}
            </h2>

            <div className="flex flex-col gap-8">
              {services.map((svc) => (
                <article
                  key={svc.href}
                  className="bg-white rounded-2xl border border-border p-6 md:p-8"
                  aria-labelledby={`svc-${svc.href.split('/').pop()}`}
                >
                  <h3
                    id={`svc-${svc.href.split('/').pop()}`}
                    className="font-serif text-xl font-bold text-foreground mb-3"
                  >
                    {svc.label} in {CITY}, {STATE}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-5">{svc.description}</p>
                  <Link
                    href={svc.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                    style={{ color: '#3b82f6' }}
                    aria-label={`Learn more about ${svc.label}`}
                  >
                    Learn about {svc.label}
                    <ArrowIcon />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA band */}
        <section
          className="py-14 text-white"
          style={{ backgroundColor: '#3b82f6' }}
          aria-labelledby="cta-heading"
        >
          <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2
                id="cta-heading"
                className="font-serif text-2xl md:text-3xl font-bold text-balance mb-2"
              >
                Ready to schedule from Mineral Wells?
              </h2>
              <p className="text-white/85 text-base leading-relaxed">
                Call us Monday through Thursday, 8&nbsp;am&ndash;5&nbsp;pm, or Friday 8&nbsp;am&ndash;12&nbsp;pm.
              </p>
            </div>
            <a
              href={PHONE_HREF}
              className="flex-shrink-0 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base bg-white transition-colors hover:bg-white/90"
              style={{ color: '#3b82f6' }}
              aria-label={`Call ${PHONE} to book an appointment`}
            >
              <PhoneIcon />
              {PHONE}
            </a>
          </div>
        </section>

        {/* Map */}
        <section className="py-14 md:py-20 bg-white" aria-labelledby="map-heading">
          <div className="max-w-4xl mx-auto px-4">
            <h2
              id="map-heading"
              className="font-serif text-2xl md:text-3xl font-bold text-foreground text-balance mb-3"
            >
              Serving Mineral Wells from Weatherford
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our office is about 25 minutes southeast of Mineral Wells via US-180. Free parking is available on-site.
            </p>
            <div className="rounded-2xl overflow-hidden border border-border" style={{ height: '400px' }}>
              <LeafletMap lat={32.8085} lng={-98.1128} label="Mineral Wells, TX — Served by F. Lee McLemore, DDS" />
            </div>
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <a
                href="https://www.google.com/maps/place/?q=place_id:ChIJ2341254151701000531"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold border border-border text-foreground hover:bg-surface transition-colors"
                aria-label="Open in Google Maps"
              >
                <MapPinIcon />
                Open in Google Maps
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 md:py-20 bg-surface" aria-labelledby="faq-heading">
          <div className="max-w-4xl mx-auto px-4">
            <h2
              id="faq-heading"
              className="font-serif text-2xl md:text-3xl font-bold text-foreground text-balance mb-10"
            >
              Common Questions from Mineral Wells Patients
            </h2>
            <div className="flex flex-col gap-6">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl border border-border p-6"
                >
                  <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nearby areas */}
        <section className="py-12 bg-white border-t border-border" aria-labelledby="nearby-heading">
          <div className="max-w-4xl mx-auto px-4">
            <h2
              id="nearby-heading"
              className="font-serif text-xl font-bold text-foreground mb-5"
            >
              Other Communities We Serve
            </h2>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Weatherford, TX', href: '/areas/weatherford' },
                { label: 'Springtown, TX', href: '/areas/springtown' },
                { label: 'Brock, TX', href: '/areas/brock' },
                { label: 'Stephenville, TX', href: '/areas/stephenville' },
                { label: 'Granbury, TX', href: '/areas/granbury' },
              ].map((area) => (
                <Link
                  key={area.href}
                  href={area.href}
                  className="px-4 py-2 rounded-lg text-sm font-medium border border-border bg-surface text-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  {area.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
      <MobileCta />
    </>
  )
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.81-.81a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function MapPinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
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
