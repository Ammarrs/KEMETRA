import { initialMedia } from "../../../data/adminMedia";
import { initialPlaces } from "../../../data/adminPlaces";
import AdminSelect from "../common/AdminSelect";
import Field from "../common/Field";

const places = initialPlaces.map((place) => place.name);
const stories = [...new Set(initialMedia.map((record) => record.story))].sort();

// Keeps the current value selectable even when it is not in the base list.
const withCurrent = (list, value) => (value && !list.includes(value) ? [value, ...list] : list);

export const PlaceField = ({ value, onChange }) => (
  <Field label="Assigned place" required>
    <AdminSelect label="Assigned place" value={value} onChange={onChange} options={withCurrent(places, value)} />
  </Field>
);

export const StoryField = ({ label, value, onChange }) => (
  <Field label={label}>
    <AdminSelect
      label={label}
      value={value}
      onChange={onChange}
      options={[{ value: "", label: "No story assigned" }, ...withCurrent(stories, value)]}
    />
  </Field>
);
