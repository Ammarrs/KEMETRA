import React from "react";
import { Link } from "react-router-dom";
import { Map as MapIcon, MapPin } from "lucide-react";
import EgyptMap from "./EgyptMap";
import { CONTAINER, Eyebrow } from "./Shared";

export default function MapSection() {
  return (
    <section id="map" className="scroll-mt-[88px] bg-background py-20">
      <div
        className={`${CONTAINER} grid items-center gap-10 lg:grid-cols-[1fr_728px] lg:gap-16`}
      >
        <div>
          <Eyebrow>Let the landscape lead</Eyebrow>
          <h2 className="mt-[26px] max-w-[552px] font-display text-[32px] leading-10 text-foreground md:text-[40px] md:leading-[50px]">
            Every journey begins with a place.
          </h2>
          <p className="mt-[22px] max-w-[552px] text-[18px] leading-[30px] text-muted-foreground">
            Follow the Nile, cross the desert and find the stories around you.
            Explore Egypt’s heritage one landmark at a time.
          </p>
          <p className="mt-6 inline-flex items-center gap-2.5 text-[13px] leading-5 text-muted-foreground">
            <MapPin className="h-4 w-4 text-gold" strokeWidth={1.5} />
            Giza · Luxor · Aswan · Historic Cairo
          </p>
          <div className="mt-6">
            <Link
              to="/explore-map"
              className="inline-flex h-12 items-center gap-3 rounded bg-gold px-[18px] text-[14px] font-medium text-secondary transition-colors hover:bg-primary-hover"
            >
              Explore the Map
              <MapIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-md">
          <EgyptMap />
        </div>
      </div>
    </section>
  );
}
