import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { ArrowLink, CONTAINER, EraBadge, SectionTitle } from "./Shared";
import { PLACES } from "../data/kemetraData";

export default function AncientPlaces() {
  return (
    <section className="border-b border-divider bg-background pb-[79px] pt-20">
      <div className={CONTAINER}>
        <SectionTitle
          eyebrow="A sense of place"
          title="Discover Ancient Places"
          right={<ArrowLink to="/explore-map">See places on the map</ArrowLink>}
        />

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PLACES.map((place) => (
            <Link key={place.id} to="/explore-map" className="group block">
              <div className="h-[248px] overflow-hidden rounded">
                <img
                  src={place.image}
                  alt={place.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase leading-5 tracking-[0.1em] text-muted-foreground">
                  {place.region}
                </span>
                <ArrowUpRight className="h-4 w-4 text-gold" />
              </div>

              <h3 className="mt-[18px] font-display text-[26px] leading-[34px] text-foreground">
                {place.name}
              </h3>
              <div className="mt-5">
                <EraBadge era={place.era} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
