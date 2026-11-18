import React, { useState } from 'react';
import { Menu, X, VolumeX, Volume2 } from 'lucide-react';
import Logo from './Logo';
import { NAV_LINKS } from '../data/kemetraData';

export default function Navbar() {
  const [active, setActive] = useState('Home');
  const [ambient, setAmbient] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.13] bg-secondary">
      <div className="mx-auto flex h-[87px] w-full max-w-[1440px] items-center justify-between px-6 md:px-12">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.label;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setActive(link.label)}
                className={`relative text-[14px] font-medium leading-5 transition-colors ${
                  isActive
                    ? 'text-gold after:absolute after:-bottom-[4px] after:left-0 after:h-[2px] after:w-5 after:bg-gold'
                    : 'text-background hover:text-gold'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <div className="flex items-center text-[12px]">
            <button type="button" className="text-[15px] text-background hover:text-gold">
              العربية
            </button>
            <span className="mx-2 text-subtitle">/</span>
            <span className="font-bold text-gold">EN</span>
          </div>

          <button
            type="button"
            onClick={() => setAmbient((v) => !v)}
            aria-pressed={ambient}
            className="inline-flex items-center gap-2 text-[11px] text-subtitle transition-colors hover:text-background"
          >
            {ambient ? <Volume2 className="h-[15px] w-[15px]" /> : <VolumeX className="h-[15px] w-[15px]" />}
            Ambient {ambient ? 'ON' : 'OFF'}
          </button>

          <button
            type="button"
            className="h-9 rounded border border-white/25 px-4 text-[13px] font-medium text-background transition-colors hover:border-gold hover:text-gold"
          >
            Login
          </button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="p-2 text-background hover:text-gold lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="space-y-1 border-t border-white/[0.13] bg-secondary px-6 pb-5 pt-3 lg:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                setActive(link.label);
                setOpen(false);
              }}
              className={`block py-2 text-[14px] font-medium ${
                active === link.label ? 'text-gold' : 'text-background'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-4 pt-3">
            <span className="text-[15px] text-background">العربية</span>
            <span className="text-subtitle">/</span>
            <span className="text-[12px] font-bold text-gold">EN</span>
            <button
              type="button"
              className="ml-auto h-9 rounded border border-white/25 px-4 text-[13px] font-medium text-background"
            >
              Login
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
