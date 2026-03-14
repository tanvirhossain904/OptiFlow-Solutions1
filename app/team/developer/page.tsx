'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const team = [
  {
    name: 'Alex Rivera',
    role: 'Full Stack Engineer',
    stack: ['React', 'Node.js', 'PostgreSQL'],
    img: '/team/developer/dev1.jpg',
    accentHex: '#81fa00',
  },
  {
    name: 'Sarah Chen',
    role: 'Frontend Architect',
    stack: ['Next.js', 'TypeScript', 'Tailwind'],
    img: '/team/developer/dev2.jpg',
    accentHex: '#60a5fa',
  },
  {
    name: 'Marcus Webb',
    role: 'Backend Engineer',
    stack: ['Python', 'Django', 'Redis'],
    img: '/team/developer/dev3.jpg',
    accentHex: '#f97316',
  },
  {
    name: 'Priya Sharma',
    role: 'DevOps Engineer',
    stack: ['AWS', 'Docker', 'Kubernetes'],
    img: '/team/developer/dev4.jpg',
    accentHex: '#a78bfa',
  },
  {
    name: 'James Okafor',
    role: 'Mobile Developer',
    stack: ['React Native', 'Flutter', 'Firebase'],
    img: '/team/developer/dev5.jpg',
    accentHex: '#34d399',
  },
  {
    name: 'Lena Müller',
    role: 'UI/UX Engineer',
    stack: ['Figma', 'Framer', 'React'],
    img: '/team/developer/dev6.jpg',
    accentHex: '#f472b6',
  },
  {
    name: 'David Park',
    role: 'AI/ML Engineer',
    stack: ['Python', 'TensorFlow', 'FastAPI'],
    img: '/team/developer/dev7.jpg',
    accentHex: '#fbbf24',
  },
  {
    name: 'Aisha Nwosu',
    role: 'Blockchain Developer',
    stack: ['Solidity', 'Web3.js', 'Rust'],
    img: '/team/developer/dev8.jpg',
    accentHex: '#38bdf8',
  },
  {
    name: 'Carlos Vega',
    role: 'Security Engineer',
    stack: ['Pentesting', 'Go', 'Linux'],
    img: '/team/developer/dev9.jpg',
    accentHex: '#fb7185',
  },
  {
    name: 'Nina Tanaka',
    role: 'Cloud Architect',
    stack: ['GCP', 'Terraform', 'CI/CD'],
    img: '/team/developer/dev10.jpg',
    accentHex: '#81fa00',
  },
]

type TeamMember = typeof team[0]

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl overflow-hidden bg-[#0F2318] border border-[#81fa00]/10 hover:border-[#81fa00]/30 transition-all duration-300"
    >
      {/* Top color bar */}
      <div
        className="h-1 w-full transition-all duration-300 group-hover:h-[3px]"
        style={{ backgroundColor: member.accentHex }}
      />

      <div className="px-4 pt-5 pb-5 flex flex-col items-center">

        {/* Avatar */}
        <div
          className="relative w-16 h-16 rounded-xl overflow-hidden mb-3 flex-shrink-0"
          style={{
            border: `2px solid ${member.accentHex}40`,
            boxShadow: `0 0 24px ${member.accentHex}20`,
          }}
        >
          <Image
            src={member.img}
            alt={member.name}
            fill
            className="object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none'
            }}
          />
          {/* Fallback initial */}
          <div
            className="absolute inset-0 flex items-center justify-center text-xl font-black"
            style={{ backgroundColor: `${member.accentHex}15`, color: member.accentHex }}
          >
            {member.name[0]}
          </div>
        </div>

        {/* Name */}
        <h3 className="text-white font-black text-sm text-center leading-tight mb-0.5">
          {member.name}
        </h3>

        {/* Role */}
        <p
          className="text-[10px] font-semibold text-center mb-4"
          style={{ color: member.accentHex }}
        >
          {member.role}
        </p>

        {/* Divider */}
        <div
          className="w-full h-px mb-3"
          style={{ backgroundColor: `${member.accentHex}15` }}
        />

        {/* Stack tags */}
        <div className="flex flex-wrap justify-center gap-1">
          {member.stack.map((s) => (
            <span
              key={s}
              className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full"
              style={{
                backgroundColor: `${member.accentHex}12`,
                color: member.accentHex,
                border: `1px solid ${member.accentHex}25`,
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(to right, transparent, ${member.accentHex}60, transparent)`,
        }}
      />

      {/* Corner glow */}
      <div
        className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ backgroundColor: `${member.accentHex}08`, filter: 'blur(20px)' }}
      />
    </motion.div>
  )
}

export default function DeveloperTeam() {
  return (
    <section className="py-20 md:py-28 bg-[#0c2501] relative overflow-hidden">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-[#81fa00]/5 blur-[140px] pointer-events-none" />

      <span className="absolute top-8  right-12 w-2   h-2   rounded-full bg-[#81fa00]/20" />
      <span className="absolute top-14 right-7  w-1.5 h-1.5 rounded-full bg-[#81fa00]/15" />
      <span className="absolute top-8  left-10  w-1.5 h-1.5 rounded-full bg-[#81fa00]/15" />
      <span className="absolute top-16 left-6   w-1   h-1   rounded-full bg-[#81fa00]/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#81fa00] mb-3"
          >
            The People Behind the Code
          </motion.p>

          <div className="overflow-hidden">
            <motion.h2
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight"
            >
              Meet Our{' '}
              <em className="italic font-serif text-[#81fa00]">Expert</em>{' '}
              Developer Team
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="text-gray-400 text-sm md:text-base max-w-xl mx-auto mt-4 leading-relaxed"
          >
            A diverse team of engineers, architects, and problem-solvers committed
            to building software that scales, performs, and lasts.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5">
          {team.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}