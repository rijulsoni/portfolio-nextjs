"use client"

import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import Typewriter from "typewriter-effect";
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, Linkedin, Instagram } from 'lucide-react'
import { Bio } from '@/data/bio'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const Contact = dynamic(() => import('@/components/contact-form'), { ssr: false })
const SkillsSection = dynamic(() => import('@/components/skills-section'), { ssr: false })
const Experience = dynamic(() => import('@/components/experience-section').then(mod => mod.Experience), { ssr: false })
const Education = dynamic(() => import('@/components/education-section').then(mod => mod.Education), { ssr: false })
const Projects = dynamic(() => import('@/components/projects-section').then(mod => mod.Projects), { ssr: false })

export default function Page() {
  const controls = useAnimation()
  const [, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const sectionRefs = {
    about: useRef<HTMLElement>(null),
    skills: useRef<HTMLElement>(null),
    experience: useRef<HTMLElement>(null),
    education: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  }

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1)
      if (hash && sectionRefs[hash as keyof typeof sectionRefs]?.current) {
        sectionRefs[hash as keyof typeof sectionRefs].current?.scrollIntoView({ behavior: 'smooth' })
      }
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return (
    <div className="w-full">
      {/* Hero Section */}
      <motion.section
        id="about"
        ref={sectionRefs.about}
        className="min-h-screen flex flex-col justify-center relative overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
      >
        <div className="container mx-auto px-4 py-8 md:py-12 lg:py-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <motion.div
              className="flex-shrink-0 w-48 sm:w-64 md:w-80 lg:w-96 order-1 lg:order-2"
              variants={fadeInUp}
            >
              <div className="relative w-full aspect-square">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt={Bio.name}
                  width={500}
                  height={500}
                  className="rounded-full border-4 border-primary/50 w-full h-full object-cover"
                  priority
                />
                <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse" />
              </div>
            </motion.div>
            <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2 sm:mb-4"
                variants={fadeInUp}
              >
                Hello, I&apos;m
              </motion.h2>
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-8"
                variants={fadeInUp}
              >
                {Bio.name}
              </motion.h1>
              <motion.div
                className="text-xl  font-extrabold sm:text-2xl md:text-3xl lg:text-4xl text-primary mb-4 sm:mb-8 h-20"
                variants={fadeInUp}
              >
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </motion.div>

              <motion.p
                className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 leading-relaxed"
                variants={fadeInUp}
              >
                {Bio.description}
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
                variants={fadeInUp}
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto"
                >
                  <a href="#contact">Get in Touch</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 w-full sm:w-auto"
                >
                  <a href={Bio.resume} target="_blank" rel="noopener noreferrer">
                    Download Resume
                  </a>
                </Button>
              </motion.div>
              <motion.div
                className="flex justify-center lg:justify-start space-x-6 mt-8"
                variants={fadeInUp}
              >
                <a
                  href={Bio.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href={Bio.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href={Bio.insta}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Rest of the sections */}
      <div className="container mx-auto px-4">
        <SkillsSection />
        <section id="experience" ref={sectionRefs.experience}>
          <Experience />
        </section>
        <section id="education" ref={sectionRefs.education}>
          <Education />
        </section>
        <section id="projects" ref={sectionRefs.projects}>
          <Projects />
        </section>

        <section id="contact" ref={sectionRefs.contact}>
          <Contact />
        </section>

      </div>
    </div>
  )
}

