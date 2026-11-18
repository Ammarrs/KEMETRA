import { FiSearch } from "react-icons/fi";

const PlacesFilters = ({ filters, onChange }) => (
  <section
    className="mt-6 border border-divider bg-surface p-4 md:p-5"
    aria-label="Place filters">
    <label
      className="flex items-center gap-3 border border-border bg-card px-3 py-2.5"
      htmlFor="place-search">
      <FiSearch className="shrink-0 text-muted-foreground" aria-hidden="true" />
      <input
        id="place-search"
        type="search"
        value={filters.search}
        onChange={(event) => onChange("search", event.target.value)}
        placeholder="Search by place name or location…"
        className="w-full bg-transparent font-body text-sm text-foreground outline-none placeholder:text-muted-foreground"
      />
    </label>
    <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      <select
        value={filters.era}
        onChange={(event) => onChange("era", event.target.value)}
        className="border border-border bg-card px-3 py-2.5 font-body text-sm text-foreground outline-none focus:border-primary"
        aria-label="Filter by era">
        <option value="all">All eras</option>
        <option>Pharaonic</option>
        <option>Coptic</option>
        <option>Islamic</option>
      </select>
      <select
        value={filters.type}
        onChange={(event) => onChange("type", event.target.value)}
        className="border border-border bg-card px-3 py-2.5 font-body text-sm text-foreground outline-none focus:border-primary"
        aria-label="Filter by type">
        <option value="all">All types</option>
        <option>Pyramid complex</option>
        <option>Temple complex</option>
        <option>Temple</option>
        <option>Church</option>
        <option>Mosque & madrasa</option>
      </select>
      <select
        value={filters.status}
        onChange={(event) => onChange("status", event.target.value)}
        className="border border-border bg-card px-3 py-2.5 font-body text-sm text-foreground outline-none focus:border-primary"
        aria-label="Filter by status">
        <option value="all">All statuses</option>
        <option>Draft</option>
        <option>Published</option>
        <option>Archived</option>
      </select>
      <select
        value={filters.order}
        onChange={(event) => onChange("order", event.target.value)}
        className="border border-border bg-card px-3 py-2.5 font-body text-sm text-foreground outline-none focus:border-primary"
        aria-label="Sort places">
        <option value="az">Name: A–Z</option>
        <option value="za">Name: Z–A</option>
        <option value="location">Location: A–Z</option>
      </select>
    </div>
  </section>
);
export default PlacesFilters;
