'use client'

import { useState } from 'react'
import Link from 'next/link'

interface PostCard {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  heroImageUrl?: string
  author?: string
  readingTimeMinutes?: number
  isFeedPost: boolean
}

export default function BlogFilter({ posts }: { posts: PostCard[] }) {
  const allCategories = ['All', ...Array.from(new Set(posts.map((p) => p.category))).sort()]
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? posts : posts.filter((p) => p.category === active)

  return (
    <>
      {/* Category filter bar */}
      <section className="bg-white border-b border-border py-4" aria-label="Filter by category">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-wrap gap-2" role="list" aria-label="Blog categories">
            {allCategories.map((cat) => {
              const isActive = active === cat
              return (
                <button
                  key={cat}
                  role="listitem"
                  onClick={() => setActive(cat)}
                  className="px-4 py-2 rounded-full text-sm font-medium border transition-colors cursor-pointer min-h-[40px]"
                  style={
                    isActive
                      ? { backgroundColor: '#3b82f6', color: '#ffffff', borderColor: '#3b82f6' }
                      : { backgroundColor: 'transparent', color: '#64748b', borderColor: '#e2e8f0' }
                  }
                  aria-pressed={isActive}
                >
                  {cat}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-14 md:py-20 bg-surface" aria-label="Blog posts">
        <div className="max-w-4xl mx-auto px-4">
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-sm">No posts in this category yet. Check back soon.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {filtered.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col bg-white rounded-xl border border-border hover:border-primary hover:shadow-sm transition-all overflow-hidden cursor-pointer"
                  aria-label={`Read: ${post.title}`}
                >
                  {/* Hero image */}
                  {post.heroImageUrl && (
                    <div className="w-full h-44 overflow-hidden bg-surface flex-shrink-0">
                      <img
                        src={post.heroImageUrl}
                        alt={`Hero image for: ${post.title}`}
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                        loading="lazy"
                        width="600"
                        height="176"
                      />
                    </div>
                  )}

                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-3 gap-2 flex-wrap">
                      <span
                        className="text-xs font-semibold px-2.5 py-1 rounded-full"
                        style={{ backgroundColor: '#eff6ff', color: '#3b82f6' }}
                      >
                        {post.category}
                      </span>
                      <time className="text-xs text-muted-foreground">{post.date}</time>
                    </div>

                    <h2 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug text-balance">
                      {post.title}
                    </h2>

                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {post.excerpt}
                    </p>

                    <div className="mt-4 flex items-center justify-between gap-2 flex-wrap">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        {post.author && <span>{post.author}</span>}
                        {post.readingTimeMinutes && (
                          <span>{post.readingTimeMinutes} min read</span>
                        )}
                      </div>
                      <span
                        className="inline-flex items-center gap-1 text-sm font-semibold"
                        style={{ color: '#3b82f6' }}
                      >
                        Read more
                        <ArrowIcon />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}
