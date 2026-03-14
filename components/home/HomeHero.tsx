'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '98%',  label: 'Client Satisfaction' },
  { value: '50+',  label: 'Expert Team' },
  { value: '8+',   label: 'Years Experience' },
]

export default function HomeHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef  = useRef({ x: 0, y: 0 })
  const rafRef    = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width  = 0
    let height = 0
    let time   = 0

    const resize = () => {
      width  = canvas.width  = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', onMouseMove)

    // Wave params
    const WAVES = [
      { amp: 90,  freq: 0.0018, speed: 0.012, color: 'rgba(129,250,0,0.045)',  offset: 0   },
      { amp: 70,  freq: 0.0022, speed: 0.018, color: 'rgba(129,250,0,0.035)',  offset: 1.2 },
      { amp: 110, freq: 0.0014, speed: 0.009, color: 'rgba(129,250,0,0.025)',  offset: 2.4 },
      { amp: 55,  freq: 0.003,  speed: 0.022, color: 'rgba(129,250,0,0.055)',  offset: 0.6 },
      { amp: 130, freq: 0.001,  speed: 0.006, color: 'rgba(129,250,0,0.018)',  offset: 3.6 },
    ]

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      time += 1

      const mx = mouseRef.current.x
      const my = mouseRef.current.y

      // Mouse influence — normalised -1 to 1
      const mxN = (mx / width  - 0.5) * 2
      const myN = (my / height - 0.5) * 2

      WAVES.forEach((w) => {
        ctx.beginPath()

        for (let x = 0; x <= width; x += 2) {
          // Distance from mouse for local distortion
          const dx   = x - mx
          const distX = Math.exp(-dx * dx / (width * width * 0.15))

          const baseY  = height * 0.5
          const cursorPush = myN * 80 * distX
          const cursorWave = mxN * w.amp * 0.4 * Math.sin(x * 0.005 + time * 0.05)

          const y =
            baseY +
            Math.sin(x * w.freq + time * w.speed + w.offset) * w.amp +
            Math.sin(x * w.freq * 1.7 + time * w.speed * 0.6 + w.offset) * (w.amp * 0.4) +
            cursorPush +
            cursorWave

          if (x === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }

        ctx.lineTo(width, height)
        ctx.lineTo(0, height)
        ctx.closePath()

        ctx.fillStyle = w.color
        ctx.fill()
      })

      // Radial glow pulse from center — expands like wave
      const pulse = (Math.sin(time * 0.03) + 1) / 2
      const grad  = ctx.createRadialGradient(
        width / 2, height / 2, 0,
        width / 2, height / 2, width * (0.3 + pulse * 0.25)
      )
      grad.addColorStop(0,   `rgba(129,250,0,${0.04 + pulse * 0.04})`)
      grad.addColorStop(0.5, `rgba(129,250,0,${0.015 + pulse * 0.01})`)
      grad.addColorStop(1,   'rgba(129,250,0,0)')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, width, height)

      // Mouse glow
      const mg = ctx.createRadialGradient(mx, my, 0, mx, my, 260)
      mg.addColorStop(0,   'rgba(129,250,0,0.07)')
      mg.addColorStop(0.5, 'rgba(129,250,0,0.025)')
      mg.addColorStop(1,   'rgba(129,250,0,0)')
      ctx.fillStyle = mg
      ctx.fillRect(0, 0, width, height)

      rafRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0c2501]">

      {/* Animated canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(129,250,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(129,250,0,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(12,37,1,0.7) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] border border-[#81fa00]/30 text-[#81fa00] bg-[#81fa00]/8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#81fa00] animate-pulse" />
            Smart Software Solutions
          </span>
        </motion.div>

        {/* Headline */}
        <div className="overflow-hidden mb-3">
          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.02] tracking-tight"
          >
            We Build Software
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.02] tracking-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#81fa00] via-[#a8ff00] to-[#81fa00]/60">
              That Scales.
            </span>
          </motion.h1>
        </div>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.42 }}
          className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          We build scalable, secure, and innovative tech solutions designed to
          accelerate your business growth and simplify complex challenges.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-[#81fa00] hover:bg-[#81fa00]/85 text-black font-black rounded-full transition-all duration-200 shadow-xl shadow-[#81fa00]/25 text-sm md:text-base"
          >
            Start Your Project
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/15 text-gray-300 hover:text-white hover:border-white/30 hover:bg-white/5 font-semibold rounded-full transition-all duration-200 text-sm md:text-base backdrop-blur-sm"
          >
            View Our Work
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#81fa00]/10 rounded-2xl overflow-hidden border border-[#81fa00]/10 max-w-2xl mx-auto"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-[#0c2501]/80 backdrop-blur-sm px-6 py-5 text-center hover:bg-[#81fa00]/5 transition-colors duration-300"
            >
              <div className="text-2xl md:text-3xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-[10px] md:text-xs text-gray-500 font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-col items-center gap-2 mt-16"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-gray-600 font-semibold">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-10 bg-gradient-to-b from-[#81fa00]/40 to-transparent"
          />
        </motion.div>

      </div>
    </section>
  )
}