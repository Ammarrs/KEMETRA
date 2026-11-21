
import SettingsCard from './SettingsCard';
import SettingsRow from './SettingsRow';
import SelectControl from './SelectControl';
import Toggle from './Toggle';
import { useState } from 'react';
import { FiShield } from 'react-icons/fi';
const PrivacySettings = () => {
  const [profileVisibility, setProfileVisibility] = useState("private");
  const [analytics, setAnalytics] = useState(false);
  const [personalization, setPersonalization] = useState(true);

  return (
    <SettingsCard
      title="Privacy"
      description="Choose how your information and activity are used."
      icon={FiShield}
    >
      <SettingsRow
        title="Profile visibility"
        description="Control who can see your profile information."
      >
        <SelectControl
          label="Profile visibility"
          value={profileVisibility}
          onChange={setProfileVisibility}
          options={[
            { value: "private", label: "Private" },
            { value: "public", label: "Public" },
          ]}
        />
      </SettingsRow>

      <div className="border-t border-divider">
        <SettingsRow
          title="Usage analytics"
          description="Allow anonymous usage data to help improve Kemetra."
        >
          <Toggle
            checked={analytics}
            onChange={setAnalytics}
            label="Usage analytics"
          />
        </SettingsRow>
      </div>

      <div className="border-t border-divider">
        <SettingsRow
          title="Personalized experience"
          description="Use your preferences to tailor recommendations."
        >
          <Toggle
            checked={personalization}
            onChange={setPersonalization}
            label="Personalized experience"
          />
        </SettingsRow>
      </div>

      <div className="mt-3 rounded-lg bg-surface p-3">
        <p className="text-xs font-semibold">Clear browsing history</p>

        <p className="mt-1 text-[11px] leading-5 text-muted-foreground">
          Remove locally stored browsing activity from this device.
        </p>

        <button
          type="button"
          onClick={() =>
            window.alert("Connect this action to your app's browsing-history storage.")
          }
          className="mt-3 rounded-lg border border-border bg-card px-4 py-2 text-xs font-semibold hover:border-primary"
        >
          Clear history
        </button>
      </div>
    </SettingsCard>
  );
}

export default PrivacySettings