'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

interface Slide {
  image: string
  badge: string
  title: string
  subtitle: string
  description: string
  cta: string
  accent: string
}

const slides: Slide[] = [
  {
    image: '/slider/slider1.jpg',
    badge: 'Custom Software',
    title: 'We Build Software',
    subtitle: 'That Scales.',
    description: 'From concept to deployment — we engineer scalable, secure, and high-performance software tailored to your exact business needs.',
    cta: 'Start Project',
    accent: '#81fa00',
  },
  {
    image: '/slider/slider2.jpg',
    badge: 'Web Development',
    title: 'Modern Web Apps',
    subtitle: 'Built to Perform.',
    description: 'Lightning-fast, SEO-optimized, and pixel-perfect web applications that convert visitors into customers and ideas into revenue.',
    cta: 'Start Project',
    accent: '#60a5fa',
  },
  {
    image: '/slider/slider3.jpg',
    badge: 'Mobile Development',
    title: 'Apps Your Users',
    subtitle: 'Will Love.',
    description: 'Cross-platform mobile experiences built with React Native and Flutter — smooth, fast, and ready for millions of users.',
    cta: 'Contact Us',
    accent: '#f97316',
  },
  {
    image: '/slider/slider4.jpg',
    badge: 'UI/UX Design',
    title: 'Design That',
    subtitle: 'Drives Results.',
    description: 'We craft interfaces that are not just beautiful — they are intuitive, conversion-focused, and built around your users.',
    cta: 'Start Project',
    accent: '#a78bfa',
  },
  {
    image: '/slider/slider5.jpg',
    badge: 'Cloud & DevOps',
    title: 'Infrastructure',
    subtitle: 'That Never Sleeps.',
    description: 'Auto-scaling cloud architecture, CI/CD pipelines, and zero-downtime deployments — engineered for reliability at any scale.',
    cta: 'Contact Us',
    accent: '#34d399',
  },
  {
    image: '/slider/slider6.jpg',
    badge: 'AI & Automation',
    title: 'Intelligent Systems',
    subtitle: 'For the Future.',
    description: 'We integrate AI, machine learning, and smart automation into your products to reduce costs and unlock new capabilities.',
    cta: 'Start Project',
    accent: '#fbbf24',
  },
  {
    image: '/slider/slider7.jpg',
    badge: 'Staff Augmentation',
    title: 'Elite Engineers',
    subtitle: 'On Demand.',
    description: 'Extend your team instantly with pre-vetted senior developers who integrate into your workflow and start shipping in 48 hours.',
    cta: 'Contact Us',
    accent: '#f472b6',
  },
  {
    image: '/slider/slider8.jpg',
    badge: 'MVP Development',
    title: 'Launch Your MVP',
    subtitle: 'In Weeks.',
    description: 'Turn your startup idea into a market-ready product fast. We move at founder speed — iterating, testing, and shipping without compromise.',
    cta: 'Start Project',
    accent: '#81fa00',
  },
]

const AUTOPLAY   = 4000
const TOTAL      = slides.length
const ARC_COUNT  = 5
const ARC_RADIUS = 190
const ARC_SPREAD = 100

