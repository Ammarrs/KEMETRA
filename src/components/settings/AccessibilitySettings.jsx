import SettingsCard from "./SettingsCard";
import SettingRow from "./SettingsRow";
import Toggle from "./Toggle";
import SelectControl from './SelectControl';
import { FiEye } from 'react-icons/fi';
import { useSettings } from './../../context/Settings/SettingsContext';
export default function AccessibilitySettings() {
  const {
    reducedMotion,
    setReducedMotion,
    contrast,
    setContrast,
    textSize,
    setTextSize,
  } = useSettings();
  return (
    <SettingsCard
      title="Accessibility"
      description="Adjust the interface to make it more comfortable to use."
      icon={FiEye}
    >
      <SettingRow
        title="Reduced motion"
        description="Limit non-essential animations and transitions."
      >
        <Toggle
          checked={reducedMotion}
          onChange={setReducedMotion}
          label="Reduced motion"
        />
      </SettingRow>

      <div className="border-t border-divider">
        <SettingRow
          title="High contrast"
          description="Increase contrast between text, controls, and backgrounds."
        >
          <Toggle
            checked={contrast}
            onChange={setContrast}
            label="High contrast"
          />
        </SettingRow>
      </div>

      <div className="border-t border-divider">
        <SettingRow
          title="Text size"
          description="Choose a comfortable reading size."
        >
          <SelectControl
            label="Text size"
            value={textSize}
            onChange={setTextSize}
            options={[
              { value: "90", label: "Small" },
              { value: "100", label: "Normal" },
              { value: "110", label: "Large" },
              { value: "125", label: "Extra large" },
            ]}
          />
        </SettingRow>
      </div>

      <p className="mt-2 text-[11px] text-muted-foreground">
        Connect these controls to your global accessibility preferences to
        apply them throughout the app.
      </p>
    </SettingsCard>
  );
}