'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { staggerContainer, fadeInUp } from '@/lib/animations'
import { RESUME_DATA } from '@/lib/utils'

const SKILL_GROUPS = [
  { category: 'Languages', color: 'from-cyan-400 to-blue-500', skills: RESUME_DATA.skills.languages },
  { category: 'Backend', color: 'from-neon-blue to-neon-purple', skills: RESUME_DATA.skills.backend },
  { category: 'Database', color: 'from-purple-400 to-pink-500', skills: RESUME_DATA.skills.database },
  { category: 'Messaging', color: 'from-orange-400 to-red-500', skills: RESUME_DATA.skills.messaging },
  { category: 'Frontend', color: 'from-green-400 to-cyan-500', skills: RESUME_DATA.skills.frontend },
]

interface SkillBarProps {
  name: string
  level: number
  color: string
  delay: number
  inView: boolean
}

function SkillBar({ name, level, color, delay, inView }: SkillBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-slate-300">{name}</span>
        <span className="text-xs font-mono text-neon-blue">{level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className={`skill-bar-fill bg-gradient-to-r ${color}`}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: level / 100 } : { scaleX: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: 'left', width: '100%' }}
        />
      </div>
    </div>
  )
}

export function SkillsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="skills" className="section-padding relative">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(123,47,255,0.04) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto relative">
        <SectionHeading
          label="// skills.map()"
          title="Technical Skills"
          subtitle="A snapshot of my technical proficiency across languages, frameworks, and tools"
        />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SKILL_GROUPS.map((group, gi) => (
            <motion.div
              key={group.category}
              variants={fadeInUp}
              className="glass border border-dark-border rounded-2xl p-6 glow-card"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${group.color}`} />
                <h3 className="font-display font-semibold text-white text-sm tracking-wide">
                  {group.category}
                </h3>
                <div className="flex-1 h-px bg-dark-border" />
              </div>
              <div className="space-y-4">
                {group.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={group.color}
                    delay={gi * 0.1 + si * 0.1}
                    inView={inView}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Extra skills tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-wrap gap-3 justify-center"
        >
          {['Microservices', 'CQRS', 'REST APIs', 'ADO.NET', 'Git', 'Event-Driven Architecture', 'Web Scraping', 'HCM Modules'].map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 text-xs font-mono glass border border-neon-purple/20 rounded-xl text-slate-400 hover:text-neon-purple hover:border-neon-purple/50 transition-all cursor-default"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
