'use client'

import Link from 'next/link'
import { events } from '@/lib/gtag'

const PHONE = '(817) 594-8665'
const PHONE_HREF = 'tel:+18175948665'

export default function HeroSection() {
  return (
    <section
      style={{ backgroundColor: '#2ec4b6' }}
      className="relative overflow-hidden"
      aria-label="Welcome to the Dental Practice of F. Lee McLemore, DDS"
    >
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 50%, #ffffff 1px, transparent 1px), radial-gradient(circle at 75% 50%, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 py-12 sm:py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white text-xs sm:text-sm font-medium px-3 py-1 rounded-full mb-4 sm:mb-5">
              <StarIcon />
              Trusted by Weatherford families since 1991
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-balance mb-4 sm:mb-5">
              Welcome to the Dental Practice of{' '}
              <span className="text-white drop-shadow">F. Lee McLemore, DDS</span>
            </h1>

            <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 text-pretty">
              Compassionate, comprehensive dental care for your entire family in Weatherford, TX. From routine cleanings to cosmetic dentistry, we provide the full range of dental services your family needs&nbsp;— all under one roof.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={PHONE_HREF}
                onClick={() => events.phoneCall('hero')}
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg font-semibold text-sm sm:text-base transition-colors bg-blue-500 hover:bg-blue-600 text-white min-h-[44px] w-full sm:w-auto"
                aria-label={`Call our office at ${PHONE}`}
              >
                <PhoneIcon />
                Call {PHONE}
              </a>
              <a
                href="https://maps.google.com/?cid=2341254151701000531"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => events.getDirections('hero')}
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg font-semibold text-sm sm:text-base bg-white/20 text-white hover:bg-white/30 transition-colors border border-white/30 min-h-[44px] w-full sm:w-auto"
              >
                <MapPinIcon />
                Get Directions
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 sm:gap-4">
              {[
                'Same-Day Appointments',
                'New Patients Welcome',
                'Most Insurance Accepted',
              ].map((tag) => (
                <div key={tag} className="flex items-center gap-1.5 text-xs sm:text-sm text-white/90">
                  <CheckIcon />
                  {tag}
                </div>
              ))}
            </div>
          </div>

          {/* Trust card */}
          <div className="flex flex-col gap-4">
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-xl">
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-5">
                <img
                  src="https://weatherforddentistrytx.com/wp-content/uploads/2023/12/tooth.png"
                  alt="Dental care icon representing quality dentistry"
                  width="56"
                  height="56"
                  loading="eager"
                  fetchPriority="high"
                  className="w-12 h-12 sm:w-14 sm:h-14 object-contain flex-shrink-0"
                />
                <div>
                  <h2 className="font-bold text-lg sm:text-xl text-foreground leading-tight">100% Satisfaction</h2>
                  <p className="text-muted-foreground text-xs sm:text-sm mt-1">Your comfort and health are our top priority</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {[
                  { label: 'General Dentistry', href: '/services/general-dentistry' },
                  { label: 'Cosmetic Dentistry', href: '/services/cosmetic-dentistry' },
                  { label: 'Pediatric Dentistry', href: '/services/pediatric-dentistry' },
                  { label: 'Special Needs', href: '/services/special-needs-dentistry' },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center p-2.5 sm:p-3 rounded-lg border border-border hover:border-primary hover:bg-surface transition-colors group text-xs sm:text-sm"
                  >
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors leading-tight">
                      {item.label}
                    </span>
                  </Link>
                ))}
              </div>

              <a
                href="https://maps.google.com/?cid=2341254151701000531"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 pt-4 border-t border-border flex flex-wrap items-center justify-between gap-2 group"
                aria-label="Read our reviews on Google Maps"
              >
                <div className="flex items-center gap-0.5" aria-hidden="true">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="#f59e0b">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground group-hover:text-primary transition-colors">Read our Google reviews →</p>
              </a>
            </div>

            {/* Hours card */}
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30 text-white">
              <h3 className="font-semibold text-sm mb-2">Office Hours</h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-white/90">
                <span>Mon – Thu</span><span className="font-medium">8am – 5pm</span>
                <span>Fri – Sun</span><span className="font-medium">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}
