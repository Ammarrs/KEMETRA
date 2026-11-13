import { FiSearch } from "react-icons/fi";

const TimelineFilters = ({ filters, onChange }) => (
  <section
    className="mt-5 border border-divider bg-surface px-4 py-4 md:px-5"
    aria-label="Timeline filters">
    <label
      className="flex items-center gap-3 border border-border bg-card px-3 py-2.5"
      htmlFor="timeline-search">
      <FiSearch className="shrink-0 text-muted-foreground" aria-hidden="true" />
      <input
        id="timeline-search"
        className="w-full bg-transparent font-body text-sm text-foreground outline-none placeholder:text-muted-foreground"
        type="search"
        placeholder="Search milestones or related places…"
        value={filters.search}
        onChange={(event) => onChange("search", event.target.value)}
      />
    </label>
    <div className="mt-3 grid gap-3 sm:grid-cols-3">
      <select
        className="border border-border bg-card px-3 py-2.5 font-body text-sm text-foreground outline-none focus:border-primary"
        value={filters.era}
        onChange={(event) => onChange("era", event.target.value)}
        aria-label="Filter by era">
        <option value="all">All eras</option>
        <option value="Early Dynastic">Early Dynastic</option>
        <option value="Old Kingdom">Old Kingdom</option>
        <option value="New Kingdom">New Kingdom</option>
        <option value="Greco-Roman">Greco-Roman</option>
        <option value="Coptic Egypt">Coptic Egypt</option>
        <option value="Islamic Egypt">Islamic Egypt</option>
      </select>
      <select
        className="border border-border bg-card px-3 py-2.5 font-body text-sm text-foreground outline-none focus:border-primary"
        value={filters.status}
        onChange={(event) => onChange("status", event.target.value)}
        aria-label="Filter by status">
        <option value="all">All statuses</option>
        <option value="Draft">Draft</option>
        <option value="Published">Published</option>
      </select>
      <select
        className="border border-border bg-card px-3 py-2.5 font-body text-sm text-foreground outline-none focus:border-primary"
        value={filters.order}
        onChange={(event) => onChange("order", event.target.value)}
        aria-label="Order milestones">
        <option value="earliest">Order: earliest first</option>
        <option value="latest">Order: latest first</option>
      </select>
    </div>
  </section>
);

export default TimelineFilters;
