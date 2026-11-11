import React from "react";
import { Link } from "react-router-dom";
import BrandMark from "./BrandMark";

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
    { id: 1, name: "contact", path: "/contact" },
    // { id: 2, name: "Instagram", path: "/instagram" },
    // { id: 3, name: "Youtube", path: "/youtube" },
    // { id: 4, name: "Facebook", path: "/facebook" },
  ];

  return (
    <div className="bg-secondary text-background pt-16 pb-7 px-12">
      <div className="upper lg:flex justify-between pb-12">
        <div className="brief md:w-full flex flex-col gap-5 mb-5">
          <div className="brand md:w-full flex gap-3 items-center">
            <BrandMark/>
          </div>
          <div className="info flex flex-wrap md:w-full lg:w-120 text-subtitle">
            Egypt’s heritage, in place and in perspective. Discover the
            monuments, living traditions and stories that connect us.
          </div>
          <div className="slogan md:w-full text-primary text-lg">
            A journey of discovery, thoughtfully told.
          </div>
        </div>
        <div className="navigation gap-3 flex-wrap flex justify-between">
          <div className="explore flex flex-col gap-2">
          <div className="title text-primary">EXPLORE</div>
          {exploreLinks.map((link) => (
            <Link className="hover:text-primary" key={link.id} to={link.path}>
              {link.name}
            </Link>
          ))}
        </div>
        <div className="heritage flex flex-col gap-2">
          <div className="title text-primary">HERITAGE</div>
          {heritageLinks.map((link) => (
            <Link className="hover:text-primary" key={link.id} to={link.path}>
              {link.name}
            </Link>
          ))}
        </div>
        <div className="connected flex flex-col gap-2">
          <div className="title text-primary">STAY CONNECTED</div>
          {connectLinks.map((link) => (
            <Link className="hover:text-primary" key={link.id} to={link.path}>
              {link.name}
            </Link>
          ))}
          <span to=""></span>
        </div>
        </div>
      </div>
      <div className="lower border border-x-0 border-b-0 border-t-divider py-5 lg:flex justify-between">
        <div className="left lg:w-[50%] mb-4 text-subtitle text-sm">
          &copy; 2026 KEMETRA. Egypt’s Heritage Explorer.
        </div>
        <div className="right text-subtitle text-sm lg:text-end">
          Design preview · Editorial copy subject to curatorial review.
          AI-generated site illustrations, not archival photography. Map
          geometry: schematic, not for navigation.
        </div>
      </div>
    </div>
  );
}

export default Footer;
