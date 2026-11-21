import { FiEdit2, FiHeadphones } from "react-icons/fi";

const styles = {
  Processing: "bg-primary/10 text-muted",
  Available: "bg-success/10 text-success",
  Error: "bg-destructive/10 text-destructive",
};
const Badge = ({ status }) => (
  <span
    className={`inline-flex items-center gap-1.5 px-2 py-1 font-body text-[0.62rem] font-bold ${styles[status]}`}>
    <span className="size-1.5 rounded-full bg-current" aria-hidden="true" />
    {status}
  </span>
);

const AudioList = ({ records, onEdit, onPreview }) => (
  <section className="mt-6" aria-label="Audio records">
    <div className="space-y-3 md:hidden">
      {records.map((record) => (
        <article key={record.id} className="border border-border bg-card p-4">
          <div className="flex items-start justify-between gap-3">
            <div className="flex gap-3">
              <FiHeadphones className="mt-1 shrink-0 text-primary" />
              <div>
                <h3 className="font-display text-base font-semibold text-foreground">
                  {record.title}
                </h3>
                <p className="mt-1 font-body text-[0.65rem] text-muted-foreground">
                  Audio · {record.language} · {record.transcriptStatus}
                </p>
              </div>
            </div>
            <Badge status={record.status} />
          </div>
          <div className="mt-3 border-y border-border py-3 font-body text-xs leading-6 text-muted-foreground">
            <p>{record.place}</p>
            <p>{record.story}</p>
          </div>
          <div className="mt-3 flex gap-2">
            <button
              type="button"
              onClick={() => onEdit(record.id)}
              className="inline-flex items-center gap-2 border border-border px-3 py-2 font-body text-xs font-semibold text-foreground hover:border-primary">
              <FiEdit2 /> Edit
            </button>
            <button
              type="button"
              onClick={() => onPreview(record.id)}
              disabled={record.status !== "Available"}
              className="border border-border px-3 py-2 font-body text-xs text-foreground hover:border-primary disabled:cursor-not-allowed disabled:opacity-35">
              Preview
            </button>
          </div>
        </article>
      ))}
    </div>
    <div className="hidden border border-border md:block">
      <table className="w-full border-collapse text-left">
        <thead className="bg-surface-secondary">
          <tr className="font-body text-xs text-foreground">
            <th className="px-4 py-3">Audio record</th>
            <th className="px-4 py-3">Assigned place / story</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr
              key={record.id}
              className={index % 2 === 0 ? "bg-surface/55" : "bg-card"}>
              <td className="px-4 py-4">
                <div className="flex items-start gap-3">
                  <FiHeadphones className="mt-1 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-display text-sm font-semibold text-foreground">
                      {record.title}
                    </h3>
                    <p className="mt-1 font-body text-[0.65rem] text-muted-foreground">
                      Audio · {record.language} · {record.transcriptStatus}
                    </p>
                    <p className="mt-1 font-body text-[0.6rem] text-muted-foreground">
                      Sample data
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-4 py-4">
                <p className="font-body text-xs text-foreground">
                  {record.place}
                </p>
                <p className="mt-1 font-body text-xs text-muted-foreground">
                  {record.story}
                </p>
              </td>
              <td className="px-4 py-4">
                <Badge status={record.status} />
              </td>
              <td className="px-4 py-4">
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => onEdit(record.id)}
                    className="inline-flex items-center gap-2 border border-border bg-card px-3 py-2 font-body text-xs font-semibold text-foreground hover:border-primary">
                    <FiEdit2 /> Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => onPreview(record.id)}
                    disabled={record.status !== "Available"}
                    className="border border-border bg-card px-3 py-2 font-body text-xs text-foreground hover:border-primary disabled:cursor-not-allowed disabled:opacity-35">
                    Preview
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    {records.length === 0 && (
      <p className="border border-dashed border-border p-8 text-center font-body text-sm text-muted-foreground">
        No audio records match the current filters.
      </p>
    )}
  </section>
);
export default AudioList;
