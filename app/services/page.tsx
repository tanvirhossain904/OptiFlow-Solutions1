'use client'

import { motion } from 'framer-motion'
import ServiceCard from '@/components/ServiceCard'
import { services } from '@/data/services'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const process = [
  { step: '01', title: 'Discovery', desc: 'We deep-dive into your business goals, user needs, and technical constraints to build a clear project foundation.' },
  { step: '02', title: 'Strategy', desc: 'We craft a detailed technical roadmap, timeline, and resource plan aligned with your business objectives.' },
  { step: '03', title: 'Design', desc: 'Our designers create intuitive, beautiful interfaces that convert users and reflect your brand identity.' },
  { step: '04', title: 'Development', desc: 'Agile sprints, clean code, rigorous testing — we build your product with engineering excellence.' },
  { step: '05', title: 'Launch', desc: 'Smooth deployment, performance monitoring, and a seamless go-live experience for your users.' },
  { step: '06', title: 'Support', desc: 'Post-launch maintenance, feature iterations, and lifetime technical support to keep you growing.' },
]

export default function ServicesPage() {
  return (
    <div className="bg-[#f2f2f2] dark:bg-[#0c2501] pt-16">
      {/* Hero */}
      <section className="py-24 bg-[#0c2501] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'linear-gradient(rgba(74,222,128,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,0.08) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-label">Our Services</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
              Everything You Need to
              <br />
              <span className="text-[#81fa00] ">Build & Scale</span>
            </h1>
            <p className="text-gray-400 text-sm md:text-md md:text-lg max-w-2xl mx-auto">
              From initial strategy to post-launch support, we provide end-to-end technology services that drive real business results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-gray-50 dark:bg-[#0F2318]">
        <div className="max-w-7xl mx-auto px-2 md:px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <span className="section-label">How We Work</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#131313] dark:text-white">
              Our <em className="italic font-serif text-[#81fa00]  ">Process</em>
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative bg-[#f2f2f2] dark:bg-[#0c2501] rounded-2xl p-3 md:p-6 border border-gray-200 dark:border-[#81fA00]/10 hover:border-[#81fA00]/30 transition-all group"
              >
                <span className="text-2xl md:text-5xl font-black text-[#81fa00] group-hover:text-[#81fa00]  /25 transition-colors absolute top-4 right-4">
                  {step.step}
                </span>
                <div className="w-10 h-10 rounded-xl bg-[#81fa00]/70 border border-[#81fA00]/20 flex items-center justify-center text-[#81fa00]   font-black text-sm mb-5">
                  {step.step}
                </div>
                <h3 className="font-bold text-base text-[#131313] dark:text-white mb-1 md:mb-3">{step.title}</h3>
                <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0c2501]/90 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Ready to Get Started?</h2>
          <p className="text-gray-400 text-sm mb-10">Tell us about your project and we'll build the perfect solution for you.</p>
          <Link href="/contact" className="btn-primary">
            Start Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
