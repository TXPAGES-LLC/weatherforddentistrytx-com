import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import MobileCta from '@/components/mobile-cta'
import { fetchBlogFeed, isPublished, type FeedPost } from '@/lib/blog/source'
import { SITE_URL } from '@/lib/site-config'

const PHONE = '(817) 594-8665'
const PHONE_HREF = 'tel:+18175948665'

// ---------------------------------------------------------------------------
// Hardcoded post types & data
// ---------------------------------------------------------------------------
interface HardcodedPost {
  slug: string
  title: string
  metaDescription: string
  category: string
  date: string
  readTime: string
  intro: string
  sections: { heading: string; body: string }[]
  cta: string
  relatedPosts: string[]
  serviceLink?: { href: string; label: string }
  image?: { src: string; alt: string }
}

const HARDCODED: Record<string, HardcodedPost> = {
  'how-often-should-you-visit-the-dentist': {
    slug: 'how-often-should-you-visit-the-dentist',
    title: 'How Often Should You Visit the Dentist? What Weatherford Patients Need to Know',
    metaDescription:
      'Wondering how often to see the dentist in Weatherford, TX? Dr. F. Lee McLemore explains why the right schedule depends on your individual oral health needs.',
    category: 'Preventive Care',
    date: 'April 2025',
    readTime: '4 min read',
    intro:
      'You have probably heard the rule your whole life: see the dentist twice a year. And for many healthy adults, that is exactly right. But dental visit frequency is not one-size-fits-all. Your age, medical history, diet, and current oral health all play a role in determining how often you should come in. Here is what we tell our patients at our Weatherford, TX practice.',
    sections: [
      {
        heading: 'The Standard: Every Six Months',
        body: 'Twice-yearly cleanings and exams remain the gold standard for most adults and children. At each visit, our hygienist removes tartar buildup that brushing and flossing cannot reach, and Dr. McLemore performs a thorough exam to catch problems early — before they become expensive or painful. Early detection is one of the most powerful tools in dentistry.',
      },
      {
        heading: 'Who May Need More Frequent Visits',
        body: 'Some patients benefit from coming in every three to four months rather than every six. This includes people with a history of gum disease (periodontitis), patients with diabetes (which increases the risk of oral infections), smokers, pregnant women, people undergoing cancer treatment, and those with a tendency toward heavy tartar buildup or frequent cavities. If you fall into any of these categories, Dr. McLemore will recommend a customized schedule.',
      },
      {
        heading: 'Children and Teenagers',
        body: "Kids are typically seen every six months as well, starting from the time their first tooth appears — or no later than their first birthday. Teenagers may need more attention during orthodontic treatment since braces create more areas where plaque can hide. We make every effort to make children feel comfortable and relaxed during their visits.",
      },
      {
        heading: 'Seniors and Special Circumstances',
        body: 'Older adults often face unique challenges including dry mouth from medications, receding gums, and root cavities. Patients with mobility limitations or cognitive conditions may also need adapted care. Our geriatric and special needs dentistry services are designed to meet those patients where they are, with patience and expertise.',
      },
      {
        heading: 'Between Visits: What You Can Do',
        body: 'Consistent home care makes a real difference between appointments. Brush at least twice a day with fluoride toothpaste, floss once a day, limit sugary drinks, and stay hydrated. If you notice bleeding gums, tooth sensitivity, or any new discomfort between visits, do not wait — call us and we will get you in.',
      },
    ],
    cta: 'Not sure how often you should be coming in? Call our Weatherford office and we will help you build a schedule that fits your needs.',
    serviceLink: { href: '/services/general-dentistry', label: 'Learn about General Dentistry' },
    relatedPosts: ['gum-disease-signs-weatherford', 'pediatric-dentistry-weatherford-tx', 'dental-care-seniors-weatherford-tx'],
  },

  'child-needs-braces-stephenville': {
    slug: 'child-needs-braces-stephenville',
    title: 'Is It Time for Braces? Signs Your Child Needs Orthodontic Care',
    metaDescription:
      'Wondering if your child needs braces? Learn the signs of bite problems, crowding, and misalignment that Dr. McLemore screens for in Stephenville and Erath County.',
    category: 'Pediatric Dentistry',
    date: 'May 2026',
    readTime: '5 min read',
    intro:
      'Many parents wonder when (or if) their child might need braces. The truth is that bite problems, crowding, and misalignment are very common — and early screening makes a big difference. The American Association of Orthodontists recommends an initial orthodontic evaluation by age seven, even if all the baby teeth have not fallen out yet. Here are the signs that Dr. McLemore looks for when screening Stephenville children and families in Erath County.',
    sections: [
      {
        heading: 'Early Signs of Bite Problems',
        body: 'An improper bite (malocclusion) affects more than just the appearance of teeth. It can impact chewing, swallowing, speech, and even breathing. Signs include an overbite (upper teeth extending far out over lower teeth), an underbite (lower jaw protruding beyond the upper), or a crossbite (some upper teeth sitting inside the lower teeth rather than outside). A deep bite — where the upper teeth overlap the lower teeth too much — can also cause jaw pain and tooth wear over time.',
      },
      {
        heading: 'Crowding and Spacing',
        body: "If your child's permanent teeth are coming in overlapped, twisted, or rotated, that is a classic sign that orthodontic treatment may help. Baby teeth sometimes do not hold enough space for adult teeth, or permanent teeth may simply be too large for the jaw. Early intervention often means simpler, shorter treatment and better long-term outcomes. Spacing issues — where there are large gaps between teeth — can also benefit from orthodontic evaluation.",
      },
      {
        heading: 'Jaw Growth and Alignment Concerns',
        body: 'Sometimes the problem is not the teeth themselves, but the jaw. A child may have a jaw that is growing unevenly, too forward, or too far back. These skeletal issues are much easier to manage when caught early, before growth is complete. Dr. McLemore can identify these concerns during a regular exam and recommend evaluation by an orthodontist if needed. Early assessment often leads to better outcomes than waiting until all permanent teeth have arrived.',
      },
      {
        heading: 'Habits That May Require Evaluation',
        body: 'Certain habits can affect tooth and jaw development. These include prolonged thumb sucking (beyond age three or four), tongue thrusting (pushing the tongue forward against the teeth), mouth breathing instead of nasal breathing, and grinding or clenching the teeth. If your child is displaying any of these habits, mention it at their dental visit. Sometimes the habit itself needs to be addressed before or during orthodontic treatment.',
      },
      {
        heading: 'Why Early Screening Matters',
        body: "Early orthodontic evaluation does not always mean immediate braces. Sometimes it means monitoring the child's growth and development over time. Other times, early intervention — such as a space maintainer, an expander, or a habit-breaking appliance — can prevent more complex problems later. By catching issues early, we often avoid the need for tooth extraction or the requirement for extensive orthodontic treatment as a teenager.",
      },
      {
        heading: 'What to Expect During an Orthodontic Screening',
        body: "At Dr. McLemore's Weatherford office, which serves Stephenville and Erath County families, an orthodontic screening is thorough but comfortable. We examine the alignment of teeth, the bite, the shape and growth of the jaw, and any habits that might be affecting development. If we feel a referral to an orthodontist is appropriate, we make that recommendation and help connect your family with a trusted specialist in the region. If no action is needed at this time, we let you know what to watch for and when to return for follow-up.",
      },
    ],
    cta: 'If your child is showing any of these signs, or if they are approaching age seven, schedule an orthodontic screening with Dr. McLemore at our Weatherford office, which serves Stephenville and Erath County families. Early evaluation can make all the difference.',
    serviceLink: { href: '/services/pediatric-dentistry', label: 'Learn about Pediatric Dentistry' },
    image: {
      src: '/child-braces-orthodontic-exam.png',
      alt: 'Pediatric orthodontic exam: young child smiling while dentist examines teeth for braces evaluation and bite assessment',
    },
    relatedPosts: ['pediatric-dentistry-weatherford-tx', 'how-often-should-you-visit-the-dentist'],
  },

  'pediatric-dentistry-weatherford-tx': {
    slug: 'pediatric-dentistry-weatherford-tx',
    title: "Starting Your Child's Dental Health Right: Pediatric Dentistry in Weatherford",
    metaDescription: 'Early dental visits build a lifetime of healthy smiles. Learn when to bring your child in and what to expect at our Weatherford pediatric dentistry practice.',
    category: 'Pediatric Dentistry',
    date: 'March 2025',
    readTime: '5 min read',
    intro: "Early dental visits set the foundation for a lifetime of healthy smiles. Learn when to bring your child in and what to expect at their first appointment.",
    sections: [
      { heading: 'Getting Started', body: "We recommend scheduling your child's first dental visit when their first tooth appears, or by their first birthday. Early visits help your child feel comfortable with the dental office and allow us to monitor their oral development." },
      { heading: 'Preventing Cavities', body: 'Preventive care is crucial for children. We teach families proper brushing and flossing techniques, apply fluoride treatments, and monitor for early signs of decay.' },
      { heading: 'Managing Anxiety', body: 'Our office is designed to make children feel safe and welcome. We use gentle techniques, clear language, and positive reinforcement to ensure every visit is a good experience.' },
      { heading: 'Nutrition and Habits', body: "Diet plays a big role in children's oral health. We discuss sugary snacks, juice consumption, and healthy habits to support strong teeth and gums." },
    ],
    cta: "Schedule your child's first dental visit with Dr. McLemore today. We make pediatric dentistry fun and comfortable.",
    serviceLink: { href: '/services/pediatric-dentistry', label: 'Learn about Pediatric Dentistry' },
    relatedPosts: ['child-needs-braces-stephenville', 'how-often-should-you-visit-the-dentist'],
  },

  'cosmetic-dentistry-options-weatherford': {
    slug: 'cosmetic-dentistry-options-weatherford',
    title: 'Cosmetic Dentistry Options in Weatherford, TX: From Whitening to Veneers',
    metaDescription: 'A confident smile can change everything. Explore cosmetic dental treatments available at our Weatherford practice — from whitening to veneers.',
    category: 'Cosmetic Dentistry',
    date: 'February 2025',
    readTime: '6 min read',
    intro: 'A confident smile can change everything. Explore the cosmetic dental treatments available at our Weatherford practice and what each one involves.',
    sections: [
      { heading: 'Professional Teeth Whitening', body: 'Over-the-counter whitening products often fall short. Our professional whitening treatments deliver faster, brighter, and longer-lasting results using safe, proven techniques.' },
      { heading: 'Porcelain Veneers', body: "Veneers are thin shells bonded to your front teeth to improve their shape, color, and alignment. They're perfect for hiding stains, gaps, or minor chips while looking completely natural." },
      { heading: 'Composite Bonding', body: "A quicker and more affordable alternative to veneers, composite bonding uses tooth-colored resin to repair chipped teeth, close gaps, and enhance your smile in one or two visits." },
      { heading: 'Smile Makeovers', body: "We can combine multiple treatments — whitening, veneers, bonding, and even orthodontics — to create your dream smile. We'll design the perfect plan for your goals and budget." },
    ],
    cta: 'Ready to transform your smile? Call us to schedule a cosmetic dentistry consultation with Dr. McLemore.',
    serviceLink: { href: '/services/cosmetic-dentistry', label: 'Learn about Cosmetic Dentistry' },
    relatedPosts: ['how-often-should-you-visit-the-dentist', 'pediatric-dentistry-weatherford-tx'],
  },

  'gum-disease-signs-weatherford': {
    slug: 'gum-disease-signs-weatherford',
    title: 'Warning Signs of Gum Disease Every Weatherford Patient Should Know',
    metaDescription: 'Gum disease is the leading cause of adult tooth loss. Learn the early warning signs and how we treat periodontal disease in Weatherford, TX.',
    category: 'Gum Disease',
    date: 'January 2025',
    readTime: '5 min read',
    intro: 'Gum disease is the leading cause of adult tooth loss — and most people do not know they have it. Learn the early warning signs and how we treat periodontal disease.',
    sections: [
      { heading: 'Red, Swollen, or Bleeding Gums', body: "Healthy gums are pale pink and firm. If your gums are red, swollen, or bleed when you brush or floss, that's a sign of inflammation and early gum disease (gingivitis)." },
      { heading: 'Persistent Bad Breath', body: "Bad breath that doesn't go away with brushing or mouthwash can indicate bacterial buildup from gum disease. It's one of the most common early warning signs." },
      { heading: 'Receding Gums and Sensitivity', body: 'As gum disease progresses, gums pull away from teeth, exposing the root surface. This causes sensitivity to temperature and increases decay risk.' },
      { heading: 'Loose Teeth or Bite Changes', body: 'Advanced gum disease (periodontitis) damages the bone that holds teeth in place, causing them to shift, loosen, or even fall out.' },
    ],
    cta: "If you notice any signs of gum disease, don't wait. Early treatment prevents serious damage. Call us today.",
    serviceLink: { href: '/services/general-dentistry', label: 'Learn about General Dentistry' },
    relatedPosts: ['how-often-should-you-visit-the-dentist', 'dental-care-seniors-weatherford-tx'],
  },

  'dental-care-seniors-weatherford-tx': {
    slug: 'dental-care-seniors-weatherford-tx',
    title: 'Dental Care for Seniors in Weatherford: What Changes as We Age',
    metaDescription: 'Older adults face unique dental challenges. Learn about dry mouth, tooth loss, and specialized geriatric dental care in Weatherford, TX.',
    category: 'Geriatric Dentistry',
    date: 'December 2024',
    readTime: '6 min read',
    intro: 'Older adults face unique dental challenges — from dry mouth to tooth loss. Our geriatric dentistry approach is designed to meet those needs with dignity and expertise.',
    sections: [
      { heading: 'Dry Mouth (Xerostomia)', body: 'Many medications cause dry mouth, which increases cavity and decay risk. We recommend frequent sips of water, sugar-free gum, and fluoride treatments to protect your teeth.' },
      { heading: 'Root Cavities', body: 'As gums recede with age, the softer root surface becomes exposed and more vulnerable to decay. Regular checkups help us catch and treat root cavities early.' },
      { heading: 'Tooth Sensitivity', body: 'Receding gums and worn enamel make teeth more sensitive. Fluoride gel, sensitivity toothpaste, and gentle brushing techniques can help manage discomfort.' },
      { heading: 'Dentures and Tooth Loss', body: "If you've lost teeth, dentures, implants, and bridges offer solutions. We help seniors choose the best option for their lifestyle, budget, and health." },
    ],
    cta: "Concerned about your changing dental health? Schedule a geriatric dental exam with Dr. McLemore. We make appointments comfortable for seniors.",
    serviceLink: { href: '/services/general-dentistry', label: 'Learn about General Dentistry' },
    relatedPosts: ['how-often-should-you-visit-the-dentist', 'gum-disease-signs-weatherford'],
  },

  'special-needs-dentistry-weatherford': {
    slug: 'special-needs-dentistry-weatherford',
    title: 'Finding a Special Needs Dentist in Weatherford, TX',
    metaDescription: 'Patients with physical, cognitive, or medical conditions deserve quality dental care. Learn about our adapted special needs dentistry in Weatherford.',
    category: 'Special Needs',
    date: 'November 2024',
    readTime: '5 min read',
    intro: 'Patients with physical, cognitive, or medical conditions deserve quality dental care. Learn how our adapted approach makes every patient feel welcome.',
    sections: [
      { heading: 'Adaptive Care Techniques', body: "We modify our techniques based on each patient's needs — shorter appointments, gentle handling, breaks as needed, and clear communication. Your comfort and dignity are our priorities." },
      { heading: 'Communication Accommodations', body: "Whether a patient uses AAC devices, sign language, or needs more time to understand instructions, we adapt our communication style to ensure everyone understands their care." },
      { heading: 'Managing Anxiety and Sensory Sensitivity', body: 'Many patients with special needs experience anxiety or sensory sensitivity. We provide a calm environment, noise-reducing headphones, and allow support persons in the treatment room.' },
      { heading: 'Coordination with Medical Providers', body: 'We work closely with your medical team to understand how medications, conditions, or therapies might affect dental care. Integrated care leads to better outcomes for everyone.' },
    ],
    cta: "We're committed to providing quality, respectful dental care for all patients. Call to schedule a special needs dentistry visit.",
    serviceLink: { href: '/services/special-needs-dentistry', label: 'Learn about Special Needs Dentistry' },
    relatedPosts: ['dental-care-seniors-weatherford-tx', 'how-often-should-you-visit-the-dentist'],
  },
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
async function resolvePost(slug: string): Promise<
  | { type: 'hardcoded'; post: HardcodedPost }
  | { type: 'feed'; post: FeedPost }
  | null
> {
  // Feed takes precedence
  const feed = await fetchBlogFeed()
  const feedPost = feed.posts.find((p) => p.slug === slug && isPublished(p))
  if (feedPost) return { type: 'feed', post: feedPost }

  const hardcoded = HARDCODED[slug]
  if (hardcoded) return { type: 'hardcoded', post: hardcoded }

  return null
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

  if (resolved.type === 'feed') {
    const p = resolved.post
    const keywords = p.seo?.keywords?.length ? p.seo.keywords : undefined
    const canonical = p.seo?.canonicalUrl ?? `${SITE_URL}/blog/${slug}`
    const ogImage = p.seo?.ogImageUrl ?? '/opengraph-image'
    return {
      title: p.seo?.metaTitle ?? `${p.title} | F. Lee McLemore, DDS`,
      description: p.seo?.metaDescription ?? p.excerpt,
      ...(keywords ? { keywords: keywords.join(', ') } : {}),
      alternates: { canonical },
      openGraph: {
        title: p.seo?.metaTitle ?? `${p.title} | F. Lee McLemore, DDS`,
        description: p.seo?.metaDescription ?? p.excerpt,
        type: 'article',
        url: canonical,
        images: [{ url: ogImage, width: 1200, height: 630 }],
      },
    }
  }

  const p = resolved.post
  const canonical = `${SITE_URL}/blog/${slug}`
  return {
    title: `${p.title} | F. Lee McLemore, DDS`,
    description: p.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: `${p.title} | F. Lee McLemore, DDS`,
      description: p.metaDescription,
      type: 'article',
      url: canonical,
      images: [
        p.image
          ? { url: `${SITE_URL}${p.image.src}`, width: 800, height: 600, alt: p.image.alt }
          : { url: '/opengraph-image', width: 1200, height: 630 },
      ],
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

  if (resolved.type === 'feed') {
    return <FeedPostPage post={resolved.post} />
  }

  return <HardcodedPostPage post={resolved.post} />
}

// ---------------------------------------------------------------------------
// Feed post renderer (contentHtml)
// ---------------------------------------------------------------------------
function FeedPostPage({ post }: { post: FeedPost }) {
  const displayDate = new Date(post.publishAt).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
  const category = post.categories?.[0] ?? post.tags?.[0] ?? 'General'

  return (
    <>
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

        {/* Prose content */}
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
      </main>
      <SiteFooter />
      <MobileCta />
    </>
  )
}

// ---------------------------------------------------------------------------
// Hardcoded post renderer (sections array)
// ---------------------------------------------------------------------------
function HardcodedPostPage({ post }: { post: HardcodedPost }) {
  const allHardcoded = Object.values(HARDCODED)
  const related = post.relatedPosts
    .map((s) => allHardcoded.find((p) => p.slug === s))
    .filter(Boolean) as HardcodedPost[]

  return (
    <>
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
                <li className="text-white font-medium" aria-current="page">{post.category}</li>
              </ol>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.25)', color: '#ffffff' }}>
                {post.category}
              </span>
              <time className="text-white/80 text-sm">{post.date}</time>
              <span className="text-white/60 text-sm">{post.readTime}</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-balance leading-tight">
              {post.title}
            </h1>
          </div>
        </section>

        {/* Article */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <p className="text-lg text-foreground leading-relaxed mb-10 text-pretty border-l-4 pl-5 italic" style={{ borderColor: '#2ec4b6', color: '#334155' }}>
              {post.intro}
            </p>

            {post.image && (
              <figure className="mb-12 rounded-xl overflow-hidden border border-border">
                <img
                  src={post.image.src}
                  alt={post.image.alt}
                  width="800"
                  height="600"
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
                <figcaption className="text-xs text-muted-foreground p-3 bg-surface italic text-center">
                  {post.image.alt}
                </figcaption>
              </figure>
            )}

            <div className="space-y-10">
              {post.sections.map((section) => (
                <article key={section.heading}>
                  <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-3">
                    {section.heading}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {section.body}
                  </p>
                </article>
              ))}
            </div>

            {/* CTA inline */}
            <div className="mt-12 rounded-2xl p-7 text-white" style={{ backgroundColor: '#3b82f6' }}>
              <h2 className="font-serif font-bold text-xl mb-2">Ready to Schedule?</h2>
              <p className="text-white/90 text-sm leading-relaxed mb-5">{post.cta}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-semibold text-sm bg-white transition-colors hover:bg-white/90"
                  style={{ color: '#3b82f6' }}
                  aria-label={`Call F. Lee McLemore DDS at ${PHONE}`}
                >
                  <PhoneIcon />
                  Call {PHONE}
                </a>
                {post.serviceLink && (
                  <Link
                    href={post.serviceLink.href}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-semibold text-sm border-2 border-white text-white hover:bg-white/10 transition-colors"
                  >
                    <ArrowIcon />
                    {post.serviceLink.label}
                  </Link>
                )}
              </div>
              <p className="text-white/60 text-xs mt-3">Mon–Thu 8am–5pm &middot; Fri–Sun Closed</p>
            </div>
          </div>
        </section>

        {/* Related posts */}
        {related.length > 0 && (
          <section className="py-12 md:py-16 bg-surface" aria-labelledby="related-heading">
            <div className="max-w-3xl mx-auto px-4">
              <h2 id="related-heading" className="font-serif text-xl font-bold text-foreground mb-6">
                Related Articles
              </h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group flex flex-col bg-white rounded-xl border border-border hover:border-primary hover:shadow-sm transition-all p-5"
                  >
                    <span className="text-xs font-semibold mb-2 px-2 py-0.5 rounded-full self-start" style={{ backgroundColor: '#eff6ff', color: '#3b82f6' }}>
                      {p.category}
                    </span>
                    <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug text-balance mb-2">
                      {p.title}
                    </p>
                    <time className="text-xs text-muted-foreground mt-auto">{p.date}</time>
                  </Link>
                ))}
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

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}
