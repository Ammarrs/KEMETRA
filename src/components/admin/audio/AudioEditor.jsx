import { FiUpload } from "react-icons/fi";
const input =
  "mt-2 w-full border border-border bg-card px-3 py-2.5 font-body text-sm text-foreground outline-none focus:border-primary";
const AudioEditor = ({ record, onChange, onSave, onCancel }) => {
  if (!record)
    return (
      <aside className="mt-8 border border-divider bg-surface p-6 font-body text-sm text-muted-foreground">
        Select an audio record to edit.
      </aside>
    );
  return (
    <aside
      className="mt-8 border border-divider bg-surface p-5 md:p-6"
      aria-labelledby="audio-editor-title">
      <p className="font-body text-[0.62rem] font-extrabold uppercase tracking-[0.18em] text-primary">
        Selected / {record.title}
      </p>
      <div className="mt-2 flex items-center justify-between gap-4 border-b border-primary/40 pb-4">
        <h2
          id="audio-editor-title"
          className="font-display text-3xl font-semibold text-foreground">
          Audio record
        </h2>
        <span className="bg-primary/10 px-2 py-1 font-body text-[0.62rem] font-bold text-muted">
          {record.status}
        </span>
      </div>
      <p className="mt-4 font-body text-xs text-muted-foreground">
        Sample data · Context: {record.place}
      </p>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onSave();
        }}
        className="mt-5 space-y-4">
        <label className="block font-body text-xs font-semibold">
          Recording title *
          <input
            required
            className={input}
            value={record.title}
            onChange={(event) => onChange("title", event.target.value)}
          />
        </label>
        <label className="block font-body text-xs font-semibold">
          Link an audio source
          <input
            className={input}
            placeholder="Audio URL placeholder — not supplied"
            value={record.audioUrl}
            onChange={(event) => onChange("audioUrl", event.target.value)}
          />
          <span className="mt-1 block text-[0.67rem] font-normal text-muted-foreground">
            Use a verified secure source in production.
          </span>
        </label>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="font-body text-xs font-semibold">
            Assigned place *
            <input
              required
              className={input}
              value={record.place}
              onChange={(event) => onChange("place", event.target.value)}
            />
          </label>
          <label className="font-body text-xs font-semibold">
            Assigned story
            <input
              className={input}
              value={record.story}
              onChange={(event) => onChange("story", event.target.value)}
            />
          </label>
          <label className="font-body text-xs font-semibold">
            Language *
            <select
              className={input}
              value={record.language}
              onChange={(event) => onChange("language", event.target.value)}>
              <option>English</option>
              <option>Arabic</option>
            </select>
          </label>
          <label className="font-body text-xs font-semibold">
            Transcript review
            <select
              className={input}
              value={record.transcriptStatus}
              onChange={(event) =>
                onChange("transcriptStatus", event.target.value)
              }>
              <option>Transcript draft</option>
              <option>Transcript reviewed</option>
              <option>Transcript missing</option>
            </select>
          </label>
        </div>
        <label className="block font-body text-xs font-semibold">
          Narration / transcript *
          <textarea
            required
            className={`${input} min-h-40 resize-y`}
            value={record.transcript}
            onChange={(event) => onChange("transcript", event.target.value)}
          />
        </label>
        <div className="border border-border bg-card p-4">
          <p className="font-display text-lg text-foreground">
            Narration file placeholder
          </p>
          <p className="mt-1 font-body text-xs text-muted-foreground">
            No file uploaded · MP3 / WAV · Static specimen
          </p>
          <button
            type="button"
            className="mt-3 inline-flex items-center gap-2 border border-border px-3 py-2 font-body text-xs font-semibold text-foreground hover:border-primary">
            <FiUpload /> Choose audio file
          </button>
        </div>
        <div className="flex flex-wrap gap-2 border-t border-border pt-5">
          <button
            type="submit"
            className="bg-primary px-4 py-2.5 font-body text-xs font-bold text-secondary hover:bg-primary-hover">
            Save audio record
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="border border-border bg-card px-4 py-2.5 font-body text-xs font-semibold">
            Cancel
          </button>
        </div>
      </form>
    </aside>
  );
};
export default AudioEditor;
