'use client'
import { motion } from 'framer-motion'
import { ArrowUpRight, Users, Package } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Users,
    title: 'Team Extension',
    desc: 'Tight deadlines, shifting scopes, rapid scaling—we offer team augmentation by embedding engineers who speak your stack, move at your speed, and align with your culture.',
    links: [
      { label: 'Dedicated Development Team', href: '/team/developer' },
      { label: 'Staff Augmentation',         href: '/team/staff' },
    ],
  },
  {
    icon: Package,
    title: 'Product Development',
    desc: 'We transform your vision into scalable, robust solutions. From concept to architecture to launch and beyond, we deliver disciplined execution with regular updates and full transparency.',
    links: [
      { label: 'MVP Development',                      href: '/team/mvp' },
      { label: 'Integrated Business Automation',       href: '/team/Integrated_business_automation' },
      { label: 'End-End Tailored Software Development',href: '/team/software_development' },
    ],
  },
]

export default function HomeDeployTeam() {
  return (
    <section className="relative overflow-hidden bg-[#0c2501] py-24 md:py-32">

      {/* Decorative corner dots */}
      <span className="absolute top-8  right-12 w-2   h-2   rounded-full bg-[#81fa00]/20" />
      <span className="absolute top-14 right-7  w-1.5 h-1.5 rounded-full bg-[#81fa00]/15" />
      <span className="absolute top-6  right-20 w-1   h-1   rounded-full bg-[#81fa00]/10" />
      <span className="absolute top-8  left-10  w-1.5 h-1.5 rounded-full bg-[#81fa00]/15" />
      <span className="absolute top-16 left-6   w-1   h-1   rounded-full bg-[#81fa00]/10" />

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-[#81fa00]/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#81fa00] mb-4"
          >
            Let's Create Something Extraordinary!
          </motion.p>

          <div className="overflow-hidden mb-4">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight"
            >
              We Deploy{' '}
              <span className="text-[#81fa00]">Extra Ordinary</span>
              <br />
              Teams for Your Next Big Move!
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-gray-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed"
          >
            At EasySoft, we deliver reliable solutions to complex problems with
            global expertise and hands-on care, wherever you are.
          </motion.p>
        </div>

        {/* ── Service rows ── */}
        <div className="flex flex-col divide-y divide-[#81fa00]/10">
          {services.map((svc, i) => {
            const Icon = svc.icon
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 py-12 md:py-14 group"
              >
                {/* Left — icon + title + desc */}
                <div className="flex gap-5">
                  <div className="flex-shrink-0 mt-1">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{
                        background: 'rgba(129,250,0,0.08)',
                        border: '1.5px solid rgba(129,250,0,0.2)',
                      }}
                    >
                      <Icon size={20} className="text-[#81fa00]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-black text-xl md:text-2xl mb-3 group-hover:text-[#81fa00] transition-colors duration-300">
                      {svc.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                      {svc.desc}
                    </p>
                  </div>
                </div>

                {/* Right — links */}
                <div className="flex flex-col justify-center gap-3 md:pl-4">
                  {svc.links.map((link, j) => (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.15 + j * 0.1 + 0.2 }}
                    >
                      <Link
                        href={link.href}
                        className="group/link inline-flex items-center gap-3 py-2 border-b border-transparent hover:border-[#81fa00]/30 transition-all duration-300"
                      >
                        {/* Diamond bullet */}
                        <span
                          className="w-2 h-2 rotate-45 flex-shrink-0 bg-[#81fa00] transition-transform duration-300 group-hover/link:scale-125"
                        />
                        <span className="text-sm md:text-base font-semibold text-gray-300 group-hover/link:text-[#81fa00] transition-colors duration-300">
                          {link.label}
                        </span>
                        <ArrowUpRight
                          size={15}
                          className="text-gray-600 group-hover/link:text-[#81fa00] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all duration-300 ml-auto"
                        />
                      </Link>
                    </motion.div>
                  ))}
                </div>

              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}