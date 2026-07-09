'use client'

import { events } from '@/lib/gtag'

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.81-.81a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

export default function BlogPhoneCta() {
  return (
    <a
      href="tel:+18175948665"
      onClick={() => events.phoneCall('blog_index_cta')}
      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-sm bg-white hover:bg-white/90 transition-colors flex-shrink-0"
      style={{ color: '#3b82f6' }}
    >
      <PhoneIcon /> (817) 594-8665
    </a>
  )
}
