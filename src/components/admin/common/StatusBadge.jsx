const styles = {
  Draft: "bg-primary/15 text-muted",
  Processing: "bg-primary/15 text-muted",
  Unavailable: "bg-primary/15 text-muted",
  Archived: "bg-primary/10 text-muted",
  Published: "bg-success/10 text-success",
  Available: "bg-success/10 text-success",
  Error: "bg-destructive/10 text-destructive",
};

const StatusBadge = ({ status }) => (
  <span
    className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-sm px-2 py-1 font-body text-[0.65rem] font-bold ${styles[status] ?? styles.Draft}`}>
    <span className="size-1.5 rounded-[1px] bg-current" aria-hidden="true" />
    {status}
  </span>
);
export default StatusBadge;
