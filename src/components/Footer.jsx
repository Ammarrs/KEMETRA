import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  let exploreLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Explore Map", path: "/map" },
    { id: 3, name: "Timeline", path: "/timeline" },
    { id: 4, name: "Stories", path: "/stories" },
  ];

  let heritageLinks = [
    { id: 1, name: "Pharaonic", path: "/pharaonic" },
    { id: 2, name: "Coptic", path: "/coptic" },
    { id: 3, name: "Islamic", path: "/islamic" },
    { id: 4, name: "About KEMETRA", path: "/about" },
  ];

  let connectLinks = [
    { id: 1, name: "Pharaonic", path: "/pharaonic" },
    { id: 2, name: "Coptic", path: "/coptic" },
    { id: 3, name: "Islamic", path: "/islamic" },
    { id: 4, name: "About KEMETRA", path: "/about" },
  ];

  return (
    <div className="bg-secondary text-background pt-16 pb-7 px-12">
      <div className="upper flex justify-between pb-12">
        <div className="brief flex flex-col gap-5">
          <div className="brand flex gap-3 items-center">
            <svg
              width="28"
              height="25"
              viewBox="0 0 28 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="stroke0_2_35525" fill="white">
                <path d="M0 24.6858L14 3.52859e-05L28 24.6858H21H7H0Z" />
              </mask>
              <path
                d="M14 12.3429L14.5437 12.0346L14 11.076L13.4563 12.0346L14 12.3429ZM7 24.6858L7.54366 24.9941L14.5437 12.6512L14 12.3429L13.4563 12.0346L6.45634 24.3774L7 24.6858ZM14 12.3429L13.4563 12.6512L20.4563 24.9941L21 24.6858L21.5437 24.3774L14.5437 12.0346L14 12.3429ZM-2 30.8572V31.4822H30V30.8572V30.2322H-2V30.8572ZM14 -5.14282H13.375V3.52859e-05H14H14.625V-5.14282H14ZM0 24.6858L-1.08731 24.0691L-2.14594 25.9358H0V24.6858ZM14 3.52859e-05L15.0873 -0.616611L14 -2.53383L12.9127 -0.616611L14 3.52859e-05ZM28 24.6858V25.9358H30.1459L29.0873 24.0691L28 24.6858ZM0 24.6858L1.08731 25.3024L15.0873 0.616682L14 3.52859e-05L12.9127 -0.616611L-1.08731 24.0691L0 24.6858ZM14 3.52859e-05L12.9127 0.616682L26.9127 25.3024L28 24.6858L29.0873 24.0691L15.0873 -0.616611L14 3.52859e-05ZM28 24.6858V23.4358H21V24.6858V25.9358H28V24.6858ZM21 24.6858V23.4358H7V24.6858V25.9358H21V24.6858ZM7 24.6858V23.4358H0V24.6858V25.9358H7V24.6858Z"
                fill="#C69C4D"
                mask="url(#stroke0_2_35525)"
              />
            </svg>
            <div className="title font-display text-2xl">KEMETRA</div>
          </div>
          <div className="info w-120 text-subtitle">
            Egypt’s heritage, in place and in perspective. Discover the
            monuments, living traditions and stories that connect us.
          </div>
          <div className="slogan text-primary text-lg">
            A journey of discovery, thoughtfully told.
          </div>
        </div>
        <div className="explore flex flex-col gap-2">
          <div className="title">EXPLORE</div>
          {exploreLinks.map((link) => (
            <Link key={link.id} to={link.path}>
              {link.name}
            </Link>
          ))}
        </div>
        <div className="heritage flex flex-col gap-2">
          <div className="title">HERITAGE</div>
          {heritageLinks.map((link) => (
            <Link key={link.id} to={link.path}>
              {link.name}
            </Link>
          ))}
        </div>
        <div className="connected flex flex-col gap-2">
          <div className="title">STAY CONNECTED</div>
          {connectLinks.map((link) => (
            <Link key={link.id} to={link.path}>
              {link.name}
            </Link>
          ))}
          <span to=""></span>
        </div>
      </div>
      <div className="lower border border-x-0 border-b-0 border-t-divider py-5 flex justify-between">
        <div className="left w-[50%] text-subtitle text-sm">
          &copy; 2026 KEMETRA. Egypt’s Heritage Explorer.
        </div>
        <div className="right text-subtitle text-sm text-end">
          Design preview · Editorial copy subject to curatorial review.
          AI-generated site illustrations, not archival photography. Map
          geometry: schematic, not for navigation.
        </div>
      </div>
    </div>
  );
}

export default Footer;
