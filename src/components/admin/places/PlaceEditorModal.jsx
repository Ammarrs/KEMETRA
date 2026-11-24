import { useEffect } from "react";
import { FiArchive, FiTrash2, FiX } from "react-icons/fi";
import AdminSelect from "../common/AdminSelect";
import Field from "../common/Field";
import { controlClass, primaryButton, secondaryButton } from "../common/formStyles";
import { placeEras, placeStatuses, placeTypes } from "../../../data/adminPlaces";

const PlaceEditorModal = ({ place, onChange, onSave, onClose, onArchive, onDelete }) => {
  useEffect(() => {
    if (!place) return;
    const onKey = (event) => event.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [place, onClose]);

  if (!place) return null;
  const set = (name) => (event) => onChange(name, event.target.value);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-secondary/70 p-0 sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="place-editor-title"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onSave();
        }}
        className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-md border border-border bg-background p-5 shadow-2xl sm:rounded-sm md:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-body text-[0.68rem] font-extrabold uppercase tracking-[0.2em] text-muted">
              Heritage record
            </p>
            <h2 id="place-editor-title" className="mt-2 font-display text-3xl font-semibold text-foreground">
              {place.isNew ? "Add place" : "Edit place"}
            </h2>
            <p className="mt-1 font-body text-xs text-muted-foreground">
              Sample data · Changes stay in this local prototype.
            </p>
          </div>
          <button type="button" onClick={onClose} aria-label="Close place editor" className={`${secondaryButton} p-2.5`}>
            <FiX aria-hidden="true" />
          </button>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <Field label="Place name" required className="sm:col-span-2">
            <input required autoFocus className={controlClass} value={place.name} onChange={set("name")} />
          </Field>
          <Field label="Location" required>
            <input required className={controlClass} value={place.location} onChange={set("location")} />
          </Field>
          <Field label="Era">
            <AdminSelect label="Era" value={place.era} onChange={(v) => onChange("era", v)} options={placeEras} />
          </Field>
          <Field label="Type">
            <input list="place-type-options" className={controlClass} value={place.type} onChange={set("type")} />
            <datalist id="place-type-options">
              {placeTypes.map((type) => (
                <option key={type} value={type} />
              ))}
            </datalist>
          </Field>
          <Field label="Status">
            <AdminSelect label="Status" value={place.status} onChange={(v) => onChange("status", v)} options={placeStatuses} />
          </Field>
          <Field label="Field guide">
            <AdminSelect label="Field guide" value={place.guide} onChange={(v) => onChange("guide", v)} options={["Not attached", "Available¹"]} />
          </Field>
          <Field label="3D model">
            <AdminSelect label="3D model" value={place.model} onChange={(v) => onChange("model", v)} options={["Unavailable", "Processing", "Available¹"]} />
          </Field>
          <Field label="Image path" className="sm:col-span-2" hint="Optional. Records without an image show text only.">
            <input className={controlClass} value={place.image} onChange={set("image")} placeholder="/profile/giza-pyramids.jpg" />
          </Field>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-divider pt-6">
          <button type="submit" className={`${primaryButton} px-5 py-3`}>Save place</button>
          <button type="button" onClick={onClose} className={`${secondaryButton} px-5 py-3`}>Cancel</button>
          {!place.isNew && (
            <div className="flex w-full gap-3 sm:ml-auto sm:w-auto">
              <button type="button" onClick={() => onArchive(place.id)} className={`${secondaryButton} px-4 py-3`}>
                <FiArchive aria-hidden="true" />
                {place.status === "Archived" ? "Restore as draft" : "Archive"}
              </button>
              <button type="button" onClick={() => onDelete(place.id)} className={`${secondaryButton} px-4 py-3 text-destructive`}>
                <FiTrash2 aria-hidden="true" /> Delete
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};
export default PlaceEditorModal;
