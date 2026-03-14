'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight, Calendar, User } from 'lucide-react'
import type { Project } from '@/data/products'

interface ProjectCardProps {
  project: Project
  index?: number
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative bg-[#f2f2f2] dark:bg-[#0c2701] rounded-2xl border border-gray-200 dark:border-[#81fa00]/15 overflow-hidden hover:border-[#81fa00]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#81fa00]/10"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-gray-100 dark:bg-[#0c2701]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#81fa00]/90 text-black backdrop-blur-sm">
            {project.category}
          </span>
        </div>

        {/* Arrow link */}
        <Link
          href={`/projects/${project.id}`}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#f2f2f2]/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 hover:bg-[#81fa00] hover:border-[#81fa00] hover:text-black transition-all duration-200"
        >
          <ArrowUpRight size={14} />
        </Link>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-4 text-xs text-gray-400 dark:text-gray-500 mb-3">
          <span className="flex items-center gap-1">
            <Calendar size={11} /> {project.year}
          </span>
          <span className="flex items-center gap-1">
            <User size={11} /> {project.client}
          </span>
        </div>

        <h3 className="font-bold text-[#131313] dark:text-white text-sm md:text-base leading-snug mb-2 group-hover:text-[#81fa00]/80 dark:group-hover:text-[#81fa00] transition-colors">
          {project.title}
        </h3>

        <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#81fa00]/10 text-[#81fa00] dark:text-[#81fa00] border border-[#81fa00]/20"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-[#0c2701]/20 text-gray-500 dark:text-gray-400">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        <Link
          href={`/projects/${project.id}`}
          className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold text-[#81fa00] dark:text-[#81fa00] hover:text-[#81fa00]/80 transition-colors"
        >
          View Case Study <ArrowUpRight size={14} />
        </Link>
      </div>
    </motion.div>
  )
}