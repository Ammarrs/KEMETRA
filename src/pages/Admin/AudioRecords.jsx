import { useMemo, useState } from "react";
import { FiPlus } from "react-icons/fi";
import AudioFilters from "../../components/admin/audio/AudioFilters";
import AudioList from "../../components/admin/audio/AudioList";
import AudioEditor from "../../components/admin/audio/AudioEditor";

const initialRecords = [
  {
    id: 1,
    title: "Giza — landscape narration",
    place: "Giza Pyramids",
    story: "Giza: a horizon in stone",
    language: "English",
    transcriptStatus: "Transcript draft",
    status: "Processing",
    audioUrl: "",
    transcript:
      "Look beyond the familiar silhouette to the landscape, craft and memory of the Giza Plateau.\n\nSample transcript draft. Align the complete text with the approved recording before publication.",
  },
  {
    id: 2,
    title: "A sanctuary above the city",
    place: "The Hanging Church",
    story: "A sanctuary above the city",
    language: "English",
    transcriptStatus: "Transcript reviewed",
    status: "Available",
    audioUrl: "",
    transcript: "A sample narration for the related Coptic heritage story.",
  },
  {
    id: 3,
    title: "The art of the courtyard",
    place: "Sultan Hassan",
    story: "The art of the courtyard",
    language: "Arabic",
    transcriptStatus: "Transcript missing",
    status: "Error",
    audioUrl: "",
    transcript: "",
  },
];
const emptyRecord = {
  id: null,
  title: "Untitled narration",
  place: "",
  story: "",
  language: "English",
  transcriptStatus: "Transcript draft",
  status: "Processing",
  audioUrl: "",
  transcript: "",
  isNew: true,
};

const AudioRecords = () => {
  const [records, setRecords] = useState(initialRecords);
  const [filters, setFilters] = useState({
    search: "",
    status: "all",
    language: "all",
    order: "title",
  });
  const [selectedId, setSelectedId] = useState(1);
  const [draft, setDraft] = useState({ ...initialRecords[0] });
  const filtered = useMemo(() => {
    const query = filters.search.trim().toLowerCase();
    return records
      .filter(
        (record) =>
          (!query ||
            `${record.title} ${record.place} ${record.story}`
              .toLowerCase()
              .includes(query)) &&
          (filters.status === "all" || record.status === filters.status) &&
          (filters.language === "all" || record.language === filters.language),
      )
      .sort((a, b) =>
        filters.order === "place"
          ? a.place.localeCompare(b.place)
          : filters.order === "status"
            ? a.status.localeCompare(b.status)
            : a.title.localeCompare(b.title),
      );
  }, [records, filters]);
  const changeFilter = (name, value) =>
    setFilters((current) => ({ ...current, [name]: value }));
  const editRecord = (id) => {
    const record = records.find((item) => item.id === id);
    setSelectedId(id);
    setDraft({ ...record, isNew: false });
  };
  const saveRecord = () => {
    if (!draft.title.trim() || !draft.place.trim()) return;
    if (draft.isNew) {
      const saved = { ...draft, id: Date.now(), isNew: undefined };
      setRecords((current) => [saved, ...current]);
      setSelectedId(saved.id);
      setDraft({ ...saved });
    } else {
      setRecords((current) =>
        current.map((record) =>
          record.id === selectedId ? { ...draft, isNew: undefined } : record,
        ),
      );
    }
  };
  const newRecord = () => {
    setSelectedId(null);
    setDraft({ ...emptyRecord });
  };
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-7 sm:px-6 lg:px-8">
        <p className="mb-6 font-body text-xs text-muted-foreground">
          Admin / Audio Records
        </p>
        <header>
          <p className="font-body text-[0.65rem] font-extrabold uppercase tracking-[0.25em] text-primary">
            The media catalog
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold md:text-5xl">
            Audio Management
          </h1>
          <p className="mt-3 font-body text-sm text-muted-foreground">
            Manage narrated stories and place-linked audio records.
          </p>
          <div className="mt-6 flex items-end justify-between gap-4">
            <div>
              <p className="font-display text-2xl">18 audio records</p>
              <p className="mt-1 font-body text-[0.67rem] text-muted-foreground">
                Sample data · No live audio connected
              </p>
            </div>
            <button
              type="button"
              onClick={newRecord}
              className="inline-flex items-center gap-2 bg-primary px-4 py-2.5 font-body text-sm font-bold text-secondary hover:bg-primary-hover">
              <FiPlus /> Add audio
            </button>
          </div>
        </header>
        <aside className="mt-6 border border-success/15 bg-success/10 px-4 py-3 font-body">
          <p className="text-xs font-bold text-success">
            Sample data · No live audio connected
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Availability and processing statuses are illustrative. Audio cannot
            play and no files are uploaded.
          </p>
        </aside>
        <AudioFilters filters={filters} onChange={changeFilter} />
        <p className="mt-5 font-body text-xs text-muted-foreground">
          Showing 1–{filtered.length} of 18 audio records · Sample data
        </p>
        <AudioList
          records={filtered}
          onEdit={editRecord}
          onPreview={(id) => editRecord(id)}
        />
        <nav className="mt-5 flex gap-2" aria-label="Audio pagination">
          <button
            className="border border-border bg-card px-3 py-2 font-body text-xs opacity-30"
            disabled>
            Previous
          </button>
          <button className="size-9 border border-secondary bg-secondary font-body text-xs text-card">
            1
          </button>
          <button className="size-9 border border-border bg-card font-body text-xs">
            2
          </button>
          <button className="border border-border bg-card px-3 py-2 font-body text-xs">
            Next
          </button>
        </nav>
        <p className="mt-4 font-body text-[0.67rem] text-muted-foreground">
          Page 1 of 3 · 6 records per page · Sample data
        </p>
        <AudioEditor
          record={draft}
          onChange={(name, value) =>
            setDraft((current) => ({ ...current, [name]: value }))
          }
          onSave={saveRecord}
          onCancel={() => {
            const original = records.find((record) => record.id === selectedId);
            setDraft(original ? { ...original } : null);
          }}
        />
        <footer className="mt-10 border-t border-border py-5 font-body text-[0.65rem] text-muted-foreground">
          KEMETRA · Curatorial workspace · Local interactive prototype. Connect
          actions to the project audio API before production.
        </footer>
      </div>
    </main>
  );
};
export default AudioRecords;
