import { FiX } from "react-icons/fi";
const inputClass =
  "mt-2 w-full border border-border bg-card px-3 py-2.5 font-body text-sm text-foreground outline-none focus:border-primary";
const StoryEditorModal = ({ story, onChange, onSave, onClose }) => {
  if (!story) return null;
  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-secondary/70 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="story-editor-title">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onSave();
        }}
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto border border-border bg-background p-5 shadow-2xl md:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-body text-[0.62rem] font-extrabold uppercase tracking-[0.18em] text-primary">
              Editorial record
            </p>
            <h2
              id="story-editor-title"
              className="mt-2 font-display text-3xl font-semibold text-foreground">
              {story.isNew ? "Add story" : "Edit story"}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="border border-border p-2 text-foreground"
            aria-label="Close story editor">
            <FiX aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <label className="font-body text-xs font-semibold text-foreground sm:col-span-2">
            Story title *
            <input
              required
              className={inputClass}
              value={story.title}
              onChange={(event) => onChange("title", event.target.value)}
            />
          </label>
          <label className="font-body text-xs font-semibold text-foreground">
            Era *
            <select
              className={inputClass}
              value={story.era}
              onChange={(event) => onChange("era", event.target.value)}>
              <option>Pharaonic</option>
              <option>Coptic</option>
              <option>Islamic</option>
            </select>
          </label>
          <label className="font-body text-xs font-semibold text-foreground">
            Status *
            <select
              className={inputClass}
              value={story.status}
              onChange={(event) => onChange("status", event.target.value)}>
              <option>Draft</option>
              <option>Published</option>
              <option>Archived</option>
            </select>
          </label>
          <label className="font-body text-xs font-semibold text-foreground">
            Related place *
            <input
              required
              className={inputClass}
              value={story.place}
              onChange={(event) => onChange("place", event.target.value)}
            />
          </label>
          <label className="font-body text-xs font-semibold text-foreground">
            Language
            <select
              className={inputClass}
              value={story.language}
              onChange={(event) => onChange("language", event.target.value)}>
              <option>English</option>
              <option>Arabic</option>
            </select>
          </label>
          <label className="font-body text-xs font-semibold text-foreground sm:col-span-2">
            Summary
            <textarea
              className={`${inputClass} min-h-24 resize-y`}
              value={story.summary ?? ""}
              onChange={(event) => onChange("summary", event.target.value)}
            />
          </label>
          <label className="font-body text-xs font-semibold text-foreground sm:col-span-2">
            Cover image path
            <input
              className={inputClass}
              value={story.image}
              onChange={(event) => onChange("image", event.target.value)}
            />
          </label>
        </div>
        <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
          <button
            type="submit"
            className="bg-primary px-4 py-2.5 font-body text-xs font-bold text-secondary hover:bg-primary-hover">
            Save story
          </button>
          <button
            type="button"
            onClick={onClose}
            className="border border-border bg-card px-4 py-2.5 font-body text-xs font-semibold text-foreground">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
export default StoryEditorModal;
