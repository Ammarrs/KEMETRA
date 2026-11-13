import { useEffect, useState } from "react";
import SettingsCard from "./SettingsCard";
import SettingRow from "./SettingsRow";
import Toggle from "./Toggle";
import SelectControl from './SelectControl';
import { FiPlay } from 'react-icons/fi';
const PlaybackSettings = () => {
  const [quality, setQuality] = useState(localStorage.quality ? localStorage.quality : "normal");
  const [rememberPlayback, setRememberPlayback] = useState(localStorage.rememberPlayback !== "false");
  const [captions, setCaptions] = useState(localStorage.captions === "true");
  useEffect(() => {
    localStorage.quality = quality;
  }, [quality])
  useEffect(() => {
    localStorage.rememberPlayback = rememberPlayback;
  }, [rememberPlayback])
  useEffect(() => {
    localStorage.captions = captions;
  }, [captions])
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