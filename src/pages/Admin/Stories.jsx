import { useMemo, useState } from "react";
import AdminStoriesHeader from "../../components/admin/stories/AdminStoriesHeader";
import StoriesFilters from "../../components/admin/stories/StoriesFilters";
import StoriesTable from "../../components/admin/stories/StoriesTable";
import StoriesPagination from "../../components/admin/stories/StoriesPagination";
import StoryEditorModal from "../../components/admin/stories/StoryEditorModal";

const pyramid = "/story/592b737b45f754171d2663cd232cf9bd1602e461.jpg";
const initialStories = [
  {
    id: 1,
    title: "Giza: a horizon in stone",
    language: "English",
    version: 3,
    era: "Pharaonic",
    place: "Giza Pyramids",
    status: "Draft",
    updated: "2026-10-30",
    updatedLabel: "30 Oct 2026",
    image: pyramid,
    summary: "A closer look at landscape, craft and human imagination.",
  },
  {
    id: 2,
    title: "A sanctuary above the city",
    language: "English",
    version: 2,
    era: "Coptic",
    place: "The Hanging Church",
    status: "Published",
    updated: "2026-10-30",
    updatedLabel: "30 Oct 2026",
    image: pyramid,
    summary: "A story about a layered place of worship in historic Cairo.",
  },
  {
    id: 3,
    title: "The art of the courtyard",
    language: "English",
    version: 2,
    era: "Islamic",
    place: "Sultan Hassan",
    status: "Published",
    updated: "2026-10-29",
    updatedLabel: "29 Oct 2026",
    image: pyramid,
    summary: "Architecture, movement and light within the courtyard.",
  },
  {
    id: 4,
    title: "Along the Nile at Philae",
    language: "English",
    version: 1,
    era: "Pharaonic",
    place: "Philae Temple",
    status: "Archived",
    updated: "2026-10-28",
    updatedLabel: "28 Oct 2026",
    image: pyramid,
    summary: "A temple landscape shaped by water and movement.",
  },
  {
    id: 5,
    title: "Reading the walls of Karnak",
    language: "English",
    version: 1,
    era: "Pharaonic",
    place: "Karnak Temple",
    status: "Draft",
    updated: "2026-10-27",
    updatedLabel: "27 Oct 2026",
    image: pyramid,
    summary: "Reading architecture and inscription together.",
  },
  {
    id: 6,
    title: "Light through carved wood",
    language: "English",
    version: 1,
    era: "Coptic",
    place: "The Hanging Church",
    status: "Draft",
    updated: "2026-10-26",
    updatedLabel: "26 Oct 2026",
    image: pyramid,
    summary: "Material, craft and filtered light in a historic church.",
  },
  {
    id: 7,
    title: "A city around a mosque",
    language: "English",
    version: 3,
    era: "Islamic",
    place: "Sultan Hassan",
    status: "Published",
    updated: "2026-10-25",
    updatedLabel: "25 Oct 2026",
    image: pyramid,
    summary: "A connected city of worship, learning and trade.",
  },
  {
    id: 8,
    title: "Giza, a landscape of memory",
    language: "English",
    version: 2,
    era: "Pharaonic",
    place: "Giza Pyramids",
    status: "Published",
    updated: "2026-10-24",
    updatedLabel: "24 Oct 2026",
    image: pyramid,
    summary: "How landscape carries memory beyond a single monument.",
  },
];
const emptyStory = {
  id: null,
  title: "",
  language: "English",
  version: 1,
  era: "Pharaonic",
  place: "",
  status: "Draft",
  updated: "2026-11-14",
  updatedLabel: "14 Nov 2026",
  image: pyramid,
  summary: "",
  isNew: true,
};

const Stories = () => {
  const [stories, setStories] = useState(initialStories);
  const [filters, setFilters] = useState({
    search: "",
    era: "all",
    status: "all",
    order: "newest",
  });
  const [page, setPage] = useState(1);
  const [draft, setDraft] = useState(null);
  const filteredStories = useMemo(() => {
    const query = filters.search.trim().toLowerCase();
    const result = stories.filter(
      (story) =>
        (!query ||
          `${story.title} ${story.place}`.toLowerCase().includes(query)) &&
        (filters.era === "all" || story.era === filters.era) &&
        (filters.status === "all" || story.status === filters.status),
    );
    return [...result].sort((a, b) =>
      filters.order === "title"
        ? a.title.localeCompare(b.title)
        : filters.order === "oldest"
          ? a.updated.localeCompare(b.updated)
          : b.updated.localeCompare(a.updated),
    );
  }, [stories, filters]);
  const totals = stories.reduce(
    (result, story) => ({
      ...result,
      [story.status]: (result[story.status] ?? 0) + 1,
    }),
    { Published: 32, Draft: 12, Archived: 4 },
  );
  const totalPages = Math.max(1, Math.ceil(48 / 8));
  const changeFilter = (name, value) => {
    setFilters((current) => ({ ...current, [name]: value }));
    setPage(1);
  };
  const editStory = (id) =>
    setDraft({ ...stories.find((story) => story.id === id), isNew: false });
  const saveStory = () => {
    if (!draft.title.trim() || !draft.place.trim()) return;
    if (draft.isNew)
      setStories((current) => [
        { ...draft, id: Date.now(), isNew: undefined },
        ...current,
      ]);
    else
      setStories((current) =>
        current.map((story) =>
          story.id === draft.id
            ? { ...draft, version: story.version + 1, isNew: undefined }
            : story,
        ),
      );
    setDraft(null);
  };
  const archiveStory = (id) =>
    setStories((current) =>
      current.map((story) =>
        story.id === id
          ? {
              ...story,
              status: story.status === "Archived" ? "Draft" : "Archived",
            }
          : story,
      ),
    );
  const deleteStory = (id) => {
    if (window.confirm("Delete this story from the local prototype?"))
      setStories((current) => current.filter((story) => story.id !== id));
  };
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-7 sm:px-6 lg:px-8">
        <p className="mb-6 font-body text-xs text-muted-foreground">
          Admin / Stories
        </p>
        <AdminStoriesHeader
          totalStories={48}
          onAddStory={() => setDraft({ ...emptyStory })}
        />
        <StoriesFilters filters={filters} onChange={changeFilter} />
        <p className="mt-5 font-body text-xs leading-5 text-muted-foreground">
          Showing 1–{filteredStories.length} of 48 stories · Sample data. Drafts
          are not visible on the public site.
        </p>
        <StoriesTable
          stories={filteredStories.slice(0, 8)}
          onEdit={editStory}
          onArchive={archiveStory}
          onDelete={deleteStory}
        />
        <StoriesPagination
          page={page}
          totalPages={totalPages}
          onChange={setPage}
          totals={totals}
        />
        <footer className="mt-10 border-t border-border py-5 font-body text-[0.65rem] text-muted-foreground">
          KEMETRA · Curatorial workspace · Local interactive prototype. Connect
          actions to the project API before production.
        </footer>
      </div>
      <StoryEditorModal
        story={draft}
        onChange={(name, value) =>
          setDraft((current) => ({ ...current, [name]: value }))
        }
        onSave={saveStory}
        onClose={() => setDraft(null)}
      />
    </main>
  );
};
export default Stories;
