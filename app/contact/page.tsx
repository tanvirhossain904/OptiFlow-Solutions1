'use client'

import { motion } from 'framer-motion'
import ContactForm from '@/components/ContactForm'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@easysoft.dev',
    href: 'mailto:hello@easysoft.dev',
  },
  {
    icon: Phone,
    label: 'Fax',
    value: '+1 (727) 458 9360',
    href: 'tel:+17274589360',
  },
  {
    icon: MapPin,
    label: 'Office Address',
    value: '7901 4th St N, Ste 300, St. Petersburg, FL 33702',
    href: 'https://maps.google.com/?q=7901+4th+St+N+Ste+300+St+Petersburg+FL+33702',
  },
  {
    icon: Clock,
    label: 'Office Hours',
    value: 'Mon – Fri, 9 AM – 6 PM EST',
    href: '#',
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
})

export default function ContactPage() {
  return (
    <div className="bg-[#0c2701] min-h-screen">

      {/* ── HERO ── */}
      <section className="relative py-28 bg-[#0c2701] overflow-hidden pt-36">

        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(129,250,0,0.9) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />

        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#81fa00]/6 blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 text-center z-10">
          <motion.div {...fadeUp(0)}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] border border-[#81fa00]/20 text-[#81fa00] bg-[#81fa00]/6 mb-8">
              <motion.span
                className="w-1.5 h-1.5 rounded-full bg-[#81fa00]"
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              />
              Contact Us
            </span>
          </motion.div>

          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
              className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.02] tracking-tight"
            >
              Let's Build Something
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-7">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.16, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
              className="text-4xl sm:text-5xl md:text-6xl font-black text-[#81fa00] leading-[1.02] tracking-tight"
            >
              Amazing Together
            </motion.h1>
          </div>

          <motion.p {...fadeUp(0.26)} className="text-gray-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Tell us about your project. We'll get back to you within 24 hours
            with a tailored solution built around your goals.
          </motion.p>
        </div>
      </section>

      {/* ── CONTACT SECTION ── */}
      <section className="py-20 bg-[#0a1b03]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* ── Left info panel ── */}
            <motion.div
              {...fadeUp(0.1)}
              className="lg:col-span-2 flex flex-col gap-8"
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-white mb-3 leading-tight">
                  Get in Touch
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Whether you have a project in mind or just want to explore what's possible —
                  we'd love to hear from you.
                </p>
              </div>

              {/* Contact cards */}
              <div className="flex flex-col gap-4">
                {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
                  <motion.a
                    key={label}
                    {...fadeUp(0.15 + i * 0.07)}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-start gap-4 p-4 rounded-2xl border border-[#81fa00]/8 bg-[#0c2701] hover:border-[#81fa00]/25 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#81fa00]/8 border border-[#81fa00]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[#81fa00]/15 transition-colors duration-300">
                      <Icon size={16} className="text-[#81fa00]" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-700 mb-1">{label}</p>
                      <p className="text-sm font-semibold text-gray-300 group-hover:text-[#81fa00] transition-colors duration-200 leading-snug break-words">
                        {value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Company info card */}
              <motion.div
                {...fadeUp(0.45)}
                className="rounded-2xl border border-[#81fa00]/10 bg-[#0c2701] p-5 overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#81fa00]/4 rounded-full blur-[40px] pointer-events-none" />
                <div className="relative z-10">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#81fa00]/50 mb-4">
                    Company Info
                  </p>
                  <div className="space-y-3">
                    {[
                      { label: 'Legal Name',   value: 'Easysoft LLC' },
                      { label: 'State',        value: 'Florida, USA' },
                      { label: 'Entity Type',  value: 'Limited Liability Company' },
                      { label: 'Founded',      value: 'March 2026' },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex items-start justify-between gap-4">
                        <span className="text-xs text-gray-700 flex-shrink-0">{label}</span>
                        <span className="text-xs text-gray-300 font-semibold text-right">{value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t border-[#81fa00]/8">
                    <p className="text-[11px] text-gray-600 leading-relaxed">
                      Easysoft provides software development, SaaS products, and digital technology
                      solutions designed to help businesses manage operations and support scalable growth.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* ── Right form panel ── */}
            <motion.div
              {...fadeUp(0.2)}
              className="lg:col-span-3"
            >
              <div className="relative rounded-3xl border border-[#81fa00]/12 bg-[#0c2701] p-6 md:p-10 overflow-hidden">

                {/* Top glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[160px] bg-[#81fa00]/5 blur-[70px] pointer-events-none" />

                {/* Grid texture */}
                <div
                  className="absolute inset-0 opacity-[0.03] pointer-events-none"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(129,250,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(129,250,0,1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                  }}
                />

                <div className="relative z-10">
                  <div className="mb-8">
                    <h2 className="text-xl md:text-2xl font-black text-white mb-2">
                      Start Your Project
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Fill out the form below and we'll prepare a custom proposal for you within 24 hours.
                    </p>
                  </div>

                  <ContactForm />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  )
}