import { useEffect, useState } from "react";
import SettingsCard from "./SettingsCard";
import SettingRow from "./SettingsRow";
import Toggle from "./Toggle";
import SelectControl from './SelectControl';
import { FiPlay } from 'react-icons/fi';
import { useSettings } from './../../context/Settings/SettingsContext';

const PlaybackSettings = () => {

  const {
    quality,
    setQuality,
    rememberPlayback,
    setRememberPlayback,
    captions,
    setCaptions,
  } = useSettings();


  return (
    <SettingsCard
      title="Playback"
      description="Control how audio and story experiences behave."
      icon={FiPlay}
    >
      <SettingRow
        title="Default audio quality"
        description="Choose the preferred quality for audio playback."
      >
        <SelectControl
          label="Default audio quality"
          value={quality}
          onChange={setQuality}
          options={[
            { value: "normal", label: "Normal" },
            { value: "high", label: "High" },
            { value: "dataSaver", label: "Data saver" },
          ]}
        />
      </SettingRow>

      <div className="border-t border-divider">
        <SettingRow
          title="Remember playback position"
          description="Continue stories from where you left off."
        >
          <Toggle
            checked={rememberPlayback}
            onChange={setRememberPlayback}
            label="Remember playback position"
          />
        </SettingRow>
      </div>

      <div className="border-t border-divider">
        <SettingRow
          title="Show captions"
          description="Display captions when they are available."
        >
          <Toggle
            checked={captions}
            onChange={setCaptions}
            label="Show captions"
          />
        </SettingRow>
      </div>
    </SettingsCard>
  );
}



export default PlaybackSettings