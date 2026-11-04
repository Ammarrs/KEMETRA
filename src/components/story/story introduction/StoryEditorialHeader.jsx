const StoryEditorialHeader = () => {
  return (
    <section className="bg-background px-4 pt-5 sm:px-6 lg:px-8">
      <div className="mb-7 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <div>
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-secondary px-3 py-1 font-medium tracking-[0.18em] text-primary text-[0.7em]">
              PHARAONIC
            </span>

            <span className="font-semibold tracking-[0.16em] text-muted-foreground text-[0.6em]">
              GIZA PLATEAU · EGYPT
            </span>
          </div>

          <h1 className="font-display text-5xl font-semibold leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:text-[64px]">
            Giza: a horizon in stone
          </h1>
        </div>

        {/* Right Content */}
        <div className="flex flex-col gap-5 lg:pt-1">
          <p className="max-w-lg text-lg leading-6 text-muted-foreground sm:text-base sm:leading-7">
            Beyond an icon: a closer look at the landscape, craft
            and human imagination of the Giza Plateau.
          </p>

          <div className="flex flex-wrap items-center gap-5 text-[11px] font-semibold tracking-[0.16em] text-muted-foreground">
            <span>WRITTEN STORY</span>
            <span>AUDIO · SAMPLE EPISODE</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryEditorialHeader;
