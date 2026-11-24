import { useMemo, useState } from "react";
import AdminPageHeader from "../../components/admin/common/AdminPageHeader";
import AdminPageShell from "../../components/admin/common/AdminPageShell";
import AdminPagination from "../../components/admin/common/AdminPagination";
import PlaceEditorModal from "../../components/admin/places/PlaceEditorModal";
import PlacesFilters from "../../components/admin/places/PlacesFilters";
import PlacesList from "../../components/admin/places/PlacesList";
import { emptyPlace, initialPlaces } from "../../data/adminPlaces";

const PER_PAGE = 6;

const sorters = {
  az: (a, b) => a.name.localeCompare(b.name),
  za: (a, b) => b.name.localeCompare(a.name),
  location: (a, b) => a.location.localeCompare(b.location) || a.name.localeCompare(b.name),
};

const Places = () => {
  const [places, setPlaces] = useState(initialPlaces);
  const [filters, setFilters] = useState({ search: "", era: "all", type: "all", status: "all", order: "az" });
  const [requestedPage, setPage] = useState(1);
  const [draft, setDraft] = useState(null);

  const filtered = useMemo(() => {
    const query = filters.search.trim().toLowerCase();
    return places
      .filter(
        (place) =>
          (!query || `${place.name} ${place.location}`.toLowerCase().includes(query)) &&
          (filters.era === "all" || place.era === filters.era) &&
          (filters.type === "all" || place.type === filters.type) &&
          (filters.status === "all" || place.status === filters.status),
      )
      .sort(sorters[filters.order]);
  }, [places, filters]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const page = Math.min(requestedPage, totalPages);
  const start = (page - 1) * PER_PAGE;
  const visible = filtered.slice(start, start + PER_PAGE);

  const changeFilter = (name, value) => {
    setFilters((current) => ({ ...current, [name]: value }));
    setPage(1);
  };
  const editPlace = (id) => setDraft({ ...places.find((place) => place.id === id), isNew: false });
  const closeEditor = () => setDraft(null);

  const savePlace = () => {
    if (!draft.name.trim() || !draft.location.trim()) return;
    const { isNew, ...record } = draft;
    setPlaces((current) =>
      isNew
        ? [{ ...record, id: Date.now() }, ...current]
        : current.map((place) => (place.id === record.id ? record : place)),
    );
    closeEditor();
  };
  const toggleArchive = (id) => {
    setPlaces((current) =>
      current.map((place) =>
        place.id === id ? { ...place, status: place.status === "Archived" ? "Draft" : "Archived" } : place,
      ),
    );
    if (draft?.id === id) closeEditor();
  };
  const deletePlace = (id) => {
    if (!window.confirm("Delete this place from the local prototype?")) return;
    setPlaces((current) => current.filter((place) => place.id !== id));
    if (draft?.id === id) closeEditor();
  };

  return (
    <AdminPageShell
      crumbs="Admin / Places"
      footer="KEMETRA · Curatorial workspace · Local interactive prototype. Connect actions to the project API before production.">
      <AdminPageHeader
        eyebrow="The heritage catalog"
        title="Places Management"
        description="Maintain the places, context and connections of Egypt’s heritage."
        count={`${places.length} places`}
        countNote="Sample data · All records"
        actionLabel="Add Place"
        onAction={() => setDraft({ ...emptyPlace })}
      />
      <PlacesFilters filters={filters} onChange={changeFilter} />
      <p className="mt-7 font-body text-sm text-muted-foreground" aria-live="polite">
        {filtered.length === 0
          ? "No matching places"
          : `Showing ${start + 1}–${start + visible.length} of ${filtered.length} places`}{" "}
        · Sample data. Draft records are not public.
      </p>
      <PlacesList places={visible} onEdit={editPlace} onArchive={toggleArchive} onDelete={deletePlace} />
      <p className="mt-6 font-body text-xs leading-5 text-muted-foreground">
        ¹ Availability is illustrative sample metadata only. No guide downloads or 3D models are
        connected. Unavailable media has no launch action.
      </p>
      <AdminPagination
        page={page}
        totalPages={totalPages}
        onChange={setPage}
        label="Places pagination"
        summary={`Page ${page} of ${totalPages} · ${PER_PAGE} records per page · Sample data`}
      />
      <PlaceEditorModal
        place={draft}
        onChange={(name, value) => setDraft((current) => ({ ...current, [name]: value }))}
        onSave={savePlace}
        onClose={closeEditor}
        onArchive={toggleArchive}
        onDelete={deletePlace}
      />
    </AdminPageShell>
  );
};
export default Places;
