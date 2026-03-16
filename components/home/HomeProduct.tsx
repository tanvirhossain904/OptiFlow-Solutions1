'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard, BookOpen, ShoppingCart, Receipt,
  Package, Utensils, Users, Building2, BarChart2,
  GraduationCap, ArrowRight, X, Check,
} from 'lucide-react'

// ─── Types ───────────────────────────────────────────────────────────────────
interface Product {
  name: string
  path: string
  soon: boolean
  cat: string
  desc: string
  long: string
  tags: string[]
  results: string[]
  icon: React.ElementType
  // accent is now one of three tints from the same green family
  accent: '#81fa00' | '#4ade80' | '#a3e635'
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const PRODUCTS: Product[] = [
  {
    name: 'EasyManager',   path: '/easy',           soon: true,
    cat: 'Management',
    desc: 'All-in-one business manager for teams and operations.',
    long: 'EasyManager is your central hub for managing business operations, team workflows, and project tracking in one unified platform.',
    tags: ['Operations', 'Teams', 'Projects'],
    results: ['Centralised dashboard', 'Role-based access', 'Multi-branch support'],
    icon: LayoutDashboard,  accent: '#81fa00',
  },
  {
    name: 'EasyLedger',    path: '/easylead',        soon: false,
    cat: 'Finance',
    desc: 'Modern ledger and bookkeeping for growing businesses.',
    long: 'EasyLedger simplifies accounting with double-entry bookkeeping, automated reconciliation, and financial reporting built for SMEs.',
    tags: ['Accounting', 'Reports', 'Reconciliation'],
    results: ['Automated reconciliation', 'Real-time P&L', 'Multi-currency'],
    icon: BookOpen,          accent: '#4ade80',
  },
  {
    name: 'EasyPOS',       path: '/easypos',         soon: false,
    cat: 'Retail',
    desc: 'Fast, reliable point-of-sale for retail and service businesses.',
    long: 'EasyPOS delivers a smooth checkout experience with inventory sync, receipt printing, and end-of-day reporting — online and offline.',
    tags: ['POS', 'Inventory', 'Receipts'],
    results: ['Offline mode', 'Barcode scanning', 'Daily reports'],
    icon: ShoppingCart,      accent: '#a3e635',
  },
  {
    name: 'EasyAccounts',  path: '/easyaccounts',    soon: true,
    cat: 'Finance',
    desc: 'Full accounts payable and receivable management.',
    long: 'EasyAccounts tracks invoices, payments, and vendor accounts with automated reminders and aging reports.',
    tags: ['Invoicing', 'Payments', 'Vendors'],
    results: ['Automated reminders', 'Aging reports', 'Tax-ready exports'],
    icon: Receipt,           accent: '#81fa00',
  },
  {
    name: 'EasyInventory', path: '/easyinventory',   soon: true,
    cat: 'Inventory',
    desc: 'Real-time stock control across warehouses and branches.',
    long: 'EasyInventory gives you live stock levels, low-stock alerts, purchase orders, and supplier management in one place.',
    tags: ['Stock', 'Warehousing', 'Suppliers'],
    results: ['Low-stock alerts', 'PO automation', 'Multi-location'],
    icon: Package,           accent: '#4ade80',
  },
  {
    name: 'EasyRestaurant', path: '/easyresturant',  soon: false,
    cat: 'F&B',
    desc: 'Table, kitchen, and billing management for restaurants.',
    long: 'EasyRestaurant connects front-of-house, kitchen display, and billing so orders flow seamlessly from table to plate to receipt.',
    tags: ['KDS', 'Table management', 'Billing'],
    results: ['KDS integration', 'Split billing', 'Reservation module'],
    icon: Utensils,          accent: '#a3e635',
  },
  {
    name: 'EasyHRM',       path: '/easyhrm',         soon: true,
    cat: 'HR',
    desc: 'Payroll, attendance, and employee records simplified.',
    long: 'EasyHRM handles end-to-end HR — from onboarding and leave management to payroll processing and compliance reporting.',
    tags: ['Payroll', 'Attendance', 'Compliance'],
    results: ['One-click payroll', 'Leave calendar', 'Compliance reports'],
    icon: Users,             accent: '#81fa00',
  },
  {
    name: 'EasyHMS',       path: '/easyhms',         soon: true,
    cat: 'Hospitality',
    desc: 'Hotel and property management from check-in to checkout.',
    long: 'EasyHMS manages reservations, room assignments, housekeeping schedules, and billing across properties.',
    tags: ['Reservations', 'Rooms', 'Billing'],
    results: ['Channel manager', 'Housekeeping board', 'Revenue analytics'],
    icon: Building2,         accent: '#4ade80',
  },
  {
    name: 'EasyAnaly AI',  path: '/easyanaly',       soon: true,
    cat: 'Analytics',
    desc: 'AI-powered insights and dashboards for your business data.',
    long: 'EasyAnaly AI transforms raw data into actionable insights with natural-language queries, auto-charts, and anomaly detection.',
    tags: ['AI', 'Dashboards', 'Reports'],
    results: ['NL query interface', 'Anomaly alerts', 'Export to PDF'],
    icon: BarChart2,         accent: '#a3e635',
  },
  {
    name: 'EasyLMS',       path: '/easylms',         soon: true,
    cat: 'EdTech',
    desc: 'Learning management for employee training and development.',
    long: 'EasyLMS lets you build courses, track completion, and issue certificates — keeping your team skills sharp and documented.',
    tags: ['Courses', 'Certificates', 'Tracking'],
    results: ['SCORM support', 'Completion tracking', 'Auto-certificates'],
    icon: GraduationCap,    accent: '#81fa00',
  },
]

type Filter = 'all' | 'live' | 'soon'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
})

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ProductsSection() {
  const [activeFilter, setActiveFilter] = useState<Filter>('all')
  const [selected, setSelected] = useState<Product | null>(null)

  const filtered = PRODUCTS.filter(p => {
    if (activeFilter === 'live') return !p.soon
    if (activeFilter === 'soon') return p.soon
    return true
  })

  return (
    // ── same base bg as testimonial section ──
    <section className="py-20 bg-[#0c2501] min-h-screen">

      {/* Dot grid — identical opacity/color to testimonial section feel */}
      <div
        className="fixed inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(129,250,0,0.9) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">

        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <motion.p
              {...fadeUp(0)}
              className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#81fa00] mb-3"
            >
              Our Suite
            </motion.p>
            <motion.h2
              {...fadeUp(0.07)}
              className="text-3xl md:text-4xl font-black text-white leading-tight"
            >
              Easy Products
            </motion.h2>
            <motion.p
              {...fadeUp(0.12)}
              className="text-gray-500 text-sm mt-2 max-w-xs leading-relaxed"
            >
              A growing suite of business tools built for modern teams.
            </motion.p>
          </div>

          {/* ── Filters — styled like the testimonial section-label ── */}
          <motion.div {...fadeUp(0.15)} className="flex items-center gap-2 flex-wrap">
            {(['all', 'live', 'soon'] as Filter[]).map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider border transition-all duration-200 ${
                  activeFilter === f
                    ? 'bg-[#81fa00] border-[#81fa00] text-black'
                    : 'border-[#81fa00]/15 text-gray-500 hover:border-[#81fa00]/30 hover:text-[#81fa00]'
                }`}
              >
                {f === 'all' ? 'All' : f === 'live' ? 'Live' : 'Coming Soon'}
              </button>
            ))}
            <span className="ml-2 text-[11px] text-gray-700 font-mono">
              {filtered.length} product{filtered.length !== 1 ? 's' : ''}
            </span>
          </motion.div>
        </div>

        {/* ── Grid ── */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((product, i) => {
              const Icon = product.icon
              return (
                <motion.div
                  key={product.path}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.4, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                  whileHover={{ y: -4 }}
                  onClick={() => setSelected(product)}
                  // ── card bg matches testimonial card: bg-[#0F2318] ──
                  className="group relative bg-[#0F2318] rounded-2xl border border-[#81fa00]/10 hover:border-[#81fa00]/30 cursor-pointer transition-all duration-300 overflow-hidden flex flex-col"
                >
                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                    style={{ backgroundColor: product.accent }}
                  />

                  {/* Corner glow */}
                  <div
                    className="absolute top-0 right-0 w-20 h-20 rounded-full blur-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ backgroundColor: `${product.accent}18` }}
                  />

                  {/* Top row: icon + badge */}
                  <div className="flex items-start justify-between p-5 pb-0">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        backgroundColor: `${product.accent}12`,
                        border: `1px solid ${product.accent}25`,
                      }}
                    >
                      <Icon size={18} strokeWidth={1.5} style={{ color: product.accent }} />
                    </div>

                    {/* Soon / Live badge — unified green palette */}
                    {product.soon ? (
                      <span className="px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest bg-[#81fa00]/8 text-[#81fa00]/60 border border-[#81fa00]/15">
                        Soon
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest bg-[#81fa00]/10 text-[#81fa00] border border-[#81fa00]/25">
                        <span className="w-1 h-1 rounded-full bg-[#81fa00] animate-pulse" />
                        Live
                      </span>
                    )}
                  </div>

                  {/* Body */}
                  <div className="flex-1 p-5 pt-4">
                    <h3 className="text-white font-black text-base mb-1.5 leading-snug">{product.name}</h3>
                    <p className="text-gray-400 py-2 text-xs leading-relaxed">{product.desc}</p>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between px-5 py-3.5 border-t border-[#81fa00]/6">
                    <span className="text-[10px] text-gray-600 uppercase tracking-[0.1em] font-semibold">{product.cat}</span>
                    <div
                      className="w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-200 group-hover:scale-110"
                      style={{
                        borderColor: `${product.accent}30`,
                        color: product.accent,
                        backgroundColor: `${product.accent}08`,
                      }}
                    >
                      <ArrowRight size={11} strokeWidth={2.5} />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-700 text-sm">No products match this filter.</p>
          </div>
        )}
      </div>

      {/* ── Modal ── */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(6,23,1,0.90)', backdropFilter: 'blur(8px)' }}
            onClick={e => { if (e.target === e.currentTarget) setSelected(null) }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              // ── modal bg matches testimonial card bg ──
              className="relative w-full max-w-md rounded-3xl border border-[#81fa00]/15 overflow-hidden bg-[#0F2318]"
            >
              {/* Top glow — always lime, no per-product color */}
              <div className="absolute top-0 left-0 right-0 h-40 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at 50% -20%, rgba(129,250,0,0.12), transparent 70%)' }}
              />

              {/* Header */}
              <div className="relative flex items-center gap-3 p-6 border-b border-[#81fa00]/8">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: `${selected.accent}12`,
                    border: `1px solid ${selected.accent}25`,
                  }}
                >
                  <selected.icon size={22} strokeWidth={1.5} style={{ color: selected.accent }} />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-white font-black text-base leading-none mb-1">{selected.name}</p>
                  <p className="text-gray-600 text-xs">{selected.cat}</p>
                </div>

                {selected.soon ? (
                  <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#81fa00]/8 text-[#81fa00]/60 border border-[#81fa00]/15">
                    Coming Soon
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#81fa00]/10 text-[#81fa00] border border-[#81fa00]/25">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#81fa00] animate-pulse" />
                    Live
                  </span>
                )}

                <button
                  onClick={() => setSelected(null)}
                  className="w-8 h-8 rounded-full border border-[#81fa00]/15 flex items-center justify-center text-gray-600 hover:text-white hover:border-[#81fa00]/30 hover:bg-[#81fa00]/8 transition-all duration-200 flex-shrink-0"
                >
                  <X size={13} strokeWidth={2} />
                </button>
              </div>

              {/* Body */}
              <div className="relative p-6 space-y-5">
                <p className="text-gray-400 text-sm leading-relaxed">{selected.long}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {selected.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-[11px] font-semibold text-[#81fa00]/60 border border-[#81fa00]/10 bg-[#81fa00]/4"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="bg-[#0c2501] rounded-2xl p-4 border border-[#81fa00]/8">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#81fa00]/40 mb-3">
                    Key Features
                  </p>
                  <div className="space-y-2.5">
                    {selected.results.map(r => (
                      <div key={r} className="flex items-center gap-2.5">
                        <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 bg-[#81fa00]/10 border border-[#81fa00]/25">
                          <Check size={9} strokeWidth={3} className="text-[#81fa00]" />
                        </div>
                        <span className="text-gray-400 text-sm">{r}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex gap-3 pt-1">
                  {selected.soon ? (
                    <button className="flex-1 px-5 py-3 rounded-full text-sm font-bold border border-[#81fa00]/15 text-gray-500 hover:text-[#81fa00] hover:border-[#81fa00]/30 transition-all duration-200">
                      Notify Me
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() => window.location.href = selected.path}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-black text-black bg-[#81fa00] hover:bg-[#a3e635] transition-all duration-200"
                        style={{ boxShadow: '0 0 24px rgba(129,250,0,0.25)' }}
                      >
                        Explore {selected.name}
                        <ArrowRight size={14} />
                      </button>
                      <button className="px-5 py-3 rounded-full text-sm font-bold border border-[#81fa00]/15 text-gray-500 hover:text-[#81fa00] hover:border-[#81fa00]/30 transition-all duration-200">
                        Docs
                      </button>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}