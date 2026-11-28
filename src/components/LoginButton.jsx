import React from "react";
import { Link } from "react-router-dom";

function LoginButton() {
  return (
    <Link to="/login">
      <button className="border hover:cursor-pointer border-divider rounded-md px-2 py-1 text-background">
        Login
      </button>
    </Link>
  );
}

export default LoginButton;
