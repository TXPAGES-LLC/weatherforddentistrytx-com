import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import MobileCta from '@/components/mobile-cta'
import { BLOG_DATA_URL, isPublished, type FeedData, type FeedPost } from '@/lib/blog/source'
import { SITE_URL } from '@/lib/site-config'
import { BreadcrumbJsonLd } from '@/components/structured-data'

const PHONE = '(817) 594-8665'
const PHONE_HREF = 'tel:+18175948665'

// ---------------------------------------------------------------------------
// Data — fetched at runtime only. No post content is hardcoded anywhere below.
// ---------------------------------------------------------------------------
async function resolvePost(slug: string): Promise<{ post: FeedPost; allPosts: FeedPost[] } | null> {
  // Appends ?slug= to the feed request for per-post traffic attribution.
  // The response body is identical to the bare BLOG_DATA_URL request.
  const res = await fetch(`${BLOG_DATA_URL}?slug=${encodeURIComponent(slug)}`, { cache: 'no-store' })
  const feed: FeedData = res.ok ? await res.json() : { posts: [] }
  const post = feed.posts.find((p) => p.slug === slug)
  if (!post || !isPublished(post)) return null
  return { post, allPosts: feed.posts }
}

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const resolved = await resolvePost(slug)
  if (!resolved) return {}

  const { post } = resolved
  const title = post.seo?.metaTitle || post.title
  const description = post.seo?.metaDescription || post.excerpt
  const keywords = post.seo?.keywords?.length ? post.seo.keywords.join(', ') : undefined
  const canonical = post.seo?.canonicalUrl || `${SITE_URL}/blog/${slug}`
  const ogImage = post.seo?.ogImageUrl || post.heroImageUrl || '/opengraph-image'

  return {
    title: `${title} | F. Lee McLemore, DDS`,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical },
    openGraph: {
      title: `${title} | F. Lee McLemore, DDS`,
      description,
      type: 'article',
      url: canonical,
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
    },
  }
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const resolved = await resolvePost(slug)
  if (!resolved) notFound()

  const { post, allPosts } = resolved
  const displayDate = new Date(post.publishAt).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
  const category = post.categories?.[0] ?? post.tags?.[0] ?? 'General'
  const canonical = `${SITE_URL}/blog/${post.slug}`

  const related = allPosts
    .filter((p) => p.slug !== post.slug && isPublished(p))
    .sort((a, b) => new Date(b.publishAt).getTime() - new Date(a.publishAt).getTime())
    .slice(0, 3)

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: `${SITE_URL}/` },
          { name: 'Blog', url: `${SITE_URL}/blog` },
          { name: category, url: canonical },
        ]}
      />
      <SiteHeader />
      <main id="main-content">
        {/* Hero */}
        <section style={{ backgroundColor: '#2ec4b6' }} className="py-14 text-white">
          <div className="max-w-3xl mx-auto px-4">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex flex-wrap items-center gap-2 text-white/70 text-sm">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-white font-medium" aria-current="page">{category}</li>
              </ol>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.25)', color: '#ffffff' }}>
                {category}
              </span>
              <time className="text-white/80 text-sm" dateTime={post.publishAt}>{displayDate}</time>
              {post.readingTimeMinutes && (
                <span className="text-white/60 text-sm">{post.readingTimeMinutes} min read</span>
              )}
              {post.author && <span className="text-white/70 text-sm">by {post.author}</span>}
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-balance leading-tight">
              {post.title}
            </h1>
          </div>
        </section>

        {/* Hero image */}
        {post.heroImageUrl && (
          <div className="max-w-3xl mx-auto px-4 pt-10">
            <figure className="rounded-xl overflow-hidden border border-border">
              <img
                src={post.heroImageUrl}
                alt={`Hero image for: ${post.title}`}
                className="w-full h-auto max-h-[420px] object-cover"
                loading="eager"
                width="800"
                height="420"
              />
            </figure>
          </div>
        )}

        {/* Prose content — contentHtml is pre-sanitized; rendered via the .blog-prose
            scoped styles in globals.css (headings, links, lists, blockquote, code, images). */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <article
              className="blog-prose"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />

            {/* CTA */}
            <div className="mt-12 rounded-2xl p-7 text-white" style={{ backgroundColor: '#3b82f6' }}>
              <h2 className="font-serif font-bold text-xl mb-2">Ready to Schedule?</h2>
              <p className="text-white/90 text-sm leading-relaxed mb-5">
                Our Weatherford office is accepting new patients. Call us to schedule your appointment today.
              </p>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-semibold text-sm bg-white transition-colors hover:bg-white/90"
                style={{ color: '#3b82f6' }}
                aria-label={`Call F. Lee McLemore DDS at ${PHONE}`}
              >
                <PhoneIcon />
                Call {PHONE}
              </a>
              <p className="text-white/60 text-xs mt-3">Mon–Thu 8am–5pm &middot; Fri–Sun Closed</p>
            </div>

            <div className="mt-8">
              <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold hover:underline" style={{ color: '#3b82f6' }}>
                <BackIcon />
                Back to all articles
              </Link>
            </div>
          </div>
        </section>

        {/* Related posts — pulled from the same live feed, never hardcoded */}
        {related.length > 0 && (
          <section className="py-12 md:py-16 bg-surface" aria-labelledby="related-heading">
            <div className="max-w-3xl mx-auto px-4">
              <h2 id="related-heading" className="font-serif text-xl font-bold text-foreground mb-6">
                Related Articles
              </h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {related.map((p) => {
                  const pCategory = p.categories?.[0] ?? p.tags?.[0] ?? 'General'
                  const pDate = new Date(p.publishAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
                  return (
                    <Link
                      key={p.slug}
                      href={`/blog/${p.slug}`}
                      className="group flex flex-col bg-white rounded-xl border border-border hover:border-primary hover:shadow-sm transition-all p-5"
                      aria-label={`Read: ${p.title}`}
                    >
                      <span className="text-xs font-semibold mb-2 px-2 py-0.5 rounded-full self-start" style={{ backgroundColor: '#eff6ff', color: '#3b82f6' }}>
                        {pCategory}
                      </span>
                      <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug text-balance mb-2">
                        {p.title}
                      </p>
                      <time className="text-xs text-muted-foreground mt-auto">{pDate}</time>
                    </Link>
                  )
                })}
              </div>
              <div className="mt-8">
                <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold hover:underline" style={{ color: '#3b82f6' }}>
                  <BackIcon />
                  Back to all articles
                </Link>
              </div>
            </div>
          </section>
        )}
      </main>
      <SiteFooter />
      <MobileCta />
    </>
  )
}

// ---------------------------------------------------------------------------
// Icons
// ---------------------------------------------------------------------------
function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.81-.81a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function BackIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  )
}
