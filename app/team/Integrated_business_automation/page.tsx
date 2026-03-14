'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight, ArrowUpRight, ChevronRight,
  RefreshCw, Bell, FileText, Users, BarChart2,
  Mail, ShoppingCart, Layers, Workflow,
  Plus, Minus, Zap, Clock, TrendingUp, Shield
} from 'lucide-react'
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
const automations = [
  {
    icon: Workflow,
    title: 'Workflow Automation',
    desc: 'Eliminate manual handoffs between teams. We automate approval chains, task routing, status updates, and cross-department workflows so nothing falls through the cracks.',
    accent: '#81fa00',
    tag: 'Core',
  },
  {
    icon: FileText,
    title: 'Document & Report Generation',
    desc: 'Auto-generate invoices, contracts, reports, and data exports triggered by business events — formatted, populated, and delivered without a single manual step.',
    accent: '#60a5fa',
    tag: 'Productivity',
  },
  {
    icon: Users,
    title: 'CRM & Lead Management',
    desc: 'Automatically capture, score, assign, and nurture leads across your pipeline. Sync data between your CRM, email, and sales tools in real time.',
    accent: '#a78bfa',
    tag: 'Sales',
  },
  {
    icon: Bell,
    title: 'Alerts & Notification Systems',
    desc: 'Build intelligent alert systems that notify the right person at the right time — via email, SMS, Slack, or push — based on custom business triggers and thresholds.',
    accent: '#fbbf24',
    tag: 'Operations',
  },
  {
    icon: ShoppingCart,
    title: 'Order & Inventory Automation',
    desc: 'Automate order processing, stock level monitoring, reorder triggers, fulfillment updates, and supplier notifications across your entire supply chain.',
    accent: '#f97316',
    tag: 'E-Commerce',
  },
  {
    icon: BarChart2,
    title: 'Data Sync & Reporting',
    desc: 'Connect disparate systems and databases. Automate data aggregation, scheduled reporting, KPI dashboards, and business intelligence pipelines across your stack.',
    accent: '#34d399',
    tag: 'Analytics',
  },
  {
    icon: Mail,
    title: 'Email & Communication Flows',
    desc: 'Design and deploy multi-step communication sequences triggered by user actions, deadlines, or system events — from onboarding emails to payment reminders.',
    accent: '#f472b6',
    tag: 'Marketing',
  },
  {
    icon: RefreshCw,
    title: 'System & API Integrations',
    desc: 'Connect your existing tools — ERP, HRMS, accounting, e-commerce, CRM — into a unified automation layer that talks to every platform without custom code.',
    accent: '#81fa00',
    tag: 'Integration',
  },
]

const steps = [
  {
    num: '01',
    title: 'Business Process Audit',
    desc: 'We start by mapping every manual, repetitive task across your business — identifying the exact bottlenecks, time drains, and error-prone processes that are holding your team back.',
    icon: Layers,
    tag: 'Discover',
    highlight: 'We document every workflow before writing a single line of automation.',
  },
  {
    num: '02',
    title: 'Automation Architecture Design',
    desc: 'Our engineers design a scalable automation blueprint — outlining triggers, conditions, actions, integrations, and fallback logic for each process before any build begins.',
    icon: FileText,
    tag: 'Design',
    highlight: 'Every automation is designed for reliability, not just speed.',
  },
  {
    num: '03',
    title: 'Build, Connect & Test',
    desc: 'We build each automation with your real data and existing toolset, connect all relevant systems via APIs or native integrations, and run exhaustive testing across edge cases.',
    icon: Zap,
    tag: 'Build',
    highlight: 'Tested against 100+ real-world edge cases before going live.',
  },
  {
    num: '04',
    title: 'Deploy, Monitor & Optimise',
    desc: 'Post-launch, we monitor every automation in production, track performance metrics, handle failures gracefully, and continuously refine logic as your business evolves.',
    icon: TrendingUp,
    tag: 'Launch',
    highlight: 'Ongoing monitoring with SLA-backed uptime guarantees.',
  },
]

