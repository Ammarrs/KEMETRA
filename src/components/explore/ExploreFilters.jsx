
function ExploreFilters({
  search,
  onSearchChange,
  selectedEra,
  onEraChange,
  selectedType,
  onTypeChange,
  selectedRegion,
  onRegionChange,
}) {
  const fieldClasses =
    "box-border w-full min-w-0 rounded-[9px] border border-border bg-card px-[13px] py-[11px] font-body text-[12px] text-foreground outline-none focus:border-primary"

  return (
    <section className="mb-4 grid grid-cols-[2fr_1fr_1fr_1fr] gap-3 max-[850px]:grid-cols-2 max-[480px]:grid-cols-1">
      <input
        type="search"
        placeholder="Search historical places..."
        value={search}
        onChange={(event) => onSearchChange(event.target.value)}
        className={`${fieldClasses} max-[850px]:col-span-full max-[480px]:col-span-1`}
      />

      <select
        value={selectedEra}
        onChange={(event) => onEraChange(event.target.value)}
        className={fieldClasses}
      >
        <option value="all">All Eras</option>
        <option value="ancient">Ancient Egypt</option>
      </select>

      <select
        value={selectedType}
        onChange={(event) => onTypeChange(event.target.value)}
        className={fieldClasses}
      >
        <option value="all">All Place Types</option>
        <option value="temple">Temple</option>
        <option value="pyramid">Pyramid</option>
        <option value="tomb">Tomb / Necropolis</option>
        <option value="museum">Museum</option>
      </select>

      <select
        value={selectedRegion}
        onChange={(event) => onRegionChange(event.target.value)}
        className={fieldClasses}
      >
        <option value="all">All Regions</option>
        <option value="upper">Upper Egypt</option>
        <option value="lower">Lower Egypt</option>
      </select>
    </section>
  )
}

export default ExploreFilters
