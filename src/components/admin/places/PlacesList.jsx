import PlaceMobileCard from "./PlaceMobileCard";
import PlacesTable from "./PlacesTable";

// Chooses between the card list (mobile) and the table (tablet / desktop).
const PlacesList = ({ places, onEdit, onArchive, onDelete }) => (
  <section className="mt-5" aria-label="Places catalog">
    <div className="space-y-4 md:hidden">
      {places.map((place) => (
        <PlaceMobileCard
          key={place.id}
          place={place}
          onEdit={onEdit}
          onArchive={onArchive}
          onDelete={onDelete}
        />
      ))}
    </div>
    <PlacesTable places={places} onEdit={onEdit} />
    {places.length === 0 && (
      <p className="rounded-sm border border-dashed border-border p-8 text-center font-body text-sm text-muted-foreground">
        No places match the current filters.
      </p>
    )}
  </section>
);
export default PlacesList;
