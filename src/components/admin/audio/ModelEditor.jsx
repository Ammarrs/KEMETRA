import { mediaLanguages } from "../../../data/adminMedia";
import AdminSelect from "../common/AdminSelect";
import Field from "../common/Field";
import { controlClass, mutedButton, primaryButton, secondaryButton } from "../common/formStyles";
import EditorPanel from "./EditorPanel";
import ModelIllustration from "./ModelIllustration";
import { PlaceField, StoryField } from "./PlaceStoryFields";
import TourStepsEditor from "./TourStepsEditor";
import { FiUpload } from "react-icons/fi";

const ModelEditor = ({ record, onChange, onSave, onCancel }) => {
  const set = (name) => (event) => onChange(name, event.target.value);
  return (
    <EditorPanel
      id="model-editor-title"
      title="3D model & tour"
      record={record}
      context="">
      <ModelIllustration place={record.place} />
      <p className="mt-3 font-body text-xs text-muted-foreground">
        {record.title || "Untitled experience"} · Sample data
      </p>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onSave();
        }}
        className="mt-5 space-y-5">
        <Field label="Experience title" required>
          <input required className={controlClass} value={record.title} onChange={set("title")} />
        </Field>
        <PlaceField value={record.place} onChange={(value) => onChange("place", value)} />
        <StoryField label="Related story" value={record.story} onChange={(value) => onChange("story", value)} />
        <Field label="Model reference" required>
          <input
            required
            className={controlClass}
            placeholder="No model reference supplied"
            value={record.modelRef}
            onChange={set("modelRef")}
          />
          <span className="mt-2 block text-[0.7rem] font-normal text-muted-foreground">
            Placeholder only · No live model or asset URL is connected.
          </span>
        </Field>

        <div className="rounded-sm border border-dashed border-primary/60 p-4">
          <div className="flex items-start gap-3">
            <FiUpload aria-hidden="true" className="mt-1 shrink-0 text-primary" />
            <div>
              <p className="font-body text-sm font-semibold text-foreground">Model attachment placeholder</p>
              <p className="mt-1 font-body text-xs text-muted-foreground">
                No model attached · GLB / glTF reference specimen
              </p>
            </div>
          </div>
          <button type="button" className={`${secondaryButton} mt-4 px-4 py-3`}>
            Choose model or link reference
          </button>
        </div>

        <Field label="Tour language">
          <AdminSelect label="Tour language" value={record.language} onChange={(value) => onChange("language", value)} options={mediaLanguages} />
        </Field>
        <Field label="Tour introduction">
          <textarea rows={4} className={`${controlClass} min-h-28 resize-y leading-6`} value={record.introduction} onChange={set("introduction")} />
        </Field>

        <TourStepsEditor steps={record.steps} onChange={(steps) => onChange("steps", steps)} />

        <Field label="Fallback description">
          <textarea rows={4} className={`${controlClass} min-h-28 resize-y leading-6`} value={record.fallback} onChange={set("fallback")} />
        </Field>

        <div className="flex flex-wrap gap-3">
          <button type="submit" className={`${primaryButton} px-5 py-3.5`}>Save 3D record</button>
          <button type="button" disabled className={`${mutedButton} px-5 py-3.5`}>Preview unavailable</button>
          <button type="button" onClick={onCancel} className={`${secondaryButton} px-5 py-3.5`}>Cancel</button>
        </div>
      </form>
    </EditorPanel>
  );
};
export default ModelEditor;