const faqs = [
  {
    q: 'Do we need to replace our existing tools to use your automation?',
    a: 'Not at all. We work with your existing stack — whether that\'s Salesforce, HubSpot, Xero, Shopify, Google Workspace, or custom internal systems. Our automations connect on top of what you already have.',
  },
  {
    q: 'How long does it take to implement a business automation?',
    a: 'Simple single-workflow automations can go live in 1–2 weeks. Complex multi-system integrations typically take 4–8 weeks. We provide a detailed timeline after the initial discovery audit.',
  },
  {
    q: 'What happens when an automation fails or encounters an error?',
    a: 'Every automation we build includes error handling, retry logic, and alert systems. If a failure occurs, the responsible team member is notified immediately and the process is logged for review — nothing silently breaks.',
  },
  {
    q: 'Can you automate processes that involve human approvals?',
    a: 'Yes. We specialize in hybrid automation — where parts of a workflow are automated and others require a human decision. Approval gates, escalation paths, and conditional logic are all supported.',
  },
  {
    q: 'How secure are the automations you build?',
    a: 'Security is built into every automation. We use OAuth-based integrations, encrypted credential storage, role-based access controls, and full audit logging for every automated action.',
  },
  {
    q: 'What kind of ROI can we expect from business automation?',
    a: 'Most clients recover their investment within 3–6 months. Common results include 60–80% reduction in manual processing time, near-zero data entry errors, and significant cost savings in operational headcount.',
  },
]

