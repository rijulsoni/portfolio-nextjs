"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { Bio } from '@/data/bio'

export default function Footer() {
  const socials = [
    { icon: FaTwitter, href: 'https://x.com/Rijulsoniii', label: 'Twitter' },
    { icon: FaGithub, href: Bio.github, label: 'GitHub' },
    { icon: FaLinkedinIn, href: Bio.linkedin, label: 'LinkedIn' },
    { icon: FaInstagram, href: Bio.insta, label: 'Instagram' },
  ]

  return (
    <motion.footer
      className="border-t border-border"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-screen-xl px-4 py-8 mx-auto">
        <div className="flex justify-center space-x-5">
          {socials.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ y: -3 }}
            >
              <s.icon className="text-xl" />
            </motion.a>
          ))}
        </div>
        <p className="mt-5 text-sm text-center text-muted-foreground font-mono">
          © {new Date().getFullYear()} RIJUL SONI <span className="text-primary mx-2">·</span>
          ALL SYSTEMS OPERATIONAL <span className="text-primary mx-2">·</span> 200 OK
        </p>
      </div>
    </motion.footer>
  )
}