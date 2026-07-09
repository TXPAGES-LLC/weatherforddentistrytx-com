'use client'

import Link from 'next/link'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import MobileCta from '@/components/mobile-cta'

const GBP_EMBED = 'https://maps.google.com/maps?output=embed&q=F.+Lee+McLemore+DDS&cid=2341254151701000531'
const GBP_LINK = 'https://maps.google.com/?cid=2341254151701000531'

const PHONE = '(817) 594-8665'
const PHONE_HREF = 'tel:+18175948665'
const CITY = 'Weatherford'
const STATE = 'TX'

const services = [
  {
    label: 'General Dentistry',
    href: '/services/general-dentistry',
    description:
      'Routine cleanings, exams, fillings, and preventive care keep your whole family healthy. Our Weatherford office builds lasting relationships through consistent, thorough general dental care for patients of all ages.',
  },
  {
    label: 'Cosmetic Dentistry',
    href: '/services/cosmetic-dentistry',
    description:
      'Teeth whitening, veneers, bonding, and smile makeovers are available right here in Weatherford. Dr. McLemore takes a conservative approach — enhancing your natural smile without unnecessary treatment.',
  },
  {
    label: 'Pediatric Dentistry',
    href: '/services/pediatric-dentistry',
    description:
      'We make first dental visits positive and low-stress for Weatherford kids. Early check-ups, sealants, and fluoride treatments help children build lifelong healthy habits from day one.',
  },
  {
    label: 'Geriatric Dentistry',
    href: '/services/geriatric-dentistry',
    description:
      'Older adults face unique dental challenges — dry mouth, worn enamel, and loose dentures among them. Our team brings patience and specialized experience to caring for Weatherford seniors.',
  },
  {
    label: 'Special Needs Dentistry',
    href: '/services/special-needs-dentistry',
    description:
      'Patients with physical, developmental, or cognitive differences deserve the same quality of dental care as everyone else. We adapt our techniques and environment to make every visit comfortable and dignified.',
  },
]

const faqs = [
  {
    q: 'Do you accept new patients in Weatherford, TX?',
    a: 'Yes — we welcome new patients and their families. Call (817) 596-4040 or stop by the office to get started.',
  },
  {
    q: 'What dental insurance plans do you accept?',
    a: 'We work with most major dental insurance plans. Contact our office and our team will verify your benefits before your appointment.',
  },
  {
    q: 'How far in advance do I need to schedule?',
    a: 'Routine appointments are generally available within a few weeks. For dental emergencies, call us first thing in the morning and we will do our best to see you the same day.',
  },
  {
    q: 'Are you able to treat patients with dental anxiety?',
    a: 'Absolutely. We go at your pace, explain each step before we begin, and offer options to help anxious patients feel more at ease. Tell us your concerns when you call — we will plan accordingly.',
  },
  {
    q: 'Do you offer services for seniors and patients with special needs?',
    a: 'Yes. Our practice has dedicated experience in geriatric and special needs dentistry, including patients with mobility limitations, dementia, and developmental differences.',
  },
]

export default function WeatherfordPage() {
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
              F. Lee McLemore, DDS has provided dental care to Weatherford families for over 30 years.
              Whether you need a routine cleaning, a smile refresh, or specialized care for a child or
              senior, our office on the west side of Parker County is ready to help.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-base transition-colors"
                style={{ backgroundColor: '#3b82f6', color: '#ffffff' }}
                aria-label={`Call our Weatherford dental office at ${PHONE}`}
              >
                <PhoneIcon />
                Call {PHONE}
              </a>
              <a
                href={GBP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-base bg-white/20 text-white hover:bg-white/30 transition-colors border border-white/30"
                aria-label="Get directions to our Weatherford dental office"
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
              Weatherford is the Parker County seat and home to around 35,000 residents. Our practice
              sits in the center of town, making it easy to reach from any neighborhood — from Tin Top
              Road to Dennis and everything in between. We see walk-ins, families with kids, seniors on
              fixed schedules, and patients who have not seen a dentist in years. No judgment, just good
              care.
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
                    aria-label={`Learn more about ${svc.label} at our Weatherford practice`}
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
                Ready to schedule in Weatherford?
              </h2>
              <p className="text-white/85 text-base leading-relaxed">
                Call us Monday through Thursday, 8&nbsp;am&ndash;5&nbsp;pm. We are closed Friday through Sunday.
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
              Find Us in Weatherford, TX
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our office is centrally located in Weatherford, serving patients from across Parker County.
              Free on-site parking is available.
            </p>
            <div className="rounded-2xl overflow-hidden border border-border" style={{ height: '400px' }}>
              <iframe
                src={GBP_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="F. Lee McLemore DDS — 610 Eureka St, Weatherford TX"
                aria-label="Google Map showing F. Lee McLemore DDS office location in Weatherford"
              />
            </div>
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <a
                href={GBP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold border border-border text-foreground hover:bg-surface transition-colors"
                aria-label="Open our Weatherford office in Google Maps"
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
              Common Questions from Weatherford Patients
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
                { label: 'Aledo, TX', href: '/areas/aledo' },
                { label: 'Mineral Wells, TX', href: '/areas/mineral-wells' },
                { label: 'Springtown, TX', href: '/areas/springtown' },
                { label: 'Hudson Oaks, TX', href: '/areas/hudson-oaks' },
                { label: 'Brock, TX', href: '/areas/brock' },
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
