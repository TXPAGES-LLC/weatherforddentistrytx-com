import { SITE_URL } from '@/lib/site-config'

export default function StructuredData() {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: 'F. Lee McLemore, DDS',
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/gbp-logo.png`,
    image: `${SITE_URL}/opengraph-image`,
    description:
      'Family and cosmetic dental practice in Weatherford, TX offering general, cosmetic, pediatric, geriatric, and special needs dentistry.',
    telephone: '+1-817-594-8665',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '610 Eureka St',
      addressLocality: 'Weatherford',
      addressRegion: 'TX',
      postalCode: '76086',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 32.749885,
      longitude: -97.788153,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
    priceRange: '$$',
    foundingYear: 1991,
    paymentAccepted: 'Cash, Check, Credit Card, Dental Insurance',
    areaServed: [
      'Weatherford, TX',
      'Aledo, TX',
      'Mineral Wells, TX',
      'Springtown, TX',
      'Hudson Oaks, TX',
      'Brock, TX',
      'Cresson, TX',
      'Granbury, TX',
      'Stephenville, TX',
      'Parker County, TX',
    ],
    hasMap: 'https://maps.google.com/?cid=2341254151701000531',
    sameAs: [
      'https://maps.google.com/?cid=2341254151701000531',
      'https://www.bing.com/maps?ss=ypid.YN873x12736015283347290910',
      'https://www.yelp.com/biz/f-lee-mclemore-dds-weatherford-2',
      'https://www.facebook.com/people/F-Lee-McLemore-DDS/100090113070390/',
      'https://www.bbb.org/us/tx/weatherford/profile/dentist/f-lee-mclemore-dds-pa-0825-153913257',
      'https://www.yellowpages.com/weatherford-tx/mip/f-lee-mclemore-dds-8529377',
      'https://www.superpages.com/weatherford-tx/bpp/f-lee-mclemore-dds-8529377',
    ],
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'F. Lee McLemore, DDS — Dentist in Weatherford TX',
    url: `${SITE_URL}/`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  )
}

/**
 * Renders a BreadcrumbList JSON-LD schema. The `items` passed in MUST mirror
 * the visible on-page breadcrumb trail exactly (same labels, same order, same
 * linked URLs) so the structured data matches what users and crawlers see.
 */
export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const breadcrumbList = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
    />
  )
}

/**
 * Renders a Service JSON-LD schema for a specific dental service page.
 * `name`/`description` should match the visible page headline and summary.
 */
export function ServiceJsonLd({
  name,
  description,
  url,
}: {
  name: string
  description: string
  url: string
}) {
  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: name,
    name: `${name} — F. Lee McLemore, DDS`,
    description,
    url,
    provider: {
      '@type': 'Dentist',
      name: 'F. Lee McLemore, DDS',
      url: `${SITE_URL}/`,
      telephone: '+1-817-594-8665',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '610 Eureka St',
        addressLocality: 'Weatherford',
        addressRegion: 'TX',
        postalCode: '76086',
        addressCountry: 'US',
      },
    },
    areaServed: [
      'Weatherford, TX',
      'Aledo, TX',
      'Mineral Wells, TX',
      'Springtown, TX',
      'Hudson Oaks, TX',
      'Brock, TX',
      'Cresson, TX',
      'Granbury, TX',
      'Stephenville, TX',
      'Parker County, TX',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
    />
  )
}
