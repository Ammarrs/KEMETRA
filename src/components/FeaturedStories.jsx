import React from "react";
import { Link } from "react-router-dom";
import { Headphones } from "lucide-react";
import { ArrowLink, CONTAINER, EraBadge, SectionTitle } from "./Shared";
import { FEATURED_STORIES } from "../data/kemetraData";

export default function FeaturedStories() {
  return (
    <section id="stories" className="scroll-mt-[88px] bg-background py-20">
      <div className={CONTAINER}>
        <SectionTitle
          eyebrow="From the collection"
          title="Featured Stories"
          right={<ArrowLink to="/stories">Browse all stories</ArrowLink>}
        />

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURED_STORIES.map((story) => (
            <article
              key={story.id}
              className="group flex flex-col overflow-hidden rounded border border-divider bg-surface"
            >
              <div className="h-[250px] overflow-hidden">
                <img
                  src={story.image}
                  alt={story.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex flex-1 flex-col px-6 pb-[21px] pt-6">
                <div className="flex items-center justify-between">
                  <EraBadge era={story.era} />
                  <span className="text-[10px] font-bold uppercase leading-4 tracking-[0.1em] text-muted-foreground">
                    Audio preview
                  </span>
                </div>

                <h3 className="mt-4 font-display text-[24px] leading-8 text-foreground">
                  {story.title}
                </h3>
                <p className="mt-[18px] flex-1 text-[15px] leading-6 text-muted-foreground">
                  {story.excerpt}
                </p>

                <div className="mt-[19px] flex border-t border-divider pt-[17px]">
                  <Link
                    to="/stories"
                    className="inline-flex items-center gap-2.5 text-[13px] font-semibold leading-5 text-foreground transition-colors hover:text-primary-hover"
                  >
                    Hear the Story
                    <Headphones
                      className="h-4 w-4 text-gold"
                      strokeWidth={1.5}
                    />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
