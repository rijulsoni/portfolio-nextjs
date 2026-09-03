"use client"

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Bio } from '@/data/bio'

type Line = {
  text: string
  color?: 'muted' | 'primary' | 'foreground' | 'accent'
  prompt?: boolean
}

const skillsByLayer = [
  { layer: 'frontend', items: 'next.js · react · redux · typescript · tailwind' },
  { layer: 'backend', items: 'node.js · express · rails · rest · jwt' },
  { layer: 'data', items: 'mysql · postgresql · mongodb · redis · elasticsearch' },
  { layer: 'payments', items: 'razorpay · stripe · worldpay · tookan webhooks' },
  { layer: 'infra', items: 'docker · aws · linux · git · jest · rspec' },
]

const helpLines: Line[] = [
  { text: 'available commands:', color: 'primary' },
  { text: '  whoami      — who is this person', color: 'muted' },
  { text: '  skills      — tech stack by layer', color: 'muted' },
  { text: '  projects    — case studies (3)', color: 'muted' },
  { text: '  contact     — email + socials', color: 'muted' },
  { text: '  resume      — open resume PDF', color: 'muted' },
  { text: '  help        — this list', color: 'muted' },
  { text: '  clear       — clear the terminal', color: 'muted' },
]

const runCommand = (input: string): Line[] => {
  const cmd = input.trim().toLowerCase().replace(/;$/, '')

  switch (cmd) {
    case 'whoami':
      return [
        { text: `${Bio.name} — ${Bio.headline}`, color: 'foreground' },
        { text: 'Full-stack engineer: React · Next.js · Node.js · MySQL · payments', color: 'muted' },
      ]
    case 'skills':
      return skillsByLayer.map((s) => ({
        text: `[${s.layer}]  ${s.items}`,
        color: 'muted' as const,
      }))
    case 'projects':
      return [
        { text: 'yelo       — multi-tenant marketplace · delivery latency -35%', color: 'primary' },
        { text: 'payments   — tokenized cards across 3 processors · MIT/CIT', color: 'primary' },
        { text: 'watermark  — enterprise SaaS on Rails + React · Dockerized', color: 'primary' },
        { text: '$ cat /work/[slug] to read each case study', color: 'muted' },
      ]
    case 'contact':
      return [
        { text: `email     ${Bio.email}`, color: 'muted' },
        { text: `github    ${Bio.github.replace('https://', '')}`, color: 'muted' },
        { text: `linkedin  ${Bio.linkedin.replace('https://www.', '')}`, color: 'muted' },
      ]
    case 'resume':
      return [{ text: 'opening resume…', color: 'primary' }]
    case 'help':
      return helpLines
    case 'clear':
      return []
    case 'ls':
      return [
        { text: './', color: 'primary' },
        { text: '  about.md      contact.json', color: 'muted' },
        { text: '  skills.md     work/ (3 case studies)', color: 'muted' },
        { text: '  experience.md llms.txt', color: 'muted' },
      ]
    default:
      return [
        { text: `command not found: ${input.trim()}`, color: 'accent' },
        { text: 'type "help" for available commands', color: 'muted' },
      ]
  }
}

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>([
    { text: 'rijul@prod:~$ — interactive shell. type "help".', color: 'muted' },
  ])
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [histIdx, setHistIdx] = useState(-1)
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight })
  }, [lines])

  const submit = () => {
    const value = input.trim()
    if (!value) return
    const output = runCommand(value)
    setHistory((h) => [...h, value])
    setHistIdx(-1)
    setInput('')
    if (value.toLowerCase() === 'clear') {
      setLines([])
      return
    }
    if (value.toLowerCase() === 'resume') {
      window.open(Bio.resume, '_blank', 'noopener')
    }
    setLines((prev) => [
      ...prev,
      { text: value, color: 'primary', prompt: true },
      ...output,
    ])
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') submit()
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      const idx = histIdx < 0 ? history.length - 1 : Math.max(0, histIdx - 1)
      if (history[idx]) {
        setHistIdx(idx)
        setInput(history[idx])
      }
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      const idx = histIdx + 1
      if (idx >= history.length) {
        setHistIdx(-1)
        setInput('')
      } else {
        setHistIdx(idx)
        setInput(history[idx])
      }
    }
  }

  return (
    <motion.div
      className="code-card p-0 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.55 }}
    >
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-secondary/40 font-mono text-sm tracking-widest">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-red-400/80" />
          <span className="w-2 h-2 rounded-full bg-yellow-400/80" />
          <span className="w-2 h-2 rounded-full bg-primary/80" />
        </span>
        <span className="text-muted-foreground hidden sm:inline">rijul@prod: ~</span>
        <span className="text-primary">terminal</span>
      </div>

      <div ref={scrollRef} className="px-4 py-3 h-56 overflow-y-auto font-mono text-sm space-y-1" onClick={() => inputRef.current?.focus()}>
        {lines.map((line, i) =>
          line.prompt ? (
            <p key={i} className="text-primary whitespace-pre-wrap break-words">
              <span className="text-muted-foreground">$</span> {line.text}
            </p>
          ) : (
            <p
              key={i}
              className={
                line.color === 'primary'
                  ? 'text-primary whitespace-pre-wrap break-words'
                  : line.color === 'accent'
                  ? 'text-yellow-400 whitespace-pre-wrap break-words'
                  : line.color === 'foreground'
                  ? 'text-foreground whitespace-pre-wrap break-words'
                  : 'text-muted-foreground whitespace-pre-wrap break-words'
              }
            >
              {line.text}
            </p>
          )
        )}

        <div className="flex items-center gap-2">
          <span className="text-muted-foreground">$</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            spellCheck={false}
            autoComplete="off"
            aria-label="terminal input"
            className="flex-1 bg-transparent outline-none text-foreground caret-primary"
          />
          <span className="w-2 h-4 bg-primary/80 animate-blink" />
        </div>
      </div>

      <div className="px-4 py-2 border-t border-border bg-secondary/30 font-mono text-sm tracking-widest text-muted-foreground flex justify-between">
        <span><span className="text-primary">↑↓</span> history</span>
        <span>{'type "help"'}</span>
      </div>
    </motion.div>
  )
}
