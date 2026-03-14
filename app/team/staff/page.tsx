'use client'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Users, Zap, Shield, Clock, TrendingUp, Code2, Globe, Headphones } from 'lucide-react'
import Link from 'next/link'

import { Variants } from 'framer-motion'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
}

const stats = [
  { value: '500+', label: 'Engineers Deployed' },
  { value: '98%',  label: 'Client Retention' },
  { value: '48h',  label: 'Avg Onboarding' },
  { value: '40+',  label: 'Tech Stacks' },
]

const steps = [
  {
    step: '01',
    title: 'Share Your Requirements',
    desc: 'Tell us your project scope, tech stack, team size, and timeline. We listen carefully to understand your exact needs.',
    icon: Globe,
  },
  {
    step: '02',
    title: 'We Match Your Team',
    desc: 'Within 48 hours, we handpick engineers from our talent pool who match your stack, culture, and pace.',
    icon: Users,
  },
  {
    step: '03',
    title: 'Seamless Onboarding',
    desc: 'Your augmented engineers integrate into your workflow, tools, and standups — like they were always there.',
    icon: Zap,
  },
  {
    step: '04',
    title: 'Scale At Will',
    desc: 'Ramp up or down anytime. Add specialists, swap roles, or extend contracts with zero friction.',
    icon: TrendingUp,
  },
]

const benefits = [
  {
    icon: Clock,
    title: 'Hire in 48 Hours',
    desc: 'Skip months of recruiting. Our pre-vetted engineers are ready to ship from day one.',
    accentHex: '#81fa00',
  },
  {
    icon: Shield,
    title: 'Pre-Vetted Talent',
    desc: 'Every engineer passes rigorous technical, communication, and cultural screening.',
    accentHex: '#60a5fa',
  },
  {
    icon: Code2,
    title: 'Any Stack, Any Scale',
    desc: 'From frontend to DevOps, React to Rust — we cover 40+ tech stacks across all domains.',
    accentHex: '#f97316',
  },
  {
    icon: Users,
    title: 'Full Team Control',
    desc: 'Your augmented engineers work under your management, your processes, your tools.',
    accentHex: '#a78bfa',
  },
  {
    icon: TrendingUp,
    title: 'Flexible Scaling',
    desc: 'Scale your team up or down in days — no penalties, no long-term commitments required.',
    accentHex: '#34d399',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    desc: '24/7 account management ensures smooth collaboration and quick issue resolution.',
    accentHex: '#f472b6',
  },
]

const roles = [
  'Frontend Engineers',
  'Backend Engineers',
  'Full Stack Developers',
  'Mobile Developers',
  'DevOps Engineers',
  'QA Engineers',
  'UI/UX Designers',
  'AI/ML Engineers',
  'Blockchain Developers',
  'Cloud Architects',
  'Data Engineers',
  'Security Engineers',
]

const plans = [
  {
    name: 'Starter',
    price: '$1,200',
    period: '/month per engineer',
    desc: 'Perfect for startups needing one or two extra hands fast.',
    features: [
      '1–2 Engineers',
      '48h Onboarding',
      'Monthly billing',
      'Dedicated account manager',
      'Weekly progress reports',
    ],
    accentHex: '#60a5fa',
    popular: false,
  },
  {
    name: 'Growth',
    price: '$2,400',
    period: '/month per engineer',
    desc: 'Best for scaling teams that need consistent delivery.',
    features: [
      '3–8 Engineers',
      '24h Onboarding',
      'Bi-weekly billing',
      'Dedicated account manager',
      'Daily standups',
      'Code quality reviews',
    ],
    accentHex: '#81fa00',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'tailored to your needs',
    desc: 'For large teams requiring full flexibility and SLAs.',
    features: [
      'Unlimited Engineers',
      'Same-day Onboarding',
      'Custom billing terms',
      'Dedicated success team',
      'SLA guarantees',
      'Custom NDAs & contracts',
    ],
    accentHex: '#a78bfa',
    popular: false,
  },
]

