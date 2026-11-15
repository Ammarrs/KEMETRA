import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ERAS } from '../data/kemetraData';

export const CONTAINER = 'mx-auto w-full max-w-[1440px] px-6 md:px-12';

export function Eyebrow({ children, className = 'text-muted-foreground' }) {
  return (
    <p className={`text-[11px] font-bold uppercase leading-4 tracking-[0.12em] ${className}`}>
      {children}
    </p>
  );
}

export function SectionTitle({ eyebrow, title, right, eyebrowClass }) {
  return (
    <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
      <div>
        <Eyebrow className={eyebrowClass}>{eyebrow}</Eyebrow>
        <h2 className="mt-[14px] font-display text-[32px] leading-[40px] text-foreground md:text-[40px] md:leading-[48px]">
          {title}
        </h2>
      </div>
      {right}
    </div>
  );
}

export function ArrowLink({ href, children }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-2 text-[13px] font-semibold leading-5 text-foreground transition-colors hover:text-primary-hover"
    >
      {children}
      <ArrowRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-0.5" />
    </a>
  );
}

export function EraBadge({ era }) {
  const e = ERAS[era];
  return (
    <span
      className={`inline-flex h-[26px] items-center rounded-full px-3 text-[10px] font-bold uppercase leading-none tracking-[0.14em] ${e.badge}`}
    >
      {e.label}
    </span>
  );
}
