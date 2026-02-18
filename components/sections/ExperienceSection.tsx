'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { RESUME_DATA } from '@/lib/utils'
import { fadeInLeft, fadeInRight } from '@/lib/animations'

export function ExperienceSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const exp = RESUME_DATA.experience[0]

  return (
    <section id="experience" className="section-padding relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(0,212,255,0.03) 0%, transparent 60%)' }}
      />

      <div className="max-w-5xl mx-auto relative">
        <SectionHeading
          label="// career.history"
          title="Work Experience"
          subtitle="My professional journey building production systems"
        />

        <div ref={ref} className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 overflow-hidden">
            <motion.div
              className="w-full timeline-line"
              initial={{ scaleY: 0, transformOrigin: 'top' }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              style={{ height: '100%' }}
            />
          </div>

          {/* Experience card */}
          <div className="ml-16 md:ml-0 md:grid md:grid-cols-2 md:gap-12 items-start">
            {/* Left: Company info */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="md:text-right md:pr-12 pb-8 md:pb-0"
            >
              <div className="glass border border-dark-border rounded-2xl p-6 glow-card">
                <div className="flex items-center gap-2 md:justify-end mb-2">
                  <span className="font-mono text-xs text-neon-blue border border-neon-blue/30 rounded px-2 py-0.5">
                    CURRENT
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-white">{exp.company}</h3>
                <p className="text-neon-blue font-medium mt-1">{exp.role}</p>
                <p className="text-slate-400 text-sm mt-1 font-mono">{exp.period}</p>
                <p className="text-slate-500 text-xs mt-1">{exp.location}</p>

                <div className="mt-4 flex flex-wrap gap-2 md:justify-end">
                  {['ASP.NET Core', '.NET 8', 'SQL Server', 'Kafka'].map((tag) => (
                    <span key={tag} className="text-xs font-mono px-2 py-1 bg-neon-blue/10 border border-neon-blue/20 rounded text-neon-blue">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Timeline dot */}
            <div className="hidden md:block absolute left-1/2 top-8 -translate-x-1/2">
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                className="w-5 h-5 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple shadow-neon-blue border-4 border-dark-base"
              />
            </div>

            {/* Right: Responsibilities */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="md:pl-12"
            >
              <div className="glass border border-dark-border rounded-2xl p-6">
                <p className="font-mono text-xs text-slate-500 mb-4">KEY RESPONSIBILITIES</p>
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + i * 0.08 }}
                      className="flex gap-3 text-sm text-slate-300 leading-relaxed"
                    >
                      <span className="text-neon-blue mt-0.5 shrink-0">▸</span>
                      {resp}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Education timeline items */}
        </div>
      </div>
    </section>
  )
}
