'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Heart, Award, Users, Code2, Globe } from 'lucide-react'

const team = [
  { name: 'Alex Rivera', role: 'CEO & Founder', color: 'bg-blue-400' },
  { name: 'Sarah Chen', role: 'CTO', color: 'bg-[#81fa00] ' },
  { name: 'Marcus Webb', role: 'Head of Design', color: 'bg-orange-400' },
  { name: 'Priya Sharma', role: 'Lead Engineer', color: 'bg-purple-400' },
  { name: 'Tom Bradley', role: 'DevOps Lead', color: 'bg-red-400' },
  { name: 'Nina Okonkwo', role: 'Product Manager', color: 'bg-cyan-400' },
]

const values = [
  { icon: Target, title: 'Mission-Driven', desc: 'Every line of code we write is purpose-driven, aligned with your business goals and user needs.' },
  { icon: Eye, title: 'Transparent', desc: 'We believe in open communication, clear timelines, and no hidden costs. What you see is what you get.' },
  { icon: Heart, title: 'People First', desc: 'We build long-term partnerships, not just client relationships. Your success is our success.' },
  { icon: Award, title: 'Excellence', desc: 'We hold ourselves to the highest standards in code quality, design, and delivery — always.' },
]

const milestones = [
  { year: '2016', event: 'EasySoft founded in San Francisco' },
  { year: '2018', event: 'Expanded to 20+ team members and launched first enterprise product' },
  { year: '2020', event: 'Opened offices in London and Singapore' },
  { year: '2022', event: 'Surpassed 100 projects delivered globally' },
  { year: '2024', event: '150+ projects, 8 industry awards, and growing' },
]

export default function AboutPage() {
  return (
    <div className="bg-[#f2f2f2] dark:bg-[#0c2501] pt-16">
      {/* Hero */}
      <section className="py-24 bg-[#0c2501] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'linear-gradient(rgba(74,222,128,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,0.08) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-label">About Us</span>
            <h1 className="text-3xl md:text-4xl lg:text-4xl font-black text-white mb-6 leading-tight">
              We Are <span className="text-[#81fa00] ">EasySoft</span>
            </h1>
            <p className="text-gray-400 text-md md:text-lg max-w-2xl mx-auto leading-relaxed">
              A team of passionate engineers, designers, and strategists building the future of software — one innovative solution at a time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="section-label">Our Story</span>
              <h2 className="md:text-4xl text-3xl font-black text-[#131313] dark:text-white mb-6">
                Built to Solve <em className="italic font-serif text-[#81fa00]  ">Real Problems</em>
              </h2>
              <div className="space-y-4 text-sm md:text-md text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>Founded in 2016, EasySoft began with a simple belief: great software should be accessible to businesses of all sizes. What started as a two-person consultancy has grown into a 50+ member team serving clients across 20 countries.</p>
                <p>We specialize in translating complex business requirements into elegant, scalable digital solutions. From fintech platforms handling millions in transactions to healthcare systems trusted by thousands of patients — we build software that matters.</p>
                <p>Our team combines deep technical expertise with strategic business thinking, ensuring every product we build not only works flawlessly but drives real, measurable results.</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Users, value: '50+', label: 'Team Members' },
                { icon: Globe, value: '20+', label: 'Countries Served' },
                { icon: Code2, value: '150+', label: 'Projects Built' },
                { icon: Award, value: '8+', label: 'Industry Awards' },
              ].map(({ icon: Icon, value, label }, i) => (
                <div key={i} className="bg-gray-50 dark:bg-[#0F2318] rounded-2xl p-6 border border-gray-200 dark:border-[#81fA00]/10 text-center">
                  <Icon size={24} className="text-[#81fa00]   mx-auto mb-3" />
                  <div className="text-2xl md:text-3xl  font-black text-[#131313] dark:text-white">{value}</div>
                  <div className="text-sm text-gray-500 mt-1">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50 dark:bg-[#0F2318]">
        <div className="max-w-7xl mx-auto px-2 md:px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#131313] dark:text-white">
              Principles That <em className="italic font-serif text-[#81fa00]  ">Guide Us</em>
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-[#f2f2f2] dark:bg-[#0c2501] rounded-2xl p-2 md:p-6 border border-gray-200 dark:border-[#81fA00]/10 hover:border-[#81fA00]/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#81fa00]/70 /10 border border-[#81fA00]/20 flex items-center justify-center mb-3 md:mb-5">
                  <v.icon size={22} className="text-[#81fa00]  " />
                </div>
                <h3 className="font-bold text-sm md:text-base text-[#131313] dark:text-white mb-1 md:mb-3">{v.title}</h3>
                <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-[#f2f2f2] dark:bg-[#0c2501]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label">Our Journey</span>
            <h2 className="text-4xl font-black text-[#131313] dark:text-white">
              Milestones That <em className="italic font-serif text-[#81fa00]  ">Shaped Us</em>
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-[#81fa00]/70 /20" />
            <div className="flex flex-col gap-10">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex items-start gap-6 sm:gap-0 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
                >
                  <div className={`sm:w-1/2 ${i % 2 === 0 ? 'sm:pr-10 sm:text-right' : 'sm:pl-10'} pl-10 sm:pl-0`}>
                    <div className="bg-gray-50 dark:bg-[#0F2318] rounded-xl p-4 border border-gray-200 dark:border-[#81fA00]/10">
                      <span className="text-[#81fa00]   font-black text-lg block mb-1">{m.year}</span>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{m.event}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 w-3 h-3 rounded-full bg-[#81fa00]/70  border-2 border-[#0c2501] mt-4" />
                  <div className="hidden sm:block sm:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-gray-50 dark:bg-[#0F2318]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <span className="section-label">The Team</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#131313] dark:text-white">
              Meet the <em className="italic font-serif text-[#81fa00]  ">Builders</em>
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <div className={`w-full aspect-square rounded-2xl ${member.color} mb-3 relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-black/20 border-2 border-white/30" />
                  </div>
                </div>
                <p className="font-bold text-[#131313] dark:text-white text-sm">{member.name}</p>
                <p className="text-xs text-gray-500">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
