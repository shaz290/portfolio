'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { RESUME_DATA } from '@/lib/utils'
import { staggerContainer, scaleIn } from '@/lib/animations'

export function TechStackSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="tech-stack" className="section-padding relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 20% 50%, rgba(123,47,255,0.05) 0%, transparent 60%)' }}
      />

      <div className="max-w-5xl mx-auto relative">
        <SectionHeading
          label="// tech.stack"
          title="My Arsenal"
          subtitle="Tools and technologies I work with daily"
        />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {RESUME_DATA.techStack.map((tech) => (
            <motion.div
              key={tech.name}
              variants={scaleIn}
              className="glass border border-dark-border rounded-2xl p-5 flex flex-col items-center gap-3 text-center glow-card cursor-default group"
            >
              <span className="text-3xl">{tech.icon}</span>
              <div>
                <p className="font-semibold text-white text-sm group-hover:text-neon-blue transition-colors">
                  {tech.name}
                </p>
                <p className="text-xs font-mono text-slate-500 mt-0.5">{tech.category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
