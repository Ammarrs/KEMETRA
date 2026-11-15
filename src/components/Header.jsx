import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Volume2, VolumeX } from "lucide-react";
import BrandMark from "./BrandMark";
import SideMenu from "./SideMenu";

function Header() {
  const [sound, setSound] = useState(false);
  const [isLogedin, setIsLogedin] = useState(false);

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

          {isLogedin ? (
            <Link
              to="/profile"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-primary text-xs font-semibold text-primary"
            >
              AM
            </Link>
          ) : (
            <Link
              to="/login"
              className="inline-flex h-9 items-center rounded border border-white/25 px-4 text-[13px] font-medium text-background transition-colors hover:border-gold hover:text-gold"
            >
              Login
            </Link>
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
