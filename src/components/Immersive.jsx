import React from 'react';
import { Box, Headphones, Info } from 'lucide-react';
import { CONTAINER, Eyebrow } from './Shared';

export default function Immersive() {
  return (
    <section className="bg-secondary py-12 text-background">
      <div className={`${CONTAINER} grid items-center gap-10 lg:grid-cols-[656px_1fr] lg:gap-[72px]`}>
        <div className="relative h-[320px] overflow-hidden rounded sm:h-[444px]">
          <img
            src="/images/giza-plateau-3d.jpg"
            alt="The Giza Plateau"
            className="h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(12,19,31,0) 38%, rgba(12,19,31,.95) 100%)',
            }}
          />
          <div className="absolute bottom-7 left-6">
            <p className="text-[11px] font-bold uppercase leading-4 tracking-[0.12em] text-gold">
              Immersive collection · Visual preview
            </p>
            <p className="mt-2 font-display text-[24px] leading-8 text-background">The Giza Plateau</p>
          </div>
          <span className="absolute bottom-[30px] right-7 flex h-12 w-12 items-center justify-center rounded-full border border-gold text-gold">
            <Box className="h-5 w-5" strokeWidth={1.5} />
          </span>
        </div>

        <div>
          <Eyebrow className="text-gold">Beyond the page</Eyebrow>
          <h2 className="mt-[26px] font-display text-[32px] leading-10 text-background md:text-[40px] md:leading-[48px]">
            Step closer. Listen deeper.
          </h2>
          <p className="mt-[25px] text-[18px] leading-[30px] text-subtitle">
            Meet the details a photograph can’t hold. Discover spatial perspectives and narrated
            stories, at your own pace.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <button
              type="button"
              className="inline-flex h-12 items-center gap-3 rounded border border-gold px-[18px] text-[14px] font-medium text-background transition-colors hover:bg-gold/10"
            >
              Discover 3D Explorer
              <Box className="h-4 w-4" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              className="inline-flex h-12 items-center gap-3 rounded bg-gold px-[18px] text-[14px] font-medium text-secondary transition-colors hover:bg-primary-hover"
            >
              Hear the Story
              <Headphones className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </div>

          <div className="mt-6 border-t border-white/[0.13] pt-6">
            <p className="flex items-start gap-2.5 text-[13px] leading-5 text-subtitle">
              <Info className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.5} />
              Experience previews only. Audio and 3D assets are not connected in this design.
              Ambient music is off by default.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
