const profiles = [
  {
    label: 'Google Maps',
    href: 'https://maps.google.com/?cid=2341254151701000531',
    description: 'Find us & read patient reviews',
    icon: GoogleIcon,
  },
  {
    label: 'Bing Maps',
    href: 'https://www.bing.com/maps?ss=ypid.YN873x12736015283347290910',
    description: 'Business profile on Bing',
    icon: BingIcon,
  },
  {
    label: 'Yelp',
    href: 'https://www.yelp.com/biz/f-lee-mclemore-dds-weatherford-2',
    description: 'Ratings & patient feedback',
    icon: YelpIcon,
  },
  {
    label: 'Superpages',
    href: 'https://www.superpages.com/weatherford-tx/bpp/f-lee-mclemore-dds-8529377',
    description: 'Local business directory',
    icon: SuperpagesIcon,
  },
  {
    label: 'Trusted Local',
    href: 'https://trustedlocaldirectory.com/listing/f-lee-mclemore-dds-65ce44a1acfe6.html',
    description: 'Trusted local directory',
    icon: TrustedLocalIcon,
  },
  {
    label: 'Yellow Pages',
    href: 'https://www.yellowpages.com/weatherford-tx/mip/f-lee-mclemore-dds-8529377',
    description: 'Verified business listing',
    icon: YellowPagesIcon,
  },
]

export default function VerifiedProfilesSection() {
  return (
    <section
      className="py-14 md:py-18"
      style={{ backgroundColor: '#f8fafc' }}
      aria-labelledby="profiles-heading"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <span
            className="inline-block text-sm font-semibold uppercase tracking-wider mb-3"
            style={{ color: '#2ec4b6' }}
          >
            Third-Party Verified
          </span>
          <h2
            id="profiles-heading"
            className="font-serif text-2xl md:text-3xl font-bold text-foreground text-balance"
          >
            Find Us Online
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm leading-relaxed">
            Our practice is listed and verified across trusted directories. Use any of the links
            below to confirm our address, get directions, or read patient reviews.
          </p>
        </div>

        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4" role="list">
          {profiles.map(({ label, href, description, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 sm:gap-3 p-3 sm:p-5 rounded-xl border border-border bg-white hover:border-primary hover:shadow-md transition-all group text-center h-full"
                aria-label={`${label} — ${description}`}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors"
                  style={{ backgroundColor: '#f1f5f9' }}
                >
                  <Icon />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {label}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 leading-snug">
                    {description}
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ── Icons ─────────────────────────────────────────────────────────────── */

function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}

function YelpIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#D32323" aria-hidden="true">
      <path d="M20.16 12.73l-4.65 1.34c-.86.25-1.62-.61-1.25-1.43l2.06-4.43c.37-.8 1.5-.8 1.84.02l2.59 4.08c.34.53.03 1.25-.59 1.42zm-8.6 4.1l-.87 4.77c-.16.87.72 1.56 1.52 1.18l4.3-2.08c.8-.39.84-1.53.07-1.97l-3.43-2.7c-.7-.55-1.7-.05-1.59.8zm-3.13-.28L4.6 18.6c-.74.49-.66 1.63.14 2l4.42 1.82c.8.33 1.63-.35 1.44-1.2l-1.12-4.78c-.18-.76-1.09-1.05-1.65-.49zm-.33-5.8L3.96 9.6c-.8-.26-1.58.48-1.32 1.28l1.45 4.55c.26.82 1.35.98 1.83.27l2.55-3.73c.48-.71.08-1.69-.77-1.92zm4.7-5.32l-.32-4.86c-.06-.88-1.1-1.3-1.73-.7L7.67 3.64c-.63.6-.42 1.66.38 1.97l4.4 1.7c.73.28 1.44-.33 1.35-1.08z"/>
    </svg>
  )
}

function YellowPagesIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" fill="none">
      <rect width="24" height="24" rx="4" fill="#FFC200"/>
      <text x="4" y="17" fontSize="12" fontWeight="bold" fill="#1a1a1a">YP</text>
    </svg>
  )
}

function SuperpagesIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" fill="none">
      <rect width="24" height="24" rx="4" fill="#0066CC"/>
      <text x="3" y="17" fontSize="10" fontWeight="bold" fill="white">SP</text>
    </svg>
  )
}

function TrustedLocalIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" fill="none">
      <rect width="24" height="24" rx="4" fill="#1a6b3c"/>
      <path d="M12 4l1.8 3.6 4 .6-2.9 2.8.7 4L12 13l-3.6 2 .7-4L6.2 8.2l4-.6L12 4z" fill="white"/>
    </svg>
  )
}

function BingIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#008373" aria-hidden="true">
      <path d="M5 3l4 1.5v12.3l5.3-3-1.9-4.8L17 12l-8 5.5V3H5z"/>
    </svg>
  )
}
