'use client'
import React from 'react';

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Star, Infinity as InfinityIcon, Headphones, DollarSign, Clock } from 'lucide-react'

import ProjectCard from '@/components/ProjectCard'
import ServiceCard from '@/components/ServiceCard'
import { projects } from '@/data/projects'
import { services } from '@/data/services'

const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '50+', label: 'Expert Team' },
  { value: '8+', label: 'Years Experience' },
]

const whyUs = [
  {
    icon: <InfinityIcon  size={28} className="text-[#81fa00] " />,
    title: 'Unlimited Revisions',
    desc: 'We are committed to your success with unlimited revisions at every step. Our mission is to make your software vision come to life exactly as you imagine.',
  },
  {
    icon: <Headphones size={28} className="text-[#81fa00] " />,
    title: 'Lifetime Technical Support',
    desc: 'With lifetime support, your business is never alone. We\'re here for you at every technical hurdle with necessary guidance wherever you need.',
  },
  {
    icon: <DollarSign size={28} className="text-[#81fa00] " />,
    title: 'Scalable Licensing Plans',
    desc: 'Our easy payment options are completely flexible. So you can start it and keep scaling up as your product grows without breaking the bank.',
  },
  {
    icon: <Clock size={28} className="text-[#81fa00] " />,
    title: '24/7 Technical Support',
    desc: 'Round-the-clock assistance that is carefully designed to tackle critical app issues that is designed to tackle even the most demanding needs.',
  },
]

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO, Fint Inc.',
    text: 'EasySoft transformed our vision into a world-class fintech product. Their technical expertise and commitment to quality is unmatched.',
    color: 'bg-blue-400',
  },
  {
    name: 'Marcus Webb',
    role: 'Founder, ShopEase',
    text: 'The team delivered beyond our expectations. Our e-commerce platform handles 10x more traffic with zero downtime.',
    color: 'bg-[#81fa00] ',
  },
  {
    name: 'Priya Sharma',
    role: 'CEO, MediCorp',
    text: 'Working with EasySoft was seamless from day one. They understood our HIPAA requirements and executed flawlessly.',
    color: 'bg-orange-400',
  },
  {
    name: 'Alex Morgan',
    role: 'Product Lead, EduLearn',
    text: 'Our LMS went from concept to 15k users in 3 months. The quality of work and attention to detail is exceptional.',
    color: 'bg-purple-400',
  },
]

const faqs = [
  { q: 'What are your core services?', a: 'We offer IT consulting, custom software development, cloud & DevOps, UI/UX design, AI/ML, and cybersecurity solutions.' },
  { q: 'How does the revision process work?', a: 'We offer unlimited revisions during the development phase to ensure the final product matches your vision exactly.' },
  { q: 'What are your core services?', a: 'We work with startups, SMBs, and enterprise clients across fintech, healthcare, e-commerce, and more.' },
  { q: 'What is the typical project timeline?', a: 'Most projects range from 4–12 weeks depending on scope. We provide detailed timelines during the discovery phase.' },
  { q: 'How do your payment plans work?', a: 'We offer flexible milestone-based payments, monthly retainers, and project-based pricing to suit your budget.' },
  { q: 'Do you provide team training?', a: 'Yes, we provide comprehensive handover documentation, training sessions, and ongoing support for your team.' },
]

