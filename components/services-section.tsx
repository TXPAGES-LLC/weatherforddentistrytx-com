'use client'

import Link from 'next/link'

const services = [
  {
    title: 'General Dentistry',
    href: '/services/general-dentistry',
    description:
      'Preventive care, cleanings, fillings, extractions, root canals, and more. We keep your smile healthy at every age.',
    icon: ToothIcon,
    keywords: ['cleanings', 'fillings', 'exams', 'root canals'],
  },
  {
    title: 'Cosmetic Dentistry',
    href: '/services/cosmetic-dentistry',
    description:
      'Teeth whitening, veneers, bonding, and smile makeovers to help you look and feel your absolute best.',
    icon: SparkleIcon,
    keywords: ['whitening', 'veneers', 'bonding', 'smile makeover'],
  },
  {
    title: 'Pediatric Dentistry',
    href: '/services/pediatric-dentistry',
    description:
      'Gentle, child-friendly dental care from baby teeth through the teen years. We make kids comfortable at the dentist.',
    icon: KidIcon,
    keywords: ['children', 'kids', 'sealants', 'fluoride'],
  },
  {
    title: 'Geriatric Dentistry',
    href: '/services/geriatric-dentistry',
    description:
      'Specialized dental care tailored to older adults, including dentures, implants, and sensitivity treatment.',
    icon: ElderIcon,
    keywords: ['dentures', 'implants', 'seniors', 'tooth loss'],
  },
  {
    title: 'Special Needs Dentistry',
    href: '/services/special-needs-dentistry',
    description:
      'Compassionate, adapted care for patients with physical, cognitive, or medical conditions that require extra attention.',
    icon: HeartIcon,
    keywords: ['adaptive', 'accessible', 'compassionate', 'individualized'],
  },
]

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-20 bg-surface" id="services" aria-labelledby="services-heading">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: '#2ec4b6' }}>
            What We Offer
          </span>
          <h2 id="services-heading" className="font-serif text-3xl md:text-4xl font-bold text-foreground text-balance mb-4">
            A Wide Range of Dental Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            From your first tooth to your golden years, Dr. McLemore and his team provide comprehensive dental treatment for every member of your family.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Link
                key={service.href}
                href={service.href}
                className="group flex flex-col bg-white rounded-xl p-5 sm:p-6 border border-border hover:border-primary hover:shadow-md transition-all"
                aria-label={`Learn more about ${service.title}`}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors"
                  style={{ backgroundColor: '#eff6ff', color: '#3b82f6' }}
                >
                  <Icon />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {service.keywords.map((kw) => (
                    <span key={kw} className="text-xs px-2 py-0.5 rounded-full border border-border text-muted-foreground">
                      {kw}
                    </span>
                  ))}
                </div>
                <span className="text-sm font-semibold flex items-center gap-1 transition-colors" style={{ color: '#3b82f6' }}>
                  Learn more
                  <ArrowIcon />
                </span>
              </Link>
            )
          })}

          {/* CTA card */}
          <div
            className="flex flex-col items-start justify-between rounded-xl p-5 sm:p-6 text-white col-span-1 sm:col-span-2 lg:col-span-1"
            style={{ backgroundColor: '#2ec4b6' }}
          >
            <div>
              <h3 className="font-bold text-xl mb-3">Ready to schedule?</h3>
              <p className="text-white/90 text-sm leading-relaxed mb-6">
                New patients are always welcome. Call us today to book your first appointment with Dr. McLemore.
              </p>
            </div>
            <a
              href="tel:+18175964040"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold transition-colors"
              style={{ backgroundColor: '#3b82f6', color: '#ffffff' }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#2563eb')}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#3b82f6')}
              aria-label="Call (817) 596-4040 to schedule an appointment"
            >
              <PhoneIcon />
              (817) 596-4040
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function ToothIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2C8.5 2 5 5 5 9c0 2 .5 3.5 1 5l1 5c.3 1.5 1 3 2.5 3S11 21 12 19c1 2 1.5 3 2.5 3S16.7 20.5 17 19l1-5c.5-1.5 1-3 1-5 0-4-3.5-7-7-7z" />
    </svg>
  )
}

function SparkleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2L9.1 9.1 2 12l7.1 2.9L12 22l2.9-7.1L22 12l-7.1-2.9L12 2z" />
    </svg>
  )
}

function KidIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="4" />
      <path d="M6 21v-1a6 6 0 0 1 12 0v1" />
    </svg>
  )
}

function ElderIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="7" r="4" />
      <path d="M9 14H6l-2 7h16l-2-7h-3" />
      <path d="M12 14v7" />
    </svg>
  )
}

function HeartIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
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

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.81-.81a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
