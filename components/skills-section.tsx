"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import {skills} from '@/data/bio'

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
        >
          My Skills
        </motion.h2>
        {skills.map((category) => (
          <div key={category.title} className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">{category.title}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-20 h-20 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mb-4">
                    <Image
                      src={skill.image}
                      alt={skill.name}
                      width={40}
                      height={40}
                      objectFit="contain"
                    />
                  </div>
                  <p className="text-gray-800 dark:text-white font-medium">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection

