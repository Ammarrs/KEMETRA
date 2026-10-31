import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineSpeakerXMark, HiOutlineSpeakerWave } from "react-icons/hi2";

function Header() {
  let [sound, setSound] = useState(true);

  const links = [
    { linkName: "Home", linkPath: "/" },
    { linkName: "Explore Map", linkPath: "/map" },
    { linkName: "Timeline", linkPath: "/timeline" },
    { linkName: "Stories", linkPath: "/stories" },
  ];

  function handleSound() {
    setSound(!sound);
  }

  return (
    <div className="bg-secondary px-12 py-6 flex justify-between items-center">
      <div className="brand-mark flex gap-5 items-center">
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

        <span className="text-primary text-2xl">KEMETRA</span>
      </div>
      <div className="nav-links flex gap-5 items-center">
        {links.map((link) => (
          <NavLink active className="text-background" to={link.linkPath}>
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
          <button className="border border-divider rounded-md px-2 py-1 text-background">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
