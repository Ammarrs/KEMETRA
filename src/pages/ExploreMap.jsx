
import { useMemo, useState, useEffect } from "react"
import "./ExploreMap.css"

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

function EgyptMap({ selectedPlace, onSelectPlace }) {
  const mapPlaces = [
    {
      id: 1,
      name: "Giza Pyramids",
      x: 455,
      y: 270,
      labelX: 300,
      labelY: 247,
      labelWidth: 118,
    },
    {
      id: 2,
      name: "Karnak · Luxor",
      x: 555,
      y: 535,
      labelX: 420,
      labelY: 520,
      labelWidth: 105,
    },
    {
      id: 3,
      name: "Valley of the Kings",
      x: 568,
      y: 638,
      labelX: 405,
      labelY: 625,
      labelWidth: 145,
    },
    {
      id: 4,
      name: "Abu Simbel",
      x: 495,
      y: 740,
      labelX: 370,
      labelY: 724,
      labelWidth: 92,
    },
  ]

  return (
    <div className="egypt-map">
      <svg
        viewBox="0 0 800 780"
        className="egypt-map-svg"
        role="img"
        aria-label="Illustrated map of Egypt showing four historical sites"
      >
        <defs>
          <clipPath id="egyptMapClip">
            <rect width="800" height="780" rx="3" />
          </clipPath>
        </defs>

        <g clipPath="url(#egyptMapClip)">
          <rect width="800" height="780" fill="#F2EBDD" />

          {/* Mediterranean Sea across the full top width */}
          <path
            d="M0 0 H800 V145
               L720 145 L665 132 L610 138
               L550 130 L490 145 L465 145
               L420 175 L365 190 L305 185
               L225 145 L145 150 L70 105 L0 65 Z"
            fill="#CDD1C7"
          />

          {/* Egypt mainland */}
          <path
            d="M145 150
               L225 145 L305 185 L365 190
               L420 175 L465 145
               L520 170 L565 245
               L545 310 L550 410
               L610 520 L665 650
               L720 780 L145 780 Z"
            fill="#E8DDBD"
            stroke="#C7A34C"
            strokeWidth="1.5"
          />

          {/* Sinai Peninsula */}
          <path
            d="M520 170
               L635 165 L665 230
               L690 305 L655 410
               L605 360 L565 285
               L545 245 Z"
            fill="#E8DDBD"
            stroke="#C7A34C"
            strokeWidth="1.5"
          />

          {/* Red Sea on the eastern side */}
          <path
            d="M690 305
               L730 305 L755 400
               L800 455 L800 780
               L720 780 L665 650
               L610 520 L550 410
               L545 310 L565 285
               L605 360 L655 410 Z"
            fill="#CDD1C7"
            stroke="#C7A34C"
            strokeWidth="1"
          />

          {/* Nile Delta and Nile River */}
          <path
            d="M455 145
               L468 200
               L490 235
               L455 270
               L430 365
               L480 465
               L560 510
               L555 535
               L570 590
               L568 638
               L535 705
               L495 740
               L485 780"
            fill="none"
            stroke="#356776"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Nile Delta branches */}
          <path
            d="M490 235 L525 165
               M490 235 L455 145
               M455 145 L420 175"
            fill="none"
            stroke="#356776"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Geographic labels */}
          <g className="map-geography-labels">
            <text
              x="400"
              y="82"
              textAnchor="middle"
              className="map-sea-label"
            >
              MEDITERRANEAN SEA
            </text>

            <text x="475" y="375" className="map-river-label">
              Nile
            </text>

            <text x="690" y="535" className="map-sea-label">
              RED SEA
            </text>

            <text x="610" y="330" className="map-region-label">
              SINAI
            </text>

            <text x="30" y="395" className="map-region-label">
              LIBYA
            </text>

            <text x="185" y="570" className="map-region-label">
              WESTERN DESERT
            </text>

            <text x="390" y="780" className="map-region-label">
              SUDAN
            </text>

            <text x="365" y="440" className="map-country-label">
              E G Y P T
            </text>

            <text x="380" y="98" className="map-city-label">
              Alexandria
            </text>
          </g>

          {/* Compass */}
          <g className="map-compass" transform="translate(750 35)">
            <text x="0" y="0" textAnchor="middle">N</text>
            <path d="M0 15 L-7 38 L0 32 L7 38 Z" />
          </g>

          {/* Four original historical locations only */}
          {mapPlaces.map((place) => {
            const isSelected = selectedPlace.id === place.id

            return (
              <g
                key={place.id}
                className="map-marker"
                onClick={() =>
                  onSelectPlace(
                    places.find((item) => item.id === place.id)
                  )
                }
                role="button"
                tabIndex="0"
                aria-label={`Select ${place.name}`}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    onSelectPlace(
                      places.find((item) => item.id === place.id)
                    )
                  }
                }}
              >
                <circle
                  cx={place.x}
                  cy={place.y}
                  r={isSelected ? 12 : 7}
                  className={
                    isSelected
                      ? "map-marker-selected"
                      : "map-marker-dot"
                  }
                />

                {isSelected && (
                  <circle
                    cx={place.x}
                    cy={place.y}
                    r="5"
                    className="map-marker-center"
                  />
                )}

                <rect
                  x={place.labelX}
                  y={place.labelY}
                  width={place.labelWidth}
                  height="25"
                  rx="3"
                  className={
                    isSelected ? "map-label-selected" : "map-label"
                  }
                />

                <text
                  x={place.labelX + place.labelWidth / 2}
                  y={place.labelY + 16}
                  textAnchor="middle"
                  className={
                    isSelected
                      ? "map-label-text-selected"
                      : "map-label-text"
                  }
                >
                  {place.name}
                </text>
              </g>
            )
          })}

          {/* Selected location counter */}
          <g transform="translate(22 22)">
            <rect
              width="205"
              height="34"
              rx="4"
              className="map-counter-bg"
            />
            <circle
              cx="15"
              cy="17"
              r="5"
              className="map-counter-dot"
            />
            <text x="28" y="21" className="map-counter-text">
              4 curated places · {selectedPlace.name} selected
            </text>
          </g>

          {/* Map legend */}
          <g transform="translate(22 720)">
            <rect
              width="300"
              height="38"
              rx="4"
              className="map-legend-bg"
            />
            <circle
              cx="17"
              cy="19"
              r="5"
              className="map-legend-selected"
            />
            <text x="29" y="23" className="map-legend-text">
              Selected
            </text>
            <circle
              cx="112"
              cy="19"
              r="5"
              className="map-legend-pharaonic"
            />
            <text x="124" y="23" className="map-legend-text">
              Pharaonic
            </text>
            <circle
              cx="218"
              cy="19"
              r="5"
              className="map-legend-coptic"
            />
            <text x="230" y="23" className="map-legend-text">
              Historic
            </text>
          </g>

          <text x="22" y="772" className="map-footer-text">
            KEMETRA · Schematic geography · Approximate locations · Not for navigation
          </text>
        </g>
      </svg>
    </div>
  )
}

