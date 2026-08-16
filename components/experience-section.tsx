'use client'

import { useState } from "react"
import { experiences } from "@/data/bio"
import { motion } from "framer-motion"
import Image from "next/image"
import { SectionHeader } from './section-header'

const method = (index: number) => (index % 2 === 0 ? 'GET' : 'POST')

export function Experience() {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({})
  const sortedExperiences = [...experiences].sort((a, b) => b.id - a.id)

  return (
    <section className="py-20 md:py-24 bg-secondary/40">
      <div className="container mx-auto px-4">
        <SectionHeader
          index="02"
          title="Request Log"
          comment="curl -i https://rijul.dev/api/v1/experience"
        />

        <div className="max-w-3xl mx-auto space-y-6">
          {sortedExperiences.map((exp, index) => {
            const isExpanded = !!expanded[exp.id]
            const visibleSkills = isExpanded ? exp.skills : exp.skills.slice(0, 6)

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ x: 6 }}
                className="group"
              >
                <div className="code-card p-0 overflow-hidden">
                  <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-secondary/40 font-mono text-sm">
                    <span className={`px-2 py-0.5 rounded text-sm font-bold ${
                      method(index) === 'GET'
                        ? 'bg-emerald-500/15 text-emerald-500'
                        : 'bg-primary/15 text-primary'
                    }`}>
                      {method(index)}
                    </span>
                    <span className="text-foreground">/v1/experience/{exp.id}</span>
                    <span className="ml-auto text-muted-foreground text-sm tracking-widest">
                      {exp.date}
                    </span>
                    <span className="text-primary text-sm">200 OK</span>
                  </div>

                  <div className="p-5 sm:p-6 font-mono text-sm space-y-3">
                    <div className="flex items-start gap-4">
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 border border-border bg-white dark:bg-secondary">
                        <Image
                          src={exp.img}
                          alt={`${exp.company} logo`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-muted-foreground text-sm">
                          <span className="text-primary">{'"role"'}</span>: <span className="text-foreground">{`"${exp.role}"`}</span>
                        </p>
                        <p className="text-muted-foreground text-sm mt-1">
                          <span className="text-primary">{'"company"'}</span>: <span className="text-foreground">{`"${exp.company}"`}</span>
                        </p>
                        <p className="text-muted-foreground text-sm mt-1">
                          <span className="text-primary">{'"tenure"'}</span>: <span className="text-foreground">{`"${exp.date}"`}</span>
                        </p>
                        {exp.location && (
                          <p className="text-muted-foreground text-sm mt-1">
                            <span className="text-primary">{'"location"'}</span>: <span className="text-foreground">{`"${exp.location}"`}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      <span className="text-primary">{'"summary"'}</span>: <span className="text-foreground/80">{`"${exp.desc}"`}</span>
                    </p>

                    {exp.achievements && exp.achievements.length > 0 && (
                      <div>
                        <p className="text-primary text-sm mb-2">{'"impact": ['}</p>
                        <ul className="space-y-2 pl-4">
                          {exp.achievements.map((achievement) => (
                            <li key={achievement} className="flex gap-2 text-muted-foreground text-sm leading-relaxed">
                              <span className="text-primary flex-shrink-0">▸</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                        <p className="text-primary text-sm mt-1">]</p>
                      </div>
                    )}

                    <p className="text-muted-foreground text-sm">
                      <span className="text-primary">{'"stack"'}</span>: [
                      <span className="text-foreground/80">{`"${visibleSkills.join('", "')}"`}</span>
                      {exp.skills.length > 6 && (
                        <button
                          onClick={() => setExpanded((prev) => ({ ...prev, [exp.id]: !isExpanded }))}
                          className="text-primary hover:text-foreground transition-colors cursor-pointer"
                        >
                          {isExpanded ? ' ^ collapse' : ` … +${exp.skills.length - 6} more`}
                        </button>
                      )}
                      <span className="text-foreground/80"> </span>]
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
