'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight, ArrowUpRight, Users, Cpu, GitMerge, BarChart3,
  Layers, TrendingUp, Zap, Globe, Shield, DollarSign, ChevronRight
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: {
    duration: 0.7,
    delay,
    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
  },
})

const features = [
  'Exclusive to your project, a dedicated tech team is assigned only to one project.',
  'A team will be designated under your project leader and the managing power will be yours.',
  'They bring long-term commitment, ensuring deep understanding of your business goals and faster execution.',
]

const steps = [
  {
    num: '01',
    title: 'Product & Challenge Assessment',
    desc: 'We begin by analyzing your product goals, system architecture, current bottlenecks, and competitive environment. This strategic assessment informs a clear execution roadmap and aligns our devs with your business objectives.',
    icon: BarChart3,
    image: '/team/mvp/book.jpg',
    tag: 'Discovery',
  },
  {
    num: '02',
    title: 'Precision Team Structuring',
    desc: 'Based on the assessment, we curate a team with the exact technical proficiencies and domain expertise required. From front-end engineers to cloud-native architects, every role is mapped to project milestones.',
    icon: Users,
    image: '/team/mvp/working2.jpg',
    tag: 'Structure',
  },
  {
    num: '03',
    title: 'Frictionless Onboarding and Integration',
    desc: 'Our onboarding is engineered for velocity. With pre-aligned environments, documentation sync, and kickoff protocols, the team integrates seamlessly into your existing workflows to begin contributing from day one.',
    icon: GitMerge,
    image: '/team/mvp/meeting.jpg',
    tag: 'Integration',
  },
  {
    num: '04',
    title: 'Streamlined Collaboration & Transparent Execution',
    desc: 'We establish clear communication loops, sprint cadences, and delivery checkpoints to ensure consistent progress. Real-time visibility into code, performance, and decisions keeps you fully in control.',
    icon: Cpu,
    image: '/team/mvp/working.jpg',
    tag: 'Execution',
  },
]

const options = [
  {
    num: '01',
    title: 'End-end System Engineering',
    desc: 'Ideal for complex, long-duration projects that require continuous delivery, full-stack expertise, and architectural consistency from inception to deployment.',
    icon: Layers,
  },
  {
    num: '02',
    title: 'Adaptive Roadmaps and Dynamic Scope',
    desc: 'When business priorities shift and feature sets evolve rapidly, a dedicated team provides the alignment, agility, and continuity to keep execution stable.',
    icon: TrendingUp,
  },
  {
    num: '03',
    title: 'Access to Niche Technical Expertise',
    desc: 'Leverage elite talent across emerging fields such as machine learning, blockchain, IoT, and cloud-native architecture without building in-house.',
    icon: Zap,
  },
  {
    num: '04',
    title: 'Scalable Global Resourcing',
    desc: 'Expand or contract your development capacity without compromising speed or quality using globally distributed engineering resources.',
    icon: Globe,
  },
  {
    num: '05',
    title: 'Embedded Collaboration Models',
    desc: 'Maintain full oversight and strategic direction while your dedicated team operates in sync with your workflows, toolchains, and engineering culture.',
    icon: Shield,
  },
  {
    num: '06',
    title: 'Outcome-Oriented Cost Optimization',
    desc: 'Achieve long-term ROI with predictable budgets, transparent velocity tracking, and performance-tied deliverables that scale with your goals.',
    icon: DollarSign,
  },
]

const stats = [
  { value: '48h',  label: 'Team Onboarding' },
  { value: '200+', label: 'Projects Delivered' },
  { value: '98%',  label: 'Client Retention' },
  { value: '40+',  label: 'Tech Stacks' },
]

