import MilestoneCard from "./MilestoneCard";

const MilestoneList = ({
  milestones,
  selectedId,
  onSelect,
  onMove,
  onDelete,
}) => (
  <section aria-labelledby="milestone-list-title">
    <div className="mb-4 flex items-center justify-between gap-4">
      <div>
        <h2
          id="milestone-list-title"
          className="font-display text-2xl font-semibold text-foreground">
          {milestones.length} milestones
        </h2>
        <p className="mt-1 font-body text-xs leading-5 text-muted-foreground">
          Earliest to latest · Editorial ordering. Period labels are approximate
          and require verification.
        </p>
      </div>
      <span className="shrink-0 bg-primary/10 px-2 py-1 font-body text-[0.62rem] font-bold text-muted">
        Sample data
      </span>
    </div>
    <div className="space-y-3">
      {milestones.map((milestone, index) => (
        <MilestoneCard
          key={milestone.id}
          milestone={milestone}
          selected={milestone.id === selectedId}
          onSelect={onSelect}
          onMove={onMove}
          onDelete={onDelete}
          isFirst={index === 0}
          isLast={index === milestones.length - 1}
        />
      ))}
      {milestones.length === 0 && (
        <p className="border border-dashed border-border p-8 text-center font-body text-sm text-muted-foreground">
          No milestones match the current filters.
        </p>
      )}
    </div>
    <p className="mt-4 font-body text-xs leading-5 text-muted-foreground">
      Showing {milestones.length} sample milestones · Use ordering controls
      within the curatorial sequence.
    </p>
  </section>
);

export default MilestoneList;
