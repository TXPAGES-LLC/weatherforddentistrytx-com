import Link from 'next/link'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import MobileCta from '@/components/mobile-cta'

export interface CityPageProps {
  city: string
  county: string
  state: string
  headline: string
  intro: string
  servicesIntro: string
  drivingNote: string
  nearbyAreas: { label: string; href: string }[]
}

const PHONE = '(817) 594-8665'
const PHONE_HREF = 'tel:+18175948665'

const services = [
  { label: 'General Dentistry', href: '/services/general-dentistry' },
  { label: 'Cosmetic Dentistry', href: '/services/cosmetic-dentistry' },
  { label: 'Pediatric Dentistry', href: '/services/pediatric-dentistry' },
  { label: 'Geriatric Dentistry', href: '/services/geriatric-dentistry' },
  { label: 'Special Needs Dentistry', href: '/services/special-needs-dentistry' },
]

export default function CityPageTemplate({
  city,
  county,
  state,
  headline,
  intro,
  servicesIntro,
  drivingNote,
  nearbyAreas,
}: CityPageProps) {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        {/* Hero */}
        <section
          style={{ backgroundColor: '#2ec4b6' }}
          className="py-14 md:py-20 text-white"
          aria-labelledby="city-h1"
        >
          <div className="max-w-4xl mx-auto px-4">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-white/70 text-sm">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/areas/weatherford" className="hover:text-white transition-colors">Areas Served</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-white font-medium" aria-current="page">{city}</li>
              </ol>
            </nav>
            <h1 id="city-h1" className="font-serif text-4xl md:text-5xl font-bold text-balance mb-5">
              {headline}
            </h1>
            <p className="text-white/90 text-lg leading-relaxed max-w-2xl text-pretty mb-8">
              {intro}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-base transition-colors bg-blue-500 hover:bg-blue-600 text-white min-h-[44px]"
                aria-label={`Call ${PHONE}`}
              >
                <PhoneIcon /> Call {PHONE}
              </a>
              <a
                href="https://maps.google.com/?cid=2341254151701000531"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-base bg-white/20 text-white hover:bg-white/30 transition-colors border border-white/30"
              >
                <MapPinIcon /> Get Directions
              </a>
            </div>
          </div>
        </section>

        {/* Services for city */}
        <section className="py-14 md:py-20 bg-white" aria-labelledby="city-services-heading">
          <div className="max-w-4xl mx-auto px-4">
            <h2 id="city-services-heading" className="font-serif text-2xl md:text-3xl font-bold text-foreground text-balance mb-4">
              Dental Services for {city}, {state} Patients
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">{servicesIntro}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((svc) => (
                <Link
                  key={svc.href}
                  href={svc.href}
                  className="flex items-center gap-3 p-4 rounded-xl border border-border bg-surface hover:border-primary hover:bg-white transition-all group"
                  aria-label={`${svc.label} for ${city} patients`}
                >
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#2ec4b6' }} aria-hidden="true" />
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{svc.label}</span>
                  <ArrowIcon />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Driving directions note */}
        <section className="py-14 md:py-20 bg-surface" aria-labelledby="directions-heading">
          <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 id="directions-heading" className="font-serif text-2xl md:text-3xl font-bold text-foreground text-balance mb-5">
                Getting to Our Weatherford Dental Office from {city}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{drivingNote}</p>
              <a
                href="https://maps.google.com/?cid=2341254151701000531"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold border border-border text-foreground hover:bg-white transition-colors"
              >
                <MapPinIcon /> Open in Google Maps
              </a>
            </div>
            <div
              className="rounded-2xl p-8 text-white"
              style={{ backgroundColor: '#3b82f6' }}
            >
              <h3 className="font-serif font-bold text-xl mb-3">Ready to Schedule?</h3>
              <p className="text-white/90 text-sm leading-relaxed mb-5">
                Call our Weatherford office to book your appointment. We see patients from {city} and the surrounding area.
              </p>
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg font-semibold text-sm bg-white hover:bg-white/90 transition-colors"
                style={{ color: '#3b82f6' }}
                aria-label={`Call ${PHONE} to book an appointment`}
              >
                <PhoneIcon /> {PHONE}
              </a>
              <p className="mt-3 text-center text-xs text-white/70">Mon–Thu 8am–5pm &middot; Fri–Sun Closed</p>
              <a
                href="https://maps.google.com/?cid=2341254151701000531"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 w-full text-xs text-white/70 hover:text-white transition-colors mt-1"
              >
                <MapPinIcon /> 610 Eureka St, Weatherford TX 76086
              </a>
            </div>
          </div>
        </section>

        {/* Nearby areas */}
        {nearbyAreas.length > 0 && (
          <section className="py-12 bg-white border-t border-border" aria-labelledby="nearby-heading">
            <div className="max-w-4xl mx-auto px-4">
              <h2 id="nearby-heading" className="font-serif text-xl font-bold text-foreground mb-5">
                Other Communities We Serve
              </h2>
              <div className="flex flex-wrap gap-3">
                {nearbyAreas.map((area) => (
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
        )}
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
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="ml-auto text-muted-foreground">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}
