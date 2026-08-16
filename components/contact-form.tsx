"use client"

import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { SectionHeader } from './section-header'

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-24">
      <div className="container mx-auto px-6">
        <SectionHeader
          index="06"
          title="Open Channel"
          comment="POST /api/v1/contact — expects { name, email, message }"
          align="center"
        />

        <div className="max-w-2xl mx-auto">
          <div className="code-card p-6 md:p-8 overflow-hidden">
            <div className="flex items-center gap-3 mb-6 font-mono text-sm">
              <span className="px-2 py-0.5 rounded text-sm font-bold bg-primary/15 text-primary">
                POST
              </span>
              <span className="text-foreground">/api/v1/contact</span>
              <span className="ml-auto text-muted-foreground text-sm tracking-widest">Content-Type: application/json</span>
            </div>

            <form
              className="space-y-5 font-mono text-sm"
              action="https://public.herotofu.com/v1/145ea390-2af7-11ef-b435-b1ba21672864"
              method="post"
              acceptCharset="UTF-8"
            >
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">
                  <span className="text-primary">{'"name"'}</span>:
                </label>
                <input
                  type="text"
                  id="name"
                  name="fullname"
                  placeholder={'"John Doe"'}
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.08 }}
              >
                <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">
                  <span className="text-primary">{'"email"'}</span>:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={'"john@example.com"'}
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.16 }}
              >
                <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
                  <span className="text-primary">{'"message"'}</span>:
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder={'"Your message..."'}
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm resize-none"
                ></textarea>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.24 }}
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 rounded-lg font-mono text-sm tracking-widest font-semibold flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
                >
                  <Send className="w-4 h-4" />
                  SEND REQUEST
                </motion.button>
                <p className="text-center text-sm font-mono text-muted-foreground mt-3">
                  Expect: <span className="text-primary">200 OK</span> — I reply within 24h
                </p>
              </motion.div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact