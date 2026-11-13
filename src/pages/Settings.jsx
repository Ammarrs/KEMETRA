import SettingsNav from './../components/settings/SettingsNav';
import { useState } from 'react';
import AccountSettings from './../components/settings/AccountSettings';
import LanguageSettings from './../components/settings/LanguageSettings';
import AmbientMusicSettings from './../components/settings/AmbientMusicSettings';

const Settings = () => {
  const [activeSection, setActiveSection] = useState("account");
  return (
    <main className="min-h-screen bg-background px-4 py-6 font-body text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto max-w-360">
        <div className="mb-5">
          <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
            Your experience, thoughtfully tuned
          </p>

          <h1 className="text-3xl font-semibold sm:text-4xl">
            Settings
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
            Make Kemetra feel like your own space. Manage your account,
            experience, and preferences.
          </p>
        </div>

        <div className="grid items-start gap-5 lg:grid-cols-[250px_minmax(0,1fr)]">
          <SettingsNav
            activeSection={activeSection}
            setActiveSection={setActiveSection} />
          <div className="min-w-0 space-y-4">
            {activeSection === "account" && <AccountSettings />}
            {activeSection === "language" && <LanguageSettings />}
            {activeSection === "ambient" && <AmbientMusicSettings />}
            {/* {activeSection === "playback" && <PlaybackSettings />}
            {activeSection === "accessibility" && <AccessibilitySettings />}
            {activeSection === "privacy" && <PrivacySettings />} */}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Settings