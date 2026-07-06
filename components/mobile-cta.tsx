'use client'

import { events } from '@/lib/gtag'

export default function MobileCta() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
      role="complementary"
      aria-label="Quick contact actions"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div
        className="flex items-stretch border-t border-white/20"
        style={{ backgroundColor: '#0f172a' }}
      >
        <a
          href="tel:+18175948665"
          onClick={() => events.phoneCall('mobile_cta')}
          className="flex-1 flex flex-col items-center justify-center gap-1 py-3 text-white active:opacity-80 transition-opacity"
          aria-label="Call (817) 594-8665"
          style={{ borderRight: '1px solid rgba(255,255,255,0.1)' }}
        >
          <PhoneIcon />
          <span className="text-xs font-semibold">Call Us</span>
        </a>
        <a
          href="https://maps.google.com/?cid=2341254151701000531"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => events.getDirections('mobile_cta')}
          className="flex-1 flex flex-col items-center justify-center gap-1 py-3 text-white active:opacity-80 transition-opacity"
          aria-label="Get directions to our Weatherford dental office"
          style={{ borderRight: '1px solid rgba(255,255,255,0.1)' }}
        >
          <MapPinIcon />
          <span className="text-xs font-semibold">Directions</span>
        </a>
        <a
          href="tel:+18175948665"
          onClick={() => events.scheduleClick('mobile_cta')}
          className="flex-1 flex flex-col items-center justify-center gap-1 py-3 text-white active:opacity-80 transition-opacity font-semibold"
          style={{ backgroundColor: '#3b82f6' }}
          aria-label="Schedule appointment by calling us"
        >
          <CalendarIcon />
          <span className="text-xs font-semibold">Schedule</span>
        </a>
      </div>
    </div>
  )
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.81-.81a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function MapPinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}
