'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { education } from '@/data/bio'
import { SectionHeader } from './section-header'

export function Education() {
  return (
    <section className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          index="03"
          title="Education"
          comment="SELECT degree, grade FROM education ORDER BY id ASC;"
        />

        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ x: 6 }}
              className="group"
            >
              <div className="code-card p-0 overflow-hidden">
                <div className="px-4 py-3 border-b border-border bg-secondary/40 font-mono text-sm text-muted-foreground flex items-center gap-2">
                  <span className="text-primary">$</span>
                  SELECT * FROM education WHERE id = {edu.id};
                </div>
                <div className="p-5 sm:p-6 flex items-start gap-4">
                  <div className="relative w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 border border-border bg-white dark:bg-secondary">
                    <Image src={edu.img} alt={edu.school} fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold group-hover:text-primary transition-colors">
                      {edu.school}
                    </h3>
                    <p className="text-primary text-sm font-mono">{edu.degree}</p>
                    <p className="text-sm text-muted-foreground mt-1.5 font-mono text-sm">
                      <span className="text-primary">grade</span>: {edu.grade}
                      <span className="mx-2 text-border">|</span>
                      <span className="text-primary">period</span>: {edu.date}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}