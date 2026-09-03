"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Copy, Check } from 'lucide-react'
import { SectionHeader } from './section-header'

type Metric = { value: string; label: string }

type CaseStudy = {
  slug: string
  title: string
  outcome: string
  /** The loudest thing on the card — three measured or structural facts. */
  metrics: Metric[]
  problem: string
  constraint: string
  built: string
  tradeoff: string
  excerpt: string
  /** Filename shown on the code block, extension included. */
  file: string
  tags: string[]
}

const caseStudies: CaseStudy[] = [
  {
    slug: 'yelo',
    title: 'Yelo — multi-tenant quick-commerce',
    outcome: 'Cut delivery-assignment latency 35% on a 120+ merchant marketplace.',
    metrics: [
      { value: '580ms → 380ms', label: 'p95 assignment' },
      { value: '35%', label: 'latency removed' },
      { value: '120+', label: 'merchants served' },
    ],
    problem:
      'Yelo runs e-commerce, food, and hyperlocal delivery from one platform. Every merchant needs its own pricing, inventory, and serviceability rules — and the assignment pipeline slowed down as merchant count grew.',
    constraint:
      'Pricing overrides and real-time inventory had to stay consistent across MySQL, Elasticsearch, and Redis. No new infrastructure was on the table.',
    built:
      'Rewrote the assignment hot path in Node.js: batched catalogue lookups, denormalized per-merchant pricing rows, and replaced N+1 inventory checks with a Redis-backed availability set. Geofencing became SQL range queries instead of application-side distance math.',
    tradeoff:
      'Denormalized pricing rows instead of strict normalization. Writes cost more and need a sync job, but order-path reads went from seconds to milliseconds — the right trade for a read-heavy marketplace.',
    file: 'merchant_sku_pricing.sql',
    excerpt: `-- per-merchant pricing override, denormalized for read speed
CREATE TABLE merchant_sku_pricing (
  merchant_id   BIGINT NOT NULL,
  sku_id        BIGINT NOT NULL,
  base_price    DECIMAL(12,2) NOT NULL,
  dynamic_rule  JSON,             -- surge / distance / slot
  PRIMARY KEY (merchant_id, sku_id)
) PARTITION BY HASH (merchant_id);`,
    tags: ['Node.js', 'MySQL', 'Redis', 'Geofencing', 'AWS'],
  },
  {
    slug: 'master-brand',
    title: 'Master Brand — one catalogue, every store',
    outcome: 'A merchant defines a product once and it lands in every store they run.',
    metrics: [
      { value: '1 → N', label: 'brand to store catalogues' },
      { value: 'zero', label: 'duplicate SKU entry' },
      { value: 'per-store', label: 'price & stock overrides' },
    ],
    problem:
      'A merchant running several stores had to re-enter the same product in each one. Names, images, and variants drifted apart store by store, and a catalogue-wide change meant editing the same SKU many times over.',
    constraint:
      'Stores still needed genuine independence — their own prices, stock, and availability — and thousands of existing store-level products had to keep working while they migrated onto the shared model.',
    built:
      'A brand-level master catalogue that stores inherit from. Product identity — name, media, variants, attributes — lives once on the brand; each store keeps only what is truly local as an override row. Editing the master fans out to every store that has not overridden that field, and existing store products were backfilled into masters by matching on SKU.',
    tradeoff:
      'Inheritance with per-store overrides rather than copying products into each store. Reads now resolve two layers instead of one, but a catalogue edit stops being an N-store migration — and the drift that made store catalogues untrustworthy disappears.',
    file: 'master_brand.sql',
    excerpt: `-- identity lives once on the brand
CREATE TABLE brand_master_product (
  brand_id    BIGINT NOT NULL,
  master_sku  VARCHAR(64) NOT NULL,
  name        VARCHAR(255) NOT NULL,
  attributes  JSON,                    -- variants, media, specs
  PRIMARY KEY (brand_id, master_sku)
);

-- a store stores only what it actually overrides
CREATE TABLE store_product_override (
  store_id    BIGINT NOT NULL,
  master_sku  VARCHAR(64) NOT NULL,
  price       DECIMAL(12,2) NULL,      -- NULL = inherit from master
  stock       INT          NULL,
  is_listed   BOOLEAN DEFAULT TRUE,
  PRIMARY KEY (store_id, master_sku)
);`,
    tags: ['Node.js', 'MySQL', 'Elasticsearch', 'Data Modeling', 'Catalogue'],
  },
  {
    slug: 'merchandising',
    title: 'Storefront merchandising — what shoppers see first',
    outcome: 'Bestsellers, category browsing, and basket recommendations in one storefront query.',
    metrics: [
      { value: 'one query', label: 'per storefront render' },
      { value: 'rolling 30d', label: 'bestseller window' },
      { value: 'co-purchase', label: 'basket recommendations' },
    ],
    problem:
      'A storefront that lists a merchant\u2019s whole catalogue in insertion order buries the products that actually sell. Merchants had no way to surface top sellers, let shoppers browse by category, or suggest the add-on that usually goes in the same basket \u2014 so discovery came down to search, and anything not searched for went unseen.',
    constraint:
      'Rankings are per store: a bestseller in one store is dead stock in another. They also could not be computed live \u2014 hitting order tables on every storefront render would put read traffic straight onto the write path \u2014 and they had to sit alongside free-text search in Elasticsearch rather than in a second system.',
    built:
      'Three merchandising signals, all precomputed per store and denormalized into the store\u2019s Elasticsearch index: top sellers from a rolling 30-day aggregation over completed order lines; category trees carrying live in-stock counts so empty categories stop showing; and frequently-bought-together pairs from item co-occurrence in the same order, filtered by a support threshold so coincidence does not become a recommendation. A scheduled job refreshes all three, so rendering a storefront \u2014 shelves, categories, and cart add-ons \u2014 is a single query.',
    tradeoff:
      'Precomputed rankings on a refresh schedule instead of live aggregation. Sales figures lag by one refresh window, which is invisible to a shopper deciding what to buy \u2014 and in exchange the storefront read path never touches the order tables.',
    file: 'frequently_bought_together.sql',
    excerpt: `-- item pairs that ship in the same completed order
INSERT INTO store_product_affinity (store_id, sku_id, paired_sku_id, orders)
SELECT a.store_id, a.sku_id, b.sku_id, COUNT(*) AS orders
FROM   order_line a
JOIN   order_line b
  ON   b.order_id = a.order_id
 AND   b.sku_id   > a.sku_id          -- each pair once, not twice
JOIN   orders o
  ON   o.id = a.order_id
 AND   o.status = 'completed'
 AND   o.placed_at >= NOW() - INTERVAL 30 DAY
GROUP  BY a.store_id, a.sku_id, b.sku_id
HAVING COUNT(*) >= 5                  -- support floor: signal, not coincidence
ON DUPLICATE KEY UPDATE orders = VALUES(orders);`,
    tags: ['Elasticsearch', 'MySQL', 'Node.js', 'Recommendations', 'Merchandising'],
  },
  {
    slug: 'payments',
    title: 'Payments — three processors, one token',
    outcome: 'Recurring card charges automated behind a single gateway interface.',
    metrics: [
      { value: '3', label: 'processors, one interface' },
      { value: '100%', label: 'recurring charges tokenized' },
      { value: '0', label: 'PCI audit findings' },
    ],
    problem:
      'Checkout had to support Razorpay, Stripe, and Worldpay Access — three different APIs, webhook formats, and refund flows — while recurring orders needed to charge a stored card without the customer re-entering anything.',
    constraint:
      'Raw card data can never touch our servers, every charge needs an idempotency key, and Worldpay requires the first charge’s schemeTransactionReference to keep billing later merchant-initiated transactions.',
    built:
      'A gateway-agnostic payments module: one token representation, one idempotency key per charge, a unified webhook parser, and a retry queue for failed renewals. The first customer-initiated charge stores the token and scheme reference; every merchant-initiated charge after it reuses them.',
    tradeoff:
      'One common interface over three direct integrations. Gateway-specific features now ship through the abstraction, which costs a little flexibility — worth it while the count stays near three, and revisitable if it grows.',
    file: 'gateway.js',
    excerpt: `// first charge is customer-initiated: store the token
const token = await gateway.tokenize(cardToken, { cit: true });
const cit = await gateway.charge(token.id, {
  amount,
  idempotencyKey: order.id,
});

// renewals are merchant-initiated: no card data, reuse the reference
await gateway.charge(token.id, {
  amount,
  mit: true,
  schemeTransactionReference: cit.schemeTransactionReference,
});`,
    tags: ['Worldpay Access', 'Razorpay', 'Stripe', 'Tookan', 'Webhooks', 'Node.js'],
  },
  {
    slug: 'watermark',
    title: 'Watermark Insights — enterprise SaaS',
    outcome: 'Full-stack features across Rails and Node services, on Dockerized deploys.',
    metrics: [
      { value: 'hours → minutes', label: 'new-device setup' },
      { value: '2', label: 'backend stacks, shared data' },
      { value: 'RSpec + Jest', label: 'suites kept green' },
    ],
    problem:
      'An enterprise education SaaS where slow, inconsistent local setups and manual deploys burned developer time across several teams.',
    constraint:
      'The stack was fixed: Ruby on Rails and Node.js/Express services over PostgreSQL and MongoDB, React + Redux on the front end, Jbuilder JSON APIs, and RSpec and Jest suites that had to stay green through every change.',
    built:
      'Containerized every service — web, Node APIs, and Sidekiq workers — so local matched production, then built features end to end across both backends: Rails endpoints with Jbuilder serialization, Express routes over the same PostgreSQL and MongoDB data, and the React/Redux screens on top.',
    tradeoff:
      'Docker for everything, workers included, over native dev environments. Startup got a little slower; onboarding and local-to-production parity more than paid for it.',
    file: 'docker-compose.yml',
    excerpt: `services:
  web:
    build: .
    command: bundle exec rails s -b 0.0.0.0
    depends_on: [postgres, mongo, redis]
  api:
    build: ./services/api        # Node + Express
    command: node server.js
  sidekiq:
    build: .
    command: bundle exec sidekiq
  postgres:
    image: postgres:16
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]`,
    tags: ['Ruby on Rails', 'Node.js', 'Express.js', 'React', 'Docker', 'RSpec'],
  },
]

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false)
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
      }}
      aria-label={copied ? 'Copied' : 'Copy code'}
      className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
    >
      {copied ? <Check className="w-4 h-4 text-primary" /> : <Copy className="w-4 h-4" />}
    </button>
  )
}

