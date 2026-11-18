import React from "react";
import { ArrowLink, CONTAINER, SectionTitle } from "./Shared";
import { TIMELINE } from "../data/kemetraData";

export default function HistoryGlance() {
  return (
    <section
      id="timeline"
      className="scroll-mt-[88px] border-b border-divider bg-surface pb-[63px] pt-16"
    >
      <div className={CONTAINER}>
        <SectionTitle
          eyebrow="Follow the thread"
          title="History at a Glance"
          right={<ArrowLink to="/timeline">Explore the Timeline</ArrowLink>}
        />

        <ol className="relative mt-[39px] grid gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          <span
            className="absolute left-0 right-0 top-[11px] hidden h-0.5 bg-surface-secondary lg:block"
            aria-hidden="true"
          />

          {TIMELINE.map((era, i) => (
            <li key={era.id} className="relative">
              <div className="relative flex h-6 items-center">
                {i === 0 ? (
                  <span className="relative z-10 block h-6 w-6 rounded-full border-[5px] border-gold bg-secondary" />
                ) : (
                  <span className="relative z-10 block h-3 w-3 rounded-full border-[3px] border-surface-secondary bg-gold" />
                )}
              </div>
              <h3 className="mt-[19px] font-display text-[24px] leading-8 text-foreground">
                {era.title}
              </h3>
              <p className="mt-2 text-[14px] leading-[21px] text-muted-foreground">
                {era.subtitle}
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-10 text-[13px] leading-5 text-muted-foreground">
          A curated introduction to connected eras, not a timeline drawn to
          scale.
        </p>
      </div>
    </section>
  );
}
