'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { RESUME_DATA } from '@/lib/utils'
import { staggerContainer, fadeInUp } from '@/lib/animations'

export function CertificationsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="certifications" className="section-padding relative">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          label="// achievements.list"
          title="Certifications"
          subtitle="Continuous learning and professional development"
        />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-6"
        >
          {RESUME_DATA.certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              variants={fadeInUp}
              className="glass border border-dark-border rounded-2xl p-6 glow-card relative overflow-hidden"
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 pointer-events-none">
                <div
                  className="absolute top-0 right-0 w-full h-full"
                  style={{
                    background: 'linear-gradient(225deg, rgba(0,212,255,0.1) 0%, transparent 60%)',
                    borderTopRightRadius: '16px',
                  }}
                />
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 border border-neon-blue/20 flex items-center justify-center shrink-0 text-xl">
                  🏆
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-white text-base mb-1">{cert.title}</h3>
                  <p className="text-neon-blue text-xs font-mono mb-3">{cert.platform}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{cert.description}</p>
                </div>
              </div>

              {/* Animated bottom bar */}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple"
                initial={{ scaleX: 0, transformOrigin: 'left' }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.2 }}
                style={{ width: '100%' }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
