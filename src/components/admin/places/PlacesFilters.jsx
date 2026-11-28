import AdminFilterPanel from "../common/AdminFilterPanel";
import AdminSelect from "../common/AdminSelect";
import { placeEras, placeStatuses, placeTypes } from "../../../data/adminPlaces";

const PlacesFilters = ({ filters, onChange }) => (
  <AdminFilterPanel
    id="place-search"
    label="Place filters"
    search={filters.search}
    onSearch={(value) => onChange("search", value)}
    placeholder="Search by place name or location…">
    <AdminSelect
      className="sm:min-w-44"
      label="Filter by era"
      value={filters.era}
      onChange={(value) => onChange("era", value)}
      options={[{ value: "all", label: "All eras" }, ...placeEras]}
    />
    <AdminSelect
      className="sm:min-w-44"
      label="Filter by type"
      value={filters.type}
      onChange={(value) => onChange("type", value)}
      options={[{ value: "all", label: "All types" }, ...placeTypes]}
    />
    <AdminSelect
      className="sm:min-w-44"
      label="Filter by status"
      value={filters.status}
      onChange={(value) => onChange("status", value)}
      options={[{ value: "all", label: "All statuses" }, ...placeStatuses]}
    />
    <AdminSelect
      className="sm:min-w-44"
      label="Sort places"
      value={filters.order}
      onChange={(value) => onChange("order", value)}
      options={[
        { value: "az", label: "Name: A–Z" },
        { value: "za", label: "Name: Z–A" },
        { value: "location", label: "Location: A–Z" },
      ]}
    />
  </AdminFilterPanel>
);
export default PlacesFilters;
