
import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaEdit,
  FaSave,
  FaTimes,
} from "react-icons/fa";

export default function AccountDetails() {
  const [isEditing, setIsEditing] = useState(false);

  const [user, setUser] = useState({
    fullName: "Your Name",
    email: "explorer@example.com",
    location: "Cairo, Egypt",
    memberSince: "November 2026",
  });

  const [formData, setFormData] = useState(user);

  const handleSave = () => {
    setUser(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(user);
    setIsEditing(false);
  };

  const fields = [
    {
      label: "Full Name",
      key: "fullName",
      icon: FaUser,
    },
    {
      label: "Email Address",
      key: "email",
      icon: FaEnvelope,
    },
    {
      label: "Location",
      key: "location",
      icon: FaMapMarkerAlt,
    },
    {
      label: "Member Since",
      key: "memberSince",
      icon: FaCalendarAlt,
    },
  ];

  return (
    <section className="rounded-2xl border border-[#E8DDCB] bg-white p-5 shadow-sm sm:p-7">
      {/* Header */}
      <div className="flex flex-col gap-4 border-b border-[#EDE5D8] pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-[#493722]">
            Account Details
          </h2>

          <p className="mt-1 text-sm text-[#806D55]">
            View and manage your personal information.
          </p>
        </div>

        {!isEditing ? (
          <button
            type="button"
            onClick={() => {
              setFormData({ ...user });
              setIsEditing(true);
            }}
            className="flex items-center justify-center gap-2 rounded-lg bg-[#A67C45] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#8B6638]"
          >
            <FaEdit />
            Edit Profile
          </button>
        ) : (
          <div className="flex gap-2">
            <button
              type="button"
              onClick={handleSave}
              className="flex items-center gap-2 rounded-lg bg-[#A67C45] px-4 py-2 text-sm text-white hover:bg-[#8B6638]"
            >
              <FaSave />
              Save
            </button>

            <button
              type="button"
              onClick={handleCancel}
              className="flex items-center gap-2 rounded-lg border border-[#E8DDCB] px-4 py-2 text-sm text-[#493722] hover:bg-[#FAF7F0]"
            >
              <FaTimes />
              Cancel
            </button>
          </div>
        )}
      </div>

      {/* Account Information */}
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {fields.map((field) => {
          const Icon = field.icon;

          return (
            <div key={field.key} className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F5EBD9] text-[#9B713D]">
                <Icon />
              </div>

              <div className="min-w-0 flex-1">
                <p className="mb-2 text-sm text-[#8B7964]">
                  {field.label}
                </p>

                {isEditing && field.key !== "memberSince" ? (
                  <input
                    type={field.key === "email" ? "email" : "text"}
                    value={formData[field.key]}
                    onFocus={(event) => event.target.select()}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        [field.key]: event.target.value,
                      })
                    }
                    className="w-full rounded-lg border border-[#D8C8B1] bg-white px-3 py-2 text-sm text-[#493722] outline-none focus:border-[#A67C45]"
                  />
                ) : (
                  <p className="break-words font-semibold text-[#493722]">
                    {user[field.key]}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
