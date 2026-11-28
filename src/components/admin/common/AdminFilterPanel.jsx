import { FiSearch } from "react-icons/fi";
import { controlClass } from "./formStyles";

// Tinted panel with a search box and a responsive row of selects (children).
const AdminFilterPanel = ({ id, label, search, onSearch, placeholder, children }) => (
  <section
    className="mt-8 rounded-sm border border-divider bg-surface p-4 md:p-6"
    aria-label={label}>
    <label htmlFor={id} className="relative block">
      <span className="sr-only">{placeholder}</span>
      <FiSearch
        aria-hidden="true"
        className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-lg text-muted"
      />
      <input
        id={id}
        type="search"
        value={search}
        onChange={(event) => onSearch(event.target.value)}
        placeholder={placeholder}
        className={`${controlClass} py-3.5 pl-11`}
      />
    </label>
    <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">{children}</div>
  </section>
);
export default AdminFilterPanel;
