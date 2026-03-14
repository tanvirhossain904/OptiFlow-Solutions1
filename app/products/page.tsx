'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data/products'

const categories = ['All', 'FinTech', 'E-Commerce', 'Healthcare', 'EdTech', 'Logistics', 'Real Estate']

export default function ProjectsPage() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <div className="bg-[#f2f2f2] dark:bg-[#0c2501] pt-16">
      {/* Hero */}
      <section className="py-24 bg-[#0c2501] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'linear-gradient(rgba(74,222,128,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,0.08) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-label">Our Portfolio</span>
            <h1 className="text-5xl lg:text-6xl font-black text-white mb-6">
              Work That <span className="text-[#81fa00] ">Speaks</span>
              <br />
              for Itself
            </h1>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Explore our portfolio of impactful digital products across industries, each built to solve real problems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  active === cat
                    ? 'bg-[#81fa00]/70  text-black shadow-lg shadow-[#81fa00]/70 /25'
                    : 'bg-gray-100 dark:bg-[#0F2318] text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-[#81fA00]/10 hover:border-[#81fA00]/30 hover:text-[#81fa00]  '
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Results count */}
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 text-center">
            Showing <span className="text-[#81fa00]   font-semibold">{filtered.length}</span> projects
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
