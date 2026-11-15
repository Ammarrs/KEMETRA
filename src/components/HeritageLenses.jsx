import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { CONTAINER, EraBadge, SectionTitle } from "./Shared";
import { ERAS, HERITAGE_LENSES } from "../data/kemetraData";

export default function HeritageLenses() {
  return (
    <section id="heritage" className="scroll-mt-[88px] bg-surface py-20">
      <div className={CONTAINER}>
        <SectionTitle
          eyebrow="Three lenses on a living heritage"
          title="Explore Egypt’s Heritage"
          right={
            <p className="max-w-[564px] text-[15px] leading-6 text-muted-foreground">
              Different eras. Shared landscapes. Discover the many traditions
              that make Egypt’s story extraordinary.
            </p>
          }
        />

        <div className="mt-10 grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {HERITAGE_LENSES.map((lens) => (
            <article
              key={lens.id}
              className="border-b border-divider pb-[18px]"
            >
              <div className="aspect-[432/330] w-full overflow-hidden rounded-t-[216px] rounded-b">
                <img
                  src={lens.image}
                  alt={lens.alt}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="mt-6 flex items-center justify-between">
                <EraBadge era={lens.era} />
                <Link
                  to="/stories"
                  className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.12em] ${ERAS[lens.era].accent}`}
                >
                  Explore the collection
                  <ArrowUpRight className="h-3 w-3" strokeWidth={2.5} />
                </Link>
              </div>

              <h3 className="mt-[14px] font-display text-[24px] leading-8 text-foreground">
                {lens.title}
              </h3>
              <p className="mt-4 text-[15px] leading-6 text-muted-foreground">
                {lens.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
