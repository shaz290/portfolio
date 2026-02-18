'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface SectionHeadingProps {
  label: string
  title: string
  subtitle?: string
}

export function SectionHeading({ label, title, subtitle }: SectionHeadingProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="text-center mb-16"
    >
      <p className="font-mono text-xs tracking-widest text-neon-blue uppercase mb-3">{label}</p>
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg">{subtitle}</p>
      )}
      <div className="flex items-center justify-center gap-2 mt-6">
        <motion.div
          className="h-px bg-gradient-to-r from-transparent to-neon-blue"
          initial={{ width: 0 }}
          animate={inView ? { width: 80 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
        <div className="w-2 h-2 rounded-full bg-neon-blue shadow-neon-blue" />
        <motion.div
          className="h-px bg-gradient-to-l from-transparent to-neon-purple"
          initial={{ width: 0 }}
          animate={inView ? { width: 80 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </div>
    </motion.div>
  )
}
