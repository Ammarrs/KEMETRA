import { FiEdit2 } from "react-icons/fi";
import StatusBadge from "../common/StatusBadge";
import { secondaryButton } from "../common/formStyles";
import PlaceThumb from "./PlaceThumb";

// md → tablet: compact table (place / location / era / type merged, guide + 3D stacked).
// lg → desktop: every field in its own column.
const cell = "px-4 py-5 align-middle font-body text-sm text-foreground";

const PlacesTable = ({ places, onEdit }) => (
  <div className="hidden overflow-hidden rounded-sm border border-border md:block">
    <table className="w-full border-collapse text-left">
      <thead className="bg-surface-secondary">
        <tr className="font-body text-sm text-muted-foreground">
          <th scope="col" className="px-4 py-4 font-bold text-foreground">
            <span className="lg:hidden">Place / location / era / type</span>
            <span className="hidden lg:inline">Place name</span>
          </th>
          <th scope="col" className="hidden px-4 py-4 font-medium lg:table-cell">Location</th>
          <th scope="col" className="hidden px-4 py-4 font-medium lg:table-cell">Era</th>
          <th scope="col" className="hidden px-4 py-4 font-medium lg:table-cell">Type</th>
          <th scope="col" className="px-4 py-4 font-medium lg:hidden">Guide / 3D</th>
          <th scope="col" className="hidden px-4 py-4 font-medium lg:table-cell">Guide</th>
          <th scope="col" className="hidden px-4 py-4 font-medium lg:table-cell">3D model</th>
          <th scope="col" className="px-4 py-4 font-medium">Status</th>
          <th scope="col" className="px-4 py-4 font-medium">Actions</th>
        </tr>
      </thead>
      <tbody>
        {places.map((place) => (
          <tr
            key={place.id}
            className={`border-t border-divider ${place.status === "Draft" ? "bg-surface" : "bg-background"}`}>
            <td className={cell}>
              <div className="flex items-center gap-3">
                <PlaceThumb src={place.image} className="hidden size-12 lg:block" />
                <div className="min-w-0">
                  <h3 className="font-display text-base font-semibold text-foreground">
                    {place.name}
                  </h3>
                  <p className="mt-1 hidden font-body text-xs text-muted-foreground lg:block">
                    Sample data
                  </p>
                  <p className="mt-1 font-body text-xs leading-5 text-muted-foreground lg:hidden">
                    {place.location} · {place.era}
                    <br />
                    {place.type} · Sample data
                  </p>
                </div>
              </div>
            </td>
            <td className={`${cell} hidden text-muted-foreground lg:table-cell`}>{place.location}</td>
            <td className={`${cell} hidden text-muted-foreground lg:table-cell`}>{place.era}</td>
            <td className={`${cell} hidden text-muted-foreground lg:table-cell`}>{place.type}</td>
            <td className={`${cell} text-muted-foreground lg:hidden`}>
              <span className="block">{place.guide}</span>
              <span className="mt-1 block">{place.model}</span>
            </td>
            <td className={`${cell} hidden text-muted-foreground lg:table-cell`}>{place.guide}</td>
            <td className={`${cell} hidden text-muted-foreground lg:table-cell`}>{place.model}</td>
            <td className={cell}>
              <StatusBadge status={place.status} />
            </td>
            <td className={cell}>
              <button
                type="button"
                onClick={() => onEdit(place.id)}
                aria-label={`Edit ${place.name}`}
                className={`${secondaryButton} min-w-14 px-5 py-3.5 text-sm`}>
                <FiEdit2 aria-hidden="true" className="lg:hidden" />
                <span className="sr-only lg:not-sr-only">Edit</span>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
export default PlacesTable;
