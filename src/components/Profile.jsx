  // import React from "react";

  // function Profile() {
  //   return (
  //     <div className="flex gap-5 items-center">
  //       <div className="profile text-center border border-primary rounded-full p-2">
  //         <span className="text-primary">AM</span>
  //       </div>
  //       <div className="info flex flex-col">
  //         <span>Ammar Meshaal</span>
  //         <span>User Profile</span>
  //       </div>
  //     </div>
  //   );
  // }

  // export default Profile;

  import React from "react";
import { Link } from "react-router-dom";

function Profile({ name = "Ammarr", role = "Member", initials = "AM", onNavigate }) {
  return (
    <Link
      to="/profile"
      onClick={onNavigate}
      className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-background/5"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary font-display text-sm text-primary">
        {initials}
      </div>
      <div>
        <p className="text-sm text-background">{name}</p>
        <p className="text-xs text-muted-foreground">{role} · Profile</p>
      </div>
    </Link>
  );
}

export default Profile;