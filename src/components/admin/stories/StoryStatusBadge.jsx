const styles = {
  Published: "bg-success/10 text-success",
  Draft: "bg-primary/10 text-muted",
  Archived: "bg-muted-foreground/10 text-muted-foreground",
};
const StoryStatusBadge = ({ status }) => (
  <span
    className={`inline-flex items-center gap-1.5 px-2 py-1 font-body text-[0.62rem] font-bold ${styles[status] ?? styles.Draft}`}>
    <span className="size-1.5 rounded-full bg-current" aria-hidden="true" />
    {status}
  </span>
);
export default StoryStatusBadge;
