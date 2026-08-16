"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Mail, Github, Linkedin } from "lucide-react"
import { Bio } from "@/data/bio"

const details: { key: string; value: string; accent?: boolean }[] = [
  { key: "name", value: Bio.name },
  { key: "role", value: Bio.headline },
  { key: "location", value: "Mohali, Punjab" },
  { key: "email", value: Bio.email },
  { key: "status", value: "available", accent: true },
]

export default function IdentityCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="code-card p-0 overflow-hidden"
    >
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-secondary/40 font-mono text-sm tracking-widest text-muted-foreground">
        <span className="flex items-center gap-2">
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-500 animate-ping-soft" />
            <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500" />
          </span>
          IDENTITY_CARD
        </span>
        <span className="text-primary">uid=1000(rijul)</span>
      </div>

      <div className="p-5 flex items-center gap-5">
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden flex-shrink-0 border border-border p-1 bg-gradient-to-br from-primary/40 via-transparent to-accent/40">
          <div className="relative w-full h-full rounded-lg overflow-hidden">
            <Image
              src={Bio.profile}
              alt={Bio.name}
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 ring-1 ring-inset ring-primary/30 rounded-xl" />
        </div>

        <div className="font-mono text-sm space-y-1.5 min-w-0">
          {details.map((d) => (
            <p key={d.key} className="truncate">
              <span className="text-primary">{`"${d.key}"`}</span>:
              <span className={d.accent ? "text-emerald-500" : "text-foreground"}>{` "${d.value}"`}</span>
            </p>
          ))}
        </div>
      </div>

      <div className="px-4 py-2.5 border-t border-border bg-secondary/40 flex items-center justify-between font-mono text-sm">
        <div className="flex items-center gap-4">
          <a
            href={Bio.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={Bio.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${Bio.email}`}
            aria-label="Email"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
        <span className="text-muted-foreground">~/.profile</span>
      </div>
    </motion.div>
  )
}