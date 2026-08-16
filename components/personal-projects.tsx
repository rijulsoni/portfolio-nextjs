"use client"

import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import Image from 'next/image'
import { projects } from "@/data/bio"
import { SectionHeader } from './section-header'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export function PersonalProjects() {
  return (
    <section id="projects" className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          index="05"
          title="Projects"
          comment="personal builds — deployed, live, iterated on"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={containerVariants}
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="group"
            >
              <div className="code-card overflow-hidden h-full flex flex-col">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent" />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded font-mono text-sm bg-background/85 backdrop-blur border border-border flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary glow-dot" />
                      {project.webapp ? '● live' : '● beta'}
                    </span>
                    <span className="px-2.5 py-1 rounded font-mono text-sm bg-background/85 backdrop-blur border border-border text-muted-foreground">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-sm font-mono rounded bg-secondary text-muted-foreground border border-border/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center gap-5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-sm tracking-widest text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" /> SRC
                    </a>
                    {project.webapp && (
                      <a
                        href={project.webapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-sm tracking-widest text-muted-foreground hover:text-primary transition-colors"
                      >
                        DEPLOY <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}