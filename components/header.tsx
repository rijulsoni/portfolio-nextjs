"use client"

import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from './theme-provider'
import { Bio } from '@/data/bio'

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Work', href: '#work' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function Header() {
  const { theme, toggleTheme } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault()
    setIsMobileMenuOpen(false)
    if (href === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    setTimeout(() => {
      const element = document.querySelector(href)
      if (element) {
        const headerOffset = 80
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-background/85 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 ml-5 group"
          onClick={(e) => handleNavClick('/', e)}
        >
          <span className="relative w-9 h-9 rounded-full overflow-hidden border border-primary/40 ring-1 ring-primary/20 group-hover:scale-105 transition-transform">
            <Image src={Bio.profile} alt={Bio.name} fill className="object-cover" />
          </span>
          <span className="hidden sm:inline font-mono text-sm text-muted-foreground group-hover:text-primary transition-colors">
            rijul.dev
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                href={item.href}
                onClick={(e) => handleNavClick(item.href, e)}
                className="px-3.5 py-2 text-sm font-medium rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center gap-2 mr-3">
          {mounted && (
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              {theme === 'light' ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </button>
          )}
          <button
            aria-label="Open menu"
            className="md:hidden p-2.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-secondary/50">
        <motion.div
          className="h-full bg-gradient-to-r from-primary via-emerald-400 to-primary"
          animate={{ width: `${progress}%` }}
          transition={{ ease: 'easeOut', duration: 0.15 }}
        />
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-b border-border bg-background/95 backdrop-blur-md"
          >
            <nav className="flex flex-col items-center py-4 px-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(item.href, e)}
                  className="w-full py-2.5 text-sm font-medium text-center rounded-lg hover:bg-secondary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}