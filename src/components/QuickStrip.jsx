import React from 'react';
import { Headphones, Hourglass, MapPin } from 'lucide-react';
import { CONTAINER } from './Shared';
import { QUICK_LINKS } from '../data/kemetraData';

const ICONS = { pin: MapPin, hourglass: Hourglass, headphones: Headphones };

export default function QuickStrip() {
  return (
    <div className="border-b border-divider bg-surface">
      <div className={`${CONTAINER} flex min-h-[73px] flex-col items-start justify-between gap-3 py-4 md:flex-row md:items-center md:py-0`}>
        <p className="text-[11px] font-bold uppercase leading-4 tracking-[0.12em] text-muted-foreground">
          Many eras. One unfolding story.
        </p>
        <div className="flex flex-wrap items-center gap-x-12 gap-y-2">
          {QUICK_LINKS.map(({ icon, label, href }) => {
            const Icon = ICONS[icon];
            return (
              <a
                key={label}
                href={href}
                className="inline-flex items-center gap-2 text-[13px] text-muted-foreground transition-colors hover:text-foreground"
              >
                <Icon className="h-4 w-4 text-gold" strokeWidth={1.5} />
                {label}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
