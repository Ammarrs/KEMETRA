import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineSpeakerXMark, HiOutlineSpeakerWave } from "react-icons/hi2";
import BrandMark from "./BrandMark";

function Header() {
  let [sound, setSound] = useState(true);
  let [isLogedin, setIsLogedin] = useState(false);

  const links = [
    { id:1, linkName: "Home", linkPath: "/" },
    { id:2, linkName: "Explore Map", linkPath: "/map" },
    { id:3, linkName: "Timeline", linkPath: "/timeline" },
    { id:4, linkName: "Stories", linkPath: "/stories" },
  ];

  function handleSound() {
    setSound(!sound);
  }

  return (
    <div className="bg-secondary px-12 py-6 flex justify-between items-center">
      <BrandMark/>
      <div className="nav-links flex gap-5 items-center">
        {links.map((link) => (
          <NavLink active className="text-background" key={link.id} to={link.linkPath}>
            {link.linkName}
          </NavLink>
        ))}
      </div>
      <div className="controls flex gap-5 items-center">
        <div className="language flex gap-2 items-center">
          <button className="text-background focus:text-primary">
            العربية
          </button>
          <span className="text-background">/</span>
          <button className="text-background focus:text-primary">Englsh</button>
        </div>
        <div onClick={handleSound} className="ambient text-background">
          <button className="flex gap-2 items-center">
            {sound ? <HiOutlineSpeakerWave /> : <HiOutlineSpeakerXMark />}
            <span className="">Ambient Sound</span>
          </button>
        </div>
        <div className="login">
          {isLogedin ? (
            <div className="profile text-center border border-primary rounded-full p-2">
              <span className="text-primary">AM</span>
            </div>
          ) : (
            <Link to="login">
              <button className="border hover:cursor-pointer border-divider rounded-md px-2 py-1 text-background">
              Login
            </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
