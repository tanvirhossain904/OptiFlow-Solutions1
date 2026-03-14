'use client'

import Link from 'next/link'
import {
  Linkedin, Twitter, Facebook, Instagram,
  Mail, Phone, MapPin, ArrowUpRight, Globe,
} from 'lucide-react'
import Image from 'next/image'
import logo from '@/public/logos/white_logo.png'

const footerLinks = {
  Company: [
    { label: 'About Us',  href: '/about' },
    { label: 'Services',  href: '/services' },
    { label: 'Projects',  href: '/projects' },
    { label: 'Products',  href: '/products' },
    { label: 'Contact',   href: '/contact' },
  ],
  Services: [
    { label: 'Custom Software Development', href: '/services/software-development' },
    { label: 'Dedicated Development Team',  href: '/services/dedicated-team' },
    { label: 'Business Automation',         href: '/services/business-automation' },
    { label: 'Cloud & DevOps',              href: '/services/cloud-devops' },
    { label: 'UI/UX Design',               href: '/services/design' },
  ],
  Legal: [
    { label: 'Terms & Conditions', href: '#' },
    { label: 'Privacy Policy',     href: '#' },
    { label: 'Refund Policy',      href: '#' },
    { label: 'Cookie Policy',      href: '#' },
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
      { icon: Mail,   label: 'Email',   value: 'hello@easysoft.dev',                                 href: 'mailto:hello@easysoft.dev' },
      { icon: Phone,  label: 'Fax',     value: '+1 (813) 436-5206',                                  href: 'tel:+18134365206' },
      { icon: MapPin, label: 'Address', value: '7901 4th St N, Ste 300\nSt. Petersburg, FL 33702',   href: 'https://maps.google.com/?q=7901+4th+St+N+Ste+300+St+Petersburg+FL+33702' },
    ],
  },
  {
    flag: '🇧🇩',
    country: 'Bangladesh',
    city: 'Dhaka',
    contacts: [
      { icon: Phone,  label: 'Phone',   value: '+880 1580-741616',                                   href: 'tel:+8801580741616' },
      { icon: MapPin, label: 'Address', value: '23/2, SEL HUQ SKYPARK\nMirpur Rd, Dhaka',            href: 'https://maps.google.com/?q=23/2+SEL+HUQ+SKYPARK+Mirpur+Rd+Dhaka' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#0c2701]">

      {/* ══════════════════════════════════════════════
          STEP 1 — Brand · Links · Newsletter
      ══════════════════════════════════════════════ */}
      <div className="border-t border-[#81fa00]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">

            {/* Brand */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-5">
                <Image src={logo} alt="Easysoft LLC" width={140} height={46} priority />
              </Link>

              <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-[260px]">
                Easysoft provides software development, SaaS products, and digital technology
                solutions to help businesses scale through modern cloud-based platforms.
              </p>

              {/* Registered entity */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#0a1b03] border border-[#81fa00]/8">
                <div className="w-1.5 h-1.5 rounded-full bg-[#81fa00] flex-shrink-0" />
                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#81fa00]/40 leading-tight">
                    Registered Entity
                  </p>
                  <p className="text-xs text-gray-500 font-semibold leading-tight mt-0.5">
                    Easysoft LLC · Florida, USA
                  </p>
                </div>
              </div>
            </div>

            {/* Nav link columns */}
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section} className="lg:col-span-1">
                <h4 className="text-white font-black text-[10px] uppercase tracking-[0.22em] mb-5">
                  {section}
                </h4>
                <ul className="flex flex-col gap-3">
                  {links.map(link => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-xs text-gray-600 hover:text-[#81fa00] transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Newsletter */}
            <div className="lg:col-span-1 md:col-span-2">
              <h4 className="text-white font-black text-[10px] uppercase tracking-[0.22em] mb-5">
                Stay Updated
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Get product updates, launch announcements, and tech insights from Easysoft.
              </p>
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0a1b03] border border-[#81fa00]/12 text-gray-300 text-xs placeholder-gray-700 focus:outline-none focus:border-[#81fa00]/35 transition-colors duration-200"
                />
                <button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#81fa00] hover:bg-[#9bff20] text-black font-black text-xs rounded-xl transition-all duration-200">
                  Subscribe <ArrowUpRight size={12} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          STEP 2 — Offices · Bottom bar
      ══════════════════════════════════════════════ */}
      <div className="border-t border-[#81fa00]/10 bg-[#081601]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-10">

          {/* Office cards */}
          <div className="flex items-center gap-3 mb-7">
            <Globe size={12} className="text-[#81fa00]/60" />
            <span className="text-[9px] font-black uppercase tracking-[0.28em] text-[#81fa00]/50">
              Our Offices
            </span>
            <div className="flex-1 h-px bg-[#81fa00]/8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
            {offices.map(({ flag, country, city, contacts }) => (
              <div
                key={country}
                className="group relative rounded-2xl border border-[#81fa00]/8 bg-[#0c2701] p-5 hover:border-[#81fa00]/22 transition-all duration-300 overflow-hidden"
              >
                {/* Ambient hover glow */}
                <div
                  className="absolute -top-10 -right-10 w-32 h-32 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'radial-gradient(circle, rgba(129,250,0,0.07) 0%, transparent 70%)' }}
                />

                {/* Card header */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl leading-none select-none">{flag}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-black text-sm leading-tight">{country}</p>
                    <p className="text-[#81fa00]/45 text-[10px] font-bold uppercase tracking-[0.15em] mt-0.5">
                      {city}
                    </p>
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#81fa00] animate-pulse flex-shrink-0" />
                </div>

                <div className="h-px bg-[#81fa00]/8 mb-4" />

                {/* Contact items */}
                <div className="flex flex-col gap-3">
                  {contacts.map(({ icon: Icon, label, value, href }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group/c flex items-start gap-3"
                    >
                      <div className="w-6 h-6 rounded-lg bg-[#81fa00]/6 border border-[#81fa00]/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/c:bg-[#81fa00]/12 group-hover/c:border-[#81fa00]/25 transition-all duration-200">
                        <Icon size={11} className="text-[#81fa00]" />
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
            <p className="text-[11px] text-gray-700 text-center sm:text-left">
              © {new Date().getFullYear()} Easysoft LLC · All rights reserved ·{' '}
              <span className="text-gray-600">St. Petersburg, FL, USA</span>
            </p>

            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-7 h-7 rounded-full border border-[#81fa00]/12 flex items-center justify-center text-gray-600 hover:text-[#81fa00] hover:border-[#81fa00]/35 hover:bg-[#81fa00]/8 transition-all duration-200"
                >
                  <Icon size={12} />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

    </footer>
  )
}