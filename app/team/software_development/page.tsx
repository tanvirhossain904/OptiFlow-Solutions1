'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight, ArrowUpRight, ChevronRight,
  Code2, Smartphone, Globe, Database, Cloud, ShieldCheck,
  Cpu, LayoutDashboard, Server,
  Plus, Minus, ExternalLink, Users
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

/* ─────────────────────────────────────────
   Helpers
───────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
})

/* ─────────────────────────────────────────
   Data
───────────────────────────────────────── */
const services = [
  {
    icon: Code2,
    title: 'Custom Web Applications',
    desc: 'Scalable, secure, and high-performance web apps engineered from the ground up — tailored precisely to your business logic and user workflows.',
    accent: '#81fa00',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    desc: 'Cross-platform iOS and Android apps built with React Native and Flutter. Native performance, single codebase, zero compromise on UX.',
    accent: '#60a5fa',
  },
  {
    icon: LayoutDashboard,
    title: 'SaaS Product Engineering',
    desc: 'End-to-end SaaS platforms with multi-tenancy, billing integrations, role-based access, and the architecture to handle millions of users.',
    accent: '#a78bfa',
  },
  {
    icon: Database,
    title: 'Data & Backend Systems',
    desc: 'Robust APIs, microservices, data pipelines, and database architectures built for reliability, observability, and extreme throughput.',
    accent: '#f97316',
  },
  {
    icon: Cloud,
    title: 'Cloud-Native Architecture',
    desc: 'AWS, GCP, and Azure solutions designed for auto-scaling, high availability, and cost efficiency — with full CI/CD pipeline automation.',
    accent: '#34d399',
  },
  {
    icon: ShieldCheck,
    title: 'Legacy System Modernization',
    desc: 'Migrate and re-architect aging monoliths into modern, maintainable systems without disrupting your business operations or losing data.',
    accent: '#fbbf24',
  },
]