export default function HomePage() {
  return (
    <div className="bg-[#f2f2f2] dark:bg-[#0c2501]">
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0c2501] pt-16">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(rgba(74,222,128,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,0.08) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        {/* Gradient blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#81fa00]/20 /5 blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest border border-[#81fA00]/30 text-[#f2f2f2] bg-[#81fa00]/70  mb-8">
              ✦ Smart Software Solutions
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-2xl md:text-3xl  sm:text-5xl lg:text-6xl font-black text-[#f2f2f2] leading-[1.05] tracking-tight mb-6"
          >
            Smart Software Solutions
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#81fA00] to-[#81fa00]/60">
              for a Seamless Future
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            We build scalable, secure, and innovative tech solutions designed to accelerate your business growth and
            simplify complex challenges.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#81fa00] hover:bg-[#81fa00]/50 text-black font-bold text-xs md:text-sm rounded-full transition-all duration-200 shadow-lg shadow-[#81fa00]/70 /30 hover:shadow-[#81fa00]/70 /50"
            >
              Get a Quote <ArrowRight size={16} />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/15 text-gray-300 hover:text-white hover:border-white/30 font-semibold text-xs md:text-sm  rounded-full transition-all duration-200"
            >
              View Projects
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-20 max-w-3xl mx-auto"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl  font-black text-white mb-1">{stat.value}</div>
                <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── WHAT WE DO ─── */}
      <section className="py-24 bg-[#f2f2f2] dark:bg-[#0c2501]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <span className="section-label">What We Do</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#131313] dark:text-white leading-tight">
              We Design <em className="italic dark:text-[#81fa00] text-[#81fa00]/50">Software .</em>
              <br />
              That speaks to <em className="italic font-serif">Audiences</em>
            </h2>
          </div>

          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>

          <div className="grid md:hidden grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6">
            {services.slice(0, 2).map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/services" className="btn-outline">
              See All Services <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-24 bg-gray-50 dark:bg-[#0F2318]/50">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-14">
            <span className="section-label">Why Choose Us</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#131313] dark:text-white leading-tight">
              We <em className="italic font-serif">Design</em> for the <em className="text-[#81fa00]  font-serif italic">Future</em> to
              <br />
              Drive Today's <em className="italic font-serif">Success</em>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6">
            {whyUs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-[#f2f2f2] dark:bg-[#0c2501]/20 rounded-2xl p-3 md:p-6 border border-gray-200 dark:border-[#81fA00]/10 hover:border-[#81fA00]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#81fa00]/70 "
              >
             <div className="w-12 h-12 rounded-xl bg-[#0c2701] border border-[#0c2701]/50 flex items-center justify-center mb-5">
                {React.cloneElement(item.icon, { className: "text-[#81fa00]  w-6 h-6" })}
              </div>
                <h3 className="font-bold text-[#131313] dark:text-white text-sm md:text-base mb-2 md:mb-3">{item.title}</h3>
                <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROJECTS ─── */}
      <section className="py-24 bg-[#f2f2f2] dark:bg-[#0c2501]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8 md:mb-14">
            <div>
              <span className="section-label">Our Work</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#131313] dark:text-white">
                Featured <em className="italic font-serif text-[#81fa00] ">Projects</em>
              </h2>
            </div>
            <Link href="/projects" className="hidden sm:flex items-center gap-1.5 text-sm text-[#81fa00]  hover:text-[#81fa00]/80 font-semibold transition-colors">
              View All <ArrowRight size={14} />
            </Link>
          </div>

          <div className="md:grid hidden grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>

          <div className="grid md:hidden grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.slice(0, 2).map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>

        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-24 bg-[#0c2501]">
        <div className="max-w-7xl mx-auto px-2 md:px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <span className="section-label">Client Stories</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight">
              <em className="italic font-serif">Hear</em> What They're
              <br />
              Saying <em className="italic font-serif text-[#81fa00]">About Us</em>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-[#0F2318] rounded-2xl overflow-hidden border border-[#81fA00]/10 hover:border-[#81fA00]/30 transition-all duration-300"
              >
                <div className={`md:h-40 h-32 ${t.color} relative`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="md:w-16 w-12 h-12 md:h-16 rounded-full bg-black/20 border-2 border-white/30" />
                  </div>
                </div>
                <div className="md:p-5 p-3">
                  <div className="flex gap-0.5 mb-2 md:mb-3">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={12} className="text-[#81fa00] fill-[#81fa00]" />
                    ))}
                  </div>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-2 md:mb-4 line-clamp-3">{t.text}</p>
                  <div>
                    <span className="text-xs text-gray-600 block mb-0.5">Logo</span>
                    <p className="font-bold text-white text-xs md:text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA / CONTACT ─── */}
      <section className="py-24 bg-[#0F2318]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label">Get Started</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-12 leading-tight">
            <em className="italic font-serif">Ready</em> to Upgrade
            <br />
            Your <span className="text-[#81fa00]">Tech Stack?</span>
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#81fa00] hover:bg-[#81fa00]/80 text-black font-bold rounded-full transition-all duration-200 text-sm md:text-base shadow-xl shadow-[#81fa00]/30"
          >
            Start Your Project <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-24 bg-[#f2f2f2] dark:bg-[#0c2501]">
        <div className="max-w-5xl mx-auto px-2 md:px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <span className="section-label">Queries</span>
            <h2 className="text-3xl lg:text-4xl font-black text-[#131313] dark:text-white">
              <em className="italic font-serif">Questions</em> You
              <br />
              May Ask
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 md:gap-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex  items-start gap-3 p-2 md:p-4 rounded-xl bg-gray-50 dark:bg-[#0F2318] border border-gray-200 dark:border-[#81fA00]/10 hover:border-[#81fA00]/30 transition-all group"
              >
                <CheckCircle size={16} className="text-[#81fa00]  mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs md:text-sm font-semibold text-[#131313] dark:text-white mb-2">{faq.q}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{faq.a}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
