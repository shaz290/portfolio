'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function PageLoader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="page-loader"
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="relative">
              <motion.div
                className="w-20 h-20 rounded-2xl glass border-neon flex items-center justify-center"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(0,212,255,0.3)',
                    '0 0 60px rgba(0,212,255,0.6)',
                    '0 0 20px rgba(0,212,255,0.3)',
                  ],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <span className="font-display text-3xl font-bold text-gradient">S</span>
              </motion.div>
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: 'conic-gradient(from 0deg, #00d4ff, #7b2fff, #00d4ff)',
                  padding: '2px',
                  borderRadius: '16px',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />
            </div>

            <div className="flex flex-col items-center gap-2">
              <motion.p
                className="font-mono text-sm text-neon-blue tracking-widest"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                INITIALIZING...
              </motion.p>
              <div className="w-48 h-0.5 bg-dark-border rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-neon-blue to-neon-purple"
                  initial={{ scaleX: 0, transformOrigin: 'left' }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
