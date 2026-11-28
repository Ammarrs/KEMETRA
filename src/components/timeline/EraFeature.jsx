const EraFeature = ({ era, image }) => (
  <section className="mx-auto grid w-full max-w-[1180px] gap-10 border-t border-border px-5 py-14 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:py-20" aria-labelledby="active-era-title">
    <figure className="m-0">
      <img className="aspect-[4/3] w-full bg-surface-secondary object-cover" src={image} alt="The three great pyramids of Giza across the desert plateau" />
      <figcaption className="mt-3 font-body text-xs leading-5 text-muted-foreground">The Giza pyramid complex · Illustrative site image.</figcaption>
    </figure>
    <article>
      <p className="font-body text-xs font-extrabold uppercase tracking-[0.22em] text-primary">{era.category}</p>
      <p className="mt-3 font-body text-sm text-muted-foreground">{era.period}</p>
      <h2 id="active-era-title" className="mt-2 font-display text-5xl font-semibold leading-none text-foreground md:text-7xl">{era.name}</h2>
      <h3 className="mt-5 font-display text-2xl font-medium text-foreground">{era.subtitle}</h3>
      <p className="mt-5 font-body text-base leading-8 text-muted-foreground">{era.description}</p>
      <p className="mt-8 font-body text-xs font-extrabold uppercase tracking-[0.22em] text-primary">Ways into this era</p>
      <dl className="mt-4 border-t border-border font-body">
        <div className="grid grid-cols-[95px_1fr] gap-4 border-b border-border py-4"><dt className="text-xs text-muted-foreground">Landscape</dt><dd className="m-0 text-sm text-foreground">{era.landscape}</dd></div>
        <div className="grid grid-cols-[95px_1fr] gap-4 border-b border-border py-4"><dt className="text-xs text-muted-foreground">Focus</dt><dd className="m-0 text-sm text-foreground">{era.focus}</dd></div>
        <div className="grid grid-cols-[95px_1fr] gap-4 border-b border-border py-4"><dt className="text-xs text-muted-foreground">Look closer</dt><dd className="m-0 text-sm text-foreground">{era.closer}</dd></div>
      </dl>
      <p className="mt-4 font-body text-xs leading-6 text-muted-foreground">Sample curatorial introduction. Approximate period and interpretation require specialist review before publication.</p>
    </article>
  </section>
);
export default EraFeature;
