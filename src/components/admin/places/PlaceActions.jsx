import { useEffect, useRef, useState } from "react";
import { FiArchive, FiEdit2, FiMoreHorizontal, FiTrash2 } from "react-icons/fi";
import { secondaryButton } from "../common/formStyles";

// Mobile card actions: "Edit place" + a "More" menu (archive / delete).
const PlaceActions = ({ place, onEdit, onArchive, onDelete }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const close = (event) => {
      if (event.type === "keydown" ? event.key === "Escape" : !ref.current?.contains(event.target))
        setOpen(false);
    };
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("keydown", close);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative flex gap-3">
      <button type="button" onClick={() => onEdit(place.id)} className={`${secondaryButton} px-4 py-3`}>
        <FiEdit2 aria-hidden="true" /> Edit place
      </button>
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className={`${secondaryButton} px-4 py-3`}>
        <FiMoreHorizontal aria-hidden="true" /> More
      </button>
      {open && (
        <div
          role="menu"
          className="absolute left-0 top-full z-20 mt-2 w-48 rounded-sm border border-border bg-card p-1 shadow-lg">
          <button
            type="button"
            role="menuitem"
            onClick={() => {
              onArchive(place.id);
              setOpen(false);
            }}
            className="flex w-full items-center gap-2 px-3 py-2.5 text-left font-body text-xs text-foreground hover:bg-surface">
            <FiArchive aria-hidden="true" />
            {place.status === "Archived" ? "Restore as draft" : "Archive"}
          </button>
          <button
            type="button"
            role="menuitem"
            onClick={() => {
              onDelete(place.id);
              setOpen(false);
            }}
            className="flex w-full items-center gap-2 px-3 py-2.5 text-left font-body text-xs text-destructive hover:bg-destructive/5">
            <FiTrash2 aria-hidden="true" /> Delete
          </button>
        </div>
      )}
    </div>
  );
};
export default PlaceActions;