export default function DedicatedTeam() {
  return (
    <div className="bg-[#0c2501] min-h-screen">

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-32">

        {/* Dot grid */}
        {/* <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(129,250,0,0.8) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        /> */}

        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#81fa00]/8 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-[#81fa00]/5 blur-[100px] pointer-events-none" />

        {/* Right vertical label */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3">
          <div className="w-px h-16 bg-[#81fa00]/15" />
          <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#81fa00]/30 [writing-mode:vertical-rl] rotate-180">
            OptiFlow Solutions
          </p>
          <div className="w-px h-16 bg-[#81fa00]/15" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left */}
            <div className="lg:col-span-7">

              {/* Breadcrumb */}
              <motion.div {...fadeUp(0)} className="flex items-center gap-2 mb-8">
                <Link href="/services" className="text-xs text-gray-600 hover:text-[#81fa00] transition-colors">Services</Link>
                <ChevronRight size={12} className="text-gray-700" />
                <span className="text-xs text-[#81fa00]">Dedicated Development Team</span>
              </motion.div>

              {/* Badge */}
              <motion.div {...fadeUp(0.06)} className="mb-8">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] border border-[#81fa00]/20 text-[#81fa00] bg-[#81fa00]/6">
                  <motion.span
                    className="w-1.5 h-1.5 rounded-full bg-[#81fa00]"
                    animate={{ opacity: [1, 0.2, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                  />
                  Software Development Pods
                </span>
              </motion.div>

              {/* Headline */}
              <div className="overflow-hidden mb-1">
                <motion.h1
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
                  className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-[0.98] tracking-tight"
                >
                  High-Performance
                </motion.h1>
              </div>
              <div className="overflow-hidden mb-1">
                <motion.h1
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
                  className="text-5xl sm:text-6xl md:text-7xl font-black text-[#81fa00] leading-[0.98] tracking-tight"
                >
                  Software Pods.
                </motion.h1>
              </div>
              <div className="overflow-hidden mb-8">
                <motion.h1
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.28, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
                  className="text-5xl sm:text-6xl md:text-7xl font-black text-white/35 leading-[0.98] tracking-tight"
                >
                  Seamlessly Integrated.
                </motion.h1>
              </div>

              <motion.p {...fadeUp(0.38)} className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
                Accelerate your product development with embedded software teams that deliver
                full-cycle projects efficiently, reliably, and on time.
              </motion.p>

              <motion.div {...fadeUp(0.45)} className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-[#81fa00] hover:bg-[#9bff20] text-black font-black rounded-full transition-all duration-200 text-sm shadow-2xl shadow-[#81fa00]/20"
                >
                  Build My Team
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-[#81fa00]/20 text-[#81fa00] hover:bg-[#81fa00]/8 font-semibold rounded-full transition-all duration-200 text-sm"
                >
                  Talk to an Expert
                </Link>
              </motion.div>
            </div>

            {/* Right — stats panel */}
            <motion.div {...fadeUp(0.3)} className="lg:col-span-5 hidden lg:block">
              <div className="relative rounded-3xl border border-[#81fa00]/10 bg-[#0F2318] p-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#81fa00]/5 rounded-full blur-[60px]" />
                <div className="relative z-10">
                  <div className="grid grid-cols-2 gap-4 mb-5">
                    {stats.map((s, i) => (
                      <motion.div
                        key={i}
                        {...fadeUp(0.35 + i * 0.07)}
                        className="bg-[#0c2501] rounded-2xl p-5 border border-[#81fa00]/8"
                      >
                        <p className="text-3xl font-black text-[#81fa00] mb-1">{s.value}</p>
                        <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">{s.label}</p>
                      </motion.div>
                    ))}
                  </div>
                  <div className="bg-[#0c2501] rounded-2xl p-5 border border-[#81fa00]/8">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#81fa00] flex items-center justify-center">
                          <Users size={14} className="text-black" />
                        </div>
                        <div>
                          <p className="text-white font-bold text-sm">Team Ready</p>
                          <p className="text-gray-500 text-xs">Matched to your stack</p>
                        </div>
                      </div>
                      <div className="flex -space-x-2">
                        {['#81fa00','#60a5fa','#f97316','#a78bfa'].map((c, i) => (
                          <div
                            key={i}
                            className="w-7 h-7 rounded-full border-2 border-[#0c2501] flex items-center justify-center text-[10px] font-black text-black"
                            style={{ backgroundColor: c }}
                          >
                            {['A','B','C','D'][i]}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="h-1.5 bg-white/8 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-[#81fa00] rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: '78%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.4, delay: 0.5, ease: 'easeOut' }}
                      />
                    </div>
                    <p className="text-[#81fa00] text-xs font-semibold mt-2">78% faster than traditional hiring</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>


      </section>


      {/* ══════════════════════════════════════════
          BRING THE MAGIC
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-[#065c0dde]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* Left — image */}
            <motion.div {...fadeUp(0)} className="relative">
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-[#81fa00] rounded-tl-xl z-10" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-[#0aaa5a]/30 rounded-br-xl z-10" />

              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/team/mvp/team.jpg"
                  alt="Dedicated Software Development Team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0c2501]/20 via-transparent to-transparent" />
              </div>

              {/* Floating stat */}
              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
                className="absolute -bottom-5 left-8 bg-[#0c2501] text-white rounded-2xl px-5 py-3 shadow-2xl border border-[#81fa00]/15"
              >
                <p className="text-[#81fa00] font-black text-xl leading-none">48h</p>
                <p className="text-gray-400 text-xs mt-1">Avg. Onboarding Time</p>
              </motion.div>
            </motion.div>

            {/* Right — text */}
            <div className="pt-8 lg:pt-0">
              <motion.p {...fadeUp(0)} className="text-xs font-bold uppercase tracking-[0.25em] text-[#0aaa5a] mb-4">
                Why Dedicated
              </motion.p>

              <motion.h2 {...fadeUp(0.08)} className="text-3xl md:text-4xl xl:text-5xl font-black text-gray-900 leading-tight mb-5">
                Bring the Magic With a{' '}
                <span className="text-[#0aaa5a]">
                  Dedicated Software Development Team
                </span>
              </motion.h2>

              <motion.p {...fadeUp(0.14)} className="text-gray-500 text-base leading-relaxed mb-8">
                A dedicated software development team is like a band of tech warriors fighting bugs,
                and building features for your project.
              </motion.p>

              <div className="rounded-2xl border border-[#c8f0d8] bg-[#1d963f] p-6 space-y-5">
                {features.map((f, i) => (
                  <motion.div
                    key={i}
                    {...fadeUp(0.18 + i * 0.07)}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#0aaa5a] border border-[#0aaa5a]/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#d5fae7]" />
                    </div>
                    <p className="text-gray-900 text-sm leading-relaxed">{f}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div {...fadeUp(0.38)} className="mt-7">
                <Link href="/contact" className="group inline-flex items-center gap-2 text-[#0aaa5a] font-bold text-sm hover:gap-3 transition-all duration-200">
                  Learn more about our process
                  <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          PROCESS — dark, full-bleed rows
      ══════════════════════════════════════════ */}
      <section className="bg-[#0c2501] pt-24 pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 text-center mb-20">
          <motion.p {...fadeUp(0)} className="text-xs font-bold uppercase tracking-[0.25em] text-[#81fa00] mb-4">
            Our Process
          </motion.p>
          <motion.h2 {...fadeUp(0.08)} className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
            Teaming up to Conquer{' '}
            <span className="text-[#81fa00]">New Levels</span>
            <br />
            Of Success
          </motion.h2>
        </div>

        {steps.map((step, i) => {
          const Icon   = step.icon
          const isEven = i % 2 === 0

          return (
            <motion.div
              key={i}
              {...fadeUp(i * 0.06)}
              className={`grid grid-cols-1 lg:grid-cols-2 min-h-[420px] border-t border-[#81fa00]/8 ${
                !isEven ? 'lg:[&>div:first-child]:order-2' : ''
              }`}
            >
              {/* Text side */}
              <div className="flex flex-col justify-center py-14 px-8 sm:px-12 lg:px-16 xl:px-20">
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-[#81fa00]/20 text-[#81fa00] bg-[#81fa00]/5">
                    <Icon size={10} />
                    {step.tag}
                  </span>
                  <span className="text-[#81fa00]/25 text-sm font-black font-mono">{step.num}</span>
                </div>

                <h3 className="text-white font-black text-2xl md:text-3xl xl:text-4xl mb-5 leading-tight">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-md">
                  {step.desc}
                </p>
              </div>

              {/* Image side */}
              <div className="relative min-h-[300px] lg:min-h-full overflow-hidden">
                <span
                  className="absolute bottom-6 right-8 font-black select-none pointer-events-none z-10 leading-none"
                  style={{ fontSize: 'clamp(80px, 10vw, 150px)', color: 'rgba(129,250,0,0.06)' }}
                >
                  {step.num}
                </span>
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: isEven
                      ? 'linear-gradient(to right, rgba(12,37,1,0.5) 0%, transparent 55%)'
                      : 'linear-gradient(to left, rgba(12,37,1,0.5) 0%, transparent 55%)',
                  }}
                />
                <div className="absolute inset-0 bg-[#0c2501]/10" />
              </div>
            </motion.div>
          )
        })}
      </section>


      {/* ══════════════════════════════════════════
          STRATEGIC OPTIONS — light
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-[#f4fbf6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">

          <div className="text-center mb-16">
            <motion.p {...fadeUp(0)} className="text-xs font-bold uppercase tracking-[0.25em] text-[#0aaa5a] mb-4">
              Your Strategic Options
            </motion.p>
            <motion.h2 {...fadeUp(0.08)} className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 leading-tight max-w-3xl mx-auto">
              When Focus, Speed, and Technical Depth
              <br className="hidden sm:block" />
              Are Non-Negotiable —{' '}
              <span className="text-[#0aaa5a]">Go Dedicated.</span>
            </motion.h2>
          </div>

          {/* Bordered grid — exact layout from screenshot 3 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm">
            {options.map((opt, i) => {
              const Icon   = opt.icon
              const borderB = i < 3
              const borderR = i % 3 !== 2

              return (
                <motion.div
                  key={i}
                  {...fadeUp(i * 0.06)}
                  className={`group relative p-8 transition-all duration-300 hover:bg-[#87e2ad]
                    ${borderB ? 'border-b border-gray-200' : ''}
                    ${borderR ? 'lg:border-r border-gray-200' : ''}
                  `}
                >
                  {/* Hover top accent */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#0aaa5a] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                  <div className="flex items-start justify-between mb-5">
                    <span className="text-[#0aaa5a] font-black text-sm font-mono">{opt.num}.</span>
                    <div className="w-8 h-8 rounded-lg bg-[#f4fbf6] border border-[#c8f0d8] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 flex-shrink-0">
                      <Icon size={14} className="text-[#0aaa5a]" />
                    </div>
                  </div>

                  <h3 className="text-gray-900 font-black text-lg mb-3 leading-snug">{opt.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{opt.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          CTA
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-[#0c2501]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <motion.div
            {...fadeUp(0)}
            className="relative rounded-3xl overflow-hidden border border-[#81fa00]/10"
            style={{ background: 'linear-gradient(135deg, #0F2318 0%, #091a01 100%)' }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-[#81fa00]/6 blur-[80px] pointer-events-none" />
            <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage: 'linear-gradient(rgba(129,250,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(129,250,0,1) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />

            <div className="relative z-10 text-center px-4 md:px-8 py-16 md:py-20">
              <motion.span {...fadeUp(0.05)} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.22em] border border-[#81fa00]/20 text-[#81fa00] bg-[#81fa00]/6 mb-8">
                <motion.span
                  className="w-1.5 h-1.5 rounded-full bg-[#81fa00]"
                  animate={{ opacity: [1, 0.2, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                />
                Ready to Scale
              </motion.span>

              <motion.h2 {...fadeUp(0.1)} className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-5 leading-tight">
                Build Your Dedicated
                <br />
                <span className="text-[#81fa00]">Engineering Team Today</span>
              </motion.h2>

              <motion.p {...fadeUp(0.16)} className="text-gray-500 text-xs md:text-base mb-10 max-w-lg mx-auto leading-relaxed">
                Tell us your project requirements and we'll match you with the perfect
                engineering team — ready to ship in 48 hours.
              </motion.p>

              <motion.div {...fadeUp(0.22)} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-9 py-4 bg-[#81fa00] hover:bg-[#9bff20] text-black font-black rounded-full transition-all duration-200 shadow-2xl shadow-[#81fa00]/20 text-sm md:text-base"
                >
                  Start Building Now
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-9 py-4 border border-white/10 text-gray-400 hover:text-white hover:border-white/25 font-semibold rounded-full transition-all duration-200 text-sm md:text-base"
                >
                  Schedule a Call
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}