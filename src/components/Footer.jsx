import React from "react";
import { Link } from "react-router-dom";
import BrandMark from "./BrandMark";

const COLS = [
  {
    title: "Explore",
    links: [
      { label: "Home", to: "/" },
      { label: "Explore Map", to: "/explore-map" },
      { label: "Timeline", to: "/timeline" },
      { label: "Stories", to: "/stories" },
    ],
  },
  {
    title: "Heritage",
    links: [
      { label: "Pharaonic", to: "/timeline" },
      { label: "Coptic", to: "/timeline" },
      { label: "Islamic", to: "/timeline" },
      { label: "About KEMETRA", to: "/about" },
    ],
  },
];

const linkCls =
  "block text-[14px] leading-5 text-background transition-colors hover:text-gold";
const labelCls =
  "text-[11px] font-bold uppercase leading-4 tracking-[0.12em] text-gold";

function Footer() {
  return (
    <footer className="bg-secondary text-subtitle">
      <div className="mx-auto w-full max-w-[1440px] px-6 pt-16 md:px-12">
        <div className="grid gap-10 pb-[49px] md:grid-cols-2 lg:grid-cols-[1fr_224px_224px_309px] lg:gap-12">
          <div>
            <BrandMark />
            <p className="mt-6 max-w-[420px] text-[15px] leading-6 text-subtitle">
              Egypt’s heritage, in place and in perspective. Discover the
              monuments, living traditions and stories that connect us.
            </p>
            <p className="mt-[23px] text-[11px] font-bold uppercase leading-4 tracking-[0.12em] text-gold">
              A journey of discovery, thoughtfully told.
            </p>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <p className={labelCls}>{col.title}</p>
              <ul className="mt-[14px] space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className={linkCls}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className={labelCls}>Stay connected</p>
            <ul className="mt-[14px] space-y-3">
              <li>
                <Link to="/about" className={linkCls}>
                  Contact
                </Link>
              </li>
              <li className="pt-[3px] text-[13px] leading-[19.5px] text-subtitle">
                Instagram · YouTube · Facebook
                <br />
                Social links coming soon
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-3 border-t border-white/[0.13] pb-[30px] pt-4 text-[12px] leading-[19px] text-subtitle md:flex-row md:gap-10">
          <p>© 2026 KEMETRA. Egypt’s Heritage Explorer.</p>
          <p className="max-w-[715px] md:text-right">
            Design preview · Editorial copy subject to curatorial review.
            AI-generated site illustrations, not archival photography. Map
            geometry: schematic, not for navigation.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
