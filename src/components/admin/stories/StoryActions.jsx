import { useState } from "react";
import { FiArchive, FiEdit2, FiMoreHorizontal, FiTrash2 } from "react-icons/fi";

const StoryActions = ({ story, onEdit, onArchive, onDelete }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative flex items-center gap-2">
      <button
        type="button"
        onClick={() => onEdit(story.id)}
        className="inline-flex items-center gap-2 border border-border px-3 py-2 font-body text-xs font-semibold text-foreground hover:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
        aria-label={`Edit ${story.title}`}>
        <FiEdit2 aria-hidden="true" />
        <span className="md:hidden">Edit story</span>
      </button>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex items-center gap-2 border border-border px-3 py-2 font-body text-xs font-semibold text-foreground hover:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
        aria-expanded={open}
        aria-label={`More actions for ${story.title}`}>
        <FiMoreHorizontal aria-hidden="true" />
        <span className="md:hidden">More</span>
      </button>
      {open && (
        <div className="absolute right-0 top-full z-20 mt-2 w-40 border border-border bg-card p-1 shadow-lg">
          <button
            type="button"
            onClick={() => {
              onArchive(story.id);
              setOpen(false);
            }}
            className="flex w-full items-center gap-2 px-3 py-2 text-left font-body text-xs text-foreground hover:bg-surface">
            <FiArchive aria-hidden="true" />
            {story.status === "Archived" ? "Restore draft" : "Archive"}
          </button>
          <button
            type="button"
            onClick={() => {
              onDelete(story.id);
              setOpen(false);
            }}
            className="flex w-full items-center gap-2 px-3 py-2 text-left font-body text-xs text-destructive hover:bg-destructive/5">
            <FiTrash2 aria-hidden="true" />
            Delete
          </button>
        </div>
      )}
    </div>
  );
};
export default StoryActions;
