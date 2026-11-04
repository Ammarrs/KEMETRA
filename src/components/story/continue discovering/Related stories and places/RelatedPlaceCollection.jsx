import React from 'react';
import { FiArrowUpRight, FiMap } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const relatedPlaces = [
  {
    name: "Karnak Temple",
    location: "LUXOR · PHARAONIC",
    link: "/places/karnak",
  },
  {
    name: "Philae Temple",
    location: "ASWAN · PHARAONIC",
    link: "/places/philae",
  },
];

const RelatedPlaceCollection = () => {
  return (
    <article className="flex h-full min-h-107.5 flex-col rounded-lg bg-secondary p-6 sm:p-7">
      <p className="font-body text-[10px] font-semibold tracking-[0.16em] text-primary">
        RELATED PLACES
      </p>

      <h3 className="mt-4 max-w-67.5 font-display text-[28px] font-bold leading-[1.2] text-card">
        Follow the thread along the Nile.
      </h3>

      <p className="mt-3 font-body text-[13px] leading-[1.6] text-card/70">
        Continue from Giza to other remarkable Pharaonic landscapes.
      </p>

      <div className="mt-6 border-t border-card/15">
        <ul>
          {relatedPlaces.map((place) => (
            <li
              key={place.name}
              className="border-b border-card/15 py-4 last:border-b-0 group"
            >
              <Link
                to={place.link}
                className="flex items-center justify-between gap-4 "
              >
                <div>
                  <h4 className="font-display text-[17px] font-medium text-card group-hover:text-primary">
                    {place.name}
                  </h4>

                  <p className="mt-1 font-body text-[10px] font-medium tracking-[0.13em] text-card/55 group-hover:text-primary-hover transition-colors">
                    {place.location}
                  </p>
                </div>

                <FiArrowUpRight className="size-4.25 shrink-0 text-primary" />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto border-t border-card/15 pt-5">
        <Link
          to="/map"
          className="flex items-center justify-between gap-3 font-body text-xs font-medium text-primary transition-colors hover:text-card"
        >
          Explore places on the map
          <FiMap className="size-4 shrink-0" />
        </Link>
      </div>
    </article>
  );
};

export default RelatedPlaceCollection;