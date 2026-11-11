const EraRail = ({ eras, activeId, activeIndex, onSelect }) => {
  const activeEra = eras[activeIndex];
  const progress = `${String(activeIndex + 1).padStart(2, "0")} / ${String(eras.length).padStart(2, "0")}`;
  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") { event.preventDefault(); onSelect(activeIndex - 1); }
    if (event.key === "ArrowRight") { event.preventDefault(); onSelect(activeIndex + 1); }
  };
  return (
    <section className="mx-auto w-full max-w-[1180px] px-5 py-10 sm:px-8 md:py-14" aria-label="Choose a historical era">
      <div className="flex flex-wrap items-center gap-3 font-body">
        <label className="text-sm font-bold text-foreground" htmlFor="era-select">Era ·</label>
        <select id="era-select" className="border-0 border-b border-border bg-transparent px-1 py-2 text-sm text-foreground outline-none focus:border-primary" value={activeId} onChange={(event) => onSelect(eras.findIndex((era) => era.id === event.target.value))}>
          {eras.map((era) => <option key={era.id} value={era.id}>{era.name}</option>)}
        </select>
        <p className="ml-auto text-xs text-muted-foreground sm:text-sm" aria-live="polite"><span className="font-extrabold text-primary">{progress}</span> · {activeEra.name}</p>
      </div>
      <div className="mt-10 grid auto-cols-[145px] grid-flow-col overflow-x-auto pb-10 md:auto-cols-auto md:grid-flow-row md:grid-cols-8" role="list" aria-label="Egyptian historical eras" onKeyDown={handleKeyDown}>
        {eras.map((era, index) => {
          const isActive = era.id === activeId;
          return (
            <button key={era.id} type="button" role="listitem" className={`relative min-w-[140px] border-0 border-b bg-transparent px-2 pb-8 text-left font-body focus-visible:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${isActive ? "border-primary text-foreground" : "border-primary/60 text-muted-foreground hover:text-foreground"}`} onClick={() => onSelect(index)} aria-current={isActive ? "step" : undefined}>
              <span className="block min-h-12 font-display text-sm leading-5">{era.name}</span>
              <span className={`absolute left-2 rounded-full bg-primary ${isActive ? "-bottom-[10px] size-5 border-[5px] border-background outline outline-2 outline-primary" : "-bottom-[5px] size-2.5"}`} aria-hidden="true" />
              {isActive && <span className="absolute -bottom-8 left-2 whitespace-nowrap text-[0.58rem] font-extrabold uppercase tracking-[0.13em] text-primary">You are here</span>}
            </button>
          );
        })}
      </div>
      <p className="mt-4 font-body text-xs leading-6 text-muted-foreground">A curated introduction, not a timeline drawn to scale. Eras overlap; period boundaries vary by source.</p>
    </section>
  );
};
export default EraRail;