const techStacks = [
  {
    category: 'Frontend',
    icon: Globe,
    techs: ['React', 'Next.js', 'Vue', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'Backend',
    icon: Server,
    techs: ['Node.js', 'Python', 'Go', 'Django', 'FastAPI', 'php', 'Laravel'],
  },
  {
    category: 'Mobile',
    icon: Smartphone,
    techs: ['React Native', 'Flutter', 'Expo', 'Swift', 'Kotlin'],
  },
  {
    category: 'Database',
    icon: Database,
    techs: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Supabase', 'Prisma'],
  },
  {
    category: 'Cloud & DevOps',
    icon: Cloud,
    techs: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
  },
  {
    category: 'AI & Integrations',
    icon: Cpu,
    techs: ['OpenAI', 'LangChain', 'Stripe', 'Twilio', 'Firebase', 'Elastic'],
  },
]



const faqs = [
  {
    q: 'How long does custom software development typically take?',
    a: 'Timeline depends on scope and complexity. A typical MVP takes 6–12 weeks. Full-scale enterprise platforms can range from 3–9 months. We provide a detailed project roadmap and milestone breakdown during our discovery phase.',
  },
  {
    q: 'Do you sign NDAs and protect our intellectual property?',
    a: 'Absolutely. We sign mutual NDAs before any project discussion. All source code, designs, and deliverables are fully transferred to you upon project completion — you own everything 100%.',
  },
  {
    q: 'What is your development process and how do we stay informed?',
    a: 'We follow an agile sprint model with 2-week cycles. You get access to a live staging environment, weekly demo calls, a shared project board, and a dedicated Slack channel for real-time communication.',
  },
  {
    q: 'Can you work with our existing codebase or team?',
    a: 'Yes. We frequently integrate with existing codebases, tech stacks, and in-house teams. Our engineers conduct thorough code reviews and onboard to unfamiliar systems efficiently.',
  },
  {
    q: 'What happens after the software is launched?',
    a: 'We offer post-launch support, maintenance retainers, and ongoing feature development. Most clients stay with us long-term — our average client relationship spans over 2 years.',
  },
  {
    q: 'How is pricing structured for custom software projects?',
    a: 'We offer fixed-price contracts for well-scoped projects and time-and-materials for evolving scopes. Both models include detailed statements of work, transparent billing, and no hidden fees.',
  },
]

const stats = [
  { value: '150+', label: 'Products Shipped' },
  { value: '8yrs',  label: 'In the Industry' },
  { value: '98%',  label: 'Client Satisfaction' },
  { value: '40+',  label: 'Tech Stacks' },
]

/* ─────────────────────────────────────────
   FAQ Item
───────────────────────────────────────── */
function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div {...fadeUp(index * 0.05)} className="border-b border-[#81fa00]/8 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-6 text-left group"
      >
        <span className={`font-bold text-base leading-snug transition-colors duration-200 ${open ? 'text-[#81fa00]' : 'text-gray-200 group-hover:text-[#81fa00]'}`}>
          {q}
        </span>
        <span className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 mt-0.5 ${open ? 'bg-[#81fa00] border-[#81fa00] text-black' : 'border-[#81fa00]/25 text-[#81fa00]/50'}`}>
          {open ? <Minus size={13} /> : <Plus size={13} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="overflow-hidden"
          >
            <p className="text-gray-500 text-sm leading-relaxed pb-6 max-w-2xl">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

/* ─────────────────────────────────────────
   Page
───────────────────────────────────────── */
export default function SoftwareDevelopment() {
  return (
    <div className="bg-[#0c2501] min-h-screen">

      {/* ══════════════════════════════════
          HERO
      ══════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-24">

        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(129,250,0,0.8) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Glow blobs */}
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[500px] rounded-full bg-[#81fa00]/7 blur-[160px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-[#81fa00]/4 blur-[120px] pointer-events-none" />

        {/* Vertical side label */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3">
          <div className="w-px h-16 bg-[#81fa00]/15" />
          <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#81fa00]/30 [writing-mode:vertical-rl] rotate-180">Custom Software</p>
          <div className="w-px h-16 bg-[#81fa00]/15" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Left text */}
            <div className="lg:col-span-7">

              {/* Breadcrumb */}
              <motion.div {...fadeUp(0)} className="flex items-center gap-2 mb-8">
                <Link href="/services" className="text-xs text-gray-600 hover:text-[#81fa00] transition-colors">Services</Link>
                <ChevronRight size={12} className="text-gray-700" />
                <span className="text-xs text-[#81fa00]">Custom Software Development</span>
              </motion.div>

              {/* Badge */}
              <motion.div {...fadeUp(0.06)} className="mb-8">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] border border-[#81fa00]/20 text-[#81fa00] bg-[#81fa00]/6">
                  <motion.span
                    className="w-1.5 h-1.5 rounded-full bg-[#81fa00]"
                    animate={{ opacity: [1, 0.2, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                  />
                  Software Engineering
                </span>
              </motion.div>

              {/* Headline */}
              <div className="overflow-hidden mb-1">
                <motion.h1
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
                  className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-[0.97] tracking-tight"
                >
                  Software Built
                </motion.h1>
              </div>
              <div className="overflow-hidden mb-1">
                <motion.h1
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
                  className="text-5xl sm:text-6xl md:text-7xl font-black text-[#81fa00] leading-[0.97] tracking-tight"
                >
                  Exactly for You.
                </motion.h1>
              </div>
              <div className="overflow-hidden mb-9">
                <motion.h1
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.26, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
                  className="text-5xl sm:text-6xl md:text-7xl font-black text-white/20 leading-[0.97] tracking-tight"
                >
                  No Templates.
                </motion.h1>
              </div>

              <motion.p {...fadeUp(0.36)} className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
                From MVPs to enterprise platforms — we engineer custom software that fits your
                business, scales with your growth, and ships on time.
              </motion.p>

              <motion.div {...fadeUp(0.43)} className="flex flex-wrap gap-4 mb-14">
                <Link href="/contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-[#81fa00] hover:bg-[#9bff20] text-black font-black rounded-full transition-all duration-200 text-sm shadow-2xl shadow-[#81fa00]/20">
                  Start Your Project <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>

              </motion.div>

              {/* Stats row */}
              <motion.div {...fadeUp(0.5)} className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#81fa00]/8 rounded-2xl overflow-hidden border border-[#81fa00]/10">
                {stats.map((s, i) => (
                  <div key={i} className="bg-[#0c2501] px-5 py-5 text-center">
                    <p className="text-2xl font-black text-[#81fa00] mb-0.5">{s.value}</p>
                    <p className="text-[11px] text-gray-600 uppercase tracking-wider font-medium">{s.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right — code card */}
            <motion.div {...fadeUp(0.28)} className="lg:col-span-5 hidden lg:block">
              <div className="relative rounded-3xl bg-[#0F2318] border border-[#81fa00]/10 overflow-hidden">
                <div className="flex items-center gap-2 px-5 py-3.5 bg-[#091a01] border-b border-[#81fa00]/8">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-[#81fa00]/60" />
                  <span className="ml-3 text-xs text-gray-600 font-mono">optiflow.config.ts</span>
                </div>
                <div className="p-6 font-mono text-xs leading-7">
                  <div><span className="text-[#81fa00]/60">const</span> <span className="text-[#81fa00]">project</span> <span className="text-white/30">= {'{'}</span></div>
                  <div className="pl-4"><span className="text-blue-400">client</span><span className="text-white/30">:</span> <span className="text-orange-300">&apos;Your Business&apos;</span><span className="text-white/30">,</span></div>
                  <div className="pl-4"><span className="text-blue-400">stack</span><span className="text-white/30">:</span> <span className="text-white/30">[</span><span className="text-orange-300">&apos;Next.js&apos;</span><span className="text-white/30">,</span> <span className="text-orange-300">&apos;Node&apos;</span><span className="text-white/30">,</span> <span className="text-orange-300">&apos;AWS&apos;</span><span className="text-white/30">],</span></div>
                  <div className="pl-4"><span className="text-blue-400">delivery</span><span className="text-white/30">:</span> <span className="text-orange-300">&apos;On time, always&apos;</span><span className="text-white/30">,</span></div>
                  <div className="pl-4"><span className="text-blue-400">quality</span><span className="text-white/30">:</span> <span className="text-[#81fa00]">100</span><span className="text-white/30">,</span></div>
                  <div className="pl-4"><span className="text-blue-400">ownership</span><span className="text-white/30">:</span> <span className="text-[#81fa00]">true</span><span className="text-white/30">,</span></div>
                  <div><span className="text-white/30">{'}'}</span></div>
                  <div className="mt-3 text-gray-700">{'// Ready to build?'}</div>
                  <div><span className="text-[#81fa00]/60">export default</span> <span className="text-white/30">project</span></div>
                </div>
                <div className="absolute bottom-5 right-5 bg-[#0c2501] rounded-xl px-4 py-2.5 border border-[#81fa00]/15 shadow-xl">
                  <p className="text-[#81fa00] font-black text-sm">✓ Ship in 6 weeks</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════
          SERVICES — #0F2318
      ══════════════════════════════════ */}
      <section className="py-28 bg-[#0F2318]">
        <div className="max-w-7xl mx-auto px-2 sm:px-8 lg:px-12">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-5">
              <motion.p {...fadeUp(0)} className="text-xs font-bold uppercase tracking-[0.25em] text-[#81fa00] mb-4">
                What We Build
              </motion.p>
              <motion.h2 {...fadeUp(0.07)} className="text-3xl md:text-4xl xl:text-5xl font-black text-white leading-tight">
                Every Line of Code
                <br />
                <span className="text-[#81fa00]">Built for Your Business.</span>
              </motion.h2>
            </div>

          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5">
            {services.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.div
                  key={i}
                  {...fadeUp(i * 0.06)}
                  whileHover={{ y: -4 }}
                  className="group relative bg-[#0c2501] rounded-2xl p-3 md:p-7 border border-[#81fa00]/8 hover:border-[#81fa00]/25 transition-all duration-300 overflow-hidden"
                >
                  {/* Hover top accent */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left"
                    style={{ backgroundColor: s.accent }}
                  />

                  {/* Corner glow */}
                  <div
                    className="absolute top-0 right-0 w-24 h-24 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ backgroundColor: `${s.accent}20` }}
                  />

                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: `${s.accent}12`, border: `1px solid ${s.accent}25` }}
                  >
                    <Icon size={22} style={{ color: s.accent }} />
                  </div>

                  <h3 className="text-white font-black text-md md:text-lg mb-3 leading-snug">{s.title}</h3>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{s.desc}</p>

       

                </motion.div>
              )
            })}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════
          TECH STACK — #0c2501
      ══════════════════════════════════ */}
      <section className="py-28 bg-[#0c2501]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">

          <div className="text-center mb-16">
            <motion.p {...fadeUp(0)} className="text-xs font-bold uppercase tracking-[0.25em] text-[#81fa00] mb-4">
              Technology Stack
            </motion.p>
            <motion.h2 {...fadeUp(0.07)} className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
              The Tools We Master.
              <br />
              <span className="text-[#81fa00]">The Stack That Ships.</span>
            </motion.h2>
            <motion.p {...fadeUp(0.14)} className="text-gray-500 text-base max-w-xl mx-auto mt-5 leading-relaxed">
              We choose the right technology for each job — not the trendiest one.
              Every stack decision is made with long-term maintainability in mind.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5">
            {techStacks.map((stack, i) => {
              const Icon = stack.icon
              return (
                <motion.div
                  key={i}
                  {...fadeUp(i * 0.07)}
                  className="group bg-[#0F2318] rounded-2xl p-3 md:p-6 border border-[#81fa00]/8 hover:border-[#81fa00]/25 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 md:gap-3 mb-5">
                    <div className="w-9 h-9 rounded-lg bg-[#81fa00]/8 border border-[#81fa00]/15 flex items-center justify-center">
                      <Icon size={17} className="text-[#81fa00]" />
                    </div>
                    <h3 className="text-white font-black text-xs md:text-sm uppercase tracking-wider">{stack.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {stack.techs.map((tech, j) => (
                      <span
                        key={j}
                        className="md:px-3 px-2 py-1 md:py-1.5 rounded-full text-xs font-semibold text-gray-500 bg-[#0c2501] border border-[#81fa00]/8 hover:border-[#81fa00]/30 hover:text-[#81fa00] transition-all duration-200 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            {...fadeUp(0.3)}
            className="mt-12 rounded-2xl border border-[#81fa00]/10 bg-[#0F2318] p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            <div>
              <p className="text-white font-black text-lg">Don't see your tech stack?</p>
              <p className="text-gray-500 text-sm mt-1">We adapt to your existing infrastructure and tooling.</p>
            </div>
            <Link href="/contact" className="group flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 bg-[#81fa00] hover:bg-[#9bff20] text-black font-black rounded-full transition-all duration-200 text-sm shadow-xl shadow-[#81fa00]/15">
              Discuss Your Stack <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>


 


      {/* ══════════════════════════════════
          FAQ — #0c2501
      ══════════════════════════════════ */}
      <section className="py-28 bg-[#0c2501]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* Left sticky */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <motion.p {...fadeUp(0)} className="text-xs font-bold uppercase tracking-[0.25em] text-[#81fa00] mb-4">
                  FAQ
                </motion.p>
                <motion.h2 {...fadeUp(0.07)} className="text-3xl md:text-4xl font-black text-white leading-tight mb-5">
                  Questions We
                  <br />
                  <span className="text-[#81fa00]">Hear Often.</span>
                </motion.h2>
                <motion.p {...fadeUp(0.13)} className="text-gray-500 text-sm leading-relaxed mb-8">
                  Still have questions? We're happy to walk you through anything
                  before you commit to a single line of code.
                </motion.p>
                <motion.div {...fadeUp(0.18)}>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 px-6 py-3 bg-[#81fa00] hover:bg-[#9bff20] text-black font-black rounded-full text-sm transition-all duration-200 shadow-xl shadow-[#81fa00]/15"
                  >
                    Ask Us Anything <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Right accordion */}
            <div className="lg:col-span-8">
              <div className="border-t border-[#81fa00]/8">
                {faqs.map((faq, i) => (
                  <FaqItem key={i} q={faq.q} a={faq.a} index={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>



    </div>
  )
}