const faqs = [
  {
    q: 'How quickly can engineers start?',
    a: 'Most engineers are onboarded within 24–48 hours of your approval. We keep a bench of pre-vetted talent ready to deploy.',
  },
  {
    q: 'Do I manage the engineers directly?',
    a: 'Yes. Your augmented engineers work under your direct management, attend your standups, and follow your internal processes.',
  },
  {
    q: 'Can I scale up or down mid-project?',
    a: 'Absolutely. You can add or remove engineers anytime with just 7 days notice — no penalties, no long-term lock-ins.',
  },
  {
    q: 'What if the engineer is not a good fit?',
    a: 'We offer a free replacement within the first 2 weeks if the match isn\'t right. Your satisfaction is guaranteed.',
  },
  {
    q: 'What tech stacks do you cover?',
    a: 'We cover 40+ stacks including React, Next.js, Node, Python, Go, Rust, AWS, GCP, Flutter, and many more.',
  },
  {
    q: 'Is there a minimum contract length?',
    a: 'Our minimum engagement is 1 month. After that, you can extend, scale, or end the contract with 7 days notice.',
  },
]



export default function StaffAugmentation() {
  return (
    <div className="bg-[#0c2501] min-h-screen">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0c2501] pt-20">

        {/* Grid bg */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(129,250,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(129,250,0,0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Glow blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#81fa00]/10 blur-[120px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center z-10">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest border border-[#81fa00]/30 text-[#81fa00] bg-[#81fa00]/10 mb-8">
              ✦ Staff Augmentation
            </span>
          </motion.div>

          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight"
            >
              Extend Your Team
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#81fa00] to-[#81fa00]/60">
                With Elite Engineers
              </span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Rapidly scale your engineering capacity with pre-vetted, senior-level developers
            who integrate seamlessly into your workflow — onboarded in 48 hours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#81fa00] hover:bg-[#81fa00]/80 text-black font-bold rounded-full transition-all duration-200 shadow-lg shadow-[#81fa00]/30 text-sm"
            >
              Get Engineers Now <ArrowRight size={16} />
            </Link>
            <Link
              href="#how-it-works"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/15 text-gray-300 hover:text-white hover:border-white/30 font-semibold rounded-full transition-all duration-200 text-sm"
            >
              See How It Works
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-20 max-w-3xl mx-auto"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── ROLES WE COVER ── */}
      <section className="py-20 bg-[#0F2318]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold uppercase tracking-[0.25em] text-[#81fa00] mb-3"
            >
              Roles We Cover
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl md:text-4xl font-black text-white"
            >
              Any Role. Any Stack.{' '}
              <em className="italic font-serif text-[#81fa00]">Any Scale.</em>
            </motion.h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {roles.map((role, i) => (
              <motion.span
                key={role}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                className="px-4 py-2 rounded-full text-sm font-semibold border border-[#81fa00]/20 text-gray-300 bg-[#81fa00]/5 hover:border-[#81fa00]/50 hover:text-[#81fa00] transition-all duration-200 cursor-default"
              >
                {role}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="py-24 bg-[#0c2501]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold uppercase tracking-[0.25em] text-[#81fa00] mb-3"
            >
              How It Works
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight"
            >
              From Request to{' '}
              <em className="italic font-serif text-[#81fa00]">Shipping</em>
              <br />
              in 4 Simple Steps
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="relative bg-[#0F2318] rounded-2xl p-6 border border-[#81fa00]/10 hover:border-[#81fa00]/30 transition-all duration-300 group"
                >
                  {/* Step number */}
                  <span className="absolute top-4 right-4 text-4xl font-black text-[#81fa00]/8 select-none">
                    {step.step}
                  </span>
                  <div className="w-11 h-11 rounded-xl bg-[#81fa00]/10 border border-[#81fa00]/20 flex items-center justify-center mb-5">
                    <Icon size={20} className="text-[#81fa00]" />
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>

                  {/* Connector line */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-[#81fa00]/20" />
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="py-24 bg-[#0F2318]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold uppercase tracking-[0.25em] text-[#81fa00] mb-3"
            >
              Why Choose Us
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight"
            >
              Everything You Need to
              <br />
              <em className="italic font-serif text-[#81fa00]">Scale With Confidence</em>
            </motion.h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5">
            {benefits.map((b, i) => {
              const Icon = b.icon
              return (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className="bg-[#0c2501] rounded-2xl p-2 md:p-6 border border-[#81fa00]/10 hover:border-[#81fa00]/25 transition-all duration-300 group"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      backgroundColor: `${b.accentHex}12`,
                      border: `1px solid ${b.accentHex}30`,
                    }}
                  >
                    <Icon size={20} style={{ color: b.accentHex }} />
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">{b.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-24 bg-[#0c2501]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold uppercase tracking-[0.25em] text-[#81fa00] mb-3"
            >
              Pricing Plans
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight"
            >
              Transparent Pricing,
              <br />
              <em className="italic font-serif text-[#81fa00]">No Surprises</em>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="relative rounded-2xl p-6 border transition-all duration-300"
                style={{
                  backgroundColor: plan.popular ? `${plan.accentHex}08` : '#0F2318',
                  borderColor: plan.popular ? `${plan.accentHex}50` : 'rgba(129,250,0,0.1)',
                  boxShadow: plan.popular ? `0 0 40px ${plan.accentHex}15` : 'none',
                }}
              >
                {plan.popular && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-black"
                    style={{ backgroundColor: plan.accentHex }}
                  >
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: plan.accentHex }}>
                    {plan.name}
                  </p>
                  <div className="flex items-end gap-1 mb-1">
                    <span className="text-3xl md:text-4xl font-black text-white">{plan.price}</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-3">{plan.period}</p>
                  <p className="text-sm text-gray-400 leading-relaxed">{plan.desc}</p>
                </div>

                <div
                  className="h-px w-full mb-6"
                  style={{ backgroundColor: `${plan.accentHex}15` }}
                />

                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-gray-300">
                      <CheckCircle size={14} style={{ color: plan.accentHex }} className="flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full font-bold text-sm transition-all duration-200"
                  style={
                    plan.popular
                      ? { backgroundColor: plan.accentHex, color: '#000' }
                      : { border: `1px solid ${plan.accentHex}40`, color: plan.accentHex }
                  }
                >
                  Get Started <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-[#0F2318]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold uppercase tracking-[0.25em] text-[#81fa00] mb-3"
            >
              FAQ
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-black text-white"
            >
              Common <em className="italic font-serif text-[#81fa00]">Questions</em>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex items-start gap-3 p-4 rounded-xl bg-[#0c2501] border border-[#81fa00]/10 hover:border-[#81fa00]/30 transition-all duration-300"
              >
                <CheckCircle size={15} className="text-[#81fa00] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-white mb-1.5">{faq.q}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{faq.a}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-[#0c2501]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl p-12 border border-[#81fa00]/20 overflow-hidden"
            style={{ backgroundColor: '#0F2318' }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-[#81fa00]/5 blur-[80px] pointer-events-none" />
            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#81fa00] mb-4">
                Get Started Today
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
                Ready to Scale Your
                <br />
                <span className="text-[#81fa00]">Engineering Team?</span>
              </h2>
              <p className="text-gray-400 text-sm md:text-base mb-8 max-w-lg mx-auto leading-relaxed">
                Tell us what you need and we'll have the right engineers ready for you within 48 hours.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#81fa00] hover:bg-[#81fa00]/80 text-black font-black rounded-full transition-all duration-200 shadow-xl shadow-[#81fa00]/20 text-sm md:text-base"
              >
                Start Hiring Now <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}