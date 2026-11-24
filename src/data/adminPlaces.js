// Sample data for the Places admin page (static prototype — replace with API data).
// The first six records match the approved design; the rest complete the 26-place catalog.
const p = (id, name, location, era, type, guide, model, status, image = "") => ({
  id, name, location, era, type, guide, model, status, image,
});

export const initialPlaces = [
  p(1, "Giza Pyramids", "Giza Plateau", "Pharaonic", "Pyramid complex", "Not attached", "Unavailable", "Draft", "/profile/giza-pyramids.jpg"),
  p(2, "Karnak Temple", "Luxor", "Pharaonic", "Temple complex", "Available¹", "Available¹", "Draft", "/profile/karnak-temple.jpg"),
  p(3, "Philae Temple", "Aswan", "Pharaonic", "Temple", "Not attached", "Unavailable", "Archived", "/profile/philae-temple.jpg"),
  p(4, "Saints Sergius & Bacchus", "Old Cairo", "Coptic", "Church", "Not attached", "Unavailable", "Draft"),
  p(5, "Sultan Hassan", "Historic Cairo", "Islamic", "Mosque & madrasa", "Available¹", "Processing", "Published", "/profile/sultan-hassan.jpg"),
  p(6, "The Hanging Church", "Old Cairo", "Coptic", "Church", "Available¹", "Unavailable", "Published", "/profile/hanging-church.jpg"),
  p(7, "The Underground Catacombs of Kom el-Shoqafa", "Alexandria", "Greco-Roman", "Necropolis", "Not attached", "Unavailable", "Draft"),
  p(8, "The Qaitbay Citadel", "Alexandria", "Islamic", "Fortress", "Not attached", "Unavailable", "Draft"),
  p(9, "The Monastery of Saint Anthony", "Red Sea", "Coptic", "Monastery", "Available¹", "Unavailable", "Published"),
  p(10, "The Mosque of Amr ibn al-As", "Old Cairo", "Islamic", "Mosque & madrasa", "Not attached", "Unavailable", "Draft"),
  p(11, "The Mosque of Ibn Tulun", "Historic Cairo", "Islamic", "Mosque & madrasa", "Available¹", "Processing", "Published"),
  p(12, "The Muizz Street", "Historic Cairo", "Islamic", "Historic street", "Available¹", "Unavailable", "Published"),
  p(13, "The Red Monastery", "Sohag", "Coptic", "Monastery", "Not attached", "Unavailable", "Draft"),
  p(14, "The Temple of Dendera", "Qena", "Greco-Roman", "Temple", "Available¹", "Unavailable", "Draft"),
  p(15, "The Temple of Edfu", "Edfu", "Greco-Roman", "Temple", "Available¹", "Available¹", "Published"),
  p(16, "The Temple of Hatshepsut", "Luxor", "Pharaonic", "Temple", "Not attached", "Unavailable", "Draft"),
  p(17, "The Temple of Kom Ombo", "Aswan", "Greco-Roman", "Temple", "Not attached", "Unavailable", "Archived"),
  p(18, "The Temples of Abu Simbel", "Nubia", "Pharaonic", "Temple complex", "Available¹", "Processing", "Published"),
  p(19, "Tombs of the Nobles", "Aswan", "Pharaonic", "Necropolis", "Not attached", "Unavailable", "Draft"),
  p(20, "Unfinished Obelisk", "Aswan", "Pharaonic", "Quarry site", "Not attached", "Unavailable", "Draft"),
  p(21, "Valley of the Kings", "Luxor", "Pharaonic", "Necropolis", "Available¹", "Unavailable", "Published"),
  p(22, "Valley of the Queens", "Luxor", "Pharaonic", "Necropolis", "Not attached", "Unavailable", "Draft"),
  p(23, "Wadi el-Natrun Monasteries", "Beheira", "Coptic", "Monastery", "Not attached", "Unavailable", "Draft"),
  p(24, "White Monastery", "Sohag", "Coptic", "Monastery", "Not attached", "Unavailable", "Archived"),
  p(25, "Wikala al-Ghuri", "Historic Cairo", "Islamic", "Caravanserai", "Not attached", "Unavailable", "Draft"),
  p(26, "Zawiya of Sheikh Zayn al-Din", "Historic Cairo", "Islamic", "Zawiya", "Not attached", "Unavailable", "Draft"),
];

export const placeStatuses = ["Draft", "Published", "Archived"];
export const placeEras = ["Pharaonic", "Greco-Roman", "Coptic", "Islamic"];
export const placeTypes = [...new Set(initialPlaces.map((place) => place.type))].sort();

export const emptyPlace = {
  id: null,
  name: "",
  location: "",
  era: "Pharaonic",
  type: "Temple",
  guide: "Not attached",
  model: "Unavailable",
  status: "Draft",
  image: "",
  isNew: true,
};
