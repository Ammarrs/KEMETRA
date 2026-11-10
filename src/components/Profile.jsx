import React from "react";

function Profile() {
  return (
    <div className="flex gap-5 items-center">
      <div className="profile text-center border border-primary rounded-full p-2">
        <span className="text-primary">AM</span>
      </div>
      <div className="info flex flex-col">
        <span>Ammar Meshaal</span>
        <span>User Profile</span>
      </div>
    </div>
  );
}

export default Profile;
