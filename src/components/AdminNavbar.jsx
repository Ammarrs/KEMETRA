import React from "react";
import BrandMark from "./BrandMark";
import { Link } from "react-router-dom";

function AdminNavbar() {

  const adminLinks = [
    {id: 1, path: "/admin/admin-overview", name: "Overview"},
    {id: 2, path: "/admin/admin-stories", name: "Stories"},
    {id: 3, path: "/admin/admin-places", name: "Places & Heritage Data"},
    {id: 4, path: "/admin/admin-timeline", name: "Timeline"},
    {id: 5, path: "/admin/admin-audio", name: "Audio Records"},
    {id: 6, path: "/admin/admin-3d", name: "3D Experiences"},
    {id: 7, path: "/admin/admin-settings", name: "Settings"},
  ]

  return (
    <div className="w-60 bg-secondary h-screen py-7 px-5 flex flex-col gap-8">
      <div className="brand">
        <BrandMark/>
      </div>
      <div className="role text-primary">
        <span>CURATORIAL ADMIN</span>
      </div>
      <div className="nav flex flex-col gap-2 text-background">
        {
          adminLinks.map((link) => <Link className="p-3" key={link.id} to={link.path}>{link.name}</Link>)
        }
      </div>
      <hr className="border-muted-foreground"/>
      <div className="back-to-home">
        <span className="text-background">Back to Public Site</span>
      </div>
      <div className="profile"></div>
    </div>
  );
}

export default AdminNavbar;
