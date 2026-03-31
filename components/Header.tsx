'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X,} from 'lucide-react'
import logo from '@/public/logos/white_logo.png'

// Products Dropdown Data
const ProductsDropdown = [
  { name: "EasyAnalyze AI", path: "https://p1.easy-soft.co/", comingSoon: false },
  { name: "EasyClinic", path: "https://p2.easy-soft.co/", comingSoon: false },
  { name: "EasyManager", path: "https://p3.easy-soft.co/", comingSoon: false },
  { name: "EasyPOS", path: "https://p4.easy-soft.co/", comingSoon: false },
  { name: "EasyHRM", path: "https://p5.easy-soft.co/", comingSoon: false },
  { name: "AbashonX", path: "https://rental-dashboard-pi.vercel.app/login", comingSoon: false },
  { name: "ShomporkoX", path: "https://shomporkox.easytechsolutions.xyz/", comingSoon: false },
  { name: "DokanX", path: "https://dokanxbd.com/", comingSoon: false },
  { name: "EasyLedger", path: "/easylead", comingSoon: true },
  { name: "EasyAccounts", path: "/easyaccounts", comingSoon: true },
  { name: "EasyInventory", path: "/easyinventory", comingSoon: true },
  { name: "EasyResturant", path: "/easyresturant", comingSoon: true },
  { name: "EasyLMS", path: "/easylms", comingSoon: true },
  
]

// Navigation Links
const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products', dropdown: ProductsDropdown },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dark, setDark] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null)
  const pathname = usePathname()

  // Scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Dark mode
  // useEffect(() => {
  //   const saved = localStorage.getItem('theme')
  //   if (
  //     saved === 'dark' ||
  //     (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)
  //   ) {
  //     document.documentElement.classList.add('dark')
  //     setDark(true)
  //   }
  // }, [])

    useEffect(() => {
      const saved = localStorage.getItem('theme')
      if (saved === 'light') {
        document.documentElement.classList.remove('dark')
        setDark(false)
      } else {
        document.documentElement.classList.add('dark')
        setDark(true)
      }
    }, [])

  // const toggleDark = () => {
  //   if (dark) {
  //     document.documentElement.classList.remove('dark')
  //     localStorage.setItem('theme', 'light')
  //   } else {
  //     document.documentElement.classList.add('dark')
  //     localStorage.setItem('theme', 'dark')
  //   }
  //   setDark(!dark)
  // }

  // Smooth scroll for same-page anchors
  const handleAnchorClick = (href: string) => {
    if (href.startsWith('#')) {
      const section = document.querySelector(href)
      section?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#f2f2f2]/90 dark:bg-[#0c2501]/90 backdrop-blur-lg border-b border-gray-200 dark:border-[#81fA00]/10 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src={logo}
              alt="OptiFlow Solutions Logo"
              width={150}
              height={50}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 relative">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <span
                    className={`px-4 py-2 text-sm font-medium cursor-pointer transition-all duration-200 ${
                      pathname === link.href
                        ? 'border-b-2 border-[#81fa00] text-[#81fa00]'
                        : 'text-gray-600 dark:text-gray-300 hover:text-[#81fa00] dark:hover:text-[#81fa00]'
                    }`}
                  >
                    {link.label}
                  </span>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-[#f2f2f2] dark:bg-[#0F2318] border border-gray-200 dark:border-[#81fA00]/10 rounded-lg shadow-lg overflow-hidden z-50"
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.path}
                            href={item.path}
                            className={`flex items-center gap-2 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-[#81fa00]/70 dark:hover:bg-[#81fa00]/70 rounded-lg transition-colors ${
                              item.comingSoon ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                          >
                            <span>{item.name}</span>
                            {item.comingSoon && (
                              <span className="text-xs text-gray-500 dark:text-gray-400 ml-auto">
                                Coming...
                              </span>
                            )}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => handleAnchorClick(link.href)}
                  className={`px-4 py-2  text-sm font-medium transition-all duration-200 ${
                    pathname === link.href
                      ? 'border-b-2 border-[#81fa00] text-[#81fa00]'
                      : 'text-gray-600 dark:text-gray-300 hover:text-[#81fa00] dark:hover:text-[#81fa00]'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">

            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-[#81fa00] hover:bg-[#81fa00]/50 text-black font-semibold text-sm rounded-full transition-all duration-200 shadow-lg "
            >
              Get a Quote
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-[#81fa00] dark:hover:text-[#81fa00]"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#f2f2f2] dark:bg-[#0F2318] border-t border-gray-200 dark:border-[#81fA00]/10"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => {
                if (link.dropdown) {
                  return (
                    <div key={link.href} className="flex flex-col">
                      <button
                        onClick={() =>
                          setMobileDropdownOpen((prev) =>
                            prev === link.href ? null : link.href
                          )
                        }
                        className="flex justify-between w-full px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#81fa00] hover:bg-[#81fa00]/70 transition-colors"
                      >
                        {link.label}
                        <span>{mobileDropdownOpen === link.href ? '▲' : '▼'}</span>
                      </button>

                      {mobileDropdownOpen === link.href && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="ml-4 flex flex-col gap-1 mt-1"
                        >
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.path}
                              href={item.path}
                              onClick={() => setMenuOpen(false)}
                              className={`flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-[#81fa00]/70 dark:hover:bg-[#81fa00]/70  transition-colors ${
                                item.comingSoon ? 'opacity-50 cursor-not-allowed' : ''
                              }`}
                            >
                              <span>{item.name}</span>
                              {item.comingSoon && (
                                <span className="text-xs text-gray-500 dark:text-gray-400 ml-auto">
                                  Coming...
                                </span>
                              )}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  )
                } else {
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="px-4 py-3  text-sm font-medium transition-all text-gray-700 dark:text-gray-300 hover:text-[#81fa00] hover:bg-[#81fa00]/70 "
                    >
                      {link.label}
                    </Link>
                  )
                }
              })}

              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-3 w-full text-center px-5 py-3 bg-[#81fa00] hover:bg-[#81fa00]/50 text-black font-semibold text-sm rounded-full transition-all"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}