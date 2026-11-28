import { FiSearch, FiSliders } from "react-icons/fi";

const StoriesFilters = ({ filters, onChange }) => (
  <section
    className="mt-6 border border-divider bg-surface p-4 md:p-5"
    aria-label="Story filters">
    <label
      className="flex items-center gap-3 border border-border bg-card px-3 py-2.5"
      htmlFor="story-search">
      <FiSearch className="shrink-0 text-muted-foreground" aria-hidden="true" />
      <input
        id="story-search"
        type="search"
        value={filters.search}
        onChange={(event) => onChange("search", event.target.value)}
        placeholder="Search stories by title or related place…"
        className="w-full bg-transparent font-body text-sm text-foreground outline-none placeholder:text-muted-foreground"
      />
    </label>
    <div className="mt-3 grid gap-3 sm:grid-cols-3">
      <select
        value={filters.era}
        onChange={(event) => onChange("era", event.target.value)}
        className="border border-border bg-card px-3 py-2.5 font-body text-sm text-foreground outline-none focus:border-primary"
        aria-label="Filter by era">
        <option value="all">All eras</option>
        <option value="Pharaonic">Pharaonic</option>
        <option value="Coptic">Coptic</option>
        <option value="Islamic">Islamic</option>
      </select>
      <select
        value={filters.status}
        onChange={(event) => onChange("status", event.target.value)}
        className="border border-border bg-card px-3 py-2.5 font-body text-sm text-foreground outline-none focus:border-primary"
        aria-label="Filter by status">
        <option value="all">All statuses</option>
        <option value="Published">Published</option>
        <option value="Draft">Draft</option>
        <option value="Archived">Archived</option>
      </select>
      <label className="relative">
        <select
          value={filters.order}
          onChange={(event) => onChange("order", event.target.value)}
          className="w-full appearance-none border border-border bg-card px-3 py-2.5 pr-10 font-body text-sm text-foreground outline-none focus:border-primary"
          aria-label="Sort stories">
          <option value="newest">Updated: newest</option>
          <option value="oldest">Updated: oldest</option>
          <option value="title">Title: A–Z</option>
        </select>
        <FiSliders
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-primary"
          aria-hidden="true"
        />
      </label>
    </div>
  </section>
);
export default StoriesFilters;
