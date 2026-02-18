'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Variants } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'

interface ScrollRevealProps {
  children: React.ReactNode
  variants?: Variants
  delay?: number
  className?: string
  threshold?: number
}

export function ScrollReveal({
  children,
  variants = fadeInUp,
  delay = 0,
  className,
  threshold = 0.1,
}: ScrollRevealProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
