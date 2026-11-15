
import mapPlaces from "../../data/mapPlaces"

function EgyptMap({ places, selectedPlace, onSelectPlace }) {
  return (
    <div className="h-full min-h-[450px] w-full overflow-hidden max-[850px]:min-h-[400px]">
      <svg
        viewBox="0 0 800 780"
        className="block h-full min-h-[450px] w-full overflow-hidden font-body max-[850px]:min-h-[400px]"
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
          <g className="[&_text]:pointer-events-none">
            <text
              x="400"
              y="82"
              textAnchor="middle"
              className="fill-[#54777A] text-[12px] tracking-[2px]"
            >
              MEDITERRANEAN SEA
            </text>

            <text
              x="475"
              y="375"
              className="fill-[#356776] text-[13px]"
            >
              Nile
            </text>

            <text
              x="690"
              y="535"
              className="fill-[#54777A] text-[12px] tracking-[2px]"
            >
              RED SEA
            </text>

            <text x="610" y="330" className="fill-[#716B5D] text-[11px]">
              SINAI
            </text>

            <text x="30" y="395" className="fill-[#716B5D] text-[11px]">
              LIBYA
            </text>

            <text x="185" y="570" className="fill-[#716B5D] text-[11px]">
              WESTERN DESERT
            </text>

            <text x="390" y="780" className="fill-[#716B5D] text-[11px]">
              SUDAN
            </text>

            <text
              x="365"
              y="440"
              className="fill-[#665D4D] text-[25px] tracking-[3px]"
            >
              E G Y P T
            </text>

            <text x="380" y="98" className="fill-[#766E60] text-[11px]">
              Alexandria
            </text>
          </g>

          {/* Compass */}
          <g transform="translate(750 35)">
            <text
              x="0"
              y="0"
              textAnchor="middle"
              className="fill-[#514A3D] text-[13px] font-bold"
            >
              N
            </text>
            <path
              d="M0 15 L-7 38 L0 32 L7 38 Z"
              className="fill-none stroke-[#514A3D] stroke-[1.5px]"
            />
          </g>

          {/* Four original historical locations only */}
          {mapPlaces.map((place) => {
            const isSelected = selectedPlace.id === place.id

            return (
              <g
                key={place.id}
                className="cursor-pointer outline-none"
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
                      ? "fill-primary stroke-card stroke-[3px]"
                      : "fill-foreground stroke-card stroke-[2px]"
                  }
                />

                {isSelected && (
                  <circle
                    cx={place.x}
                    cy={place.y}
                    r="5"
                    className="fill-card"
                  />
                )}

                <rect
                  x={place.labelX}
                  y={place.labelY}
                  width={place.labelWidth}
                  height="25"
                  rx="3"
                  className={
                    isSelected
                      ? "fill-foreground stroke-foreground stroke-[1px]"
                      : "fill-card stroke-[#E4D8C5] stroke-[0.7px]"
                  }
                />

                <text
                  x={place.labelX + place.labelWidth / 2}
                  y={place.labelY + 16}
                  textAnchor="middle"
                  className={
                    isSelected
                      ? "pointer-events-none fill-[#E5BC59] text-[10px] font-bold"
                      : "pointer-events-none fill-[#34302A] text-[10px]"
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
              className="fill-[#FFFDF8] stroke-[#E3D8C7] stroke-[0.8px]"
            />
            <circle
              cx="15"
              cy="17"
              r="5"
              className="fill-primary"
            />
            <text
              x="28"
              y="21"
              className="fill-[#514A3D] text-[10px]"
            >
              4 curated places · {selectedPlace.name} selected
            </text>
          </g>

          {/* Map legend */}
          <g transform="translate(22 720)">
            <rect
              width="300"
              height="38"
              rx="4"
              className="fill-[#FFFDF8] stroke-[#E3D8C7] stroke-[0.8px]"
            />
            <circle
              cx="17"
              cy="19"
              r="5"
              className="fill-primary"
            />
            <text
              x="29"
              y="23"
              className="fill-[#514A3D] text-[10px]"
            >
              Selected
            </text>
            <circle
              cx="112"
              cy="19"
              r="5"
              className="fill-foreground"
            />
            <text
              x="124"
              y="23"
              className="fill-[#514A3D] text-[10px]"
            >
              Pharaonic
            </text>
            <circle
              cx="218"
              cy="19"
              r="5"
              className="fill-[#B96842]"
            />
            <text
              x="230"
              y="23"
              className="fill-[#514A3D] text-[10px]"
            >
              Historic
            </text>
          </g>

          <text
            x="22"
            y="772"
            className="fill-[#746B5D] text-[9px]"
          >
            KEMETRA · Schematic geography · Approximate locations · Not for navigation
          </text>
        </g>
      </svg>
    </div>
  )
}

export default EgyptMap
