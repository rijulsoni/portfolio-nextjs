"use client"

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const scores = [
  { label: 'PERFORMANCE', value: 98 },
  { label: 'ACCESSIBILITY', value: 100 },
  { label: 'BEST PRACTICES', value: 100 },
  { label: 'SEO', value: 100 },
]

const vitals = [
  { label: 'LCP', value: '1.2s', status: 'good' },
  { label: 'CLS', value: '0.05', status: 'good' },
  { label: 'FCP', value: '0.8s', status: 'good' },
  { label: 'TBT', value: '120ms', status: 'good' },
]

export default function WebVitals() {
  return (
    <motion.div
      className="code-card p-4 sm:p-5 overflow-hidden"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <div className="flex items-center justify-between mb-3 font-mono text-sm tracking-widest">
        <span className="flex items-center gap-2">
          <span className="text-primary">$</span>
          <span className="text-foreground">lighthouse --view</span>
        </span>
        <span className="text-primary">● PASS</span>
      </div>

      <div className="grid grid-cols-4 gap-2 mb-4">
          {scores.map((s, idx) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + idx * 0.06 }}
            className="border border-border bg-background/60 rounded-lg p-2 text-center"
          >
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-1.5">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <circle
                  cx="18" cy="18" r="15"
                  fill="none"
                  stroke="hsl(var(--border))"
                  strokeWidth="3"
                />
                <motion.circle
                  cx="18" cy="18" r="15"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="94.2"
                  initial={{ strokeDashoffset: 94.2 }}
                  animate={{ strokeDashoffset: 94.2 - (94.2 * s.value) / 100 }}
                  transition={{ duration: 1.2, delay: 1 + idx * 0.08, ease: 'easeOut' }}
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-sm sm:text-sm font-bold font-mono">
                {s.value}
              </span>
            </div>
            <p className="font-mono text-sm sm:text-[11px] tracking-widest text-muted-foreground truncate">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="border-t border-border pt-3">
        <p className="font-mono text-[11px] sm:text-sm text-muted-foreground mb-2 tracking-widest">
          CORE_WEB_VITALS
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {vitals.map((v, i) => (
            <motion.div
              key={v.label}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 + i * 0.06 }}
              className="flex items-center justify-between font-mono text-sm sm:text-sm"
            >
              <span className="text-muted-foreground">{v.label}</span>
              <span className="flex items-center gap-1.5 text-primary">
                <Check className="w-3 h-3" />
                {v.value}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}