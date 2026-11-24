import { useMemo, useRef, useState } from "react";
import AdminPageHeader from "../../components/admin/common/AdminPageHeader";
import AdminPageShell from "../../components/admin/common/AdminPageShell";
import AdminPagination from "../../components/admin/common/AdminPagination";
import AudioEditor from "../../components/admin/audio/AudioEditor";
import MediaFilters from "../../components/admin/audio/MediaFilters";
import MediaList from "../../components/admin/audio/MediaList";
import MediaNotice from "../../components/admin/audio/MediaNotice";
import MediaTabs from "../../components/admin/audio/MediaTabs";
import ModelEditor from "../../components/admin/audio/ModelEditor";
import { emptyAudio, emptyModel, initialMedia, shortName } from "../../data/adminMedia";

const PER_PAGE = 6;

const sorters = {
  audio: () => 0, // catalog order: each narration is listed ahead of its 3D tour
  model: (a, b) => (a.kind === b.kind ? 0 : a.kind === "model" ? -1 : 1),
  title: (a, b) => a.title.localeCompare(b.title),
};

const firstOf = (list, kind) => list.find((record) => record.kind === kind);

// Combined "Audio & 3D Management" page.
// `initialTab` lets the 3D Experiences route open on the 3D models tab.
const AudioRecords = ({ initialTab = "all" }) => {
  const [records, setRecords] = useState(initialMedia);
  const [tab, setTab] = useState(initialTab);
  const [filters, setFilters] = useState({ search: "", status: "all", language: "all", order: "audio" });
  const [requestedPage, setPage] = useState(1);

  const [audioId, setAudioId] = useState(firstOf(initialMedia, "audio").id);
  const [audioDraft, setAudioDraft] = useState({ ...firstOf(initialMedia, "audio") });
  const [modelId, setModelId] = useState(firstOf(initialMedia, "model").id);
  const [modelDraft, setModelDraft] = useState({ ...firstOf(initialMedia, "model") });

  const audioPanel = useRef(null);
  const modelPanel = useRef(null);

  const counts = useMemo(() => {
    const audio = records.filter((record) => record.kind === "audio").length;
    return { audio, model: records.length - audio };
  }, [records]);

  const filtered = useMemo(() => {
    const query = filters.search.trim().toLowerCase();
    return records
      .filter(
        (record) =>
          (tab === "all" || record.kind === tab) &&
          (!query || `${record.title} ${record.place} ${record.story}`.toLowerCase().includes(query)) &&
          (filters.status === "all" || record.status === filters.status) &&
          (filters.language === "all" || record.language === filters.language),
      )
      .sort(sorters[filters.order]);
  }, [records, tab, filters]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const page = Math.min(requestedPage, totalPages);
  const start = (page - 1) * PER_PAGE;
  const visible = filtered.slice(start, start + PER_PAGE);

  const changeFilter = (name, value) => {
    setFilters((current) => ({ ...current, [name]: value }));
    setPage(1);
  };
  const changeTab = (next) => {
    setTab(next);
    setPage(1);
  };
  const reveal = (ref) =>
    requestAnimationFrame(() => ref.current?.scrollIntoView({ behavior: "smooth", block: "start" }));

  const editRecord = (record) => {
    if (record.kind === "audio") {
      setAudioId(record.id);
      setAudioDraft({ ...record });
      reveal(audioPanel);
    } else {
      setModelId(record.id);
      setModelDraft({ ...record, steps: record.steps.map((step) => ({ ...step })) });
      reveal(modelPanel);
    }
  };
  const addMedia = () => {
    if (tab === "model") {
      setModelId(null);
      setModelDraft({ ...emptyModel });
      reveal(modelPanel);
    } else {
      setAudioId(null);
      setAudioDraft({ ...emptyAudio });
      reveal(audioPanel);
    }
  };

  const save = (draft, setId, setDraft) => {
    // An edited 3D record drops its sample list note so it is recomputed from the form.
    const { isNew, ...record } = { ...draft };
    delete record.listNote;
    record.id = isNew ? Date.now() : draft.id;
    setRecords((current) =>
      isNew ? [record, ...current] : current.map((item) => (item.id === record.id ? record : item)),
    );
    setId(record.id);
    setDraft({ ...record });
  };
  const cancel = (id, kind, setDraft) => {
    const original = records.find((record) => record.id === id) ?? firstOf(records, kind);
    if (original) setDraft({ ...original });
  };

  return (
    <AdminPageShell
      crumbs="Admin / Audio & 3D"
      footer="KEMETRA · Curatorial workspace · Local interactive prototype. Connect actions to the project media API before production.">
      <AdminPageHeader
        eyebrow="The media catalog"
        title="Audio & 3D Management"
        description="Manage narrated stories, model references and place-linked tours."
        count={`${records.length} media records`}
        countNote={`${counts.audio} audio · ${counts.model} models · Sample data`}
        actionLabel="Add media"
        onAction={addMedia}
      />
      <MediaNotice />
      <MediaTabs
        active={tab}
        onChange={changeTab}
        tabs={[
          { id: "all", label: "All media", count: records.length },
          { id: "audio", label: "Audio", count: counts.audio },
          { id: "model", label: "3D models", count: counts.model },
        ]}
      />
      <MediaFilters filters={filters} onChange={changeFilter} />
      <p className="mt-7 font-body text-sm text-muted-foreground" aria-live="polite">
        {filtered.length === 0
          ? "No matching records"
          : `Showing ${start + 1}–${start + visible.length} of ${filtered.length} records`}{" "}
        · Sample data
      </p>
      <MediaList records={visible} onEdit={editRecord} />
      <AdminPagination
        page={page}
        totalPages={totalPages}
        onChange={setPage}
        label="Media pagination"
        summary={`Page ${page} of ${totalPages} · ${PER_PAGE} records per page · Sample data`}
      />

      <p className="mt-8 font-body text-xs leading-5 text-muted-foreground">
        Selected for editing below: {shortName(audioDraft)} and {shortName(modelDraft)}. Available
        means sample catalog status, not a connected playable asset.
      </p>
      <div className="mt-5 grid items-start gap-6 lg:grid-cols-2">
        <div ref={audioPanel} className="scroll-mt-6 min-w-0">
          <AudioEditor
            key={audioId ?? "new-audio"}
            record={audioDraft}
            onChange={(name, value) => setAudioDraft((current) => ({ ...current, [name]: value }))}
            onSave={() => save(audioDraft, setAudioId, setAudioDraft)}
            onCancel={() => cancel(audioId, "audio", setAudioDraft)}
          />
        </div>
        <div ref={modelPanel} className="scroll-mt-6 min-w-0">
          <ModelEditor
            key={modelId ?? "new-model"}
            record={modelDraft}
            onChange={(name, value) => setModelDraft((current) => ({ ...current, [name]: value }))}
            onSave={() => save(modelDraft, setModelId, setModelDraft)}
            onCancel={() => cancel(modelId, "model", setModelDraft)}
          />
        </div>
      </div>
    </AdminPageShell>
  );
};
export default AudioRecords;