function ExploreMap() {
  const [selectedPlace, setSelectedPlace] = useState(places[0])
  const [search, setSearch] = useState("")
  const [selectedEra, setSelectedEra] = useState("all")
  const [selectedType, setSelectedType] = useState("all")
  const [selectedRegion, setSelectedRegion] = useState("all")

  const filteredPlaces = useMemo(() => {
    return places.filter((place) => {
      return (
        place.name.toLowerCase().includes(search.toLowerCase()) &&
        (selectedEra === "all" || place.eraFilter === selectedEra) &&
        (selectedType === "all" || place.typeFilter === selectedType) &&
        (selectedRegion === "all" || place.region === selectedRegion)
      )
    })
  }, [search, selectedEra, selectedType, selectedRegion])

  useEffect(() => {
    if (
      filteredPlaces.length > 0 &&
      !filteredPlaces.some((place) => place.id === selectedPlace.id)
    ) {
      setSelectedPlace(filteredPlaces[0])
    }
  }, [filteredPlaces, selectedPlace])

  return (
    <main className="explore-page">
      <header className="explore-header">
        <h1>Explore the Map</h1>
        <p>
          Discover the ancient wonders and historical treasures of Egypt.
        </p>
      </header>

      <section className="explore-filters">
        <input
          type="search"
          placeholder="Search historical places..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <select
          value={selectedEra}
          onChange={(event) => setSelectedEra(event.target.value)}
        >
          <option value="all">All Eras</option>
          <option value="ancient">Ancient Egypt</option>
        </select>

        <select
          value={selectedType}
          onChange={(event) => setSelectedType(event.target.value)}
        >
          <option value="all">All Place Types</option>
          <option value="temple">Temple</option>
          <option value="pyramid">Pyramid</option>
          <option value="tomb">Tomb / Necropolis</option>
          <option value="museum">Museum</option>
        </select>

        <select
          value={selectedRegion}
          onChange={(event) => setSelectedRegion(event.target.value)}
        >
          <option value="all">All Regions</option>
          <option value="upper">Upper Egypt</option>
          <option value="lower">Lower Egypt</option>
        </select>
      </section>

      <section className="map-layout">
        <div className="map-area">
          <EgyptMap
            selectedPlace={selectedPlace}
            onSelectPlace={setSelectedPlace}
          />
        </div>

        <aside className="place-details">
          <div className="place-selector">
            <h3>Historical Sites</h3>

            {filteredPlaces.map((place) => (
              <button
                key={place.id}
                type="button"
                className={`place-select-button ${selectedPlace.id === place.id ? "active" : ""
                  }`}
                onClick={() => setSelectedPlace(place)}
              >
                {place.name}
              </button>
            ))}
          </div>

          {filteredPlaces.length > 0 ? (
            <>
              <div className="place-image-container">
                <img
                  className="place-image"
                  src={selectedPlace.image}
                  alt={selectedPlace.name}
                />
              </div>

              <h2>{selectedPlace.name}</h2>

              <p>{selectedPlace.description}</p>

              <div className="place-info">
                <div className="place-info-item">
                  <span>LOCATION</span>
                  <strong>{selectedPlace.location}</strong>
                </div>

                <div className="place-info-item">
                  <span>HISTORICAL ERA</span>
                  <strong>{selectedPlace.era}</strong>
                </div>

                <div className="place-info-item">
                  <span>PLACE TYPE</span>
                  <strong>{selectedPlace.type}</strong>
                </div>
              </div>

              <p className="filter-results">
                {filteredPlaces.length} historical places found
              </p>

              <div className="place-actions">
                <button type="button">Launch 3D Explorer</button>
                <button type="button">Hear the Story</button>
                <button type="button">
                  Download Field Navigation Guide
                </button>
              </div>
            </>
          ) : (
            <div className="empty-results">
              <h2>No places found</h2>
              <p>Try changing your search or filters.</p>
            </div>
          )}
        </aside>
      </section>
    </main>
  )
}

export default ExploreMap
