import { shortName } from "../../../data/adminMedia";
import StatusBadge from "../common/StatusBadge";

// Shared frame for the audio / 3D editors: eyebrow, title, status and context line.
const EditorPanel = ({ id, title, record, context, children }) => (
  <section
    aria-labelledby={id}
    className="min-w-0 rounded-sm border border-divider bg-surface p-5 md:p-7">
    <p className="font-body text-[0.68rem] font-extrabold uppercase tracking-[0.2em] text-muted">
      {record.isNew ? "New record" : `Selected / ${shortName(record)}`}
    </p>
    <h2 id={id} className="mt-3 font-display text-3xl font-semibold text-foreground">
      {title}
    </h2>
    <hr className="mt-4 border-primary/40" />
    <div className="mt-4">
      <StatusBadge status={record.status} />
    </div>
    {context && <p className="mt-4 font-body text-xs text-muted-foreground">{context}</p>}
    {children}
  </section>
);
export default EditorPanel;
