import MediaMobileCard from "./MediaMobileCard";
import MediaTable from "./MediaTable";

// Chooses between the card list (mobile) and the table (tablet / desktop).
const MediaList = ({ records, onEdit }) => (
  <section className="mt-5" aria-label="Media records">
    <div className="space-y-4 md:hidden">
      {records.map((record) => (
        <MediaMobileCard key={record.id} record={record} onEdit={onEdit} />
      ))}
    </div>
    <MediaTable records={records} onEdit={onEdit} />
    {records.length === 0 && (
      <p className="rounded-sm border border-dashed border-border p-8 text-center font-body text-sm text-muted-foreground">
        No media records match the current filters.
      </p>
    )}
  </section>
);
export default MediaList;
