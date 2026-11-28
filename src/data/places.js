
import gizaImage from "../images/giza-pyramids.jpg"
import karnakImage from "../images/karnak-temple.jpg"
import valleyImage from "../images/valley-of-kings.jpg"
import abuSimbelImage from "../images/abu-simbel.jpg"
import saqqaraImage from "../images/saqqara.jpg"
import museumImage from "../images/egyptian-museum.jpg"

const places = [
  {
    id: 1,
    name: "Giza Pyramids",
    location: "Giza, Lower Egypt",
    region: "lower",
    era: "Old Kingdom",
    eraFilter: "ancient",
    type: "Pyramid",
    typeFilter: "pyramid",
    image: gizaImage,
    description:
      "Discover the Great Pyramids of Giza, one of the most remarkable achievements of ancient Egyptian civilization.",
  },
  {
    id: 2,
    name: "Karnak Temple",
    location: "Luxor, Upper Egypt",
    region: "upper",
    era: "New Kingdom",
    eraFilter: "ancient",
    type: "Temple",
    typeFilter: "temple",
    image: karnakImage,
    description:
      "Explore the vast Karnak Temple complex, famous for its monumental columns and sacred halls.",
  },
  {
    id: 3,
    name: "Valley of the Kings",
    location: "Luxor, Upper Egypt",
    region: "upper",
    era: "New Kingdom",
    eraFilter: "ancient",
    type: "Tomb",
    typeFilter: "tomb",
    image: valleyImage,
    description:
      "Discover the royal burial ground where many pharaohs of ancient Egypt were laid to rest.",
  },
  {
    id: 4,
    name: "Abu Simbel",
    location: "Aswan, Upper Egypt",
    region: "upper",
    era: "New Kingdom",
    eraFilter: "ancient",
    type: "Temple",
    typeFilter: "temple",
    image: abuSimbelImage,
    description:
      "Explore the magnificent rock-cut temples built by Pharaoh Ramesses II.",
  },
  {
    id: 5,
    name: "Saqqara Necropolis",
    location: "Saqqara, Giza",
    region: "lower",
    era: "Old Kingdom",
    eraFilter: "ancient",
    type: "Necropolis",
    typeFilter: "tomb",
    image: saqqaraImage,
    description:
      "Discover Saqqara, home to the famous Step Pyramid of Djoser and one of Egypt's oldest burial grounds.",
  },
  {
    id: 6,
    name: "Egyptian Museum",
    location: "Tahrir Square, Cairo",
    region: "lower",
    era: "Ancient Egyptian Collection",
    eraFilter: "ancient",
    type: "Museum",
    typeFilter: "museum",
    image: museumImage,
    description:
      "Explore an extraordinary collection of ancient Egyptian artifacts, statues, treasures, and royal objects.",
  },
]

export default places
