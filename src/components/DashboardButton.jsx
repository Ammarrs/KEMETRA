import React from "react";
import { Link } from "react-router-dom";

function DashboardButton() {
  return (
    <Link to="/admin/admin-overview">
      <button
        className={`border hover:cursor-pointer border-divider rounded-md px-2 py-1 text-background`}
      >
        Dashboard
      </button>
    </Link>
  );
}

export default DashboardButton;
