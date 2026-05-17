import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Badge } from '@/components/ui/Badge'
import { BlogCover } from '@/components/ui/BlogCover'
import { formatDate } from '@/lib/utils'
import { posts } from '@/lib/blogData'

// ── Per-slug article body ─────────────────────────────────────────────────────

const articleBodies: Record<string, string[]> = {
  'ai-workflow-automation-2025': [
    'Enterprise teams have been promised AI efficiency gains for years, but 2025 is the year many of those promises are finally materialising at scale. The key shift is that AI is no longer a point solution — it is becoming the connective tissue between systems that previously required human handoffs.',
    'In our client work, the highest-impact automations have been in document-heavy workflows: contract review, invoice reconciliation, compliance reporting. A well-prompted LLM combined with structured output parsing can process what took a junior analyst an afternoon in under 30 seconds — with better consistency.',
    "The second wave of wins is in customer service. Not chatbots that frustrate users, but context-aware agents with access to your CRM, order management, and knowledge base. When you give an LLM the right tools and the right guardrails, it handles 70–80% of tickets without escalation. The economics are transformative — but so are the risks if you deploy before the guardrails are solid.",
    'For teams just starting, our advice is: pick one workflow, measure it ruthlessly, then scale. The organisations failing with AI are the ones trying to automate everything at once. The ones winning pick the highest-ROI, lowest-risk process and build institutional confidence from there.',
  ],
  'llm-integration-guide': [
    "The most common mistake we see when teams want to 'add AI' to their stack is treating it like adding a new dependency. You run npm install, call an API, and expect magic. The reality is that LLM integration is an architectural decision that touches your data layer, your error handling, your latency budget, and your cost model.",
    'Start with the data. An LLM is only as good as the context it has access to. Before writing a single line of integration code, map out what information the model will need to be useful, how fresh that data needs to be, and how you will retrieve it. RAG (retrieval-augmented generation) with a vector database is the right answer for most applications with proprietary knowledge.',
    'On the engineering side: always stream responses for user-facing features — nobody wants to stare at a spinner for 8 seconds. Implement exponential backoff and fallbacks from day one, because API reliability, even from the best providers, is not 100%. Cache aggressively where possible; prompt tokens for the same system context are an avoidable cost.',
    'Finally, instrument everything. Log input length, output length, latency, and cost per call. Build dashboards before you go to production. The teams that operate AI reliably are the ones that have treated observability as a first-class concern, not an afterthought.',
  ],
  'sast-dast-security-audit': [
    'Static Application Security Testing (SAST) analyses your source code without executing it, looking for patterns that indicate vulnerabilities — SQL injection, hardcoded secrets, insecure deserialization, and so on. It runs fast, integrates into your CI pipeline, and catches issues before a single line reaches production. The tradeoff: SAST produces false positives, and it cannot detect vulnerabilities that only emerge at runtime.',
    'Dynamic Application Security Testing (DAST) does the opposite: it fires HTTP requests at a running application and analyses the responses for signs of exploitable behaviour. DAST is slower, requires a deployed environment, and has less visibility into your code — but it catches things SAST never will, like authentication flaws, session management issues, and misconfigured headers.',
    "Most mature security programmes use both. SAST in your PR checks catches the low-hanging fruit early and cheaply. DAST in your staging environment — automated weekly, and manually before any major release — finds the runtime surprises. Adding dependency scanning (Snyk, OWASP Dependency-Check) rounds out the picture by surfacing vulnerabilities in your third-party packages.",
    'If you are choosing between the two, start with SAST: the feedback loop is faster, the developer experience is better, and the cost per finding is lower. Once your codebase is reasonably clean on static findings, add DAST. The goal is defence in depth — no single tool catches everything, and that is by design.',
  ],
  'next-js-cloudflare-pages': [
    'When we rebuilt exagrowth.com on Next.js and Cloudflare Pages, the motivations were clear: faster global delivery, zero cold starts, zero infrastructure management, and a single git push to deploy. The reality was mostly that — with a few wrinkles worth documenting.',
    "The first gotcha is Cloudflare Pages' Node.js compatibility. The edge runtime does not have the same APIs as Node.js, so anything that reaches for `fs`, `path`, or Node built-ins will break. We hit this with our Sanity client, which uses a Node-specific fetch configuration. The fix was to ensure all server-side Sanity calls used the standard `fetch` API and passed `cache: 'no-store'` where freshness was required.",
    'The second issue was image optimisation. Cloudflare Pages does not run the Next.js Image Optimisation API — you need either a Cloudflare Image Resizing subscription or an external service. We used Cloudflare Images with a custom loader, which worked well but added a few hours of configuration work. If you are just getting started, `unoptimized: true` in your Next config is a reasonable temporary compromise.',
    "Finally: `wrangler.toml`. Get comfortable with it early. Binding KV stores, R2 buckets, and environment variables all flow through wrangler config. Keeping a `wrangler.toml` committed (without secrets) and a `.dev.vars` locally is the right pattern. The Cloudflare dashboard is convenient but not a substitute for config-as-code.",
  ],
  'ai-ecommerce-trends': [
    'The e-commerce AI features making the biggest difference in 2025 are not the ones that got the most hype. Visual search — let a customer photograph an item and find it in your catalogue — has matured from an experimental feature to a genuine conversion driver. Brands using it report a 15–20% uplift in discovery-to-purchase rates for fashion and home goods.',
    'AI-generated product descriptions at scale are now table stakes for large catalogues. What separates the good from the mediocre is the structured data that feeds the model: detailed product attributes, brand voice guidelines, and competitor differentiation points. An LLM working with rich input produces copy that converts; one working with a SKU number and a title produces filler.',
    'Dynamic pricing powered by demand signals, inventory levels, and competitive monitoring is the third pillar. This used to require a team of analysts. Today it runs continuously in the background, adjusting margins in real time. The risk is erosion of brand positioning if not implemented with appropriate guardrails — customers notice when the same item fluctuates wildly.',
    'For teams implementing any of these features in the next 12 months: start with the data infrastructure. AI features built on top of poor product data, fragmented analytics, and siloed inventory systems will underperform. The investment in clean, connected data pays dividends across every AI initiative you will want to run.',
  ],
  'digital-transformation-saudi-arabia': [
    "Saudi Arabia's Vision 2030 has set an ambitious target: reduce oil dependence and build a knowledge economy. For technology companies, this translates into one of the most dynamic opportunity landscapes in the world — with government mandates driving digital adoption, a young population hungry for tech-forward services, and sovereign wealth funds actively backing domestic technology growth.",
    "The sectors with the most immediate demand are healthcare (digital patient records, telemedicine), fintech (open banking frameworks launched in 2023), retail (the e-commerce market is growing at 30%+ annually), and government services (Absher, Etimad — these set the benchmark for what citizens now expect from all digital services). What's striking is that the bar is high: Saudi users are sophisticated smartphone-first consumers who compare local products against global standards.",
    'For agencies and technology companies looking to enter the market, localisation is non-negotiable. RTL Arabic support is table stakes — not an afterthought. More importantly, understanding cultural context shapes product decisions at every level, from navigation patterns to payment preferences to communication tone.',
    'We have been working in the Saudi market since 2020 and have found that the clients who succeed fastest are the ones who treat localisation as a first-class product concern, invest in local partnerships, and build for mobile-first from day one. The market rewards quality and punishes half-measures — which, in our view, is exactly how it should be.',
  ],
}

