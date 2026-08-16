"use client"

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const initialLines = [
  '[14:23:01] GET  /v1/projects        200 12ms',
  '[14:23:04] POST /v1/contact        200  8ms',
  '[14:23:08] worker job=email_send   queued',
  '[14:23:09] cache hit redis://stack 3ms',
  '[14:23:12] deploy a4f2d1 → prod    OK',
  '[14:23:15] ws connect client=u123  1ms',
]

const extraLines = [
  '[14:23:18] GET  /v1/experience     200  7ms',
  '[14:23:21] worker job=slack_notify success',
  '[14:23:24] rate_limit ok user=rijul',
  '[14:23:27] GET  /v1/projects       200  9ms',
  '[14:23:30] pg pool 4/10 active',
  '[14:23:33] worker job=audit_log    done',
  '[14:23:36] GET  /v1/skills         200  4ms',
  '[14:23:39] cron tick daily_metrics',
  '[14:23:42] cache miss key=session · refilled',
  '[14:23:45] ws close client=u123    42ms',
  '[14:23:48] POST /v1/contact        200 11ms',
]

export default function LiveLogs() {
  const [lines, setLines] = useState(initialLines)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const id = setInterval(() => {
      setLines((curr) => [...curr.slice(1), extraLines[curr.length % extraLines.length]])
    }, 2500)
    return () => clearInterval(id)
  }, [])

  return (
    <motion.div
      className="code-card p-0 overflow-hidden font-mono text-sm sm:text-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-secondary/40 tracking-widest">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary glow-dot animate-pulse" />
          <span className="text-primary">LIVE</span>
          <span className="text-muted-foreground hidden sm:inline">journalctl -f -u rijul-portfolio</span>
        </span>
        <span className="text-muted-foreground">tail -f</span>
      </div>

      <div className="px-4 py-3 h-44 overflow-hidden flex flex-col justify-end">
        {mounted && (
          <AnimatePresence initial={false}>
            {lines.map((line, i) => (
              <motion.div
                key={`${line}-${i}`}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                transition={{ duration: 0.25 }}
                className={`leading-6 ${
                  line.includes(' 200 ')
                    ? 'text-muted-foreground'
                    : line.includes('queued') || line.includes('success') || line.includes(' OK') || line.includes('done')
                    ? 'text-primary'
                    : line.includes('miss') || line.includes('error') || line.includes('fail')
                    ? 'text-yellow-400'
                    : 'text-muted-foreground'
                }`}
              >
                <span className="text-primary mr-1">›</span>
                {line}
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </div>

      <div className="px-4 py-2 border-t border-border bg-secondary/30 text-sm tracking-widest text-muted-foreground flex justify-between">
        <span><span className="text-primary">↑</span> streaming</span>
        <span>q to quit</span>
      </div>
    </motion.div>
  )
}