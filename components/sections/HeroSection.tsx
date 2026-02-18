'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { heroTextVariants } from '@/lib/animations'
import { RESUME_DATA } from '@/lib/utils'

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const orb1Ref = useRef<HTMLDivElement>(null)
  const orb2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Parallax on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      const x = (e.clientX / innerWidth - 0.5) * 2
      const y = (e.clientY / innerHeight - 0.5) * 2

      if (orb1Ref.current) {
        orb1Ref.current.style.transform = `translate(${x * 30}px, ${y * 20}px)`
      }
      if (orb2Ref.current) {
        orb2Ref.current.style.transform = `translate(${x * -20}px, ${y * -30}px)`
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
      id="hero"
    >
      {/* Background orbs */}
      <div
        ref={orb1Ref}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)',
          transition: 'transform 0.3s ease-out',
          filter: 'blur(40px)',
        }}
      />
      <div
        ref={orb2Ref}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(123,47,255,0.1) 0%, transparent 70%)',
          transition: 'transform 0.3s ease-out',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-20 text-center">
        {/* Badge */}
        <motion.div
          custom={0}
          variants={heroTextVariants}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 glass border border-neon-blue/20 rounded-full px-4 py-2 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="font-mono text-xs text-slate-300">Available for opportunities</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          custom={1}
          variants={heroTextVariants}
          initial="hidden"
          animate="visible"
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
        >
          <span className="text-white">MD Shaz</span>{' '}
          <span className="text-gradient">Ahmed</span>
        </motion.h1>

        {/* Type animation */}
        <motion.div
          custom={2}
          variants={heroTextVariants}
          initial="hidden"
          animate="visible"
          className="text-xl md:text-3xl font-display font-medium mb-6 min-h-[40px]"
        >
          <TypeAnimation
            sequence={[
              'Software Engineer',
              1800,
              '.NET Backend Developer',
              1800,
              'ASP.NET Core Specialist',
              1800,
              'Microservices Architect',
              1800,
              'Apache Kafka Engineer',
              1800,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-neon-blue"
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          custom={3}
          variants={heroTextVariants}
          initial="hidden"
          animate="visible"
          className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          4.5 years crafting scalable healthcare systems with{' '}
          <span className="text-slate-200">C#, ASP.NET Core</span>, and{' '}
          <span className="text-slate-200">event-driven architectures</span>.
          Turning complex backend challenges into elegant solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={4}
          variants={heroTextVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton
            href="#contact"
            variant="primary"
          >
            Get In Touch
          </MagneticButton>
          <MagneticButton
            href="/MD_Shaz_Ahmed_Software_Engineer_DotNet_4.5Yrs.pdf"
            variant="secondary"
            download
          >
            Download Resume ↓
          </MagneticButton>
        </motion.div>

        {/* Social links */}
        <motion.div
          custom={5}
          variants={heroTextVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center gap-6 mt-12"
        >
          {[
            { label: 'GitHub', href: RESUME_DATA.github, icon: 'GH' },
            { label: 'LinkedIn', href: RESUME_DATA.linkedin, icon: 'LI' },
            { label: 'Email', href: `mailto:${RESUME_DATA.email}`, icon: '✉' },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2"
            >
              <motion.div
                className="w-10 h-10 rounded-xl glass border border-dark-border flex items-center justify-center text-xs font-mono font-bold text-slate-400 group-hover:text-neon-blue group-hover:border-neon-blue/40 transition-all duration-200"
                whileHover={{ y: -3, scale: 1.05 }}
              >
                {social.icon}
              </motion.div>
              <span className="text-xs text-slate-500 group-hover:text-slate-300 transition-colors">
                {social.label}
              </span>
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-xs text-slate-500 tracking-widest">SCROLL</span>
          <motion.div
            className="w-px h-12 bg-gradient-to-b from-neon-blue to-transparent"
            animate={{ scaleY: [1, 0.5, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  )
}

function MagneticButton({
  href,
  children,
  variant,
  download,
}: {
  href: string
  children: React.ReactNode
  variant: 'primary' | 'secondary'
  download?: boolean
}) {
  const btnRef = useRef<HTMLAnchorElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const btn = btnRef.current
    if (!btn) return
    const rect = btn.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`
  }

  const handleMouseLeave = () => {
    if (btnRef.current) btnRef.current.style.transform = 'translate(0, 0)'
  }

  return (
    <motion.a
      ref={btnRef}
      href={href}
      download={download}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`magnetic-btn px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 ${variant === 'primary'
          ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-dark-base shadow-neon-blue hover:shadow-neon-strong'
          : 'glass border border-neon-blue/30 text-neon-blue hover:border-neon-blue hover:shadow-neon-blue'
        }`}
    >
      {children}
    </motion.a>
  )
}
