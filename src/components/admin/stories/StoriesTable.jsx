import StoryActions from "./StoryActions";
import StoryMobileCard from "./StoryMobileCard";
import StoryStatusBadge from "./StoryStatusBadge";

const StoriesTable = ({ stories, onEdit, onArchive, onDelete }) => (
  <section className="mt-6" aria-label="Stories catalog">
    <div className="space-y-3 md:hidden">
      {stories.map((story) => (
        <StoryMobileCard
          key={story.id}
          story={story}
          onEdit={onEdit}
          onArchive={onArchive}
          onDelete={onDelete}
        />
      ))}
    </div>
    <div className="hidden overflow-visible border border-border md:block">
      <table className="w-full border-collapse text-left">
        <thead className="bg-surface-secondary">
          <tr className="font-body text-xs text-foreground">
            <th className="px-4 py-3 font-semibold">Title / language</th>
            <th className="px-4 py-3 font-semibold">Era</th>
            <th className="px-4 py-3 font-semibold">Related place</th>
            <th className="px-4 py-3 font-semibold">Status</th>
            <th className="px-4 py-3 font-semibold">Updated ↓</th>
            <th className="px-4 py-3 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {stories.map((story, index) => (
            <tr
              key={story.id}
              className={index % 2 === 0 ? "bg-surface/55" : "bg-card"}>
              <td className="px-4 py-4">
                <div className="flex items-center gap-3">
                  <img
                    src={story.image}
                    alt=""
                    className="size-14 shrink-0 bg-surface-secondary object-cover"
                  />
                  <div>
                    <h3 className="font-display text-sm font-semibold text-foreground">
                      {story.title}
                    </h3>
                    <p className="mt-1 font-body text-[0.65rem] text-muted-foreground">
                      {story.language} · v{story.version} · Sample data
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-4 py-4 font-body text-xs text-muted-foreground">
                {story.era}
              </td>
              <td className="px-4 py-4 font-body text-xs text-muted-foreground">
                {story.place}
              </td>
              <td className="px-4 py-4">
                <StoryStatusBadge status={story.status} />
              </td>
              <td className="whitespace-nowrap px-4 py-4 font-body text-xs text-muted-foreground">
                {story.updatedLabel}
              </td>
              <td className="px-4 py-4">
                <StoryActions
                  story={story}
                  onEdit={onEdit}
                  onArchive={onArchive}
                  onDelete={onDelete}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    {stories.length === 0 && (
      <p className="border border-dashed border-border p-8 text-center font-body text-sm text-muted-foreground">
        No stories match the current filters.
      </p>
    )}
  </section>
);
export default StoriesTable;
