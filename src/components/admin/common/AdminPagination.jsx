// Previous / numbered / Next pagination with a summary line.
// Shows the first page, the current page and the next one (e.g. 1 2 on page 1).
const AdminPagination = ({ page, totalPages, onChange, label, summary }) => {
  const pages = [...new Set([1, page, Math.min(page + 1, totalPages)])].sort(
    (a, b) => a - b,
  );
  const base =
    "h-11 min-w-11 rounded-sm border px-3 font-body text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";
  return (
    <nav className="mt-8" aria-label={label}>
      <div className="flex flex-wrap items-center gap-2.5">
        <button
          type="button"
          disabled={page === 1}
          onClick={() => onChange(page - 1)}
          className={`${base} border-transparent bg-surface-secondary px-5 text-muted-foreground disabled:cursor-not-allowed enabled:border-border enabled:bg-card enabled:text-foreground enabled:hover:border-primary`}>
          Previous
        </button>
        {pages.map((value, index) => (
          <span key={value} className="contents">
            {index > 0 && value - pages[index - 1] > 1 && (
              <span aria-hidden="true" className="px-1 text-muted-foreground">…</span>
            )}
            <button
              type="button"
              onClick={() => onChange(value)}
              aria-current={page === value ? "page" : undefined}
              className={`${base} ${page === value ? "border-secondary bg-secondary text-primary" : "border-border bg-card text-foreground hover:border-primary"}`}>
              {value}
            </button>
          </span>
        ))}
        <button
          type="button"
          disabled={page === totalPages}
          onClick={() => onChange(page + 1)}
          className={`${base} border-border bg-card px-5 text-foreground hover:border-primary disabled:cursor-not-allowed disabled:border-transparent disabled:bg-surface-secondary disabled:text-muted-foreground`}>
          Next
        </button>
      </div>
      <p className="mt-4 font-body text-xs text-muted-foreground">{summary}</p>
    </nav>
  );
};
export default AdminPagination;
