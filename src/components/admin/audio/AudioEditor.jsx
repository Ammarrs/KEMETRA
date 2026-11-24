import { FiPlay, FiUpload } from "react-icons/fi";
import { mediaLanguages, transcriptStatuses } from "../../../data/adminMedia";
import AdminSelect from "../common/AdminSelect";
import Field from "../common/Field";
import { controlClass, mutedButton, primaryButton, secondaryButton } from "../common/formStyles";
import EditorPanel from "./EditorPanel";
import { PlaceField, StoryField } from "./PlaceStoryFields";

const progressNote = {
  Processing: "Processing upload · Illustrative progress only",
  Error: "Processing failed · Illustrative status only",
};

const AudioEditor = ({ record, onChange, onSave, onCancel }) => {
  const set = (name) => (event) => onChange(name, event.target.value);
  const playbackNote =
    record.status === "Available"
      ? "Playback unavailable · No live audio connected."
      : "Playback unavailable until processing completes.";

  return (
    <EditorPanel
      id="audio-editor-title"
      title="Audio record"
      record={record}
      context={`Sample data · Context: ${record.place || "No place assigned"}`}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onSave();
        }}
        className="mt-5 space-y-5">
        <Field label="Recording title" required>
          <input required className={controlClass} value={record.title} onChange={set("title")} />
        </Field>

        <div className="rounded-sm border border-dashed border-primary/60 p-4">
          <div className="flex items-start gap-3">
            <FiUpload aria-hidden="true" className="mt-1 shrink-0 text-primary" />
            <div>
              <p className="font-body text-sm font-semibold text-foreground">Narration file placeholder</p>
              <p className="mt-1 font-body text-xs text-muted-foreground">
                No file uploaded · MP3 / WAV · Static specimen
              </p>
            </div>
          </div>
          <button type="button" className={`${secondaryButton} mt-4 px-4 py-3`}>
            Choose audio file
          </button>
        </div>

        <Field label="Or link an audio source">
          <input
            className={controlClass}
            placeholder="Audio URL placeholder — not supplied"
            value={record.audioUrl}
            onChange={set("audioUrl")}
          />
          <span className="mt-2 block text-[0.7rem] font-normal text-muted-foreground">
            No real asset URL is connected. Use a verified secure source in production.
          </span>
        </Field>

        {progressNote[record.status] && (
          <div>
            <div className="h-1 w-full bg-surface-secondary" role="presentation">
              <div className={`h-full ${record.status === "Error" ? "w-2/5 bg-destructive" : "w-1/4 bg-primary"}`} />
            </div>
            <p className="mt-2 font-body text-xs text-muted-foreground">{progressNote[record.status]}</p>
          </div>
        )}

        <PlaceField value={record.place} onChange={(value) => onChange("place", value)} />
        <StoryField label="Assigned story" value={record.story} onChange={(value) => onChange("story", value)} />
        <Field label="Language" required>
          <AdminSelect label="Language" value={record.language} onChange={(value) => onChange("language", value)} options={mediaLanguages} />
        </Field>
        <Field label="Narration / transcript" required>
          <textarea
            required
            rows={6}
            className={`${controlClass} min-h-40 resize-y leading-6`}
            value={record.transcript}
            onChange={set("transcript")}
          />
        </Field>
        <Field label="Transcript review">
          <AdminSelect
            label="Transcript review"
            value={record.transcriptStatus}
            onChange={(value) => onChange("transcriptStatus", value)}
            options={transcriptStatuses.map((value) => ({
              value,
              label: value === "Transcript draft" ? "Draft — review required" : value.replace("Transcript ", "").replace(/^./, (c) => c.toUpperCase()),
            }))}
          />
        </Field>

        <div className="rounded-sm bg-secondary p-5 text-background">
          <h3 className="font-display text-xl font-medium">Narration preview</h3>
          <p className="mt-3 font-body text-xs text-background/70">
            {record.language} · Duration not supplied
          </p>
          <p className="mt-1 font-body text-xs text-background/70">{playbackNote}</p>
          <button
            type="button"
            disabled
            className={`${mutedButton} mt-4 bg-background/15 px-4 py-3 text-background/60`}>
            <FiPlay aria-hidden="true" /> Play unavailable
          </button>
          <div className="mt-5 h-0.5 w-full bg-background/20" role="presentation" />
        </div>
        <p className="font-body text-xs leading-5 text-muted-foreground">
          Story narration only, not ambient music. Preview controls are static and do not play audio.
        </p>

        <div className="flex flex-wrap gap-3">
          <button type="submit" className={`${primaryButton} px-5 py-3.5`}>Save audio record</button>
          <button type="button" onClick={onCancel} className={`${secondaryButton} px-5 py-3.5`}>Cancel</button>
        </div>
      </form>
    </EditorPanel>
  );
};
export default AudioEditor;
