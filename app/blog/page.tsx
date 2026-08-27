import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/site-config'
import Link from 'next/link'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import MobileCta from '@/components/mobile-cta'
import BlogFilter from '@/components/blog-filter'
import BlogPhoneCta from '@/components/blog-phone-cta'
import { BreadcrumbJsonLd } from '@/components/structured-data'
import { BLOG_DATA_URL, isPublished, type FeedData } from '@/lib/blog/source'

export const metadata: Metadata = {
  title: 'Dental Health Blog | F. Lee McLemore, DDS — Weatherford TX',
  description:
    'Dental tips, oral health guides, and practice updates from F. Lee McLemore, DDS in Weatherford, TX. Topics include preventive care, pediatric dentistry, cosmetic treatments & more.',
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: 'Dental Health Blog | F. Lee McLemore, DDS — Weatherford TX',
    description: 'Oral health tips and dental guidance from Dr. McLemore in Weatherford, TX.',
    type: 'website',
    url: `${SITE_URL}/blog`,
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Dental Health Blog — F. Lee McLemore, DDS' }],
  },
}

export default async function BlogIndexPage() {
  // All post data is fetched at runtime — nothing is hardcoded here.
  const res = await fetch(BLOG_DATA_URL, { cache: 'no-store' })
  const feed: FeedData = res.ok ? await res.json() : { posts: [] }

  const posts = feed.posts
    .filter(isPublished)
    .sort((a, b) => new Date(b.publishAt).getTime() - new Date(a.publishAt).getTime())
    .map((p) => ({
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt,
      category: p.categories?.[0] ?? p.tags?.[0] ?? 'General',
      date: new Date(p.publishAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
      heroImageUrl: p.heroImageUrl,
      author: p.author,
      readingTimeMinutes: p.readingTimeMinutes,
    }))

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: `${SITE_URL}/` },
          { name: 'Blog', url: `${SITE_URL}/blog` },
        ]}
      />
      <SiteHeader />
      <main id="main-content">
        {/* Hero */}
        <section style={{ backgroundColor: '#2ec4b6' }} className="py-14 text-white">
          <div className="max-w-4xl mx-auto px-4">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-white/70 text-sm">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-white font-medium" aria-current="page">Blog</li>
              </ol>
            </nav>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-balance mb-4">
              Dental Health Blog
            </h1>
            <p className="text-white/90 text-lg text-pretty max-w-2xl">
              Oral health tips, dental care guides, and updates from the practice of F. Lee McLemore, DDS in Weatherford, TX.
            </p>
          </div>
        </section>

        <BlogFilter posts={posts} />

        {/* CTA */}
        <section style={{ backgroundColor: '#3b82f6' }} className="py-12" aria-label="Schedule an appointment">
          <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
            <div>
              <h2 className="font-serif text-2xl font-bold mb-1">Have a dental question?</h2>
              <p className="text-white/90 text-sm">Our team is happy to answer — just give us a call.</p>
            </div>
            <BlogPhoneCta />
          </div>
        </section>
      </main>
      <SiteFooter />
      <MobileCta />
    </>
  )
}
