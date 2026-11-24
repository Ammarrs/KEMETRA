import StatusBadge from "../common/StatusBadge";
import PlaceActions from "./PlaceActions";
import PlaceThumb from "./PlaceThumb";

// Card layout used below the md breakpoint.
const PlaceMobileCard = ({ place, onEdit, onArchive, onDelete }) => (
  <article className="rounded-sm border border-border bg-surface p-4">
    <div className="flex items-start gap-3">
      <PlaceThumb src={place.image} className="size-14" />
      <div className="min-w-0 flex-1">
        <h3 className="font-display text-xl font-medium leading-tight text-foreground">
          {place.name}
        </h3>
        <p className="mt-1 font-body text-xs text-muted-foreground">
          {place.location} · Sample data
        </p>
      </div>
    </div>
    <div className="mt-3">
      <StatusBadge status={place.status} />
    </div>
    <p className="mt-4 font-body text-sm text-foreground">
      {place.era} · {place.type}
    </p>
    <dl className="mt-4 space-y-1 border-t border-divider pt-4 font-body text-sm text-muted-foreground">
      <div className="flex gap-1">
        <dt>Field guide:</dt>
        <dd>{place.guide}</dd>
      </div>
      <div className="flex gap-1">
        <dt>3D model:</dt>
        <dd>{place.model}</dd>
      </div>
    </dl>
    <div className="mt-4">
      <PlaceActions place={place} onEdit={onEdit} onArchive={onArchive} onDelete={onDelete} />
    </div>
  </article>
);
export default PlaceMobileCard;
