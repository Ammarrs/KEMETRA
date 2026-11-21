import React from "react";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, Map as MapIcon } from "lucide-react";
import { CONTAINER } from "./Shared";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[650px] overflow-hidden bg-secondary text-background"
    >
      <img
        src="/images/karnak-hero.jpg"
        alt="The hypostyle columns of Karnak Temple, Luxor"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(11,17,29,.96) 0%, rgba(11,17,29,.84) 21%, rgba(11,17,29,.75) 42%, rgba(11,17,29,.52) 62%, rgba(11,17,29,.27) 83%, rgba(11,17,29,.14) 100%)",
        }}
      />

      <div className={`${CONTAINER} relative min-h-[650px]`}>
        <div className="pb-40 pt-[92px] md:pb-0">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-gold" />
            <span className="text-[11px] font-semibold uppercase leading-[22px] tracking-[0.14em] text-gold">
              Egypt’s Heritage Explorer
            </span>
          </div>

          <h1 className="mt-6 max-w-[560px] font-display text-[40px] leading-[1.2] text-background sm:text-[56px]">
            Every stone holds a story. Find yours.
          </h1>

          <p className="mt-[22px] max-w-[480px] text-[18px] leading-[30px] text-background">
            Journey through Egypt’s places, people and enduring traditions. A
            living heritage, waiting to be explored.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/explore-map"
              className="inline-flex h-12 items-center gap-2.5 rounded bg-gold px-5 text-[14px] font-medium text-secondary transition-colors hover:bg-primary-hover"
            >
              Start Exploring
              <MapIcon className="h-4 w-4" />
            </Link>
            <Link
              to="/timeline"
              className="inline-flex h-12 items-center gap-2.5 rounded border border-gold px-5 text-[14px] font-medium text-background transition-colors hover:bg-gold/10"
            >
              Explore the Timeline
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <a
          href="#stories"
          className="absolute bottom-[106px] left-6 hidden items-center gap-3 text-[11px] font-semibold uppercase leading-4 tracking-[0.14em] text-background/80 transition-colors hover:text-gold md:left-12 md:inline-flex"
        >
          <ArrowDown className="h-3.5 w-3.5 text-gold" />
          Uncover the layers
        </a>

        <div className="absolute bottom-[102px] right-6 hidden text-right md:right-12 md:block">
          <p className="text-[11px] font-bold uppercase leading-6 tracking-[0.12em] text-gold">
            In the frame
          </p>
          <p className="text-[13px] leading-6 text-background">
            The columns of Karnak · Luxor
          </p>
        </div>
      </div>
    </section>
  );
}
