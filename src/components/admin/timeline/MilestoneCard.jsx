import { FiArrowDown, FiArrowUp, FiEdit2, FiTrash2 } from "react-icons/fi";

const MilestoneCard = ({
  milestone,
  selected,
  onSelect,
  onMove,
  onDelete,
  isFirst,
  isLast,
}) => (
  <article
    className={`border bg-card p-4 transition-colors ${selected ? "border-primary shadow-[inset_0_0_0_1px_var(--color-primary)]" : "border-border hover:border-primary/60"}`}>
    <div className="flex items-start justify-between gap-4">
      <p className="font-body text-[0.6rem] font-extrabold uppercase tracking-[0.2em] text-primary">
        {milestone.era}
      </p>
      <span
        className={`inline-flex items-center gap-1.5 px-2 py-1 font-body text-[0.62rem] font-bold ${milestone.status === "Published" ? "bg-success/10 text-success" : "bg-primary/10 text-muted"}`}>
        <span className="size-1.5 rounded-full bg-current" aria-hidden="true" />
        {milestone.status}
      </span>
    </div>
    <h3 className="mt-3 font-display text-xl font-semibold text-foreground">
      {milestone.title}
    </h3>
    <p className="mt-2 font-body text-xs text-muted-foreground">
      {milestone.dateLabel}
    </p>
    <p className="mt-2 font-body text-xs leading-5 text-muted-foreground">
      {milestone.place} · {milestone.story}
    </p>
    <div className="mt-4 flex flex-wrap items-center gap-2">
      <button
        type="button"
        disabled={isFirst}
        onClick={() => onMove(milestone.id, -1)}
        className="border border-border p-2 text-foreground hover:border-primary disabled:opacity-25"
        aria-label={`Move ${milestone.title} up`}>
        <FiArrowUp aria-hidden="true" />
      </button>
      <button
        type="button"
        disabled={isLast}
        onClick={() => onMove(milestone.id, 1)}
        className="border border-border p-2 text-foreground hover:border-primary disabled:opacity-25"
        aria-label={`Move ${milestone.title} down`}>
        <FiArrowDown aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => onSelect(milestone.id)}
        className="inline-flex items-center gap-2 border border-border px-3 py-2 font-body text-xs font-semibold text-foreground hover:border-primary">
        <FiEdit2 aria-hidden="true" /> {selected ? "Editing" : "Edit"}
      </button>
      <button
        type="button"
        onClick={() => onDelete(milestone.id)}
        className="border border-border p-2 text-destructive hover:border-destructive"
        aria-label={`Delete ${milestone.title}`}>
        <FiTrash2 aria-hidden="true" />
      </button>
    </div>
    {selected && (
      <p className="mt-3 font-body text-[0.67rem] text-muted-foreground">
        Selected · Edit {"below"}
      </p>
    )}
  </article>
);

export default MilestoneCard;
