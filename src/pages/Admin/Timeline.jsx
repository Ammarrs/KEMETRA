import { useMemo, useState } from "react";
import AdminTimelineHeader from "../../components/admin/timeline/AdminTimelineHeader";
import TimelineNotice from "../../components/admin/timeline/TimelineNotice";
import TimelineFilters from "../../components/admin/timeline/TimelineFilters";
import MilestoneList from "../../components/admin/timeline/MilestoneList";
import MilestoneEditor from "../../components/admin/timeline/MilestoneEditor";

const timelineImage = "/story/592b737b45f754171d2663cd232cf9bd1602e461.jpg";
const initialMilestones = [
  {
    id: 1,
    era: "Early Dynastic",
    status: "Draft",
    title: "Communities along the Nile",
    dateLabel: "Early Dynastic period · Approximate",
    certainty: "Approximate",
    place: "Nile landscapes",
    story: "Story pending",
    summary: "Communities taking shape beside the Nile.",
    description:
      "An editorial introduction to early settlements and connected river landscapes.",
    imageDescription: "Nile landscapes associated with early communities.",
    orderLabel: "First milestone",
    sourceNote: "Historical range awaits curatorial review.",
  },
  {
    id: 2,
    era: "Old Kingdom",
    status: "Draft",
    title: "Building the Giza landscape",
    dateLabel: "Old Kingdom · Approximate period",
    certainty: "Approximate",
    place: "Giza Pyramids",
    story: "Giza: a horizon in stone",
    summary:
      "A landscape of monumental building, skilled work and collective memory on the Giza Plateau.",
    description:
      "Read the Giza landscape as more than a single monument. This milestone introduces the relationship between building, material and place.\n\nEditorial sample copy: add verified historical context and source notes before publication.",
    imageDescription: "Pyramids on the sunlit Giza Plateau.",
    orderLabel: "After Communities along the Nile",
    sourceNote: "Historical range and narrative await curatorial review.",
  },
  {
    id: 3,
    era: "New Kingdom",
    status: "Published",
    title: "Sacred spaces at Thebes",
    dateLabel: "New Kingdom · Approximate period",
    certainty: "Approximate",
    place: "Karnak Temple",
    story: "Reading the walls of Karnak",
    summary: "Temple spaces and processional routes at Thebes.",
    description:
      "A sample introduction to sacred architecture, ritual movement and royal memory.",
    imageDescription: "Columns and temple spaces at Karnak.",
    orderLabel: "After Building the Giza landscape",
    sourceNote: "Publication copy requires final source checks.",
  },
  {
    id: 4,
    era: "Greco-Roman",
    status: "Draft",
    title: "Temples beside the Nile",
    dateLabel: "Greco-Roman period · Approximate",
    certainty: "Approximate",
    place: "Philae Temple",
    story: "Along the Nile at Philae",
    summary: "A temple landscape shaped by movement and exchange.",
    description:
      "A sample interpretation of Philae within the connected Nile landscape.",
    imageDescription: "Philae Temple beside the Nile.",
    orderLabel: "After Building the Giza landscape",
    sourceNote: "Dates and interpretation await specialist review.",
  },
  {
    id: 5,
    era: "Coptic Egypt",
    status: "Published",
    title: "Coptic places of gathering",
    dateLabel: "Coptic period · Approximate",
    certainty: "Approximate",
    place: "The Hanging Church",
    story: "A sanctuary above the city",
    summary: "Places of worship, community and memory.",
    description:
      "A sample introduction to churches and communities in historic Cairo.",
    imageDescription: "A historic church interior in Cairo.",
    orderLabel: "After Building the Giza landscape",
    sourceNote: "Verify architectural chronology before publication.",
  },
  {
    id: 6,
    era: "Islamic Egypt",
    status: "Published",
    title: "Courtyards of historic Cairo",
    dateLabel: "Mamluk period · Approximate",
    certainty: "Approximate",
    place: "Sultan Hassan",
    story: "The art of the courtyard",
    summary: "Architecture, learning and urban life in Cairo.",
    description:
      "A sample introduction to courtyards, architecture and connected city life.",
    imageDescription: "The courtyard of a historic Cairo monument.",
    orderLabel: "After Building the Giza landscape",
    sourceNote: "Review terminology and historical range.",
  },
];

const Timeline = () => {
  const [milestones, setMilestones] = useState(initialMilestones);
  const [selectedId, setSelectedId] = useState(2);
  const [filters, setFilters] = useState({
    search: "",
    era: "all",
    status: "all",
    order: "earliest",
  });
  const selected = milestones.find((item) => item.id === selectedId) ?? null;
  const filtered = useMemo(() => {
    const query = filters.search.trim().toLowerCase();
    const result = milestones.filter(
      (item) =>
        (!query ||
          `${item.title} ${item.era} ${item.place} ${item.story}`
            .toLowerCase()
            .includes(query)) &&
        (filters.era === "all" || item.era === filters.era) &&
        (filters.status === "all" || item.status === filters.status),
    );
    return filters.order === "latest" ? [...result].reverse() : result;
  }, [milestones, filters]);

  const updateFilter = (name, value) =>
    setFilters((current) => ({ ...current, [name]: value }));
  const updateSelected = (name, value) =>
    setMilestones((current) =>
      current.map((item) =>
        item.id === selectedId ? { ...item, [name]: value } : item,
      ),
    );
  const moveMilestone = (id, direction) =>
    setMilestones((current) => {
      const index = current.findIndex((item) => item.id === id);
      const target = index + direction;
      if (index < 0 || target < 0 || target >= current.length) return current;
      const next = [...current];
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });
  const deleteMilestone = (id) => {
    const next = milestones.filter((item) => item.id !== id);
    setMilestones(next);
    if (selectedId === id) setSelectedId(next[0]?.id ?? null);
  };
  const addMilestone = () => {
    const id = Date.now();
    const item = {
      ...initialMilestones[0],
      id,
      title: "Untitled milestone",
      era: "Early Dynastic",
      status: "Draft",
    };
    setMilestones((current) => [...current, item]);
    setSelectedId(id);
  };
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-7 sm:px-6 lg:px-8">
        <p className="mb-6 font-body text-xs text-muted-foreground">
          Admin / Timeline
        </p>
        <AdminTimelineHeader
          onAddMilestone={addMilestone}
          onPreview={() =>
            window.open("/timeline", "_blank", "noopener,noreferrer")
          }
        />
        <TimelineNotice />
        <TimelineFilters filters={filters} onChange={updateFilter} />
        <div className="mt-8 grid items-start gap-6 xl:grid-cols-[minmax(0,0.9fr)_minmax(430px,1.1fr)]">
          <MilestoneList
            milestones={filtered}
            selectedId={selectedId}
            onSelect={setSelectedId}
            onMove={moveMilestone}
            onDelete={deleteMilestone}
          />
          <MilestoneEditor
            milestone={selected}
            onChange={updateSelected}
            onSave={() =>
              setMilestones((current) =>
                current.map((item) =>
                  item.id === selectedId ? { ...item } : item,
                ),
              )
            }
            onCancel={() => setSelectedId(null)}
            onDelete={deleteMilestone}
            image={timelineImage}
          />
        </div>
        <footer className="mt-12 border-t border-border py-5 font-body text-[0.65rem] text-muted-foreground">
          KEMETRA · Curatorial workspace · Local interactive prototype. Connect
          save and delete actions to the project API before production.
        </footer>
      </div>
    </main>
  );
};

export default Timeline;
