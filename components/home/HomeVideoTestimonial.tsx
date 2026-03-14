'use client'
import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Quote, Volume2, VolumeX, Pause } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'CTO, Fint Inc.',
    text: 'EasySoft transformed our vision into a world-class fintech product. Their technical expertise and commitment to quality is unmatched.',
    video: '/video/client2.mp4',
    accentHex: '#60a5fa',
  },
  {
    id: 2,
    name: 'Marcus Webb',
    role: 'Founder, ShopEase',
    text: 'The team delivered beyond our expectations. Our e-commerce platform handles 10x more traffic with zero downtime.',
    video: '/video/client3.mp4',
    accentHex: '#81fa00',
  },
  {
    id: 3,
    name: 'Priya Sharma',
    role: 'CEO, MediCorp',
    text: 'Working with EasySoft was seamless from day one. They understood our HIPAA requirements and executed flawlessly.',
    video: '/video/client4.mp4',
    accentHex: '#fb923c',
  },
]

function VideoCard({ t, index }: { t: typeof testimonials[0]; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [muted, setMuted] = useState(true)

const handleMouseEnter = () => {
  if (videoRef.current) {
    videoRef.current.muted = false  // ← unmute on hover
    setMuted(false)
    videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {})
  }
}

const handleMouseLeave = () => {
  if (videoRef.current) {
    videoRef.current.pause()
    videoRef.current.currentTime = 0
    videoRef.current.muted = true   // ← mute again on leave
    setIsPlaying(false)
    setMuted(true)
  }
}

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (videoRef.current) {
      videoRef.current.muted = !muted
      setMuted(!muted)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-xl overflow-hidden cursor-pointer"
      style={{ aspectRatio: '9/14' }}
    >
      {/* ── Video always visible, paused by default ── */}
      <video
        ref={videoRef}
        src={t.video}
        muted={muted}
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* ── Persistent dark overlay (lighter when playing) ── */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${isPlaying ? 'opacity-30' : 'opacity-60'}`}
        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%)' }}
      />

      {/* ── Gradient bottom always visible for text ── */}
      <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-black/95 via-black/60 to-transparent z-10 pointer-events-none" />

      {/* ── Play button overlay (idle) ── */}
      <AnimatePresence>
        {!isPlaying && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
          >
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center backdrop-blur-sm"
              style={{
                backgroundColor: `${t.accentHex}25`,
                border: `1.5px solid ${t.accentHex}70`,
              }}
            >
              <Play size={16} style={{ color: t.accentHex, fill: t.accentHex }} className="ml-0.5" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Top bar: sound bars + mute (playing only) ── */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="absolute top-3 left-3 right-3 z-30 flex items-center justify-between"
          >
            {/* Sound bars */}
            <div className="flex items-end gap-[3px] h-4">
              {[...Array(4)].map((_, i) => (
                <motion.span
                  key={i}
                  className="w-[3px] rounded-full"
                  style={{ backgroundColor: t.accentHex }}
                  animate={{ height: ['3px', '12px', '5px', '16px', '3px'] }}
                  transition={{ duration: 0.75, delay: i * 0.15, repeat: Infinity, ease: 'easeInOut' }}
                />
              ))}
            </div>
            {/* Mute */}
            <button
              onClick={toggleMute}
              className="w-6 h-6 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border border-white/10 hover:border-white/30 transition-all"
            >
              {muted
                ? <VolumeX size={11} className="text-white" />
                : <Volume2 size={11} className="text-white" />
              }
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Bottom content: always visible ── */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-3">
        {/* Quote + text (slide up when playing) */}
        <motion.div
          animate={{ y: isPlaying ? 0 : 6, opacity: isPlaying ? 1 : 0.7 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <Quote size={11} style={{ color: t.accentHex }} className="mb-1 opacity-60" />
          <p className="text-white/90 text-[11px] leading-relaxed mb-3 line-clamp-3">
            {t.text}
          </p>
        </motion.div>

        {/* Person info — always visible */}
        <div className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-[11px] font-black text-black"
            style={{ backgroundColor: t.accentHex }}
          >
            {t.name[0]}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white font-bold text-[11px] leading-tight">{t.name}</p>
            <p className="text-gray-400 text-[9px] truncate">{t.role}</p>
          </div>
          {/* Live dot when playing */}
          <AnimatePresence>
            {isPlaying && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className="flex items-center gap-1"
              >
                <motion.span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: t.accentHex }}
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                <span className="text-[9px] font-semibold" style={{ color: t.accentHex }}>LIVE</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ── Border glow ── */}
      <div
        className="absolute inset-0 rounded-xl pointer-events-none z-30 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{ boxShadow: `inset 0 0 0 1px ${t.accentHex}50` }}
      />
    </motion.div>
  )
}

export default function HomeVideoTestimonial() {
  return (
    <section className="py-16 md:py-20 bg-[#0c2501] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#81fa00]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label"
          >
            Client Stories
          </motion.span>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight"
            >
              <em className="italic font-serif">Hear</em> What They're Saying
              <br />
              <span className="text-[#81fa00]">About Us</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 text-xs mt-2"
          >
            Hover to play
          </motion.p>
        </div>

        {/* Reels grid */}
        <div className="grid grid-cols-3 gap-3 md:gap-5">
          {testimonials.map((t, i) => (
            <VideoCard key={t.id} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}