const impacts = [
  { icon: Clock,      value: '80%',    label: 'Less Manual Work',       accent: '#81fa00' },
  { icon: TrendingUp, value: '3–6mo',  label: 'ROI Payback Period',     accent: '#60a5fa' },
  { icon: Shield,     value: '99.9%',  label: 'Automation Uptime',      accent: '#34d399' },
  { icon: Zap,        value: '48h',    label: 'First Workflow Live',     accent: '#fbbf24' },
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
export default function IntegratedBusinessAutomation() {
  return (
    <div className="bg-[#0c2501] min-h-screen">

      {/* ══════════════════════════════════
          HERO
      ══════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-24">

        {/* Dot grid bg */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(129,250,0,0.8) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Glow blobs */}
        <div className="absolute top-1/3 left-1/4 w-[700px] h-[500px] rounded-full bg-[#81fa00]/6 blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#81fa00]/4 blur-[120px] pointer-events-none" />

        {/* Vertical label */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3">
          <div className="w-px h-16 bg-[#81fa00]/15" />
          <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#81fa00]/30 [writing-mode:vertical-rl] rotate-180">Business Automation</p>
          <div className="w-px h-16 bg-[#81fa00]/15" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Left */}
            <div className="lg:col-span-7">

              <motion.div {...fadeUp(0)} className="flex items-center gap-2 mb-8">
                <Link href="/services" className="text-xs text-gray-600 hover:text-[#81fa00] transition-colors">Services</Link>
                <ChevronRight size={12} className="text-gray-700" />
                <span className="text-xs text-[#81fa00]">Integrated Business Automation</span>
              </motion.div>

              <motion.div {...fadeUp(0.06)} className="mb-8">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] border border-[#81fa00]/20 text-[#81fa00] bg-[#81fa00]/6">
                  <motion.span
                    className="w-1.5 h-1.5 rounded-full bg-[#81fa00]"
                    animate={{ opacity: [1, 0.2, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                  />
                  Business Automation
                </span>
              </motion.div>

              <div className="overflow-hidden mb-1">
                <motion.h1
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
                  className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-[0.97] tracking-tight"
                >
                  Automate the Work.
                </motion.h1>
              </div>
              <div className="overflow-hidden mb-1">
                <motion.h1
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
                  className="text-5xl sm:text-6xl md:text-7xl font-black text-[#81fa00] leading-[0.97] tracking-tight"
                >
                  Focus on Growth.
                </motion.h1>
              </div>
              <div className="overflow-hidden mb-9">
                <motion.h1
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.26, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
                  className="text-5xl sm:text-6xl md:text-7xl font-black text-white/20 leading-[0.97] tracking-tight"
                >
                  Zero Overhead.
                </motion.h1>
              </div>

              <motion.p {...fadeUp(0.36)} className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
                We identify, design, and deploy intelligent automation across your entire business —
                connecting your tools, eliminating manual work, and freeing your team to do what matters.
              </motion.p>

              <motion.div {...fadeUp(0.43)} className="flex flex-wrap gap-4 mb-14">
                <Link href="/contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-[#81fa00] hover:bg-[#9bff20] text-black font-black rounded-full transition-all duration-200 text-sm shadow-2xl shadow-[#81fa00]/20">
                  Automate My Business <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 border border-[#81fa00]/20 text-[#81fa00] hover:bg-[#81fa00]/8 font-semibold rounded-full transition-all duration-200 text-sm">
                  Get Free Audit
                </Link>
              </motion.div>

              {/* Impact stats */}
              <motion.div {...fadeUp(0.5)} className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#81fa00]/8 rounded-2xl overflow-hidden border border-[#81fa00]/10">
                {impacts.map((s, i) => {
                  const Icon = s.icon
                  return (
                    <div key={i} className="bg-[#0c2501] px-4 py-5 text-center group hover:bg-[#0F2318] transition-colors duration-200">
                      <Icon size={14} className="mx-auto mb-2 text-gray-600 group-hover:text-[#81fa00] transition-colors" />
                      <p className="text-xl font-black mb-0.5" style={{ color: s.accent }}>{s.value}</p>
                      <p className="text-[10px] text-gray-600 uppercase tracking-wider font-medium leading-tight">{s.label}</p>
                    </div>
                  )
                })}
              </motion.div>
            </div>

            {/* Right — animated flow visual */}
            <motion.div {...fadeUp(0.28)} className="lg:col-span-5 hidden lg:flex flex-col gap-3">

              {/* Automation flow card */}
              <div className="rounded-2xl bg-[#0F2318] border border-[#81fa00]/10 p-5">
                <p className="text-[10px] font-black uppercase tracking-widest text-[#81fa00]/50 mb-4">Live Automation Flow</p>

                {/* Flow steps */}
                {[
                  { label: 'New lead captured in CRM',       status: 'done',    color: '#81fa00' },
                  { label: 'Lead scored & assigned to rep',  status: 'done',    color: '#81fa00' },
                  { label: 'Welcome email sequence triggered', status: 'active', color: '#fbbf24' },
                  { label: 'Follow-up task created in Jira', status: 'pending', color: '#60a5fa' },
                  { label: 'Manager notified via Slack',     status: 'pending', color: '#60a5fa' },
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-3 mb-3 last:mb-0">
                    <div className="relative flex-shrink-0">
                      <div
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: step.status === 'pending' ? 'rgba(129,250,0,0.15)' : step.color }}
                      />
                      {step.status === 'active' && (
                        <motion.div
                          className="absolute inset-0 rounded-full"
                          style={{ backgroundColor: step.color }}
                          animate={{ scale: [1, 2.2, 1], opacity: [0.6, 0, 0.6] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                      )}
                    </div>
                    {i < 4 && (
                      <div className="absolute ml-[4px] mt-[14px] w-px h-3 bg-[#81fa00]/10" />
                    )}
                    <p className={`text-xs font-medium ${step.status === 'pending' ? 'text-gray-700' : 'text-gray-300'}`}>
                      {step.label}
                    </p>
                    {step.status === 'done' && (
                      <span className="ml-auto text-[10px] text-[#81fa00]/60 font-bold">✓</span>
                    )}
                    {step.status === 'active' && (
                      <span className="ml-auto text-[10px] text-[#fbbf24] font-bold animate-pulse">Running…</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Connector line with arrows */}
              <div className="flex items-center gap-2 px-4">
                <div className="flex-1 h-px bg-[#81fa00]/10" />
                <div className="w-6 h-6 rounded-full bg-[#81fa00]/8 border border-[#81fa00]/15 flex items-center justify-center">
                  <ArrowRight size={11} className="text-[#81fa00]/50" />
                </div>
                <div className="flex-1 h-px bg-[#81fa00]/10" />
              </div>

              {/* Result card */}
              <div className="rounded-2xl bg-[#0F2318] border border-[#81fa00]/15 p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#81fa00]/10 border border-[#81fa00]/20 flex items-center justify-center">
                    <Zap size={14} className="text-[#81fa00]" />
                  </div>
                  <div>
                    <p className="text-white font-black text-sm">Automation Complete</p>
                    <p className="text-gray-600 text-xs">5 steps · 0 manual actions</p>
                  </div>
                  <div className="ml-auto">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-black bg-[#81fa00]/10 text-[#81fa00] border border-[#81fa00]/20">LIVE</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Time saved', value: '4.5h/day' },
                    { label: 'Error rate', value: '0.0%' },
                    { label: 'Tasks done', value: '1,240' },
                  ].map((m, i) => (
                    <div key={i} className="bg-[#0c2501] rounded-xl p-3 text-center border border-[#81fa00]/8">
                      <p className="text-[#81fa00] font-black text-base">{m.value}</p>
                      <p className="text-gray-600 text-[10px] mt-0.5">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════
          WHAT WE AUTOMATE — #0F2318
      ══════════════════════════════════ */}
      <section className="py-28 bg-[#0F2318]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-5">
              <motion.p {...fadeUp(0)} className="text-xs font-bold uppercase tracking-[0.25em] text-[#81fa00] mb-4">
                What We Automate
              </motion.p>
              <motion.h2 {...fadeUp(0.07)} className="text-3xl md:text-4xl xl:text-5xl font-black text-white leading-tight">
                Every Repetitive Task
                <br />
                <span className="text-[#81fa00]">Is a Candidate.</span>
              </motion.h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex items-end">
              <motion.p {...fadeUp(0.12)} className="text-gray-500 text-base leading-relaxed">
                If your team does it manually, repeatedly, and by following a set of rules —
                we can automate it. Here are the most common areas we transform.
              </motion.p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {automations.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.div
                  key={i}
                  {...fadeUp(i * 0.05)}
                  whileHover={{ y: -4 }}
                  className="group relative bg-[#0c2501] rounded-2xl p-6 border border-[#81fa00]/8 hover:border-[#81fa00]/25 transition-all duration-300 overflow-hidden"
                >
                  {/* Hover top line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left"
                    style={{ backgroundColor: s.accent }}
                  />

                  {/* Corner glow */}
                  <div
                    className="absolute top-0 right-0 w-20 h-20 rounded-full blur-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ backgroundColor: `${s.accent}18` }}
                  />

                  {/* Tag */}
                  <span
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest mb-4"
                    style={{ backgroundColor: `${s.accent}15`, color: s.accent, border: `1px solid ${s.accent}25` }}
                  >
                    {s.tag}
                  </span>

                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${s.accent}10`, border: `1px solid ${s.accent}20` }}
                  >
                    <Icon size={18} style={{ color: s.accent }} />
                  </div>

                  <h3 className="text-white font-black text-base mb-2 leading-snug">{s.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{s.desc}</p>

    
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════
          HOW IT WORKS — #0c2501
      ══════════════════════════════════ */}
      <section className="py-28 bg-[#0c2501]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">

          <div className="text-center mb-20">
            <motion.p {...fadeUp(0)} className="text-xs font-bold uppercase tracking-[0.25em] text-[#81fa00] mb-4">
              How It Works
            </motion.p>
            <motion.h2 {...fadeUp(0.07)} className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
              From Manual Chaos
              <br />
              <span className="text-[#81fa00]">To Intelligent Automation.</span>
            </motion.h2>
            <motion.p {...fadeUp(0.14)} className="text-gray-500 text-base max-w-xl mx-auto mt-5 leading-relaxed">
              A proven four-step process that takes you from identifying bottlenecks
              to fully automated, monitored workflows — without disrupting your operations.
            </motion.p>
          </div>

          {/* Steps — 2-col alternating */}
          <div className="space-y-6">
            {steps.map((step, i) => {
              const Icon   = step.icon
              const isEven = i % 2 === 0

              return (
                <motion.div
                  key={i}
                  {...fadeUp(i * 0.08)}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-[#81fa00]/8 hover:border-[#81fa00]/20 transition-all duration-300`}
                >
                  {/* Text side */}
                  <div className={`bg-[#0F2318] flex flex-col justify-center p-10 lg:p-12 ${!isEven ? 'lg:order-2' : ''}`}>

                    <div className="flex items-center gap-3 mb-6">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-[#81fa00]/20 text-[#81fa00] bg-[#81fa00]/6">
                        <Icon size={10} />
                        {step.tag}
                      </span>
                      <span className="text-[#81fa00]/20 text-sm font-black font-mono">{step.num}</span>
                    </div>

                    <h3 className="text-white font-black text-2xl md:text-3xl mb-4 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                      {step.desc}
                    </p>

                    {/* Highlight callout */}
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-[#0c2501] border border-[#81fa00]/10">
                      <div className="w-1 h-full min-h-[16px] rounded-full bg-[#81fa00] flex-shrink-0 mt-0.5" />
                      <p className="text-[#81fa00]/80 text-xs font-semibold leading-relaxed italic">
                        {step.highlight}
                      </p>
                    </div>
                  </div>

                  {/* Visual side */}
                  <div className={`bg-[#0c2501] flex items-center justify-center p-10 lg:p-12 min-h-[260px] relative overflow-hidden ${!isEven ? 'lg:order-1' : ''}`}>

                    {/* Big background number */}
                    <span
                      className="absolute font-black select-none pointer-events-none leading-none"
                      style={{ fontSize: 'clamp(100px, 16vw, 200px)', color: 'rgba(129,250,0,0.04)' }}
                    >
                      {step.num}
                    </span>

                    {/* Center icon ring */}
                    <div className="relative z-10 flex flex-col items-center gap-4">
                      <motion.div
                        whileInView={{ scale: [0.8, 1] }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
                        className="relative"
                      >
                        {/* Outer ring */}
                        <div className="w-28 h-28 rounded-full border border-[#81fa00]/10 flex items-center justify-center">
                          {/* Inner ring */}
                          <div className="w-20 h-20 rounded-full border border-[#81fa00]/15 flex items-center justify-center">
                            {/* Core */}
                            <div className="w-14 h-14 rounded-full bg-[#81fa00]/8 border border-[#81fa00]/20 flex items-center justify-center">
                              <Icon size={24} className="text-[#81fa00]" />
                            </div>
                          </div>
                        </div>

                        {/* Orbiting dot */}
                        <motion.div
                          className="absolute top-1 right-1 w-3 h-3 rounded-full bg-[#81fa00]"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                          style={{ transformOrigin: '-42px 42px' }}
                        />
                      </motion.div>

                      <p className="text-[#81fa00]/40 text-xs font-bold uppercase tracking-widest text-center">
                        Step {step.num}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════
          FAQ — #0F2318
      ══════════════════════════════════ */}
      <section className="py-28 bg-[#0F2318]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* Left sticky */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <motion.p {...fadeUp(0)} className="text-xs font-bold uppercase tracking-[0.25em] text-[#81fa00] mb-4">
                  FAQ
                </motion.p>
                <motion.h2 {...fadeUp(0.07)} className="text-3xl md:text-4xl font-black text-white leading-tight mb-5">
                  Common Questions
                  <br />
                  <span className="text-[#81fa00]">Answered.</span>
                </motion.h2>
                <motion.p {...fadeUp(0.13)} className="text-gray-500 text-sm leading-relaxed mb-8">
                  Automation can feel complex. We make it simple.
                  Here's what most businesses ask us before getting started.
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