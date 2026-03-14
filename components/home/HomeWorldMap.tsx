'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const floatingDots = [
  // Top area
  { size: 'w-2 h-2',   top: '4%',  left: '92%', duration: 4.0, delay: 0.0 },
  { size: 'w-1.5 h-1.5', top: '8%',  left: '88%', duration: 5.0, delay: 0.5 },
  { size: 'w-1 h-1',   top: '3%',  left: '85%', duration: 6.5, delay: 1.1 },
  { size: 'w-1 h-1',   top: '6%',  left: '8%',  duration: 6.0, delay: 1.0 },
  { size: 'w-1.5 h-1.5', top: '10%', left: '5%',  duration: 4.5, delay: 0.3 },
  { size: 'w-1 h-1',   top: '2%',  left: '12%', duration: 5.5, delay: 1.7 },
  { size: 'w-2 h-2',   top: '7%',  left: '50%', duration: 7.0, delay: 0.9 },
  { size: 'w-1 h-1',   top: '3%',  left: '45%', duration: 4.0, delay: 2.1 },
  { size: 'w-1.5 h-1.5', top: '9%',  left: '60%', duration: 5.5, delay: 0.4 },
  { size: 'w-1 h-1',   top: '5%',  left: '72%', duration: 6.0, delay: 1.3 },
  { size: 'w-1 h-1',   top: '11%', left: '30%', duration: 4.5, delay: 0.7 },
  { size: 'w-1.5 h-1.5', top: '14%', left: '20%', duration: 5.0, delay: 1.6 },
  // Right edge
  { size: 'w-1 h-1',   top: '20%', left: '98%', duration: 7.0, delay: 1.2 },
  { size: 'w-1.5 h-1.5', top: '30%', left: '96%', duration: 5.5, delay: 0.6 },
  { size: 'w-1 h-1',   top: '40%', left: '99%', duration: 4.5, delay: 1.9 },
  { size: 'w-2 h-2',   top: '50%', left: '97%', duration: 6.0, delay: 0.2 },
  { size: 'w-1 h-1',   top: '62%', left: '98%', duration: 5.0, delay: 1.4 },
  { size: 'w-1.5 h-1.5', top: '72%', left: '95%', duration: 7.0, delay: 0.8 },
  // Left edge
  { size: 'w-2 h-2',   top: '25%', left: '1%',  duration: 5.5, delay: 0.8 },
  { size: 'w-1 h-1',   top: '35%', left: '2%',  duration: 4.0, delay: 2.0 },
  { size: 'w-1.5 h-1.5', top: '45%', left: '0%',  duration: 6.5, delay: 0.4 },
  { size: 'w-1 h-1',   top: '58%', left: '3%',  duration: 5.0, delay: 1.1 },
  { size: 'w-2 h-2',   top: '68%', left: '1%',  duration: 4.5, delay: 0.6 },
  // Bottom area
  { size: 'w-1 h-1',   top: '82%', left: '96%', duration: 6.0, delay: 0.2 },
  { size: 'w-1.5 h-1.5', top: '88%', left: '10%', duration: 4.0, delay: 1.5 },
  { size: 'w-1 h-1',   top: '92%', left: '25%', duration: 5.5, delay: 0.9 },
  { size: 'w-2 h-2',   top: '85%', left: '50%', duration: 6.5, delay: 1.3 },
  { size: 'w-1 h-1',   top: '90%', left: '70%', duration: 4.5, delay: 0.5 },
  { size: 'w-1.5 h-1.5', top: '94%', left: '85%', duration: 7.0, delay: 1.8 },
  { size: 'w-1 h-1',   top: '80%', left: '38%', duration: 5.0, delay: 2.2 },
  // Middle scatter
  { size: 'w-1 h-1',   top: '35%', left: '93%', duration: 4.5, delay: 1.8 },
  { size: 'w-1.5 h-1.5', top: '42%', left: '4%',  duration: 7.0, delay: 0.6 },
  { size: 'w-1 h-1',   top: '55%', left: '15%', duration: 5.0, delay: 1.0 },
  { size: 'w-1 h-1',   top: '48%', left: '82%', duration: 6.0, delay: 0.3 },
]

