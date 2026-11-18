import { useMemo, useState } from "react";
import { FiPlus } from "react-icons/fi";
import PlacesFilters from "../../components/admin/places/PlacesFilters";
import PlacesList from "../../components/admin/places/PlacesList";
import PlaceEditorModal from "../../components/admin/places/PlaceEditorModal";

const image = "/story/592b737b45f754171d2663cd232cf9bd1602e461.jpg";
const initialPlaces = [
  {
    id: 1,
    name: "Giza Pyramids",
    location: "Giza Plateau",
    era: "Pharaonic",
    type: "Pyramid complex",
    guide: "Not attached",
    model: "Unavailable",
    status: "Draft",
    image,
  },
  {
    id: 2,
    name: "Karnak Temple",
    location: "Luxor",
    era: "Pharaonic",
    type: "Temple complex",
    guide: "Available¹",
    model: "Available¹",
    status: "Draft",
    image,
  },
  {
    id: 3,
    name: "Philae Temple",
    location: "Aswan",
    era: "Pharaonic",
    type: "Temple",
    guide: "Not attached",
    model: "Unavailable",
    status: "Archived",
    image,
  },
  {
    id: 4,
    name: "Saints Sergius & Bacchus",
    location: "Old Cairo",
    era: "Coptic",
    type: "Church",
    guide: "Not attached",
    model: "Unavailable",
    status: "Draft",
    image,
  },
  {
    id: 5,
    name: "Sultan Hassan",
    location: "Historic Cairo",
    era: "Islamic",
    type: "Mosque & madrasa",
    guide: "Available¹",
    model: "Processing",
    status: "Published",
    image,
  },
  {
    id: 6,
    name: "The Hanging Church",
    location: "Old Cairo",
    era: "Coptic",
    type: "Church",
    guide: "Available¹",
    model: "Unavailable",
    status: "Published",
    image,
  },
];
const emptyPlace = {
  id: null,
  name: "",
  location: "",
  era: "Pharaonic",
  type: "Temple",
  guide: "Not attached",
  model: "Unavailable",
  status: "Draft",
  image,
  isNew: true,
};

const Places = () => {
  const [places, setPlaces] = useState(initialPlaces);
  const [filters, setFilters] = useState({
    search: "",
    era: "all",
    type: "all",
    status: "all",
    order: "az",
  });
  const [page, setPage] = useState(1);
  const [draft, setDraft] = useState(null);
  const filtered = useMemo(() => {
    const query = filters.search.trim().toLowerCase();
    return places
      .filter(
        (place) =>
          (!query ||
            `${place.name} ${place.location}`.toLowerCase().includes(query)) &&
          (filters.era === "all" || place.era === filters.era) &&
          (filters.type === "all" || place.type === filters.type) &&
          (filters.status === "all" || place.status === filters.status),
      )
      .sort((a, b) =>
        filters.order === "za"
          ? b.name.localeCompare(a.name)
          : filters.order === "location"
            ? a.location.localeCompare(b.location)
            : a.name.localeCompare(b.name),
      );
  }, [places, filters]);
  const changeFilter = (name, value) => {
    setFilters((current) => ({ ...current, [name]: value }));
    setPage(1);
  };
  const editPlace = (id) =>
    setDraft({ ...places.find((place) => place.id === id), isNew: false });
  const savePlace = () => {
    if (!draft.name.trim() || !draft.location.trim()) return;
    if (draft.isNew)
      setPlaces((current) => [
        { ...draft, id: Date.now(), isNew: undefined },
        ...current,
      ]);
    else
      setPlaces((current) =>
        current.map((place) =>
          place.id === draft.id ? { ...draft, isNew: undefined } : place,
        ),
      );
    setDraft(null);
  };
  const archivePlace = (id) =>
    setPlaces((current) =>
      current.map((place) =>
        place.id === id
          ? {
              ...place,
              status: place.status === "Archived" ? "Draft" : "Archived",
            }
          : place,
      ),
    );
  const deletePlace = (id) => {
    if (window.confirm("Delete this place from the local prototype?"))
      setPlaces((current) => current.filter((place) => place.id !== id));
  };
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-7 sm:px-6 lg:px-8">
        <p className="mb-6 font-body text-xs text-muted-foreground">
          Admin / Places
        </p>
        <header>
          <p className="font-body text-[0.65rem] font-extrabold uppercase tracking-[0.25em] text-primary">
            The heritage catalog
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold md:text-5xl">
            Places Management
          </h1>
          <p className="mt-3 font-body text-sm text-muted-foreground">
            Maintain the places, context and connections of Egypt’s heritage.
          </p>
          <div className="mt-6 flex items-end justify-between gap-4">
            <div>
              <p className="font-display text-2xl">26 places</p>
              <p className="mt-1 font-body text-[0.67rem] text-muted-foreground">
                Sample data · All records
              </p>
            </div>
            <button
              type="button"
              onClick={() => setDraft({ ...emptyPlace })}
              className="inline-flex items-center gap-2 bg-primary px-4 py-2.5 font-body text-sm font-bold text-secondary hover:bg-primary-hover">
              <FiPlus /> Add Place
            </button>
          </div>
        </header>
        <PlacesFilters filters={filters} onChange={changeFilter} />
        <p className="mt-5 font-body text-xs text-muted-foreground">
          Showing 1–{filtered.length} of 26 places · Sample data. Draft records
          are not public.
        </p>
        <PlacesList
          places={filtered.slice(0, 6)}
          onEdit={editPlace}
          onArchive={archivePlace}
          onDelete={deletePlace}
        />
        <p className="mt-5 font-body text-[0.67rem] leading-5 text-muted-foreground">
          ¹ Availability is illustrative sample metadata only. No guide
          downloads or 3D models are connected. Unavailable media has no launch
          action.
        </p>
        <nav className="mt-5 flex gap-2" aria-label="Places pagination">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="border border-border bg-card px-3 py-2 font-body text-xs disabled:opacity-30">
            Previous
          </button>
          <button
            onClick={() => setPage(1)}
            className={`size-9 border font-body text-xs ${page === 1 ? "border-secondary bg-secondary text-card" : "border-border bg-card"}`}>
            1
          </button>
          <button
            onClick={() => setPage(2)}
            className={`size-9 border font-body text-xs ${page === 2 ? "border-secondary bg-secondary text-card" : "border-border bg-card"}`}>
            2
          </button>
          <button
            disabled={page === 5}
            onClick={() => setPage(page + 1)}
            className="border border-border bg-card px-3 py-2 font-body text-xs disabled:opacity-30">
            Next
          </button>
        </nav>
        <p className="mt-4 font-body text-[0.67rem] text-muted-foreground">
          Page {page} of 5 · 6 records per page · Sample data
        </p>
        <footer className="mt-10 border-t border-border py-5 font-body text-[0.65rem] text-muted-foreground">
          KEMETRA · Curatorial workspace · Local interactive prototype. Connect
          actions to the project API before production.
        </footer>
      </div>
      <PlaceEditorModal
        place={draft}
        onChange={(name, value) =>
          setDraft((current) => ({ ...current, [name]: value }))
        }
        onSave={savePlace}
        onClose={() => setDraft(null)}
      />
    </main>
  );
};
export default Places;
