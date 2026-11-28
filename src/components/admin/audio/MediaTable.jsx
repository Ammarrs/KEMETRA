import StatusBadge from "../common/StatusBadge";
import { mutedButton, secondaryButton } from "../common/formStyles";
import { modelNote } from "../../../data/adminMedia";
import MediaIcon from "./MediaIcon";

const cell = "px-4 py-5 align-top font-body text-sm text-foreground";
const pending = new Set(["Processing", "Unavailable"]);

// Table layout used from the md breakpoint up.
const MediaTable = ({ records, onEdit }) => (
  <div className="hidden overflow-hidden rounded-sm border border-border md:block">
    <table className="w-full border-collapse text-left">
      <thead className="bg-surface-secondary">
        <tr className="font-body text-sm text-muted-foreground">
          <th scope="col" className="px-4 py-4 font-bold text-foreground">Media record / type</th>
          <th scope="col" className="px-4 py-4 font-medium">
            <span className="lg:hidden">Place / story</span>
            <span className="hidden lg:inline">Assigned place / story</span>
          </th>
          <th scope="col" className="px-4 py-4 font-medium">Status</th>
          <th scope="col" className="px-4 py-4 font-medium">Actions</th>
        </tr>
      </thead>
      <tbody>
        {records.map((record) => (
          <tr
            key={record.id}
            className={`border-t border-divider ${pending.has(record.status) ? "bg-surface" : "bg-background"}`}>
            <td className={cell}>
              <div className="flex items-start gap-3">
                <MediaIcon kind={record.kind} className="mt-1" />
                <div className="min-w-0">
                  <h3 className="font-display text-base font-semibold text-foreground">
                    {record.title}
                  </h3>
                  <p className="mt-1 font-body text-xs leading-5 text-muted-foreground">
                    {record.kind === "audio" ? "Audio" : "3D model"} ·{" "}
                    {record.kind === "audio"
                      ? `${record.language} · ${record.transcriptStatus}`
                      : modelNote(record)}
                  </p>
                  <p className="font-body text-xs text-muted-foreground">Sample data</p>
                </div>
              </div>
            </td>
            <td className={cell}>
              <p>{record.place}</p>
              <p className="mt-1 text-xs text-muted-foreground">{record.story || "—"}</p>
            </td>
            <td className={`${cell} whitespace-nowrap`}>
              <StatusBadge status={record.status} />
            </td>
            <td className={cell}>
              <div className="flex flex-wrap gap-2.5">
                <button
                  type="button"
                  onClick={() => onEdit(record)}
                  aria-label={`Edit ${record.title}`}
                  className={`${secondaryButton} px-5 py-3.5 text-sm`}>
                  Edit
                </button>
                <button
                  type="button"
                  disabled
                  title="Preview disabled · No live asset connected"
                  className={`${mutedButton} px-5 py-3.5 text-sm`}>
                  Preview
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
export default MediaTable;
