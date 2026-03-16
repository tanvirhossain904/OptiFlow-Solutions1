'use client'

import Link from 'next/link'
import {
  Linkedin, Twitter, Facebook, Instagram,
  Mail, Phone, MapPin, ArrowUpRight, Globe, ArrowRight,
} from 'lucide-react'
import Image from 'next/image'
import logo from '@/public/logos/white_logo.png'

// ─── Data ────────────────────────────────────────────────────────────────────

const footerLinks = {
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Products', href: '/products' },
    { label: 'Contact',  href: '/contact' },
  ],
  Services: [
    { label: 'Custom Software Development', href: '/services' },
    { label: 'Dedicated Development Team',  href: '/services' },
    { label: 'Business Automation',         href: '/services' },
    { label: 'Cloud & DevOps',              href: '/services' },
    { label: 'UI/UX Design',               href: '/services' },
  ],
  Legal: [
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Privacy Policy',     href: '/privacy' },
    { label: 'Refund Policy',      href: '/refund' },
    { label: 'Cookie Policy',      href: '/cookies' },
  ],
}

const socials = [
  { icon: Linkedin,  href: '#', label: 'LinkedIn' },
  { icon: Twitter,   href: '#', label: 'Twitter' },
  { icon: Facebook,  href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
]

const offices = [
  {
    flag: '🇺🇸',
    country: 'United States',
    city: 'St. Petersburg, FL',
    contacts: [
      { icon: Mail,   label: 'Email',   value: 'hello@easysoft.dev',                               href: 'mailto:hello@easysoft.dev' },
      { icon: Phone,  label: 'Fax',     value: '+1 (727) 458 9360',                                href: 'tel:+17274589360' },
      { icon: MapPin, label: 'Address', value: '7901 4th St N, Ste 300\nSt. Petersburg, FL 33702',  href: 'https://maps.google.com/?q=7901+4th+St+N+Ste+300+St+Petersburg+FL+33702' },
    ],
  },
  {
    flag: '🇧🇩',
    country: 'Bangladesh',
    city: 'Dhaka',
    contacts: [
      { icon: Phone,  label: 'Phone',   value: '+880 1580-741616',                         href: 'tel:+8801580741616' },
      { icon: MapPin, label: 'Address', value: '23/2, SEL HUQ SKYPARK\nMirpur Rd, Dhaka',  href: 'https://maps.google.com/?q=23/2+SEL+HUQ+SKYPARK+Mirpur+Rd+Dhaka' },
    ],
  },
]

// ─── Component ───────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer className="bg-[#0c2501] relative overflow-hidden">

      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 left-1/4 w-96 h-64 rounded-full blur-[120px] opacity-[0.06]"
          style={{ background: '#81fa00' }}
        />
        <div
          className="absolute top-0 right-1/3 w-64 h-48 rounded-full blur-[100px] opacity-[0.04]"
          style={{ background: '#81fa00' }}
        />
      </div>

      {/* ════════════════════════════════════════
          CTA BAND
      ════════════════════════════════════════ */}
      <div className="relative border-t border-[#81fa00]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-12">
          <div className="bg-[#0F2318] rounded-2xl border border-[#81fa00]/15 px-6 sm:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden relative">
            {/* Inner glow */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#81fa00]/30 to-transparent" />
            <div
              className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-24 rounded-full blur-[50px] opacity-20"
              style={{ background: '#81fa00' }}
            />

            <div className="relative text-center sm:text-left">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#81fa00]/60 mb-1">
                Ready to scale?
              </p>
              <h3 className="text-white font-black text-xl md:text-2xl leading-tight">
                Let&apos;s build something{' '}
                <em className="italic font-serif text-[#81fa00]">great</em> together.
              </h3>
            </div>

            <div className="relative flex items-center gap-3 flex-shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-3 md:px-6 py-3 bg-[#81fa00] hover:bg-[#a3e635] text-black font-black text-sm rounded-full transition-all duration-200"
                style={{ boxShadow: '0 0 28px rgba(129,250,0,0.22)' }}
              >
                Get in Touch <ArrowRight size={14} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-3 md:px-6 py-3 border border-[#81fa00]/20 text-[#81fa00]/70 hover:text-[#81fa00] hover:border-[#81fa00]/40 font-bold text-sm rounded-full transition-all duration-200"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════
          MAIN FOOTER — Brand · Links · Newsletter
      ════════════════════════════════════════ */}
      <div className="relative border-t border-[#81fa00]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">

            {/* Brand column */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-5">
                <Image src={logo} alt="Easysoft LLC" width={140} height={46} priority />
              </Link>

              <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-[260px]">
                Software development, SaaS products, and digital solutions
                helping businesses scale through modern cloud-based platforms.
              </p>

              {/* Registered entity badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#0F2318] border border-[#81fa00]/10 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-[#81fa00] animate-pulse flex-shrink-0" />
                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#81fa00]/40 leading-tight">
                    Registered Entity
                  </p>
                  <p className="text-xs text-gray-500 font-semibold leading-tight mt-0.5">
                    Easysoft LLC · Florida, USA
                  </p>
                </div>
              </div>

              {/* Social icons */}
              <div className="flex items-center gap-2">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a                             
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-8 h-8 rounded-full border border-[#81fa00]/12 flex items-center justify-center text-gray-600 hover:text-[#81fa00] hover:border-[#81fa00]/35 hover:bg-[#81fa00]/8 transition-all duration-200"
                  >
                    <Icon size={13} />
                  </a>
                ))}
              </div>
            </div>

            {/* Nav link columns */}
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section} className="lg:col-span-1">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-1 h-3 rounded-full bg-[#81fa00]/40" />
                  <h4 className="text-white font-black text-[10px] uppercase tracking-[0.22em]">
                    {section}
                  </h4>
                </div>
                <ul className="flex flex-col gap-3">
                  {links.map(link => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="group flex items-center gap-1.5 text-xs text-gray-600 hover:text-[#81fa00] transition-colors duration-200"
                      >
                        <span className="w-0 group-hover:w-2 h-px bg-[#81fa00] transition-all duration-200 overflow-hidden" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Newsletter */}
            <div className="lg:col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-1 h-3 rounded-full bg-[#81fa00]/40" />
                <h4 className="text-white font-black text-[10px] uppercase tracking-[0.22em]">
                  Stay Updated
                </h4>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Product updates, launch announcements, and insights from Easysoft.
              </p>
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0F2318] border border-[#81fa00]/12 text-gray-300 text-xs placeholder-gray-700 focus:outline-none focus:border-[#81fa00]/35 transition-colors duration-200"
                />
                <button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#81fa00] hover:bg-[#a3e635] text-black font-black text-xs rounded-xl transition-all duration-200">
                  Subscribe <ArrowUpRight size={12} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════
          OFFICES STRIP
      ════════════════════════════════════════ */}
      <div className="relative border-t border-[#81fa00]/10 bg-[#0F2318]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-10">

          <div className="flex items-center gap-3 mb-7">
            <Globe size={11} className="text-[#81fa00]/50" />
            <span className="text-[9px] font-black uppercase tracking-[0.28em] text-[#81fa00]/50">
              Our Offices
            </span>
            <div className="flex-1 h-px bg-[#81fa00]/8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {offices.map(({ flag, country, city, contacts }) => (
              <div
                key={country}
                className="group relative rounded-2xl border border-[#81fa00]/10 bg-[#0c2501] p-5 hover:border-[#81fa00]/25 transition-all duration-300 overflow-hidden"
              >
                {/* Hover glow */}
                <div
                  className="absolute -top-8 -right-8 w-28 h-28 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'radial-gradient(circle, rgba(129,250,0,0.08) 0%, transparent 70%)' }}
                />

                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left bg-[#81fa00]/40" />

                {/* Card header */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl leading-none select-none">{flag}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-black text-sm leading-tight">{country}</p>
                    <p className="text-[#81fa00]/45 text-[10px] font-bold uppercase tracking-[0.15em] mt-0.5">
                      {city}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#81fa00]/8 border border-[#81fa00]/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#81fa00] animate-pulse" />
                    <span className="text-[9px] font-black uppercase tracking-wider text-[#81fa00]">Active</span>
                  </div>
                </div>

                <div className="h-px bg-[#81fa00]/8 mb-4" />

                {/* Contact rows */}
                <div className="flex flex-col gap-3">
                    {contacts.map(({ icon: Icon, label, value, href }) => (
                      <a                                        
                        key={label}
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="group/c flex items-start gap-3"
                      >
                        <div className="w-7 h-7 rounded-lg bg-[#81fa00]/6 border border-[#81fa00]/12 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/c:bg-[#81fa00]/12 group-hover/c:border-[#81fa00]/30 transition-all duration-200">
                          <Icon size={12} className="text-[#81fa00]" />
                        </div>
                        <div>
                          <p className="text-[9px] font-black uppercase tracking-[0.15em] text-gray-700 mb-0.5">
                            {label}
                          </p>
                          <p className="text-[11px] text-gray-500 group-hover/c:text-[#81fa00] transition-colors duration-200 whitespace-pre-line leading-relaxed">
                            {value}
                          </p>
                        </div>
                      </a>
                    ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="border-t border-[#81fa00]/6 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-start">
              <p className="text-[11px] text-gray-700">
                © {new Date().getFullYear()} Easysoft LLC · All rights reserved
              </p>
              <span className="w-1 h-1 rounded-full bg-gray-700 hidden sm:block" />
              <p className="text-[11px] text-gray-700">St. Petersburg, FL, USA</p>
            </div>

            <div className="flex items-center gap-4 flex-wrap justify-center">
              {footerLinks.Legal.map(link => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[10px] text-gray-700 hover:text-[#81fa00] transition-colors duration-200 uppercase tracking-wider"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>

    </footer>
  )
}