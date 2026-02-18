'use client'

import { motion } from 'framer-motion'
import { RESUME_DATA } from '@/lib/utils'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-dark-border py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg glass border border-neon-blue/30 flex items-center justify-center text-xs font-display font-bold text-neon-blue">
              S
            </div>
            <div>
              <p className="font-display font-semibold text-white text-sm">MD Shaz Ahmed</p>
              <p className="text-slate-500 text-xs">{RESUME_DATA.title}</p>
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex items-center gap-6">
            {['#about', '#skills', '#experience', '#contact'].map((href) => (
              <a
                key={href}
                href={href}
                className="text-slate-500 hover:text-neon-blue text-xs font-mono transition-colors capitalize"
              >
                {href.slice(1)}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-4">
            {[
              { label: 'GH', href: RESUME_DATA.github },
              { label: 'LI', href: RESUME_DATA.linkedin },
            ].map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, scale: 1.1 }}
                className="w-8 h-8 glass border border-dark-border rounded-lg flex items-center justify-center text-xs font-mono text-slate-400 hover:text-neon-blue hover:border-neon-blue/40 transition-all"
              >
                {s.label}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-dark-border flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-slate-600 text-xs font-mono">
            © {year} MD Shaz Ahmed. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs font-mono">
            Built with Next.js + Tailwind + Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
