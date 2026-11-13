import { FiImage } from "react-icons/fi";

const Field = ({ label, required, children, help }) => (
  <label className="block font-body text-xs font-semibold text-foreground">
    {label}
    {required && " *"}
    {children}
    {help && (
      <span className="mt-1 block text-[0.67rem] font-normal leading-5 text-muted-foreground">
        {help}
      </span>
    )}
  </label>
);
const inputClass =
  "mt-2 w-full border border-border bg-card px-3 py-2.5 font-body text-sm font-normal text-foreground outline-none focus:border-primary";

const MilestoneEditor = ({
  milestone,
  onChange,
  onSave,
  onCancel,
  onDelete,
  image,
}) => {
  if (!milestone)
    return (
      <aside className="border border-divider bg-surface p-6 font-body text-sm text-muted-foreground">
        Select a milestone to edit.
      </aside>
    );
  return (
    <aside
      className="border border-divider bg-surface p-5 md:p-6"
      aria-labelledby="editor-title">
      <p className="font-body text-[0.62rem] font-extrabold uppercase tracking-[0.18em] text-primary">
        Selected / {milestone.era}
      </p>
      <div className="mt-2 flex items-center justify-between gap-4 border-b border-primary/40 pb-4">
        <h2
          id="editor-title"
          className="font-display text-3xl font-semibold text-foreground">
          Edit milestone
        </h2>
        <span className="bg-primary/10 px-2 py-1 font-body text-[0.62rem] font-bold text-muted">
          {milestone.status}
        </span>
      </div>
      <p className="mt-4 font-body text-xs text-muted-foreground">
        Sample data · Changes remain local until saved.
      </p>
      <form
        className="mt-5 space-y-4"
        onSubmit={(event) => {
          event.preventDefault();
          onSave();
        }}>
        <Field label="Milestone title" required>
          <input
            className={inputClass}
            value={milestone.title}
            onChange={(event) => onChange("title", event.target.value)}
          />
        </Field>
        <Field
          label="Date or range label"
          required
          help="A descriptive period is used until a historical range is verified.">
          <input
            className={inputClass}
            value={milestone.dateLabel}
            onChange={(event) => onChange("dateLabel", event.target.value)}
          />
        </Field>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Era" required>
            <select
              className={inputClass}
              value={milestone.era}
              onChange={(event) => onChange("era", event.target.value)}>
              <option>Early Dynastic</option>
              <option>Old Kingdom</option>
              <option>New Kingdom</option>
              <option>Greco-Roman</option>
              <option>Coptic Egypt</option>
              <option>Islamic Egypt</option>
            </select>
          </Field>
          <Field label="Date certainty">
            <select
              className={inputClass}
              value={milestone.certainty}
              onChange={(event) => onChange("certainty", event.target.value)}>
              <option>Approximate</option>
              <option>Verified</option>
              <option>Uncertain</option>
            </select>
          </Field>
        </div>
        <Field label="Summary" required>
          <textarea
            className={`${inputClass} min-h-24 resize-y`}
            value={milestone.summary}
            onChange={(event) => onChange("summary", event.target.value)}
          />
        </Field>
        <Field label="Long description" required>
          <textarea
            className={`${inputClass} min-h-40 resize-y`}
            value={milestone.description}
            onChange={(event) => onChange("description", event.target.value)}
          />
        </Field>
        <figure>
          <img
            className="aspect-[16/7] w-full bg-surface-secondary object-cover"
            src={image}
            alt={milestone.imageDescription}
          />
          <figcaption className="mt-2 font-body text-[0.67rem] text-muted-foreground">
            Existing Giza collection image · Sample image asset
          </figcaption>
        </figure>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className="inline-flex items-center gap-2 border border-border bg-card px-3 py-2 font-body text-xs font-semibold text-foreground hover:border-primary">
            <FiImage aria-hidden="true" /> Replace image
          </button>
          <button
            type="button"
            className="border border-border bg-card px-3 py-2 font-body text-xs font-semibold text-foreground hover:border-destructive">
            Remove
          </button>
        </div>
        <Field label="Image description" required>
          <input
            className={inputClass}
            value={milestone.imageDescription}
            onChange={(event) =>
              onChange("imageDescription", event.target.value)
            }
          />
        </Field>
        <Field label="Related places">
          <select
            className={inputClass}
            value={milestone.place}
            onChange={(event) => onChange("place", event.target.value)}>
            <option>Giza Pyramids</option>
            <option>Karnak Temple</option>
            <option>Philae Temple</option>
            <option>The Hanging Church</option>
            <option>Sultan Hassan</option>
          </select>
        </Field>
        <Field label="Related stories">
          <select
            className={inputClass}
            value={milestone.story}
            onChange={(event) => onChange("story", event.target.value)}>
            <option>Story pending</option>
            <option>Giza: a horizon in stone</option>
            <option>Reading the walls of Karnak</option>
            <option>Along the Nile at Philae</option>
            <option>A sanctuary above the city</option>
            <option>The art of the courtyard</option>
          </select>
        </Field>
        <Field label="Display order">
          <select
            className={inputClass}
            value={milestone.orderLabel}
            onChange={(event) => onChange("orderLabel", event.target.value)}>
            <option>First milestone</option>
            <option>After Communities along the Nile</option>
            <option>After Building the Giza landscape</option>
          </select>
        </Field>
        <Field label="Source / verification note">
          <textarea
            className={`${inputClass} min-h-24 resize-y`}
            value={milestone.sourceNote}
            onChange={(event) => onChange("sourceNote", event.target.value)}
          />
        </Field>
        <div className="flex flex-wrap gap-2 border-t border-border pt-5">
          <button
            type="submit"
            className="bg-primary px-4 py-2.5 font-body text-xs font-bold text-secondary hover:bg-primary-hover">
            Save milestone
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="border border-border bg-card px-4 py-2.5 font-body text-xs font-semibold text-foreground hover:border-primary">
            Cancel
          </button>
          <button
            type="button"
            onClick={() => onDelete(milestone.id)}
            className="border border-destructive bg-card px-4 py-2.5 font-body text-xs font-semibold text-destructive">
            Delete
          </button>
        </div>
      </form>
    </aside>
  );
};

export default MilestoneEditor;
