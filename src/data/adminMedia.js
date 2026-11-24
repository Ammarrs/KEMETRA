// Sample data for the Audio & 3D admin page (static prototype — replace with API data).
// 24 records: 18 audio narrations + 6 3D tour drafts. First six match the approved design.

const audio = (id, title, place, story, language, transcriptStatus, status, extra = {}) => ({
  id, kind: "audio", title, place, story, language, transcriptStatus, status,
  audioUrl: "",
  transcript:
    transcriptStatus === "Transcript missing"
      ? ""
      : "Sample narration copy. Align the complete text with the approved recording before publication.",
  ...extra,
});

const step = (id, title, label) => ({ id, title, label, detail: "Camera / hotspot not configured" });

const model = (id, title, place, story, language, status, listNote, extra = {}) => ({
  id, kind: "model", title, place, story, language, status, listNote,
  modelRef: "",
  introduction: `Explore ${place} through a guided tour. Illustrative tour outline only.`,
  fallback:
    "A site overview and image are shown while the model is unavailable. No interactive tour can be launched.",
  steps: [step(1, "Arrival", "Read the landscape"), step(2, "Monument forms", "Observe the silhouette")],
  ...extra,
});

export const initialMedia = [
  audio(1, "Giza — landscape narration", "Giza Pyramids", "Giza: a horizon in stone", "English", "Transcript draft", "Processing", {
    shortName: "Giza narration",
    transcript:
      "Look beyond the familiar silhouette to the landscape, craft and memory of the Giza Plateau.\n\nSample transcript draft. Align the complete text with the approved recording before publication.",
  }),
  audio(2, "A sanctuary above the city", "The Hanging Church", "A sanctuary above the city", "English", "Transcript reviewed", "Available"),
  audio(3, "The art of the courtyard", "Sultan Hassan", "The art of the courtyard", "Arabic", "Transcript missing", "Error"),
  model(4, "Giza — illustrative tour draft", "Giza Pyramids", "Giza: a horizon in stone", "English", "Unavailable", "No model reference · 3 tour steps", {
    shortName: "Giza tour draft",
    introduction: "Explore the forms and spatial relationships of the Giza landscape. Illustrative tour outline only.",
    steps: [
      step(1, "Arrival", "Read the landscape"),
      step(2, "Monument forms", "Observe the silhouette"),
      step(3, "Context", "Return to the place story"),
    ],
  }),
  model(5, "Karnak — column hall study", "Karnak Temple", "Reading the walls of Karnak", "English", "Available", "Placeholder reference · Tour draft", {
    modelRef: "placeholder://karnak-column-hall",
  }),
  model(6, "Philae — site overview", "Philae Temple", "Along the Nile at Philae", "English", "Error", "Reference validation failed", {
    modelRef: "placeholder://philae-overview",
  }),
  audio(7, "Reading the walls of Karnak", "Karnak Temple", "Reading the walls of Karnak", "English", "Transcript reviewed", "Available"),
  audio(8, "Along the Nile at Philae", "Philae Temple", "Along the Nile at Philae", "English", "Transcript draft", "Processing"),
  audio(9, "Beneath the church of Saints Sergius & Bacchus", "Saints Sergius & Bacchus", "Along the Nile at Philae", "Arabic", "Transcript reviewed", "Available"),
  audio(10, "Valley of the Kings — a walk through the tombs", "Valley of the Kings", "Giza: a horizon in stone", "English", "Transcript draft", "Processing"),
  audio(11, "Portals of Sultan Hassan", "Sultan Hassan", "The art of the courtyard", "English", "Transcript reviewed", "Available"),
  audio(12, "The nave of the Hanging Church", "The Hanging Church", "A sanctuary above the city", "Arabic", "Transcript reviewed", "Available"),
  model(13, "Hanging Church — nave walkthrough", "The Hanging Church", "A sanctuary above the city", "English", "Unavailable", "No model reference · 2 tour steps"),
  audio(14, "Muizz Street at dusk", "The Muizz Street", "The art of the courtyard", "Arabic", "Transcript missing", "Error"),
  audio(15, "The mosque of Ibn Tulun", "The Mosque of Ibn Tulun", "The art of the courtyard", "English", "Transcript draft", "Processing"),
  audio(16, "Edfu — the falcon temple", "The Temple of Edfu", "Along the Nile at Philae", "English", "Transcript reviewed", "Available"),
  audio(17, "Dendera — the ceiling of the sky", "The Temple of Dendera", "Reading the walls of Karnak", "English", "Transcript draft", "Processing"),
  audio(18, "Kom Ombo — two gods, one temple", "The Temple of Kom Ombo", "Along the Nile at Philae", "Arabic", "Transcript reviewed", "Available"),
  audio(19, "The Qaitbay Citadel", "The Qaitbay Citadel", "The art of the courtyard", "English", "Transcript missing", "Error"),
  model(20, "Abu Simbel — facade study", "The Temples of Abu Simbel", "Reading the walls of Karnak", "English", "Unavailable", "No model reference · 2 tour steps"),
  audio(21, "The Red Monastery", "The Red Monastery", "A sanctuary above the city", "English", "Transcript reviewed", "Available"),
  audio(22, "Wadi el-Natrun — desert monasteries", "Wadi el-Natrun Monasteries", "A sanctuary above the city", "Arabic", "Transcript draft", "Processing"),
  model(23, "Valley of the Kings — tomb plan", "Valley of the Kings", "Giza: a horizon in stone", "English", "Available", "Placeholder reference · Tour draft", {
    modelRef: "placeholder://valley-of-the-kings",
  }),
  audio(24, "Amr ibn al-As — the first mosque", "The Mosque of Amr ibn al-As", "The art of the courtyard", "Arabic", "Transcript reviewed", "Available"),
];

export const mediaStatuses = ["Processing", "Available", "Unavailable", "Error"];
export const mediaLanguages = ["English", "Arabic"];
export const transcriptStatuses = ["Transcript draft", "Transcript reviewed", "Transcript missing"];

export const emptyAudio = {
  id: null, kind: "audio", title: "", place: "Giza Pyramids", story: "", language: "English",
  transcriptStatus: "Transcript draft", status: "Processing", audioUrl: "", transcript: "", isNew: true,
};
export const emptyModel = {
  id: null, kind: "model", title: "", place: "Giza Pyramids", story: "", language: "English",
  status: "Unavailable", modelRef: "", introduction: "",
  fallback: "A site overview and image are shown while the model is unavailable. No interactive tour can be launched.",
  steps: [], isNew: true,
};

// The list-row description for a 3D record.
export const modelNote = (record) =>
  record.listNote ??
  `${record.modelRef ? "Reference supplied" : "No model reference"} · ${record.steps.length} tour ${record.steps.length === 1 ? "step" : "steps"}`;

export const shortName = (record) =>
  record.shortName ?? (record.title.trim() ? record.title.replace(" — ", " ") : "New record");
