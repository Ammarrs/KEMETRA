import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import {
  LuLayoutGrid,
  LuBookOpen,
  LuMapPin,
  LuHourglass,
  LuHeadphones,
  LuBox,
  LuSettings,
  LuArrowUpRight,
  LuMenu,
  LuX,
  LuPanelLeftClose,
  LuPanelLeftOpen,
} from 'react-icons/lu'
import BrandMark from './BrandMark'

const adminLinks = [
  { id: 1, path: '/admin/admin-overview', name: 'Overview', short: 'Overview', icon: LuLayoutGrid },
  { id: 2, path: '/admin/admin-stories', name: 'Stories', short: 'Stories', icon: LuBookOpen },
  { id: 3, path: '/admin/admin-places', name: 'Places & Heritage Data', short: 'Places', icon: LuMapPin },
  { id: 4, path: '/admin/admin-timeline', name: 'Timeline', short: 'Timeline', icon: LuHourglass },
  { id: 5, path: '/admin/admin-audio', name: 'Audio Records', short: 'Audio', icon: LuHeadphones },
  { id: 6, path: '/admin/admin-3d', name: '3D Experiences', short: '3D', icon: LuBox },
  { id: 7, path: '/admin/admin-settings', name: 'Settings', short: 'Settings', icon: LuSettings },
]

// Small triangle mark for the compact layouts
function TriangleMark({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={`h-7 w-7 text-primary ${className}`}>
      <path d="M12 3 L22 20 H2 Z" strokeLinejoin="round" />
      <path d="M12 9 L17 17.5 H7 Z" strokeLinejoin="round" />
    </svg>
  )
}

function AdminNavbar() {
  const [collapsed, setCollapsed] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  const closeDrawer = () => setDrawerOpen(false)

  return (
    <>
      {/* ───────── MOBILE: top bar (below md) ───────── */}
      <header className="sticky top-0 z-30 flex items-center justify-between bg-secondary px-4 py-3 md:hidden">
        <div className="flex items-center gap-2.5">
          <TriangleMark className="h-6 w-6" />
          <span className="font-display text-lg font-semibold text-background">KEMETRA</span>
          <span className="text-xs font-medium text-primary">ADMIN</span>
        </div>
        <button
          onClick={() => setDrawerOpen(true)}
          aria-label="Open navigation"
          className="rounded-lg p-2 text-primary hover:bg-background/5"
        >
          <LuMenu className="text-2xl" />
        </button>
      </header>

      {/* ───────── MOBILE: slide-in drawer ───────── */}
      {drawerOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={closeDrawer} />
          <aside className="absolute inset-y-0 left-0 flex w-64 flex-col gap-6 overflow-y-auto bg-secondary px-5 py-6">
            <div className="flex items-center justify-between">
              <BrandMark />
              <button onClick={closeDrawer} aria-label="Close navigation" className="rounded-lg p-2 text-primary hover:bg-background/5">
                <LuX className="text-xl" />
              </button>
            </div>

            <span className="text-xs font-semibold tracking-[0.18em] text-primary">CURATORIAL ADMIN</span>

            <nav className="flex flex-col gap-1 text-background">
              {adminLinks.map(({ id, path, name, icon: Icon }) => (
                <NavLink
                  key={id}
                  to={path}
                  onClick={closeDrawer}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-lg p-3 text-sm transition-colors hover:text-primary ${
                      isActive ? 'bg-background/5 font-semibold text-primary' : ''
                    }`
                  }
                >
                  <Icon className="text-lg" />
                  {name}
                </NavLink>
              ))}
            </nav>

            <hr className="border-muted-foreground" />

            <Link to="/" onClick={closeDrawer} className="flex items-center gap-2 text-sm text-background hover:text-primary">
              <LuArrowUpRight className="text-primary" /> Back to public site
            </Link>
          </aside>
        </div>
      )}

      {/* ───────── TABLET + DESKTOP: sidebar (md and up) ───────── */}
      <aside
        className={`hidden shrink-0 flex-col bg-secondary md:flex md:px-3 md:py-6 md:gap-6 ${
          collapsed ? 'md:w-20' : 'md:w-20 lg:w-60 lg:gap-8 lg:px-5 lg:py-7'
        }`}
      >
        {/* Brand */}
        <div className={`flex justify-center ${collapsed ? '' : 'lg:justify-start'}`}>
          <TriangleMark className={collapsed ? '' : 'lg:hidden'} />
          <div className={collapsed ? 'hidden' : 'hidden lg:block'}>
            <BrandMark />
          </div>
        </div>

        {/* Role label */}
        <div className={collapsed ? 'hidden' : 'hidden lg:block'}>
          <span className="text-xs font-semibold tracking-[0.18em] text-primary">CURATORIAL ADMIN</span>
        </div>

        {/* Links */}
        <nav className="flex flex-col gap-1 text-background">
          {adminLinks.map(({ id, path, name, short, icon: Icon }) => (
            <NavLink
              key={id}
              to={path}
              title={name}
              className={({ isActive }) =>
                `flex items-center rounded-lg transition-colors hover:text-primary ${
                  collapsed
                    ? 'flex-col gap-1 py-3 text-[11px]'
                    : 'flex-col gap-1 py-3 text-[11px] lg:flex-row lg:gap-3 lg:px-3 lg:text-sm'
                } ${isActive ? 'bg-background/5 font-semibold text-primary' : ''}`
              }
            >
              <Icon className="text-xl" />
              <span className={collapsed ? '' : 'lg:hidden'}>{short}</span>
              <span className={collapsed ? 'hidden' : 'hidden lg:inline'}>{name}</span>
            </NavLink>
          ))}
        </nav>

        <hr className="border-muted-foreground" />

        {/* Back to public site */}
        <Link
          to="/"
          title="Back to public site"
          className={`flex items-center text-sm text-background hover:text-primary ${
            collapsed ? 'justify-center' : 'justify-center lg:justify-start lg:gap-2'
          }`}
        >
          <LuArrowUpRight className="shrink-0 text-lg text-primary" />
          <span className={collapsed ? 'hidden' : 'hidden lg:inline'}>Back to public site</span>
        </Link>

        {/* Profile */}
        <div className={`flex items-center gap-3 ${collapsed ? 'justify-center' : 'justify-center lg:justify-start'}`}>
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary font-display text-sm text-primary">
            NH
          </div>
          <div className={collapsed ? 'hidden' : 'hidden lg:block'}>
            <p className="text-sm text-background">Nour Hassan</p>
            <p className="text-xs text-muted-foreground">Administrator · Profile</p>
          </div>
        </div>

        {/* Collapse toggle (desktop only) */}
        <button
          onClick={() => setCollapsed((c) => !c)}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          className={`hidden items-center gap-3 rounded-lg p-2 text-sm text-background hover:text-primary lg:flex ${collapsed? "justify-center":""}`}
        >
          {collapsed ? <LuPanelLeftOpen className="text-lg text-primary" /> : <LuPanelLeftClose className="text-lg text-primary" />}
          <span className={collapsed ? 'hidden' : ''}>Collapse sidebar</span>
        </button>
      </aside>
    </>
  )
}

export default AdminNavbar