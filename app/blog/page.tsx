import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/site-config'
import Link from 'next/link'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import MobileCta from '@/components/mobile-cta'
import BlogFilter from '@/components/blog-filter'
import BlogPhoneCta from '@/components/blog-phone-cta'
import { fetchBlogFeed, isPublished } from '@/lib/blog/source'

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

// Only hardcoded posts that have a real hero image are shown on the index.
// Posts without images are kept in the slug page's data map for direct URL access
// but are not surfaced in the listing to avoid broken/placeholder card visuals.
const HARDCODED_POSTS = [
  {
    slug: 'child-needs-braces-stephenville',
    title: 'Is It Time for Braces? Signs Your Child Needs Orthodontic Care',
    excerpt:
      'Wondering if your child might benefit from braces? Learn the warning signs of bite problems, crowding, and misalignment that Dr. McLemore looks for during orthodontic screening.',
    category: 'Pediatric Dentistry',
    date: 'May 2026',
    heroImageUrl: '/child-braces-orthodontic-exam.png',
  },
]

export default async function BlogIndexPage() {
  const feed = await fetchBlogFeed()

  // Map feed posts to the unified card shape, filter future-dated
  const feedPosts = feed.posts
    .filter(isPublished)
    .map((p) => ({
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt,
      category: p.categories?.[0] ?? p.tags?.[0] ?? 'General',
      date: new Date(p.publishAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
      heroImageUrl: p.heroImageUrl,
      author: p.author,
      readingTimeMinutes: p.readingTimeMinutes,
      isFeedPost: true as const,
    }))

  // Merge: feed posts take precedence over hardcoded by slug
  const feedSlugs = new Set(feedPosts.map((p) => p.slug))
  const hardcodedFiltered = HARDCODED_POSTS.filter((p) => !feedSlugs.has(p.slug)).map((p) => ({
    ...p,
    author: undefined as string | undefined,
    readingTimeMinutes: undefined as number | undefined,
    isFeedPost: false as const,
  }))

  const allPosts = [...feedPosts, ...hardcodedFiltered].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return (
    <>
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

        <BlogFilter posts={allPosts} />

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
