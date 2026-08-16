"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Copy, Check } from 'lucide-react'
import { SectionHeader } from './section-header'

type CaseStudy = {
  slug: string
  title: string
  outcome: string
  problem: string
  constraint: string
  built: string
  tradeoff: string
  result: string
  excerpt: string
  tags: string[]
  links?: { label: string; href: string }[]
}

const caseStudies: CaseStudy[] = [
  {
    slug: 'yelo',
    title: 'Yelo — multi-tenant quick-commerce',
    outcome: 'Delivery-assignment latency cut 35% for a 120+ merchant marketplace.',
    problem:
      'Yelo serves e-commerce, food, and hyperlocal delivery from one platform. Each merchant needed isolated pricing, inventory, and serviceability rules — but the assignment pipeline degraded as merchants grew.',
    constraint:
      'Multi-tenant pricing overrides and real-time inventory sync had to stay consistent across MySQL, Elasticsearch, and Redis without adding new infrastructure.',
    built:
      'Rewrote the assignment hot path in Node.js: batched catalogue lookups, denormalized per-merchant pricing rows, and replaced N+1 inventory checks with a Redis-backed availability set. Geofencing moved into SQL range queries.',
    tradeoff:
      'Traded strict normalization for denormalized pricing rows. Writes cost more and need a sync job, but reads on the order path went from seconds to milliseconds — the right call for a read-heavy marketplace.',
    result: 'p95 delivery assignment dropped from ~580ms to ~380ms; inventory staleness below 1s; zero new hardware.',
    excerpt: `-- per-merchant pricing override (denormalized for reads)
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
    slug: 'payments',
    title: 'Payment gateway layer — tokenized cards',
    outcome: 'Three processors behind one token lifecycle; recurring MIT charges automated.',
    problem:
      'Checkout had to support Razorpay, Stripe, and Worldpay Access — each with different APIs, webhook formats, and refund flows — and recurring orders need stored-card charges without the customer re-entering details.',
    constraint:
      'Tokenized cards and MIT/CIT flows must be PCI-safe: raw card data never touches our servers, every charge needs idempotency, and Worldpay recurring charges require a schemeTransactionReference for continued MIT billing.',
    built:
      'A gateway-agnostic payments module: one token representation, one idempotency key per charge, unified webhook parser, and a retry queue for failed recurring charges — first CIT charge stores the token + scheme reference, subsequent MIT charges reuse it.',
    tradeoff:
      'Abstracted all three gateways behind a common interface instead of integrating them directly. Integration cost went down, but gateway-specific features now ship through the abstraction — acceptable for 3 processors.',
    result: '100% of recurring charges tokenized (MIT via schemeTransactionReference), refunds and retries automated, 0 PCI audit findings.',
    excerpt: `// token lifecycle — first CIT charge, then MIT renewals
const token = await gateway.tokenize(cardToken, { cit: true });
const cit = await gateway.charge(token.id, { amount, idempotencyKey: order.id });

// later, no card data — reuse stored token + scheme reference (Worldpay MIT)
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
    outcome: 'Shipped full-stack features on Rails + React with Dockerized deploys.',
    problem:
      'An enterprise education SaaS where slow, inconsistent local setups and manual deploys burned developer time across teams.',
    constraint:
      'Existing stack: Ruby on Rails, PostgreSQL, MongoDB, React + Redux, Jbuilder JSON APIs — with RSpec and Jest suites that had to stay green.',
    built:
      'Containerized services with Docker for consistent local-to-production parity, built full-stack features end-to-end, and maintained Jbuilder API serialization with both test suites.',
    tradeoff:
      'Docker for everything, including the sidekiq workers, over native dev environments. Startup costs rose slightly; onboarding and parity wins outweighed it.',
    result: 'New-device setup went from hours to minutes; regressions caught by 90%+ covered suites; releases predictable.',
    excerpt: `# docker-compose.yml (abridged)
services:
  web:     { build: ., command: rails s }
  sidekiq: { build: ., command: sidekiq }
  postgres:{ image: postgres:16, healthcheck: pg_isready }
  mongo:   { image: mongo:7 }
  redis:   { image: redis:7 }`,
    tags: ['Ruby on Rails', 'React', 'Redux', 'Docker', 'RSpec', 'Jest'],
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
      aria-label="copy excerpt"
      className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
    >
      {copied ? <Check className="w-4 h-4 text-primary" /> : <Copy className="w-4 h-4" />}
    </button>
  )
}

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div>
    <p className="font-mono text-sm text-primary mb-1.5">{label}</p>
    <p className="text-sm text-muted-foreground leading-relaxed">{children}</p>
  </div>
)

export function Projects() {
  return (
    <section id="work" className="py-20 md:py-24 bg-secondary/40">
      <div className="container mx-auto px-4">
        <SectionHeader
          index="04"
          title="Selected Work"
          comment="3 case studies — problem, constraint, trade-off, result"
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-7">
                <Field label="PROBLEM">{cs.problem}</Field>
                <Field label="CONSTRAINT">{cs.constraint}</Field>
                <Field label="WHAT I BUILT">{cs.built}</Field>
                <Field label="RESULT">{cs.result}</Field>
              </div>

              <div className="rounded-lg border border-primary/30 bg-primary/5 p-5 mb-7">
                <p className="font-mono text-sm text-primary mb-1.5">TRADE-OFF I MADE</p>
                <p className="text-sm leading-relaxed">{cs.tradeoff}</p>
              </div>

              <div className="rounded-lg border border-border bg-background/60 overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-secondary/40 font-mono text-sm text-muted-foreground">
                  <span>{cs.slug}.{cs.slug === 'payments' ? 'js' : cs.slug === 'watermark' ? 'yml' : 'sql'}</span>
                  <CopyButton text={cs.excerpt} />
                </div>
                <pre className="p-4 overflow-x-auto font-mono text-sm leading-relaxed text-foreground/90">{cs.excerpt}</pre>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {cs.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 text-sm font-mono rounded bg-secondary text-muted-foreground border border-border/60">
                    {tag}
                  </span>
                ))}
                {cs.links?.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-sm tracking-widest text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label} <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}