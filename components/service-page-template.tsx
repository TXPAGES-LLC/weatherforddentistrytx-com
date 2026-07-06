import Link from 'next/link'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import MobileCta from '@/components/mobile-cta'

export interface ServiceItem {
  title: string
  description: string
}

export interface RelatedService {
  label: string
  href: string
}

export interface ServicePageProps {
  title: string
  headline: string
  metaDescription: string
  heroText: string
  services: ServiceItem[]
  whySection: {
    heading: string
    body: string
    bullets: string[]
  }
  relatedServices: RelatedService[]
  faqItems?: { question: string; answer: string }[]
  structuredDataType?: string
}

const PHONE = '(817) 594-8665'
const PHONE_HREF = 'tel:+18175948665'

export default function ServicePageTemplate({
  title,
  headline,
  heroText,
  services,
  whySection,
  relatedServices,
  faqItems,
}: ServicePageProps) {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        {/* Hero */}
        <section
          style={{ backgroundColor: '#2ec4b6' }}
          className="py-14 md:py-20 text-white"
          aria-labelledby="service-h1"
        >
          <div className="max-w-4xl mx-auto px-4">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-white/70 text-sm">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/services/general-dentistry" className="hover:text-white transition-colors">Services</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-white font-medium" aria-current="page">{title}</li>
              </ol>
            </nav>
            <h1 id="service-h1" className="font-serif text-4xl md:text-5xl font-bold text-balance mb-5">
              {headline}
            </h1>
            <p className="text-white/90 text-lg leading-relaxed max-w-2xl text-pretty mb-8">
              {heroText}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-base transition-colors bg-blue-500 hover:bg-blue-600 text-white min-h-[44px]"
                aria-label={`Call ${PHONE} to schedule a ${title} appointment`}
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

        {/* Services list */}
        <section className="py-14 md:py-20 bg-white" aria-labelledby="services-list-heading">
          <div className="max-w-4xl mx-auto px-4">
            <h2 id="services-list-heading" className="font-serif text-2xl md:text-3xl font-bold text-foreground text-balance mb-8">
              What We Offer
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {services.map((svc) => (
                <div key={svc.title} className="bg-surface rounded-xl p-5 border border-border">
                  <h3 className="font-bold text-foreground mb-2">{svc.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{svc.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why section */}
        <section className="py-14 md:py-20 bg-surface" aria-labelledby="why-heading">
          <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="why-heading" className="font-serif text-2xl md:text-3xl font-bold text-foreground text-balance mb-5">
                {whySection.heading}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{whySection.body}</p>
              <ul className="space-y-3">
                {whySection.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-foreground">
                    <span
                      className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: '#e6faf9', color: '#2ec4b6' }}
                    >
                      <CheckIcon />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            {/* CTA card */}
            <div
              className="rounded-2xl p-8 text-white flex flex-col gap-5"
              style={{ backgroundColor: '#3b82f6' }}
            >
              <div>
                <h3 className="font-serif font-bold text-xl mb-2">Schedule Your Appointment</h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  Call our Weatherford office to book your visit with Dr. F. Lee McLemore. New patients are always welcome.
                </p>
              </div>
              <div className="space-y-3">
                <a
                  href={PHONE_HREF}
                  className="flex items-center justify-center gap-2 w-full py-3 px-5 rounded-lg font-semibold text-sm bg-white transition-colors hover:bg-white/90"
                  style={{ color: '#3b82f6' }}
                  aria-label={`Call ${PHONE}`}
                >
                  <PhoneIcon /> {PHONE}
                </a>
                <div className="text-center text-xs text-white/70">Mon–Thu 8am–5pm &middot; Fri–Sun Closed</div>
                <a
                  href="https://maps.google.com/?cid=2341254151701000531"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 w-full text-xs text-white/80 hover:text-white transition-colors"
                >
                  <MapPinIcon /> 610 Eureka St, Weatherford TX 76086
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        {faqItems && faqItems.length > 0 && (
          <section className="py-14 md:py-20 bg-white" aria-labelledby="faq-heading">
            <div className="max-w-3xl mx-auto px-4">
              <h2 id="faq-heading" className="font-serif text-2xl md:text-3xl font-bold text-foreground text-balance mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-5">
                {faqItems.map((faq) => (
                  <div key={faq.question} className="border border-border rounded-xl p-5">
                    <h3 className="font-bold text-foreground mb-2">{faq.question}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related services */}
        <section className="py-14 md:py-20 bg-surface" aria-labelledby="related-heading">
          <div className="max-w-4xl mx-auto px-4">
            <h2 id="related-heading" className="font-serif text-xl font-bold text-foreground mb-6">
              Explore Our Other Services
            </h2>
            <div className="flex flex-wrap gap-3">
              {relatedServices.map((svc) => (
                <Link
                  key={svc.href}
                  href={svc.href}
                  className="px-4 py-2 rounded-lg text-sm font-medium border border-border bg-white text-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  {svc.label}
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

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
