import { useState } from "react";
import SettingsCard from "./SettingsCard";
import SettingsRow from "./SettingsRow";
import {
  FiUser,
} from "react-icons/fi";
import { useAuth } from "../../context/Authentication/authContext";

export default function AccountSettings() {
  const [name, setName] = useState("Jovan Raafat");
  const [email, setEmail] = useState("jovan.raafat@example.com");
  const [editing, setEditing] = useState(false);
  const { logout } = useAuth();
  function saveProfile(e) {
    e.preventDefault();
    setEditing(false);
  }

  return (
    <SettingsCard
      title="Account"
      description="Manage your personal information and account security."
      icon={FiUser}
    >
      {editing ? (
        <form onSubmit={saveProfile} className="space-y-3">
          <label className="block text-xs font-semibold text-muted-foreground">
            Full name

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-primary"
            />
          </label>

          <label className="block text-xs font-semibold text-muted-foreground">
            Email address

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-primary"
            />
          </label>

          <div className="flex gap-2">
            <button
              className="rounded-lg bg-primary px-4 py-2 text-xs font-bold text-secondary hover:bg-primary-hover"
              type="submit"
            >
              Save changes
            </button>

            <button
              className="rounded-lg border border-border px-4 py-2 text-xs font-semibold"
              type="button"
              onClick={() => setEditing(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-muted">
                Full name
              </p>
              <p className="mt-1 text-sm font-semibold">{name}</p>
            </div>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-muted">
                Email address
              </p>
              <p className="mt-1 break-all text-sm font-semibold">{email}</p>
            </div>

          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setEditing(true)}
              className="rounded-lg border border-border px-4 py-2 text-xs font-semibold transition hover:border-primary hover:bg-surface"
            >
              Edit profile
            </button>
            <button
              type="button"
              className="rounded-lg border border-border px-4 py-2 text-xs font-semibold transition hover:border-primary hover:bg-surface"
            >
              Change password
            </button>

          </div>
        </>
      )}

      <div className="mt-4 border-t border-divider pt-3">
        <SettingsRow
          title="Sign out"
          description="Sign out of your current Kemetra account."
        >
          <button
            type="button"
            onClick={() => logout()}
            className="rounded-lg border border-border px-4 py-2 text-xs font-semibold hover:border-primary"
          >
            Sign out
          </button>
        </SettingsRow>
      </div>
    </SettingsCard >
  );
}