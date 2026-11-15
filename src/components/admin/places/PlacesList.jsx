import { useState } from "react";
import { FiArchive, FiEdit2, FiMoreHorizontal, FiTrash2 } from "react-icons/fi";

const statusStyle = {
  Draft: "bg-primary/10 text-muted",
  Published: "bg-success/10 text-success",
  Archived: "bg-muted-foreground/10 text-muted-foreground",
};
const Badge = ({ status }) => (
  <span
    className={`inline-flex items-center gap-1 px-2 py-1 font-body text-[0.62rem] font-bold ${statusStyle[status]}`}>
    <span className="size-1.5 rounded-full bg-current" />
    {status}
  </span>
);
const Actions = ({ place, onEdit, onArchive, onDelete }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative flex gap-2">
      <button
        type="button"
        onClick={() => onEdit(place.id)}
        className="inline-flex items-center gap-2 border border-border bg-card px-3 py-2 font-body text-xs font-semibold text-foreground hover:border-primary">
        <FiEdit2 /> <span className="md:hidden">Edit place</span>
        <span className="hidden md:inline">Edit</span>
      </button>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-2 border border-border bg-card px-3 py-2 font-body text-xs text-foreground hover:border-primary">
        <FiMoreHorizontal />
        <span className="md:hidden">More</span>
      </button>
      {open && (
        <div className="absolute right-0 top-full z-20 mt-2 w-40 border border-border bg-card p-1 shadow-lg">
          <button
            type="button"
            onClick={() => {
              onArchive(place.id);
              setOpen(false);
            }}
            className="flex w-full items-center gap-2 px-3 py-2 font-body text-xs text-foreground hover:bg-surface">
            <FiArchive />
            {place.status === "Archived" ? "Restore draft" : "Archive"}
          </button>
          <button
            type="button"
            onClick={() => {
              onDelete(place.id);
              setOpen(false);
            }}
            className="flex w-full items-center gap-2 px-3 py-2 font-body text-xs text-destructive hover:bg-destructive/5">
            <FiTrash2 />
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

const PlacesList = ({ places, onEdit, onArchive, onDelete }) => (
  <section className="mt-6" aria-label="Places catalog">
    <div className="space-y-3 md:hidden">
      {places.map((place) => (
        <article key={place.id} className="border border-border bg-surface p-3">
          <div className="flex gap-3">
            <img
              src={place.image}
              alt=""
              className="size-16 shrink-0 bg-surface-secondary object-cover"
            />
            <div className="min-w-0 flex-1">
              <h3 className="font-display text-base font-semibold text-foreground">
                {place.name}
              </h3>
              <p className="mt-1 font-body text-[0.65rem] text-muted-foreground">
                {place.location} · Sample data
              </p>
            </div>
            <Badge status={place.status} />
          </div>
          <p className="mt-3 font-body text-xs text-muted-foreground">
            {place.era} · {place.type}
          </p>
          <div className="mt-3 border-y border-border py-3 font-body text-xs leading-6 text-muted-foreground">
            <p>Field guide: {place.guide}</p>
            <p>3D model: {place.model}</p>
          </div>
          <div className="mt-3">
            <Actions
              place={place}
              onEdit={onEdit}
              onArchive={onArchive}
              onDelete={onDelete}
            />
          </div>
        </article>
      ))}
    </div>
    <div className="hidden overflow-visible border border-border md:block">
      <table className="w-full border-collapse text-left">
        <thead className="bg-surface-secondary">
          <tr className="font-body text-xs text-foreground">
            <th className="px-4 py-3">Place name</th>
            <th className="px-4 py-3">Location</th>
            <th className="px-4 py-3">Era</th>
            <th className="px-4 py-3">Type</th>
            <th className="px-4 py-3">Guide</th>
            <th className="px-4 py-3">3D model</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {places.map((place, index) => (
            <tr
              key={place.id}
              className={index % 2 === 0 ? "bg-surface/55" : "bg-card"}>
              <td className="px-4 py-4">
                <div className="flex items-center gap-3">
                  <img
                    src={place.image}
                    alt=""
                    className="size-14 shrink-0 bg-surface-secondary object-cover"
                  />
                  <div>
                    <h3 className="font-display text-sm font-semibold text-foreground">
                      {place.name}
                    </h3>
                    <p className="mt-1 font-body text-[0.65rem] text-muted-foreground">
                      Sample data
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-4 py-4 font-body text-xs text-muted-foreground">
                {place.location}
              </td>
              <td className="px-4 py-4 font-body text-xs text-muted-foreground">
                {place.era}
              </td>
              <td className="px-4 py-4 font-body text-xs text-muted-foreground">
                {place.type}
              </td>
              <td className="px-4 py-4 font-body text-xs text-muted-foreground">
                {place.guide}
              </td>
              <td className="px-4 py-4 font-body text-xs text-muted-foreground">
                {place.model}
              </td>
              <td className="px-4 py-4">
                <Badge status={place.status} />
              </td>
              <td className="px-4 py-4">
                <Actions
                  place={place}
                  onEdit={onEdit}
                  onArchive={onArchive}
                  onDelete={onDelete}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    {places.length === 0 && (
      <p className="border border-dashed border-border p-8 text-center font-body text-sm text-muted-foreground">
        No places match the current filters.
      </p>
    )}
  </section>
);
export default PlacesList;