const travelingDots = [
  // Horizontal left→right
  { duration: 12, delay: 0,  startX: '-2%',  endX: '102%', top: '22%',  left: undefined, startY: undefined, endY: undefined, size: 'w-1.5 h-1.5' },
  { duration: 16, delay: 4,  startX: '-2%',  endX: '102%', top: '48%',  left: undefined, startY: undefined, endY: undefined, size: 'w-1 h-1' },
  { duration: 14, delay: 8,  startX: '-2%',  endX: '102%', top: '68%',  left: undefined, startY: undefined, endY: undefined, size: 'w-2 h-2' },
  { duration: 20, delay: 2,  startX: '-2%',  endX: '102%', top: '85%',  left: undefined, startY: undefined, endY: undefined, size: 'w-1 h-1' },
  // Horizontal right→left
  { duration: 15, delay: 6,  startX: '102%', endX: '-2%',  top: '35%',  left: undefined, startY: undefined, endY: undefined, size: 'w-1 h-1' },
  { duration: 18, delay: 1,  startX: '102%', endX: '-2%',  top: '60%',  left: undefined, startY: undefined, endY: undefined, size: 'w-1.5 h-1.5' },
  { duration: 13, delay: 9,  startX: '102%', endX: '-2%',  top: '15%',  left: undefined, startY: undefined, endY: undefined, size: 'w-2 h-2' },
  { duration: 22, delay: 3,  startX: '102%', endX: '-2%',  top: '75%',  left: undefined, startY: undefined, endY: undefined, size: 'w-1 h-1' },
  // Vertical top→bottom
  { duration: 14, delay: 2,  startY: '-2%',  endY: '102%', left: '15%', top: undefined,  startX: undefined, endX: undefined, size: 'w-1 h-1' },
  { duration: 18, delay: 5,  startY: '-2%',  endY: '102%', left: '40%', top: undefined,  startX: undefined, endX: undefined, size: 'w-1.5 h-1.5' },
  { duration: 12, delay: 0,  startY: '-2%',  endY: '102%', left: '65%', top: undefined,  startX: undefined, endX: undefined, size: 'w-2 h-2' },
  { duration: 20, delay: 7,  startY: '-2%',  endY: '102%', left: '85%', top: undefined,  startX: undefined, endX: undefined, size: 'w-1 h-1' },
  // Vertical bottom→top
  { duration: 16, delay: 3,  startY: '102%', endY: '-2%',  left: '25%', top: undefined,  startX: undefined, endX: undefined, size: 'w-1 h-1' },
  { duration: 13, delay: 8,  startY: '102%', endY: '-2%',  left: '55%', top: undefined,  startX: undefined, endX: undefined, size: 'w-1.5 h-1.5' },
  { duration: 19, delay: 1,  startY: '102%', endY: '-2%',  left: '75%', top: undefined,  startX: undefined, endX: undefined, size: 'w-2 h-2' },
  { duration: 11, delay: 6,  startY: '102%', endY: '-2%',  left: '90%', top: undefined,  startX: undefined, endX: undefined, size: 'w-1 h-1' },
]

export default function HomeWorldMap() {
  return (
    <section className="relative py-14 md:py-20 overflow-hidden bg-[#0c2501]">

      {/* Floating pulsing dots */}
      {floatingDots.map((dot, i) => (
        <motion.span
          key={`float-${i}`}
          className={`absolute ${dot.size} rounded-full bg-[#81fa00]`}
          style={{ top: dot.top, left: dot.left }}
          animate={{ opacity: [0.1, 0.55, 0.1], scale: [1, 1.8, 1] }}
          transition={{ duration: dot.duration, delay: dot.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* Traveling dots */}
      {travelingDots.map((dot, i) => {
        const isHorizontal = dot.startX !== undefined
        return (
          <motion.span
            key={`travel-${i}`}
            className={`absolute ${dot.size} rounded-full bg-[#81fa00]/60`}
            style={isHorizontal ? { top: dot.top } : { left: dot.left }}
            animate={
              isHorizontal
                ? { left: [dot.startX!, dot.endX!], opacity: [0, 0.8, 0.8, 0] }
                : { top: [dot.startY!, dot.endY!], opacity: [0, 0.8, 0.8, 0] }
            }
            transition={{ duration: dot.duration, delay: dot.delay, repeat: Infinity, ease: 'linear' }}
          />
        )
      })}

      {/* Heading */}
      <div className="text-center mb-6 md:mb-8 px-1 md:px-4 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 mb-3"
        >
          Around the Globe
        </motion.p>

        {['Powering Innovation for', 'Businesses'].map((line, i) => (
          <div key={i} className="overflow-hidden">
            <motion.p
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.15 + i * 0.13, ease: [0.22, 1, 0.36, 1] }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight"
            >
              {line}
            </motion.p>
          </div>
        ))}

        <div className="overflow-hidden">
          <motion.p
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#81fa00] leading-tight"
          >
            Across the Globe.
          </motion.p>
        </div>
      </div>

      {/* Map */}
      <div className="relative max-w-5xl mx-auto px-1 md:px-4 mt-4 md:mt-6 z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full"
        >
          <Image
            src="/home/worldmap.png"
            alt="World Map"
            width={1100}
            height={600}
            className="w-full h-auto object-contain select-none"
            priority
          />
        </motion.div>
      </div>
    </section>
  )
}