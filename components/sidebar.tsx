"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-background z-50 md:hidden">
      <div className="flex flex-col h-full p-4">
        <Button variant="ghost" size="icon" className="self-end mb-4" onClick={() => setIsOpen(false)}>
          <X className="h-6 w-6" />
        </Button>
        <nav className="flex flex-col space-y-4">
          <Link href="#about" className="text-lg font-medium" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="#projects" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="#skills" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Skills</Link>
          <Link href="#contact" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Contact</Link>
        </nav>
      </div>
    </div>
  )
}

