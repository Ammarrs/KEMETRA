import { FiEdit2, FiEye } from "react-icons/fi";
import StatusBadge from "../common/StatusBadge";
import { mutedButton, secondaryButton } from "../common/formStyles";
import { modelNote } from "../../../data/adminMedia";
import MediaIcon from "./MediaIcon";

const metaLine = (record) =>
  record.kind === "audio"
    ? `${record.language} · ${record.transcriptStatus}`
    : modelNote(record);

// Card layout used below the md breakpoint.
const MediaMobileCard = ({ record, onEdit }) => (
  <article className="rounded-sm border border-border bg-surface p-4">
    <div className="flex items-center justify-between gap-3">
      <p className="flex items-center gap-2 font-body text-xs text-muted-foreground">
        <MediaIcon kind={record.kind} />
        {record.kind === "audio" ? "Audio" : "3D model"}
      </p>
      <StatusBadge status={record.status} />
    </div>
    <h3 className="mt-4 font-display text-xl font-medium leading-tight text-foreground">
      {record.title}
    </h3>
    <p className="mt-1 font-body text-xs text-muted-foreground">Sample data</p>
    <p className="mt-4 font-body text-sm text-foreground">Place: {record.place}</p>
    <p className="mt-1 font-body text-sm text-foreground">Story: {record.story || "—"}</p>
    <p className="mt-4 border-t border-divider pt-4 font-body text-sm text-muted-foreground">
      {metaLine(record)}
    </p>
    <div className="mt-4 flex gap-3">
      <button type="button" onClick={() => onEdit(record)} className={`${secondaryButton} px-4 py-3`}>
        <FiEdit2 aria-hidden="true" /> Edit record
      </button>
      <button type="button" disabled className={`${mutedButton} px-4 py-3`}>
        <FiEye aria-hidden="true" /> Preview
      </button>
    </div>
    <p className="mt-3 font-body text-xs text-muted-foreground">
      Preview disabled · No live asset connected
    </p>
  </article>
);
export default MediaMobileCard;
