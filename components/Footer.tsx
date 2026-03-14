import Link from 'next/link'
import { Linkedin, Twitter, Facebook, Instagram, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import logo from '@/public/logos/white_logo.png'

const footerLinks = {
  Company: [
    { label: 'About Us',   href: '/about' },
    { label: 'Services',   href: '/services' },
    { label: 'Projects',   href: '/projects' },
    { label: 'Products',   href: '/products' },
    { label: 'Contact',    href: '/contact' },
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

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@easysoft.dev',
    href: 'mailto:hello@easysoft.dev',
  },
  {
    icon: Phone,
    label: 'Fax',
    value: '+1 (813) 436-5206',
    href: 'tel:+18134365206',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '7901 4th St N, Ste 300\nSt. Petersburg, FL 33702',
    href: 'https://maps.google.com/?q=7901+4th+St+N+Ste+300+St+Petersburg+FL+33702',
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#0c2701] border-t border-[#81fa00]/8">

      {/* ── Main grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-14">

          {/* ── Brand col ── */}
          <div className="lg:col-span-2">

            {/* Logo */}
            <Link href="/" className="inline-block mb-6">
              <Image
                src={logo}
                alt="Easysoft LLC"
                width={140}
                height={46}
                priority
              />
            </Link>

            {/* Tagline */}
            <p className="text-sm text-gray-500 leading-relaxed mb-7 max-w-[260px]">
              Easysoft provides software development, SaaS products, and digital technology
              solutions to help businesses scale through modern cloud-based platforms.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-4">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-start gap-3"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#81fa00]/6 border border-[#81fa00]/12 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#81fa00]/12 transition-colors duration-200">
                    <Icon size={13} className="text-[#81fa00]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-gray-700 mb-0.5">{label}</p>
                    <p className="text-xs text-gray-500 group-hover:text-[#81fa00] transition-colors duration-200 whitespace-pre-line leading-relaxed">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* ── Link cols ── */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} className="lg:col-span-1">
              <h4 className="text-white font-black text-xs uppercase tracking-[0.18em] mb-5">
                {section}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map(link => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-xs text-gray-600 hover:text-[#81fa00] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* ── Newsletter col ── */}
          <div className="lg:col-span-1 md:col-span-2">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.18em] mb-5">
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

            {/* Entity badge */}
            <div className="mt-5 p-3 rounded-xl bg-[#0a1b03] border border-[#81fa00]/8">
              <p className="text-[10px] font-black uppercase tracking-[0.15em] text-[#81fa00]/40 mb-1">Registered Entity</p>
              <p className="text-xs text-gray-500 font-semibold">Easysoft LLC</p>
              <p className="text-[10px] text-gray-700 mt-0.5">Florida, USA · Est. March 2026</p>
            </div>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="border-t border-[#81fa00]/6" />

        {/* ── Bottom bar ── */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Copyright */}
          <p className="text-[11px] text-gray-700 text-center sm:text-left">
            © {new Date().getFullYear()} Easysoft LLC · All rights reserved ·{' '}
            <span className="text-gray-700">St. Petersburg, FL, USA</span>
          </p>

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
      </div>
    </footer>
  )
}