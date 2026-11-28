
import { useState } from "react";
import {
  FaUser,
  FaBookmark,
  FaHistory,
  FaCog,
  FaSignOutAlt,
  FaCamera,
} from "react-icons/fa";

export default function ProfileSidebar() {
  const [profileImage, setProfileImage] = useState(null);

  const menuItems = [
    { name: "Overview", icon: FaUser },
    { name: "Saved Places", icon: FaBookmark },
    { name: "My Activity", icon: FaHistory },
    { name: "Settings", icon: FaCog },
  ];

  return (
    <aside className="w-full rounded-2xl border border-[#E8DDCB] bg-white p-6 shadow-sm lg:w-72 lg:shrink-0">
      {/* Profile Picture */}
      <div className="flex flex-col items-center text-center">
        <div className="relative">
          <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-[#EDE2CF]">
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="h-full w-full object-cover"
              />
            ) : (
              <FaUser className="text-4xl text-[#9B7B4F]" />
            )}
          </div>

          <label
            htmlFor="profile-image"
            className="absolute bottom-0 right-0 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#A67C45] text-white shadow-md hover:bg-[#8B6638]"
            title="Change profile picture"
          >
            <FaCamera size={13} />
          </label>

          <input
            id="profile-image"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(event) => {
              const file = event.target.files?.[0];

              if (file) {
                const imageUrl = URL.createObjectURL(file);
                setProfileImage(imageUrl);
              }
            }}
          />
        </div>

        <h2 className="mt-4 text-xl font-bold text-[#493722]">
          Your Name
        </h2>

        <p className="mt-1 text-sm text-[#8B7964]">
          Explorer Member
        </p>

        <span className="mt-3 rounded-full bg-[#F5EBD9] px-4 py-1 text-xs font-semibold text-[#9B713D]">
          KEMETRA Explorer
        </span>
      </div>

      {/* Navigation */}
      <nav className="mt-8 space-y-2">
        {menuItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              type="button"
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                index === 0
                  ? "bg-[#F5EBD9] text-[#8B6638]"
                  : "text-[#756552] hover:bg-[#FAF7F0]"
              }`}
            >
              <Icon size={16} />
              {item.name}
            </button>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="mt-8 border-t border-[#EDE5D8] pt-5">
        <button
          type="button"
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium text-red-600 transition-colors hover:bg-red-50"
        >
          <FaSignOutAlt size={16} />
          Log Out
        </button>
      </div>
    </aside>
  );
}
