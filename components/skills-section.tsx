"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Braces, KeyRound, Webhook, ShieldCheck, CreditCard } from 'lucide-react'
import { skills } from '@/data/bio'
import { SectionHeader } from './section-header'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } }
}

const tableName = (title: string) => title.toLowerCase().replace(/[^a-z0-9]+/g, '_')

const fallbackIcon = (name: string) => {
  if (name.includes('REST') || name.includes('API')) return <Braces className="w-4 h-4 text-primary" />
  if (name.includes('JWT') || name.includes('Token')) return <KeyRound className="w-4 h-4 text-primary" />
  if (name.includes('Tookan') || name.includes('Webhook')) return <Webhook className="w-4 h-4 text-primary" />
  if (name.includes('Worldpay') || name.includes('Card')) return <CreditCard className="w-4 h-4 text-primary" />
  return <ShieldCheck className="w-4 h-4 text-primary" />
}

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-24">
      <div className="container mx-auto px-6">
        <SectionHeader
          index="01"
          title="Stack"
          comment="grouped by layer — frontend / backend / data / payments"
        />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={containerVariants}
        >
          {skills.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="h-full"
            >
              <motion.div
                whileHover={{ y: -4 }}
                className="code-card p-0 h-full overflow-hidden"
              >
                <div className="px-4 py-3 border-b border-border bg-gradient-to-r from-primary/10 via-secondary/40 to-secondary/40 font-mono text-sm tracking-widest flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary glow-dot" />
                    <span className="text-primary font-bold">LAYER</span>
                  </span>
                  <span className="text-foreground">{tableName(category.title)}</span>
                  <span className="text-muted-foreground">{category.skills.length} rows</span>
                </div>
                <div className="p-4">
                  {category.skills.map((skill, rowIndex) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3 py-2 border-b border-border/40 last:border-0 font-mono text-sm"
                    >
                      <span className="text-primary/60 w-6 flex-shrink-0">
                        {String(rowIndex + 1).padStart(2, '0')}
                      </span>
                      <span className="w-8 h-8 rounded-lg border border-border bg-secondary/60 flex items-center justify-center flex-shrink-0 overflow-hidden">
                        {skill.image ? (
                          <Image src={skill.image} alt={skill.name} width={18} height={18} className="object-contain" />
                        ) : (
                          fallbackIcon(skill.name)
                        )}
                      </span>
                      <span className="text-foreground hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection