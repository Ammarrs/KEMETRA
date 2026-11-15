import { FiX } from "react-icons/fi";
const input =
  "mt-2 w-full border border-border bg-card px-3 py-2.5 font-body text-sm text-foreground outline-none focus:border-primary";
const PlaceEditorModal = ({ place, onChange, onSave, onClose }) => {
  if (!place) return null;
  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-secondary/70 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="place-editor-title">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onSave();
        }}
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto border border-border bg-background p-5 shadow-2xl md:p-7">
        <div className="flex justify-between gap-4">
          <div>
            <p className="font-body text-[0.62rem] font-extrabold uppercase tracking-[0.18em] text-primary">
              Heritage record
            </p>
            <h2
              id="place-editor-title"
              className="mt-2 font-display text-3xl font-semibold text-foreground">
              {place.isNew ? "Add place" : "Edit place"}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="border border-border p-2"
            aria-label="Close place editor">
            <FiX />
          </button>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <label className="font-body text-xs font-semibold sm:col-span-2">
            Place name *
            <input
              required
              className={input}
              value={place.name}
              onChange={(event) => onChange("name", event.target.value)}
            />
          </label>
          <label className="font-body text-xs font-semibold">
            Location *
            <input
              required
              className={input}
              value={place.location}
              onChange={(event) => onChange("location", event.target.value)}
            />
          </label>
          <label className="font-body text-xs font-semibold">
            Era
            <select
              className={input}
              value={place.era}
              onChange={(event) => onChange("era", event.target.value)}>
              <option>Pharaonic</option>
              <option>Coptic</option>
              <option>Islamic</option>
            </select>
          </label>
          <label className="font-body text-xs font-semibold">
            Type
            <input
              className={input}
              value={place.type}
              onChange={(event) => onChange("type", event.target.value)}
            />
          </label>
          <label className="font-body text-xs font-semibold">
            Status
            <select
              className={input}
              value={place.status}
              onChange={(event) => onChange("status", event.target.value)}>
              <option>Draft</option>
              <option>Published</option>
              <option>Archived</option>
            </select>
          </label>
          <label className="font-body text-xs font-semibold">
            Field guide
            <select
              className={input}
              value={place.guide}
              onChange={(event) => onChange("guide", event.target.value)}>
              <option>Not attached</option>
              <option>Available¹</option>
            </select>
          </label>
          <label className="font-body text-xs font-semibold">
            3D model
            <select
              className={input}
              value={place.model}
              onChange={(event) => onChange("model", event.target.value)}>
              <option>Unavailable</option>
              <option>Available¹</option>
              <option>Processing</option>
            </select>
          </label>
          <label className="font-body text-xs font-semibold sm:col-span-2">
            Image path
            <input
              className={input}
              value={place.image}
              onChange={(event) => onChange("image", event.target.value)}
            />
          </label>
        </div>
        <div className="mt-6 flex gap-2 border-t border-border pt-5">
          <button
            type="submit"
            className="bg-primary px-4 py-2.5 font-body text-xs font-bold text-secondary">
            Save place
          </button>
          <button
            type="button"
            onClick={onClose}
            className="border border-border bg-card px-4 py-2.5 font-body text-xs font-semibold">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
export default PlaceEditorModal;