/** Label sits in a fixed left column so the prose forms one readable measure. */
const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="sm:flex sm:gap-6">
    <p className="font-mono text-sm text-primary/80 shrink-0 sm:w-28 mb-1 sm:mb-0 sm:pt-0.5">
      {label}
    </p>
    <p className="text-sm text-muted-foreground leading-relaxed max-w-prose">{children}</p>
  </div>
)

const CodeBlock = ({ file, code }: { file: string; code: string }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-lg border border-border bg-background/60 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2.5 bg-secondary/40 font-mono text-sm text-muted-foreground">
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="flex items-center gap-2 hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded"
        >
          <ChevronRight
            className={`w-4 h-4 transition-transform ${open ? 'rotate-90' : ''}`}
          />
          {open ? 'Hide' : 'Read'} {file}
        </button>
        {open && <CopyButton text={code} />}
      </div>
      {open && (
        <pre className="p-4 overflow-x-auto font-mono text-sm leading-relaxed text-foreground/90 border-t border-border">
          {code}
        </pre>
      )}
    </div>
  )
}

export function Projects() {
  return (
    <section id="work" className="py-20 md:py-24 bg-secondary/40">
      <div className="container mx-auto px-4">
        <SectionHeader
          index="04"
          title="Selected Work"
          comment={`${caseStudies.length} case studies — problem, constraint, trade-off, result`}
        />

        <div className="max-w-5xl mx-auto space-y-10">
          {caseStudies.map((cs, index) => (
            <motion.article
              key={cs.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="code-card p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-center gap-2 mb-5 font-mono text-sm tracking-widest text-muted-foreground">
                <span className="text-primary">$</span> cat /work/{cs.slug}
                <span className="ml-auto text-primary">● shipped</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold mb-2">{cs.title}</h3>
              <p className="text-base sm:text-lg text-primary font-mono mb-7">{cs.outcome}</p>

              {/* The measured result, given the weight prose can't carry. */}
              <dl className="grid grid-cols-1 sm:grid-cols-3 gap-y-5 gap-x-6 mb-8 border-y border-border/70 py-6">
                {cs.metrics.map((m) => (
                  <div key={m.label}>
                    <dt className="font-mono text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
                      {m.value}
                    </dt>
                    <dd className="text-sm text-muted-foreground mt-1">{m.label}</dd>
                  </div>
                ))}
              </dl>

              <div className="space-y-5 mb-7">
                <Field label="Problem">{cs.problem}</Field>
                <Field label="Constraint">{cs.constraint}</Field>
                <Field label="What I built">{cs.built}</Field>
              </div>

              <div className="rounded-lg border border-primary/30 bg-primary/5 p-5 mb-7">
                <p className="font-mono text-sm text-primary mb-1.5">The trade-off I made</p>
                <p className="text-sm leading-relaxed max-w-prose">{cs.tradeoff}</p>
              </div>

              <CodeBlock file={cs.file} code={cs.excerpt} />

              <div className="flex flex-wrap gap-2 mt-6">
                {cs.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-sm font-mono rounded bg-secondary text-muted-foreground border border-border/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
