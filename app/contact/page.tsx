'use client'

import { motion } from 'framer-motion'
import ContactForm from '@/components/ContactForm'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@easysoft.dev', href: 'mailto:hello@easysoft.dev' },
  { icon: Phone, label: 'Phone', value: '+1 (555) 000-0000', href: 'tel:+15550000000' },
  { icon: MapPin, label: 'Location', value: '123 Market St, San Francisco, CA 94103', href: '#' },
  { icon: Clock, label: 'Office Hours', value: 'Mon – Fri, 9 AM – 6 PM PST', href: '#' },
]

export default function ContactPage() {
  return (
    <div className="bg-[#f2f2f2] dark:bg-[#0c2501] pt-16">
      {/* Hero */}
      <section className="py-24 bg-[#0c2501] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'linear-gradient(rgba(74,222,128,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,0.08) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-label">Contact Us</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
              Let's Build Something
              <br />
              <span className="text-[#81fa00] ">Amazing Together</span>
            </h1>
            <p className="text-gray-400 text-md md:text-lg max-w-xl mx-auto">
              Tell us about your project. We'll get back to you within 24 hours with a tailored solution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-2 md:px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Info panel */}
            <div className="lg:col-span-2">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
                <h2 className="text-xl md:text-2xl font-black text-[#131313] dark:text-white mb-3">Get in Touch</h2>
                <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm leading-relaxed mb-8">
                  Whether you have a project in mind or just want to explore what's possible — we'd love to hear from you.
                </p>

                <div className="flex flex-col gap-5 mb-10">
                  {contactInfo.map(({ icon: Icon, label, value, href }) => (
                    <a
                      key={label}
                      href={href}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#81fa00]/70 border border-[#81fA00]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#81fa00]/70 /20 transition-colors">
                        <Icon size={16} className="text-[#81fa00]  " />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mb-0.5">{label}</p>
                        <p className="text-xs md:text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-[#81fa00]   transition-colors">{value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Office image placeholder */}
                <div className="rounded-2xl overflow-hidden border border-[#81fA00]/15 h-48 bg-[#0F2318] flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin size={32} className="text-[#81fa00]  /30 mx-auto mb-2" />
                    <p className="text-sm">San Francisco Office</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-[#0F2318] rounded-2xl p-4 md:p-8 border border-[#81fA00]/15"
              >
                <h2 className="md:text-xl text-md font-bold text-white mb-2">Start Your Project</h2>
                <p className="text-gray-500 text-xs md:text-sm mb-7">Fill out the form below and we'll prepare a custom proposal for you.</p>
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
