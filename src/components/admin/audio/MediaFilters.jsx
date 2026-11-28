import AdminFilterPanel from "../common/AdminFilterPanel";
import AdminSelect from "../common/AdminSelect";
import { mediaLanguages, mediaStatuses } from "../../../data/adminMedia";

const MediaFilters = ({ filters, onChange }) => (
  <AdminFilterPanel
    id="media-search"
    label="Media filters"
    search={filters.search}
    onSearch={(value) => onChange("search", value)}
    placeholder="Search media by title, place or story…">
    <AdminSelect
      className="sm:min-w-44"
      label="Filter by status"
      value={filters.status}
      onChange={(value) => onChange("status", value)}
      options={[{ value: "all", label: "All statuses" }, ...mediaStatuses]}
    />
    <AdminSelect
      className="sm:min-w-44"
      label="Filter by language"
      value={filters.language}
      onChange={(value) => onChange("language", value)}
      options={[{ value: "all", label: "All languages" }, ...mediaLanguages]}
    />
    <AdminSelect
      className="sm:min-w-44"
      label="Sort media"
      value={filters.order}
      onChange={(value) => onChange("order", value)}
      options={[
        { value: "audio", label: "Type: audio first" },
        { value: "model", label: "Type: 3D first" },
        { value: "title", label: "Title: A–Z" },
      ]}
    />
  </AdminFilterPanel>
);
export default MediaFilters;
