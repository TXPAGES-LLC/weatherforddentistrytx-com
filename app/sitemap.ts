import type { MetadataRoute } from 'next'
import { fetchBlogFeed, isPublished } from '@/lib/blog/source'

const BASE = 'https://weatherforddentistrytx.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch live blog posts for dynamic slug entries
  let feedSlugs: { slug: string; publishAt: string; updatedAt?: string }[] = []
  try {
    const data = await fetchBlogFeed()
    feedSlugs = data.posts
      .filter(isPublished)
      .map((p) => ({ slug: p.slug, publishAt: p.publishAt, updatedAt: p.updatedAt }))
  } catch {
    // feed unavailable — sitemap still generates for static pages
  }

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE,                                           lastModified: new Date('2026-06-01'), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/contact`,                             lastModified: new Date('2026-06-01'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/patient-forms`,                       lastModified: new Date('2026-06-01'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/blog`,                                lastModified: new Date('2026-06-01'), changeFrequency: 'weekly',  priority: 0.9 },
    // Services
    { url: `${BASE}/services/general-dentistry`,          lastModified: new Date('2026-06-01'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/services/cosmetic-dentistry`,         lastModified: new Date('2026-06-01'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/services/pediatric-dentistry`,        lastModified: new Date('2026-06-01'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/services/geriatric-dentistry`,        lastModified: new Date('2026-06-01'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/services/special-needs-dentistry`,    lastModified: new Date('2026-06-01'), changeFrequency: 'monthly', priority: 0.8 },
    // Service areas
    { url: `${BASE}/areas/weatherford`,                   lastModified: new Date('2026-06-01'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/areas/aledo`,                         lastModified: new Date('2026-06-01'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/areas/mineral-wells`,                 lastModified: new Date('2026-06-01'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/areas/brock`,                         lastModified: new Date('2026-06-01'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/areas/springtown`,                    lastModified: new Date('2026-06-01'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/areas/hudson-oaks`,                   lastModified: new Date('2026-06-01'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/areas/cresson`,                       lastModified: new Date('2026-06-01'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/areas/granbury`,                      lastModified: new Date('2026-06-01'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/areas/stephenville`,                  lastModified: new Date('2026-06-01'), changeFrequency: 'monthly', priority: 0.7 },
    // Blog posts with real content
    { url: `${BASE}/blog/child-needs-braces-stephenville`, lastModified: new Date('2026-05-01'), changeFrequency: 'monthly', priority: 0.7 },
  ]

  const feedBlogPages: MetadataRoute.Sitemap = feedSlugs.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: p.updatedAt ? new Date(p.updatedAt) : new Date(p.publishAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...feedBlogPages]
}
