export const BLOG_DATA_URL =
  'https://generator.dynapt.com/api/blog/data/69c7feae-44fe-4702-acc8-ff8c87546006'

export interface FeedPost {
  slug: string
  title: string
  excerpt: string
  contentHtml: string
  heroImageUrl?: string
  author?: string
  tags?: string[]
  categories?: string[]
  publishAt: string
  updatedAt?: string
  readingTimeMinutes?: number
  wordCount?: number
  seo?: {
    metaTitle?: string
    metaDescription?: string
    canonicalUrl?: string
    ogImageUrl?: string
    keywords?: string[]
  }
}

export interface FeedData {
  collection?: { title?: string; navLabel?: string; basePath?: string }
  posts: FeedPost[]
}

export async function fetchBlogFeed(slug?: string): Promise<FeedData> {
  try {
    // Appending the slug as a query param on the post page lets per-post traffic
    // be attributed upstream; the response body is identical to the bare URL.
    const url = slug ? `${BLOG_DATA_URL}?slug=${encodeURIComponent(slug)}` : BLOG_DATA_URL
    const res = await fetch(url, { cache: 'no-store' })
    if (!res.ok) return { posts: [] }
    return (await res.json()) as FeedData
  } catch {
    return { posts: [] }
  }
}

export function isPublished(post: FeedPost): boolean {
  return new Date(post.publishAt) <= new Date()
}