export default function HomeSlider() {
  const [active,   setActive]   = useState(0)
  const [paused,   setPaused]   = useState(false)
  const [progress, setProgress] = useState(0)

  const goTo = useCallback((index: number) => {
    setActive((index + TOTAL) % TOTAL)
    setProgress(0)
  }, [])

  const next = useCallback(() => goTo(active + 1), [active, goTo])
  const prev = useCallback(() => goTo(active - 1), [active, goTo])

  useEffect(() => {
    if (paused) return
    const step = 100 / (AUTOPLAY / 50)
    const tick = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { next(); return 0 }
        return p + step
      })
    }, 50)
    return () => clearInterval(tick)
  }, [paused, next])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft')  prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [prev, next])

  const slide = slides[active]

  const arcItems = Array.from({ length: ARC_COUNT }, (_, i) => {
    const offset = i - Math.floor(ARC_COUNT / 2)
    const idx    = (active + offset + TOTAL) % TOTAL
    return { idx, offset }
  })

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden bg-[#060f02] select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >

      {/* ── Background ── */}
      <AnimatePresence mode="sync">
        <motion.div
          key={`bg-${active}`}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1,  scale: 1    }}
          exit={{    opacity: 0,  scale: 0.97 }}
          transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill priority
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* ── Overlays ── */}
      <div
        className="absolute inset-0 z-10"
        style={{ background: 'linear-gradient(to right, rgba(6,15,2,0.97) 0%, rgba(6,15,2,0.82) 40%, rgba(6,15,2,0.45) 70%, transparent 100%)' }}
      />
      <div
        className="absolute inset-0 z-10"
        style={{ background: 'linear-gradient(to top, rgba(6,15,2,0.92) 0%, rgba(6,15,2,0.20) 40%, transparent 70%)' }}
      />
      <div
        className="absolute inset-0 z-10"
        style={{ background: 'radial-gradient(ellipse at 0% 50%, rgba(6,15,2,0.80) 0%, transparent 55%)' }}
      />
      <AnimatePresence>
        <motion.div
          key={`tint-${active}`}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 z-10 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 15% 85%, ${slide.accent}18, transparent 55%)` }}
        />
      </AnimatePresence>

      {/* ── Desktop layout ── */}
      <div className="relative z-20 min-h-screen hidden lg:flex flex-row items-center">

        {/* LEFT text */}
        <div className="flex-1 flex flex-col justify-center px-14 xl:px-20 py-0 max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${active}`}
              initial={{ opacity: 0, x: -32 }}
              animate={{ opacity: 1,  x: 0   }}
              exit={{    opacity: 0,  x:  16  }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 }}
                className="inline-flex items-center gap-2 mt-10 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] border border-white/15 backdrop-blur-sm mb-7"
                style={{ background: `${slide.accent}18`, color: '#fff' }}
              >
                <motion.span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: slide.accent }}
                  animate={{ opacity: [1, 0.2, 1] }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                />
                {slide.badge}
              </motion.div>

              {/* Headline */}
              <div className="overflow-hidden mb-1">
                <motion.h1
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0,  opacity: 1 }}
                  transition={{ delay: 0.14, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                  className="text-5xl xl:text-6xl font-black text-white leading-[1.02] tracking-tight"
                >
                  {slide.title}
                </motion.h1>
              </div>
              <div className="overflow-hidden mb-6">
                <motion.h1
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0,  opacity: 1 }}
                  transition={{ delay: 0.22, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                  className="text-4xl xl:text-5xl font-black leading-[1.02] tracking-tight"
                  style={{ color: slide.accent }}
                >
                  {slide.subtitle}
                </motion.h1>
              </div>

              {/* Desc */}
              <motion.p
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.30 }}
                className="text-gray-400 text-sm xl:text-base leading-relaxed mb-8 max-w-md"
              >
                {slide.description}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.38 }}
                className="flex items-center gap-3 mb-10"
              >
                <button
                  className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-black text-sm transition-all duration-200 hover:scale-105 active:scale-100"
                  style={{
                    backgroundColor: slide.accent,
                    color: slide.accent === '#81fa00' || slide.accent === '#fbbf24' || slide.accent === '#34d399' ? '#000' : '#fff',
                    boxShadow: `0 0 32px ${slide.accent}45`,
                  }}
                >
                  {slide.cta}
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <button className="px-7 py-3.5 rounded-full font-semibold text-sm text-white/80 border border-white/15 backdrop-blur-sm hover:bg-white/8 hover:text-white hover:border-white/25 transition-all duration-200">
                  Learn More
                </button>
              </motion.div>

              {/* Progress + counter */}
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="flex items-center gap-4"
              >
                <div className="w-36 h-[2px] bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${progress}%`, backgroundColor: slide.accent, transition: 'width 50ms linear' }}
                  />
                </div>
                <span className="text-white/30 text-xs font-mono tracking-wider">
                  <span className="text-white font-bold text-sm">{String(active + 1).padStart(2, '0')}</span>
                  <span className="mx-1">/</span>
                  {String(TOTAL).padStart(2, '0')}
                </span>

                {/* Prev / next */}
                <div className="flex items-center gap-2 ml-4">
                  <button
                    onClick={prev}
                    className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 hover:bg-white/8 transition-all duration-200"
                  >
                    <ChevronLeft size={14} />
                  </button>
                  <button
                    onClick={next}
                    className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 hover:bg-white/8 transition-all duration-200"
                  >
                    <ChevronRight size={14} />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT — Arc pills */}
        <div className="relative flex-shrink-0 w-[360px] xl:w-[400px] flex items-center justify-center h-screen">
          {/* Arc origin — pills radiate LEFT from right edge */}
          <div className="absolute" style={{ right: '-50%', top: '50%', transform: 'translateY(-50%)' }}>
            {arcItems.map(({ idx, offset }) => {
              const isActive  = idx === active
              const absOffset = Math.abs(offset)
              const angleDeg  = (offset / (ARC_COUNT - 1)) * ARC_SPREAD
              const angleRad  = (angleDeg * Math.PI) / 180
              const x         = -ARC_RADIUS * Math.cos(angleRad)
              const y         =  ARC_RADIUS * Math.sin(angleRad)
              const pillW     = isActive ? 120 : Math.max(68, 96 - absOffset * 12)
              const pillH     = isActive ? 68  : Math.max(38, 54 - absOffset * 7)
              const opacity   = isActive ? 1   : Math.max(0.3, 1 - absOffset * 0.2)
              const s         = slides[idx]

              return (
                <motion.button
                  key={`arc-${idx}`}
                  onClick={() => goTo(idx)}
                  animate={{ x, y, opacity, scale: isActive ? 1 : 0.9 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute focus:outline-none group"
                  style={{
                    width:        pillW,
                    height:       pillH,
                    marginLeft:   -pillW / 2,
                    marginTop:    -pillH / 2,
                    borderRadius: 999,
                    overflow:     'hidden',
                    border:       isActive ? `2px solid ${s.accent}` : '1.5px solid rgba(255,255,255,0.12)',
                    boxShadow:    isActive ? `0 0 24px ${s.accent}55, 0 4px 20px rgba(0,0,0,0.5)` : '0 2px 10px rgba(0,0,0,0.35)',
                    zIndex:       isActive ? 20 : 20 - absOffset,
                  }}
                >
                  <Image src={s.image} alt={s.title} fill className="object-cover" sizes="120px" />
                  {!isActive && <div className="absolute inset-0 bg-black/55" />}
                  {isActive && (
                    <>
                      <motion.div
                        className="absolute inset-0"
                        animate={{ opacity: [0, 0.18, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                        style={{ background: `linear-gradient(120deg, ${s.accent}50, transparent)` }}
                      />
                      <div
                        className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[8px] font-black uppercase tracking-wider text-white px-2 py-0.5 rounded-full whitespace-nowrap"
                        style={{ backgroundColor: `${s.accent}cc` }}
                      >
                        {s.badge}
                      </div>
                    </>
                  )}
                </motion.button>
              )
            })}
          </div>
        </div>
      </div>

      {/* ── Mobile layout ── */}
      <div className="relative z-20 min-h-screen flex lg:hidden flex-col justify-between pt-20 pb-8 px-6">

        {/* Top: badge + headline */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`mob-text-${active}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1,  y: 0  }}
            exit={{    opacity: 0,  y: -12 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 flex flex-col justify-center mt-8"
          >
            {/* Badge */}
            <div
              className="inline-flex self-start items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/15 mb-5"
              style={{ background: `${slide.accent}20`, color: '#fff' }}
            >
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: slide.accent }} />
              {slide.badge}
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-white leading-[1.05] tracking-tight mb-1">
              {slide.title}
            </h1>
            <h1
              className="text-3xl sm:text-4xl font-black leading-[1.05] tracking-tight mb-4"
              style={{ color: slide.accent }}
            >
              {slide.subtitle}
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              {slide.description}
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-3">
              <button
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-black text-sm"
                style={{
                  backgroundColor: slide.accent,
                  color: ['#81fa00','#fbbf24','#34d399'].includes(slide.accent) ? '#000' : '#fff',
                  boxShadow: `0 0 24px ${slide.accent}40`,
                }}
              >
                {slide.cta} <ArrowRight size={13} />
              </button>
              <button className="px-5 py-3 rounded-full text-sm font-semibold text-white/70 border border-white/15 hover:bg-white/8 transition-all">
                Learn More
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom: horizontal pill strip + dots */}
        <div className="flex flex-col gap-4">

          {/* Horizontal pill strip */}
          <div className="flex items-center justify-center gap-2 overflow-hidden py-2">
            {arcItems.map(({ idx, offset }) => {
              const isActive  = idx === active
              const absOffset = Math.abs(offset)
              const pillW     = isActive ? 90  : Math.max(50, 72 - absOffset * 10)
              const pillH     = isActive ? 52  : Math.max(32, 42 - absOffset * 5)
              const opacity   = isActive ? 1   : Math.max(0.35, 1 - absOffset * 0.2)
              const s         = slides[idx]

              return (
                <motion.button
                  key={`mob-pill-${idx}`}
                  onClick={() => goTo(idx)}
                  animate={{ scale: isActive ? 1 : 0.9, opacity }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex-shrink-0 focus:outline-none"
                  style={{
                    width:        pillW,
                    height:       pillH,
                    borderRadius: 999,
                    overflow:     'hidden',
                    border:       isActive ? `2px solid ${s.accent}` : '1.5px solid rgba(255,255,255,0.12)',
                    boxShadow:    isActive ? `0 0 16px ${s.accent}50` : 'none',
                  }}
                >
                  <Image src={s.image} alt={s.title} fill className="object-cover" sizes="90px" />
                  {!isActive && <div className="absolute inset-0 bg-black/50" />}
                </motion.button>
              )
            })}
          </div>

          {/* Dot strip + nav */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              {slides.map((s, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width:           i === active ? 22 : 5,
                    height:          5,
                    backgroundColor: i === active ? s.accent : 'rgba(255,255,255,0.2)',
                  }}
                />
              ))}
            </div>

            {/* Progress + nav arrows */}
            <div className="flex items-center gap-2">
              <span className="text-white/30 text-xs font-mono">
                <span className="text-white font-bold">{String(active + 1).padStart(2, '0')}</span>
                /{String(TOTAL).padStart(2, '0')}
              </span>
              <button
                onClick={prev}
                className="w-7 h-7 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
              >
                <ChevronLeft size={13} />
              </button>
              <button
                onClick={next}
                className="w-7 h-7 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
              >
                <ChevronRight size={13} />
              </button>
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{ width: `${progress}%`, backgroundColor: slide.accent, transition: 'width 50ms linear' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}