'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  FolderOpen,
  Briefcase,
  Users,
  MessageSquare,
  Settings,
  ChevronLeft,
  ChevronRight,
  BarChart3,
  Bell,
  LogOut,
} from 'lucide-react'

const navItems = [
  { icon: LayoutDashboard, label: 'Overview', href: '/dashboard' },
  { icon: FolderOpen, label: 'Projects', href: '/dashboard/projects' },
  { icon: Briefcase, label: 'Services', href: '/dashboard/services' },
  { icon: Users, label: 'Clients', href: '/dashboard/clients' },
  { icon: MessageSquare, label: 'Messages', href: '/dashboard/messages', badge: 3 },
  { icon: BarChart3, label: 'Analytics', href: '/dashboard/analytics' },
  { icon: Bell, label: 'Notifications', href: '/dashboard/notifications', badge: 5 },
  { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
]

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()

  return (
    <aside
      className={`relative flex flex-col bg-[#0c2501] border-r border-[#81fA00]/10 transition-all duration-300 ${
        collapsed ? 'w-16' : 'w-60'
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 py-5 border-b border-[#81fA00]/10">
        {!collapsed && (
          <span className="text-base font-bold text-white whitespace-nowrap">
            OptiFlow<span className="text-[#81fa00]   text-2xl md:text-3xl  font-bold">.</span>
          </span>
        )}
      </div>

      {/* Collapse toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-[72px] w-6 h-6 rounded-full bg-[#0F2318] border border-[#81fA00]/20 flex items-center justify-center text-[#81fa00]  hover:text-[#81fa00]/40 hover:border-[#81fA00]/40 z-10 transition-all"
      >
        {collapsed ? <ChevronRight size={12} /> : <ChevronLeft size={12} />}
      </button>

      {/* Nav */}
      <nav className="flex-1 py-4 px-2 overflow-y-auto">
        {!collapsed && (
          <p className="text-[10px] font-semibold text-gray-600 uppercase tracking-widest px-3 mb-2">Main Menu</p>
        )}
        <ul className="flex flex-col gap-1">
          {navItems.map(({ icon: Icon, label, href, badge }) => {
            const isActive = pathname === href
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group relative ${
                    isActive
                      ? 'bg-[#81fa00]/70 /15 text-[#81fa00]  border border-[#81fA00]/25'
                      : 'text-gray-500 hover:text-gray-300 hover:bg-[#f2f2f2]/5'
                  }`}
                >
                  <Icon size={17} className="flex-shrink-0" />
                  {!collapsed && (
                    <span className="text-sm font-medium whitespace-nowrap flex-1">{label}</span>
                  )}
                  {!collapsed && badge && (
                    <span className="ml-auto px-1.5 py-0.5 rounded-full text-xs font-bold bg-[#81fa00]/70  text-black min-w-[18px] text-center">
                      {badge}
                    </span>
                  )}
                  {collapsed && badge && (
                    <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#81fa00]/70 " />
                  )}

                  {/* Tooltip when collapsed */}
                  {collapsed && (
                    <span className="absolute left-full ml-2 px-2.5 py-1 bg-[#0F2318] border border-[#81fA00]/20 text-white text-xs rounded-lg whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-xl z-50">
                      {label}
                    </span>
                  )}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Logout */}
      <div className="p-2 border-t border-[#81fA00]/10">
        <button
          className={`flex items-center gap-3 px-3 py-2.5 rounded-xl w-full text-gray-500 hover:text-red-400 hover:bg-red-500/10 transition-all duration-200 ${
            collapsed ? 'justify-center' : ''
          }`}
        >
          <LogOut size={17} className="flex-shrink-0" />
          {!collapsed && <span className="text-sm font-medium">Logout</span>}
        </button>
      </div>
    </aside>
  )
}
