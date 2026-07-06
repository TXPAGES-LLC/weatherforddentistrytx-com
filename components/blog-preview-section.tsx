import Link from 'next/link'

const posts = [
  {
    slug: 'how-often-should-you-visit-the-dentist',
    title: 'How Often Should You Visit the Dentist? What Weatherford Patients Need to Know',
    excerpt:
      'Most people know twice-a-year cleanings are standard — but your actual ideal frequency depends on several personal health factors. Here is what Dr. McLemore recommends.',
    category: 'Preventive Care',
    date: 'April 2025',
  },
  {
    slug: 'pediatric-dentistry-weatherford-tx',
    title: 'Starting Your Child\'s Dental Health Right: Pediatric Dentistry in Weatherford',
    excerpt:
      'Early dental visits set the foundation for a lifetime of healthy smiles. Learn when to bring your child in and what to expect at their first appointment.',
    category: 'Pediatric Dentistry',
    date: 'March 2025',
  },
  {
    slug: 'cosmetic-dentistry-options-weatherford',
    title: 'Cosmetic Dentistry Options in Weatherford, TX: From Whitening to Veneers',
    excerpt:
      'A confident smile can change everything. Explore the cosmetic dental treatments available at our Weatherford practice and what each one involves.',
    category: 'Cosmetic Dentistry',
    date: 'February 2025',
  },
]

export default function BlogPreviewSection() {
  return (
    <section className="py-16 md:py-20 bg-white" aria-labelledby="blog-heading">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="inline-block text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: '#2ec4b6' }}>
              Dental Health Tips
            </span>
            <h2 id="blog-heading" className="font-serif text-3xl md:text-4xl font-bold text-foreground text-balance">
              From Our Blog
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold flex-shrink-0"
            style={{ color: '#3b82f6' }}
          >
            View all articles <ArrowIcon />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col bg-surface rounded-xl border border-border hover:border-primary hover:shadow-sm transition-all overflow-hidden"
              aria-label={`Read: ${post.title}`}
            >
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: '#eff6ff', color: '#3b82f6' }}
                  >
                    {post.category}
                  </span>
                  <time className="text-xs text-muted-foreground">{post.date}</time>
                </div>
                <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug text-balance">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-3">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold" style={{ color: '#3b82f6' }}>
                  Read more <ArrowIcon />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}
