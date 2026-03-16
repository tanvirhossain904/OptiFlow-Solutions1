'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

// ─── Types ───────────────────────────────────────────────
interface Testimonial {
  name: string
  role: string
  text: string
  image: string
}

// ─── Data ────────────────────────────────────────────────
const testimonials: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart',
    text: 'Absolutely transformed our workflow. The results exceeded every expectation we had going in.',
    image: '/client/model1.jpg', // ✅ direct strings — no off-by-one index bugs
  },
  {
    name: 'Marcus Lee',
    role: 'Founder, GrowthLab',
    text: 'Best investment we made this year. The team is responsive, creative, and incredibly skilled.',
    image: '/client/model2.jpg',
  },
  {
    name: 'Priya Nair',
    role: 'CMO, Brandify',
    text: 'Our conversions jumped 40% in the first month. I genuinely cannot recommend them enough.',
    image: '/client/model3.jpg',
  },
  {
    name: 'Daniel Cruz',
    role: 'Director, ScaleUp',
    text: "Professional, fast, and the quality of work is unlike anything we've seen from other agencies.",
    image: '/client/model4.jpg',
  },
]

// ─── Star Rating ─────────────────────────────────────────
function StarRating() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-3 h-3 fill-[#81fa00]" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

// ─── Single Card ─────────────────────────────────────────
function TestimonialCard({ t, i }: { t: Testimonial; i: number }) {
  const [imgError, setImgError] = useState(false)
  const showFallback = imgError || !t.image

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-[#0F2318] rounded-2xl overflow-hidden border border-[#81fA00]/10 hover:border-[#81fA00]/30 transition-all duration-300 flex flex-col h-72 md:h-80"
    >
      {/* ── TOP HALF: Image (fixed height so `fill` works) ── */}
      <div className="relative h-36 md:h-40 w-full shrink-0">
        {showFallback ? (
          // Fallback avatar when image is missing or broken
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a3a0a] to-[#0c2501] flex items-center justify-center">
            <span className="text-3xl font-black text-[#81fa00]/40">
              {t.name[0]}
            </span>
          </div>
        ) : (
          <Image
            src={t.image}
            alt={t.name}
            fill
            sizes="(max-width: 640px) 50vw, 25vw"
            className="object-cover object-top"
            onError={() => setImgError(true)}
          />
        )}
      </div>

      {/* ── BOTTOM HALF: Content ── */}
      <div className="flex flex-col justify-between flex-1 p-3 md:p-5">
        <div>
          <StarRating />
          <p className="mt-2 text-gray-400 text-xs md:text-sm leading-relaxed line-clamp-3">
            {t.text}
          </p>
        </div>
        <div className="mt-3">
          <p className="font-bold text-white text-xs md:text-sm">{t.name}</p>
          <p className="text-xs text-gray-500">{t.role}</p>
        </div>
      </div>
    </motion.div>
  )
}

// ─── Section ─────────────────────────────────────────────
export default function HomeTestimonialSection() {
  return (
    <section className="py-24 bg-[#0c2501]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">
          <span className="section-label">Client Stories</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight">
            <em className="italic font-serif">Hear</em> What They're
            <br />
            Saying <em className="italic font-serif text-[#81fa00]">About Us</em>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-5">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} i={i} />
          ))}
        </div>

      </div>
    </section>
  )
}