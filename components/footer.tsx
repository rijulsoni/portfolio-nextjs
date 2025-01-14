"use client"

import React from 'react'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      className="border-t"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-screen-xl px-4 py-4 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8 ">
        <div className="flex justify-center mt-2 space-x-6">
          <motion.a href="https://x.com/Rijulsoniii" className="text-gray-400 hover:text-gray-500">
            <i className="fa-brands fa-twitter text-2xl" />
          </motion.a>
          <motion.a href="https://github.com/rijulsoni" className="text-gray-400 hover:text-gray-500">
            <i className="fa-brands fa-github text-2xl" />
          </motion.a>
          <motion.a href="https://www.instagram.com/rijulsonii?igsh=MTZ3dnVrYzhta3F4dA==" className="text-gray-400 hover:text-gray-500">
            <i className="fa-brands fa-instagram text-2xl" />
          </motion.a>
          <motion.a href="https://www.linkedin.com/in/rijulsoni31/" className="text-gray-400 hover:text-gray-500">
            <i className="fa-brands fa-linkedin-in text-2xl" />
          </motion.a>
        </div>
        <p
          className={'mt-4 text-base leading-6 text-center'}
        >
          © 2025 Rijul Soni, Inc. All rights reserved.
        </p>
      </div>
    </motion.footer>
  )
}

