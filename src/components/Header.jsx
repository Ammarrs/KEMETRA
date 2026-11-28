import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Volume2, VolumeX } from "lucide-react";
import BrandMark from "./BrandMark";
import SideMenu from "./SideMenu";
import LoginButton from "./LoginButton";
import DashboardButton from "./DashboardButton";

function Header() {

  let [sound, setSound] = useState(true);
  let [isLoggedin, setIsLogedin] = useState(true);
  let [isAdmin, setIsAdmin] = useState(true);


  const links = [
    { id: 1, linkName: "Home", linkPath: "/" },
    { id: 2, linkName: "Explore Map", linkPath: "/explore-map" },
    { id: 3, linkName: "Timeline", linkPath: "/timeline" },
    { id: 4, linkName: "Stories", linkPath: "/stories" },
    { id: 5, linkName: "Settings", linkPath: "/settings" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.13] bg-secondary">
      <div className="mx-auto flex h-[87px] w-full max-w-[1440px] items-center justify-between px-6 md:px-12">
        <BrandMark />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <NavLink
              key={link.id}
              to={link.linkPath}
              end={link.linkPath === "/"}
              className={({ isActive }) =>
                `relative text-[14px] font-medium leading-5 transition-colors ${
                  isActive
                    ? "text-gold after:absolute after:-bottom-[4px] after:left-0 after:h-[2px] after:w-5 after:bg-gold"
                    : "text-background hover:text-gold"
                }`
              }
            >
              {link.linkName}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <button
            type="button"
            onClick={() => setSound((v) => !v)}
            aria-pressed={sound}
            className="inline-flex items-center gap-2 text-[11px] text-subtitle transition-colors hover:text-background"
          >
            {sound ? (
              <Volume2 className="h-[15px] w-[15px]" />
            ) : (
              <VolumeX className="h-[15px] w-[15px]" />
            )}
            Ambient {sound ? "ON" : "OFF"}
          </button>
        </div> 
        <div className="login hidden lg:block">
          {isLoggedin ? (
            <div className="flex gap-5 items-center">
              <Link to="/profile">
                <div className="profile text-center border border-primary rounded-full p-2">
                  <span className="text-primary">AM</span>
                </div>
              </Link>
              {isAdmin && <DashboardButton />}
            </div>
          ) : (
            <LoginButton />
          )}
        </div>

        <div className="block lg:hidden">
          <SideMenu />
        </div>
      </div>
    </header>
  );
}

export default Header;
