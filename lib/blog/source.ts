export const BLOG_DATA_URL =
  'https://raw.githubusercontent.com/TXPAGES-LLC/weatherforddentistrytx-com/main/lib/blog/posts.json'

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

export async function fetchBlogFeed(): Promise<FeedData> {
  try {
    const res = await fetch(BLOG_DATA_URL, { cache: 'no-store' })
    if (!res.ok) return { posts: [] }
    return (await res.json()) as FeedData
  } catch {
    return { posts: [] }
  }
}

export function isPublished(post: FeedPost): boolean {
  return new Date(post.publishAt) <= new Date()
}
