import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { LuMap } from "react-icons/lu";
import { useNavigate } from "react-router-dom";


function NotFound() {

  let navigator = useNavigate();

  let homeNavigate = () => navigator("/");
  let mapNavigate = () => navigator("/map");

  return (
    <div className="py-15 flex flex-col items-center gap-7">
      <div className="image">
        <img src="404\Unmarked path illustration.png" alt="" srcset="" />
      </div>
      <div className="flex justify-center items-center gap-2 text-xs font-bold">
        <hr className="w-10 border border-muted-foreground" />
        <span className="text-muted-foreground">404 . AN UNMARKED PATH</span>
        <hr className="w-10 border border-muted-foreground" />
      </div>
      <div className="title font-display text-5xl font-bold">
        <span>Page Not Found</span>
      </div>
      <div className="brief text-muted-foreground w-160 text-center">
        <span>
          This page may have moved, or the link may be incomplete. Egypt’s
          stories are still here. Let’s find your way back.
        </span>
      </div>
      <div className="buttons flex gap-8">
        <button onClick={homeNavigate} className="btn flex items-center gap-3 bg-primary py-3 px-4 rounded hover:bg-accent">
          <span className="font-semibold">Back to Home</span>
          <FaArrowLeft />
        </button>
        <button onClick={mapNavigate} className="btn group flex items-center gap-3 border-2 border-primary py-3 px-4 rounded hover:bg-primary transition-colors duration-300">
          <span className="font-semibold">Explore the Map</span>
          <LuMap className="text-primary group-hover:text-secondary" />
        </button>
      </div>
      <div className="cta text-sm">
        <span>Looking for a particular place? The map is a good place to begin.</span>
      </div>
    </div>
  );
}

export default NotFound;
