import { FiSearch } from "react-icons/fi";

const AudioFilters = ({ filters, onChange }) => (
  <section
    className="mt-6 border border-divider bg-surface p-4 md:p-5"
    aria-label="Audio filters">
    <label
      className="flex items-center gap-3 border border-border bg-card px-3 py-2.5"
      htmlFor="audio-search">
      <FiSearch className="shrink-0 text-muted-foreground" aria-hidden="true" />
      <input
        id="audio-search"
        type="search"
        value={filters.search}
        onChange={(event) => onChange("search", event.target.value)}
        placeholder="Search audio by title, place or story…"
        className="w-full bg-transparent font-body text-sm text-foreground outline-none placeholder:text-muted-foreground"
      />
    </label>
    <div className="mt-3 grid gap-3 sm:grid-cols-3">
      <select
        value={filters.status}
        onChange={(event) => onChange("status", event.target.value)}
        className="border border-border bg-card px-3 py-2.5 font-body text-sm text-foreground outline-none focus:border-primary"
        aria-label="Filter by status">
        <option value="all">All statuses</option>
        <option>Processing</option>
        <option>Available</option>
        <option>Error</option>
      </select>
      <select
        value={filters.language}
        onChange={(event) => onChange("language", event.target.value)}
        className="border border-border bg-card px-3 py-2.5 font-body text-sm text-foreground outline-none focus:border-primary"
        aria-label="Filter by language">
        <option value="all">All languages</option>
        <option>English</option>
        <option>Arabic</option>
      </select>
      <select
        value={filters.order}
        onChange={(event) => onChange("order", event.target.value)}
        className="border border-border bg-card px-3 py-2.5 font-body text-sm text-foreground outline-none focus:border-primary"
        aria-label="Sort audio">
        <option value="title">Title: A–Z</option>
        <option value="place">Place: A–Z</option>
        <option value="status">Status</option>
      </select>
    </div>
  </section>
);
export default AudioFilters;
