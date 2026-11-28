import StoryStatusBadge from "./StoryStatusBadge";
import StoryActions from "./StoryActions";

const StoryMobileCard = ({ story, onEdit, onArchive, onDelete }) => (
  <article className="border border-border bg-card p-3 md:hidden">
    <div className="flex gap-3">
      <img
        src={story.image}
        alt=""
        className="size-16 shrink-0 bg-surface-secondary object-cover"
      />
      <div className="min-w-0 flex-1">
        <h3 className="font-display text-base font-semibold text-foreground">
          {story.title}
        </h3>
        <p className="mt-1 font-body text-[0.65rem] text-muted-foreground">
          Sample data · {story.language} · v{story.version}
        </p>
      </div>
    </div>
    <p className="mt-3 font-body text-xs text-muted-foreground">
      {story.era} · {story.place}
    </p>
    <div className="mt-3 flex items-center justify-between gap-3">
      <StoryStatusBadge status={story.status} />
      <time className="font-body text-[0.67rem] text-muted-foreground">
        {story.updatedLabel}
      </time>
    </div>
    <div className="mt-3">
      <StoryActions
        story={story}
        onEdit={onEdit}
        onArchive={onArchive}
        onDelete={onDelete}
      />
    </div>
  </article>
);
export default StoryMobileCard;
