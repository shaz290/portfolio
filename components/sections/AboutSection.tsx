'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { staggerContainer, fadeInLeft, fadeInRight, scaleIn } from '@/lib/animations'
import { RESUME_DATA } from '@/lib/utils'

const STATS = [
  { value: '4.5', label: 'Years Experience', suffix: '+' },
  { value: '3', label: 'Years Backend Dev', suffix: 'Y' },
  { value: '1.5', label: 'Years QA/Testing', suffix: 'Y' },
  { value: '100', label: 'Healthcare Focus', suffix: '%' },
]

export function AboutSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="// about.me"
          title="Who I Am"
          subtitle="A backend engineer who thrives on complex system design and performance optimization"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center" ref={ref}>
          {/* Left: Avatar + stats */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="flex flex-col items-center lg:items-start gap-8"
          >
            {/* Avatar card */}
            <div className="relative">
              <motion.div
                className="w-64 h-64 rounded-3xl glass border border-neon-blue/20 flex items-center justify-center overflow-hidden"
                animate={{ boxShadow: ['0 0 20px rgba(0,212,255,0.2)', '0 0 50px rgba(0,212,255,0.4)', '0 0 20px rgba(0,212,255,0.2)'] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="relative flex flex-col items-center justify-center gap-3">
                  <div
                    className="w-32 h-32 rounded-full flex items-center justify-center text-5xl font-display font-bold"
                    style={{ background: 'linear-gradient(135deg, rgba(0,212,255,0.2), rgba(123,47,255,0.2))', border: '2px solid rgba(0,212,255,0.3)' }}
                  >
                    <span className="text-gradient">SA</span>
                  </div>
                  <div className="text-center">
                    <p className="text-white font-semibold text-sm">MD Shaz Ahmed</p>
                    <p className="text-neon-blue text-xs font-mono">Software Engineer</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-3 -right-3 glass border border-green-400/30 rounded-xl px-3 py-2 flex items-center gap-2"
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-mono text-green-400">Open to Work</span>
              </motion.div>

              {/* Experience badge */}
              <motion.div
                className="absolute -top-3 -left-3 glass border border-neon-purple/30 rounded-xl px-3 py-2"
                animate={{ y: [3, -3, 3] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <span className="text-xs font-mono text-neon-purple">4.5 YRS EXP</span>
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 gap-4 w-full"
              variants={staggerContainer}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              {STATS.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={scaleIn}
                  className="glass border border-dark-border rounded-2xl p-4 text-center glow-card"
                >
                  <div className="font-display text-3xl font-bold text-gradient">
                    {stat.value}
                    <span className="text-sm text-neon-blue">{stat.suffix}</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-1 font-mono">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Bio */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            <div className="glass border border-dark-border rounded-3xl p-6 md:p-8 space-y-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px flex-1 bg-gradient-to-r from-neon-blue to-transparent" />
                <span className="font-mono text-xs text-neon-blue">SUMMARY</span>
              </div>

              <p className="text-slate-300 leading-relaxed text-base">
                {RESUME_DATA.summary}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  { label: 'Location', value: 'Bangalore, India' },
                  { label: 'Current Role', value: 'Software Engineer' },
                  { label: 'Company', value: 'Grasko Solution Pvt Ltd' },
                  { label: 'Email', value: RESUME_DATA.email },
                ].map((item) => (
                  <div key={item.label} className="flex gap-2">
                    <span className="text-neon-blue text-xs font-mono pt-0.5">▸</span>
                    <div>
                      <p className="text-xs text-slate-500 font-mono">{item.label}</p>
                      <p className="text-sm text-slate-200 break-all">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core values */}
            <div className="flex flex-wrap gap-2">
              {['Scalable Architecture', 'Clean Code', 'Performance', 'Healthcare Tech', 'Event-Driven', 'API Design'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs font-mono glass border border-neon-blue/20 rounded-lg text-slate-400 hover:text-neon-blue hover:border-neon-blue/50 transition-all cursor-default"
                >
                  #{tag.toLowerCase().replace(' ', '_')}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
