'use client'

import { useState, useRef, FormEvent } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { RESUME_DATA } from '@/lib/utils'
import { fadeInLeft, fadeInRight } from '@/lib/animations'

// Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = 'service_s5x4r0a'
const EMAILJS_TEMPLATE_ID = 'template_f1g6l8n'
const EMAILJS_PUBLIC_KEY = 'UMtdnLlW1AYMuvXEp'

const CONTACT_LINKS = [
  {
    icon: '✉',
    label: 'Email',
    value: RESUME_DATA.email,
    href: `mailto:${RESUME_DATA.email}`,
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/mdshazahmed',
    href: RESUME_DATA.linkedin,
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'github.com/shaz290',
    href: RESUME_DATA.github,
  },
  {
    icon: '📞',
    label: 'Phone',
    value: RESUME_DATA.phone,
    href: `tel:${RESUME_DATA.phone}`,
  },
]

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [fields, setFields] = useState({ name: '', email: '', subject: '', message: '' })

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return
    setStatus('sending')
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setFields({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section id="contact" className="section-padding relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center bottom, rgba(0,212,255,0.04) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto relative" ref={ref}>
        <SectionHeading
          label="// contact.send()"
          title="Get In Touch"
          subtitle="Have an opportunity or just want to connect? My inbox is always open."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact info */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            <div className="glass border border-dark-border rounded-3xl p-6 md:p-8">
              <h3 className="font-display text-lg font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {CONTACT_LINKS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl glass border border-dark-border flex items-center justify-center text-base shrink-0 group-hover:border-neon-blue/40 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-mono text-slate-500">{item.label}</p>
                      <p className="text-sm text-slate-300 group-hover:text-neon-blue transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability card */}
            <motion.div
              className="glass border border-green-400/20 rounded-2xl p-5 flex items-start gap-4"
              animate={{ boxShadow: ['0 0 10px rgba(74,222,128,0.1)', '0 0 25px rgba(74,222,128,0.2)', '0 0 10px rgba(74,222,128,0.1)'] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse mt-1 shrink-0" />
              <div>
                <p className="text-white font-semibold text-sm">Currently Available</p>
                <p className="text-slate-400 text-xs mt-1">
                  Open to full-time roles, contract work, and consulting opportunities in backend engineering.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass border border-dark-border rounded-3xl p-6 md:p-8 space-y-4"
            >
              <h3 className="font-display text-lg font-bold text-white mb-6">Send a Message</h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <InputField
                  label="Your Name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={fields.name}
                  onChange={handleChange}
                  required
                />
                <InputField
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={fields.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <InputField
                label="Subject"
                name="subject"
                type="text"
                placeholder="Job Opportunity / Collaboration"
                value={fields.subject}
                onChange={handleChange}
                required
              />

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-2">Message</label>
                <textarea
                  name="message"
                  placeholder="Tell me about the opportunity or project..."
                  value={fields.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-dark-card border border-dark-border rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-neon-blue/50 focus:shadow-neon-blue transition-all resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-neon-blue to-neon-purple text-dark-base transition-all duration-200 hover:shadow-neon-strong disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <span className="flex items-center justify-center gap-2">
                    <motion.span
                      className="w-4 h-4 border-2 border-dark-base/40 border-t-dark-base rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                    />
                    Sending...
                  </span>
                ) : status === 'success' ? (
                  '✓ Message Sent!'
                ) : status === 'error' ? (
                  '✗ Failed — Try Again'
                ) : (
                  'Send Message →'
                )}
              </motion.button>

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-xs text-center font-mono"
                >
                  Thanks for reaching out! I&apos;ll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function InputField({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string
  name: string
  type: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
}) {
  return (
    <div>
      <label className="block text-xs font-mono text-slate-400 mb-2">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-dark-card border border-dark-border rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-neon-blue/50 focus:shadow-neon-blue transition-all"
      />
    </div>
  )
}
