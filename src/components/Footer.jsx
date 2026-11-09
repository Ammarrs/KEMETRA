import React from "react";
import { Link } from "react-router-dom";

function Footer() {

  let exploreLinks = [
    {name: "Home", path: "/"},
    {name: "Explore Map", path: "/map"},
    {name: "Timeline", path: "/timeline"},
    {name: "Stories", path: "/stories"},
  ]

  let heritageLinks = [
    {name: "Pharaonic", path: "/pharaonic"},
    {name: "Coptic", path: "/coptic"},
    {name: "Islamic", path: "/islamic"},
    {name: "About KEMETRA", path: "/about"},
  ]

  let connectLinks = [
    {name: "Pharaonic", path: "/pharaonic"},
    {name: "Coptic", path: "/coptic"},
    {name: "Islamic", path: "/islamic"},
    {name: "About KEMETRA", path: "/about"},
  ]

  return (
    <div className="bg-secondary text-background pt-16 pb-7 px-12">
      <div className="upper flex justify-between pb-12">
        <div className="brief flex flex-col gap-5">
          <div className="title">KEMETRA</div>
          <div className="info w-120 text-subtitle">
            Egypt’s heritage, in place and in perspective. Discover the
            monuments, living traditions and stories that connect us.
          </div>
          <div className="slogan text-primary text-lg">
            A journey of discovery, thoughtfully told.
          </div>
        </div>
        <div className="explore">
          <div className="title">EXPLORE</div>
          {
            exploreLinks.map((link) => (<Link to={link.path}>{link.name}</Link>))
          }
        </div>
        <div className="heritage">
          <div className="title">HERITAGE</div>
          <Link to=""></Link>
          <Link to=""></Link>
          <Link to=""></Link>
          <Link to=""></Link>
        </div>
        <div className="connected">
          <div className="title">STAY CONNECTED</div>
          <Link to=""></Link>
          <Link to=""></Link>
          <span to=""></span>
        </div>
      </div>
      <div className="lower border border-x-0 border-b-0 border-t-divider">
        <div className="left"></div>
        <div className="right"></div>
      </div>
    </div>
  );
}

export default Footer;
