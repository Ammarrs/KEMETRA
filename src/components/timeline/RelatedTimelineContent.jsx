import RelatedTimelineCard from "./RelatedTimelineCard";
const RelatedTimelineContent = ({ image }) => (
  <section className="mx-auto w-full max-w-[1180px] px-5 py-20 sm:px-8 md:py-28" aria-labelledby="related-heading">
    <p className="font-body text-xs font-extrabold uppercase tracking-[0.24em] text-primary">From the era to the landscape</p>
    <h2 id="related-heading" className="mt-3 max-w-4xl font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl md:text-7xl">Follow the story beyond the rail.</h2>
    <div className="mt-10 grid gap-6 lg:grid-cols-2">
      <RelatedTimelineCard to="/map" label="Related place · Giza" title="Giza Pyramids" description="See the monuments in their wider desert landscape." action="Explore related places" image={image} imageAlt="The Giza pyramids in their desert landscape" />
      <RelatedTimelineCard to="/stories" label="Related story · Written story" title="Giza: a horizon in stone" description="A closer look at landscape, craft and human imagination." action="Hear related story" note="Audio interface preview · No recording attached" image={image} imageAlt="The Giza pyramid complex associated with the featured story" />
    </div>
  </section>
);
export default RelatedTimelineContent;
