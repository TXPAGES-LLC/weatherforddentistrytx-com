import Link from 'next/link'

const PHONE = '(817) 594-8665'
const PHONE_HREF = 'tel:+18175948665'
const ADDRESS = '610 Eureka St, Weatherford, TX 76086'
const EMAIL = 'leemclemoredds@sbcglobal.net'

export default function SiteFooter() {
  return (
    <footer className="bg-foreground text-white" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4" aria-label="F. Lee McLemore DDS - Home">
              <span className="font-bold text-lg text-white block leading-tight">F. Lee McLemore, DDS</span>
              <span className="text-sm" style={{ color: '#2ec4b6' }}>Family &amp; Cosmetic Dentistry</span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              Providing compassionate, comprehensive dental care to Weatherford, TX and Parker County families since 1991.
            </p>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors bg-blue-500 hover:bg-blue-600 text-white"
              aria-label={`Call our office at ${PHONE}`}
            >
              <PhoneIcon />
              {PHONE}
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-white/50 mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                { label: 'General Dentistry', href: '/services/general-dentistry' },
                { label: 'Cosmetic Dentistry', href: '/services/cosmetic-dentistry' },
                { label: 'Pediatric Dentistry', href: '/services/pediatric-dentistry' },
                { label: 'Geriatric Dentistry', href: '/services/geriatric-dentistry' },
                { label: 'Special Needs Dentistry', href: '/services/special-needs-dentistry' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-white/50 mb-4">Areas Served</h3>
            <ul className="space-y-2">
              {[
                { label: 'Weatherford, TX', href: '/areas/weatherford' },
                { label: 'Aledo, TX', href: '/areas/aledo' },
                { label: 'Mineral Wells, TX', href: '/areas/mineral-wells' },
                { label: 'Springtown, TX', href: '/areas/springtown' },
                { label: 'Hudson Oaks, TX', href: '/areas/hudson-oaks' },
                { label: 'Brock, TX', href: '/areas/brock' },
                { label: 'Cresson, TX', href: '/areas/cresson' },
                { label: 'Granbury, TX', href: '/areas/granbury' },
                { label: 'Stephenville, TX', href: '/areas/stephenville' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-white/50 mb-4">Contact &amp; Hours</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/70">
                <PhoneIcon />
                <a href={PHONE_HREF} className="hover:text-white transition-colors">{PHONE}</a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/70">
                <EnvelopeIcon />
                <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">{EMAIL}</a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/70">
                <MapPinIcon />
                <a
                  href="https://maps.google.com/?cid=2341254151701000531"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {ADDRESS}
                </a>
              </li>
            </ul>
            <div className="mt-5 text-sm text-white/70 space-y-1">
              <div className="flex justify-between">
                <span>Mon – Thu</span><span className="font-medium text-white/90">8am – 5pm</span>
              </div>
              <div className="flex justify-between">
                <span>Fri – Sun</span><span className="font-medium text-white/90">Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-6">
            <div className="flex gap-4 items-center">
              <p>&copy; {new Date().getFullYear()} F. Lee McLemore, DDS. All rights reserved.</p>
            </div>
            <div className="flex gap-4 items-center">
              <a
                href="https://www.facebook.com/people/F-Lee-McLemore-DDS/100090113070390/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Follow us on Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://maps.google.com/?cid=2341254151701000531"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors text-sm"
                aria-label="View our Google Business Profile"
              >
                Google Business Profile
              </a>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-xs text-white/40">
            <p>Weatherford, TX Family &amp; Cosmetic Dentistry</p>
            <span className="hidden sm:inline">•</span>
            <p>
              Powered by{' '}
              <a
                href="https://www.txpages.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white/70 transition-colors"
              >
                TXPAGES
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
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

function EnvelopeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}
