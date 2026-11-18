import React from 'react';

const SEA = '#CDD0C6';
const LAND = '#E8DCBE';
const BORDER = '#D6B677';
const RIVER = '#2E5D65';
const TEXT = '#4E4638';

export default function EgyptMap() {
  return (
    <svg
      viewBox="0 0 728 456"
      className="block h-auto w-full"
      role="img"
      aria-label="Schematic map of Egypt showing the Nile, Giza Pyramids, Karnak and Philae"
      fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
    >
      <rect width="728" height="456" fill="#F3EBDD" />

      <polygon
        fill={SEA}
        points="0,51.5 104.5,91.4 176,87.7 228.5,104 302,111.4 386,90.4 420,87.7 456,102 486,100.3 582,98.2 660,0 0,0"
      />
      <polygon
        fill={SEA}
        points="492,145 499,160 536,197 584.7,226 592.5,218 618,164 656.6,164 682,218 728,252 728,437 681,437 636,365 551.5,256 504,208 483,156"
      />
      <polygon
        fill={LAND}
        stroke={BORDER}
        strokeWidth="1"
        strokeLinejoin="round"
        points="104.5,91.4 176,87.7 228.5,104 302,111.4 386,90.4 420,87.7 456,102 486,100.3 582,98.2 618,164 592.5,218 584.7,226 536,197 499,160 492,145 483,156 504,208 551.5,256 636,365 681,437 104.5,437"
      />

      <g fill="none" stroke={RIVER} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="386,90.4 397.6,124 415,135.5 422,146" />
        <polyline points="456.5,98 438.6,119.8 429.7,135.5 422,146" />
        <polyline points="418.7,160 398,209 425.5,239.5 446.5,262 507,283.7 502,302 514.8,334.6 513.7,363 483,401 451.8,422 445.5,437" />
      </g>

      <g fontSize="10" fill={TEXT} textAnchor="middle" letterSpacing="0.6">
        <text x="228" y="56.5" fill={RIVER}>MEDITERRANEAN SEA</text>
        <text x="27" y="224.5">LIBYA</text>
        <text x="176.5" y="326.5">WESTERN DESERT</text>
        <text x="573" y="180.5">SINAI</text>
        <text x="621.5" y="293.5" fill={RIVER}>RED SEA</text>
        <text x="384.5" y="450.5">SUDAN</text>
      </g>
      <text x="257" y="254" fontSize="18" fill={TEXT} textAnchor="middle" letterSpacing="3.2">EGYPT</text>
      <text x="337" y="92.5" fontSize="11" fill={TEXT} textAnchor="middle">Alexandria</text>
      <text x="420" y="217.5" fontSize="11" fill={RIVER} textAnchor="middle">Nile</text>

      <rect x="282" y="127" width="100" height="23" rx="3.5" fill="#0C131F" />
      <path d="M291.5 138.8 294 141.3 298.8 136.2" fill="none" stroke="#C69C4D" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <text x="307" y="142.8" fontSize="11" fontWeight="700" fill="#C69C4D">Giza Pyramids</text>
      <circle cx="422.5" cy="146" r="14" fill="#F3EBDD" stroke="#C69C4D" strokeWidth="1.6" />
      <circle cx="422.5" cy="146" r="5.8" fill="#C69C4D" />

      <rect x="418" y="284" width="46.5" height="23" rx="4" fill="#FBF7EE" />
      <text x="424.5" y="300.8" fontSize="11" fontWeight="500" fill="#0C131F">Karnak</text>
      <circle cx="502.5" cy="302" r="6.5" fill="#0C131F" stroke="#FBF7EE" strokeWidth="1.6" />

      <rect x="519" y="347" width="43" height="23" rx="4" fill="#FBF7EE" />
      <text x="526.5" y="363.8" fontSize="11" fontWeight="500" fill="#0C131F">Philae</text>
      <circle cx="514" cy="363" r="6.5" fill="#0C131F" stroke="#FBF7EE" strokeWidth="1.6" />

      <text x="688" y="35.5" fontSize="9" fontWeight="700" fill="#0C131F" textAnchor="middle">N</text>
      <path d="M688 47.5 695 66.5 688 62.2 681 66.5Z" fill="none" stroke={TEXT} strokeWidth="1.1" strokeLinejoin="round" />

      <rect x="11.5" y="428" width="340" height="17.5" fill="#FBF7EE" />
      <text x="18.5" y="440.2" fontSize="9" fill={TEXT}>
        KEMETRA · Schematic geography · Approximate locations · Not for navigation
      </text>

      <rect x="0.5" y="0.5" width="727" height="455" rx="5" fill="none" stroke="#E1CBA4" />
    </svg>
  );
}
