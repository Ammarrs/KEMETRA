const StoriesPagination = ({ page, totalPages, onChange, totals }) => (
  <nav className="mt-5" aria-label="Stories pagination">
    <div className="flex flex-wrap items-center gap-2">
      <button
        type="button"
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
        className="border border-border bg-card px-3 py-2 font-body text-xs text-foreground disabled:opacity-30">
        Previous
      </button>
      {[1, 2, 3]
        .filter((value) => value <= totalPages)
        .map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => onChange(value)}
            aria-current={page === value ? "page" : undefined}
            className={`size-9 border font-body text-xs ${page === value ? "border-secondary bg-secondary text-card" : "border-border bg-card text-foreground"}`}>
            {value}
          </button>
        ))}
      <button
        type="button"
        disabled={page === totalPages}
        onClick={() => onChange(page + 1)}
        className="border border-border bg-card px-3 py-2 font-body text-xs text-foreground disabled:opacity-30">
        Next
      </button>
    </div>
    <p className="mt-4 font-body text-[0.67rem] leading-5 text-muted-foreground">
      Page {page} of {totalPages} · 8 records per page · {totals.Published}{" "}
      Published / {totals.Draft} Draft / {totals.Archived} Archived
    </p>
  </nav>
);
export default StoriesPagination;
