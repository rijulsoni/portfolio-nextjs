"use client"

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Typewriter from "typewriter-effect"
import { Github, Linkedin, Instagram, ArrowDown, Terminal as TerminalIcon, Download } from 'lucide-react'
import { Bio } from '@/data/bio'
import dynamic from 'next/dynamic'
import Terminal from '@/components/terminal'
import WebVitals from '@/components/web-vitals'
import IdentityCard from '@/components/identity-card'

const Contact = dynamic(() => import('@/components/contact-form'), { ssr: false })
const SkillsSection = dynamic(() => import('@/components/skills-section'), { ssr: false })
const Experience = dynamic(() => import('@/components/experience-section').then(mod => mod.Experience), { ssr: false })
const Education = dynamic(() => import('@/components/education-section').then(mod => mod.Education), { ssr: false })
const Projects = dynamic(() => import('@/components/projects-section').then(mod => mod.Projects), { ssr: false })
const PersonalProjects = dynamic(() => import('@/components/personal-projects').then(mod => mod.PersonalProjects), { ssr: false })

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.44, 0.94] } }
}

export default function Page() {
  const sectionRefs = {
    about: useRef<HTMLElement>(null),
    skills: useRef<HTMLElement>(null),
    experience: useRef<HTMLElement>(null),
    education: useRef<HTMLElement>(null),
    work: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  }

  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (hash && sectionRefs[hash as keyof typeof sectionRefs]?.current) {
      sectionRefs[hash as keyof typeof sectionRefs].current?.scrollIntoView({ behavior: 'smooth' })
    }
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1)
      if (hash && sectionRefs[hash as keyof typeof sectionRefs]?.current) {
        sectionRefs[hash as keyof typeof sectionRefs].current?.scrollIntoView({ behavior: 'smooth' })
      }
    })
  }, [])

  return (
    <div className="w-full">
      <motion.section
        id="about"
        ref={sectionRefs.about}
        className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-radial-soft py-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="absolute inset-0 bg-grid-dark opacity-40 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

        <div className="container mx-auto px-4 py-8 lg:py-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-12">
            <motion.div className="flex-1 text-center lg:text-left w-full" variants={itemVariants}>
              <p className="font-mono text-base text-muted-foreground mb-4 tracking-wide">
                <span className="text-primary">$</span> whoami
              </p>
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-8xl font-bold tracking-tighter leading-[1.02] mb-5 font-mono">
                {Bio.name.split(' ')[0]}
                <br />
                <span className="text-gradient">{Bio.name.split(' ')[1]}</span>
              </h1>

              <p className="font-mono text-base text-primary mb-6">
                {Bio.headline}
              </p>

              <div className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary mb-7 min-h-12 font-mono leading-tight">
                <span className="text-muted-foreground">{'<'}</span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                    cursor: '_',
                    cursorClassName: 'text-primary',
                    delay: 60,
                    deleteSpeed: 30,
                  }}
                />
                <span className="text-muted-foreground"> {'/>'}</span>
              </div>

              <p className="text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-9 leading-relaxed">
                {Bio.description}
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 mb-8">
                <motion.a
                  href="#work"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-mono text-sm tracking-widest font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all"
                >
                  <TerminalIcon className="w-4 h-4" />
                  OPEN_CASE_STUDIES
                </motion.a>
                <motion.a
                  href={Bio.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-border font-mono text-sm tracking-widest hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  FETCH_RESUME
                </motion.a>
              </div>

              <div className="flex justify-center lg:justify-start items-center gap-3">
                {[
                  { icon: Github, href: Bio.github, label: 'GitHub' },
                  { icon: Linkedin, href: Bio.linkedin, label: 'LinkedIn' },
                  { icon: Instagram, href: Bio.insta, label: 'Instagram' },
                ].map((social, i) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-3 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/40 hover:-translate-y-0.5 transition-all"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.92 }}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.08 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div className="flex-shrink-0 w-full max-w-xl lg:w-[30rem] space-y-4" variants={itemVariants}>
              <IdentityCard />
              <Terminal />
              <WebVitals />
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ delay: 1.2, duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </motion.section>

      <div className="container mx-auto px-4">
        <SkillsSection />
        <section id="experience" ref={sectionRefs.experience}>
          <Experience />
        </section>
        <section id="education" ref={sectionRefs.education}>
          <Education />
        </section>
        <section id="work" ref={sectionRefs.work}>
          <Projects />
        </section>
        <section id="projects" ref={sectionRefs.projects}>
          <PersonalProjects />
        </section>
        <section id="contact" ref={sectionRefs.contact}>
          <Contact />
        </section>
      </div>
    </div>
  )
}