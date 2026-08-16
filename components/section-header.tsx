import { motion } from 'framer-motion'

export function SectionHeader({
  index,
  title,
  comment,
  align = 'left',
}: {
  index: string
  title: string
  comment: string
  align?: 'left' | 'center'
}) {
  const alignClass = align === 'center' ? 'items-center text-center' : 'items-start'
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.44, 0.94] }}
      className={`relative flex flex-col ${alignClass} mb-14`}
    >
      <span className="absolute -top-12 left-0 text-[7rem] md:text-[9rem] font-bold text-primary/5 leading-none select-none pointer-events-none">
        {index}
      </span>
      <p className="font-mono text-sm text-primary mb-3 tracking-wider relative">
        {'// '}{index}. {title.toLowerCase()}
      </p>
      <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-gradient-soft relative">{title}</h2>
      <p className="text-muted-foreground mt-3 max-w-xl relative text-base">{comment}</p>
    </motion.div>
  )
}