// ── Params type ───────────────────────────────────────────────────────────────

interface PageProps {
  params: Promise<{ slug: string }>
}

// ── Static params ─────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

// ── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) return { title: 'Post Not Found | Exagrowth' }

  return {
    title: `${post.title} | Exagrowth`,
    description: post.excerpt,
    alternates: { canonical: `https://exagrowth.com/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://exagrowth.com/blog/${slug}`,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) notFound()

  const body = articleBodies[slug] ?? [
    'This article is coming soon. Stay tuned for the full write-up.',
  ]

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { '@type': 'Organization', name: 'Exagrowth', url: 'https://exagrowth.com' },
    publisher: { '@type': 'Organization', name: 'Exagrowth', url: 'https://exagrowth.com' },
    url: `https://exagrowth.com/blog/${slug}`,
  }

  return (
    <div className="bg-[var(--color-background)] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="section-padding">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors duration-200 mb-10 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:-translate-x-0.5 transition-transform duration-200"
              aria-hidden="true"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            All Posts
          </Link>

          {/* Meta */}
          <div className="flex items-center gap-3 mb-6">
            <Badge variant="blue">{post.tag}</Badge>
            <span className="text-xs text-[var(--color-text-muted)]">{post.readTime} read</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] leading-tight mb-4">
            {post.title}
          </h1>

          {/* Date */}
          <time
            dateTime={post.date}
            className="block text-sm text-[var(--color-text-muted)] mb-10"
          >
            {formatDate(post.date)}
          </time>

          {/* Hero cover */}
          <div className="relative w-full aspect-[16/9] rounded-[var(--radius-lg)] overflow-hidden mb-12 border border-[var(--color-border)]">
            <BlogCover tag={post.tag} variant="hero" />
          </div>

          {/* Body */}
          <div className="prose prose-invert max-w-none">
            {body.map((paragraph, i) => (
              <p
                key={i}
                className="text-[var(--color-text-secondary)] leading-relaxed mb-6 text-base md:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 pt-10 border-t border-[var(--color-border)]">
            <div className="glass gradient-border rounded-[var(--radius-xl)] p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <p className="font-bold text-[var(--color-text-primary)] mb-1">
                  Want to implement this for your business?
                </p>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Get a free consultation — no strings attached.
                </p>
              </div>
              <Link
                href="/contact"
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-[var(--radius-md)] text-sm font-semibold bg-[var(--color-blue)] text-white hover:bg-[var(--color-blue-bright)] shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.7)] transition-all duration-300"
              >
                Get a free consultation
                <svg
                  xmlns="http://www.w3.org/2000/svg"
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
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
