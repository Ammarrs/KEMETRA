import { useEffect, useState } from "react";
import SettingsCard from "./SettingsCard";
import SettingsRow from "./SettingsRow";
import Toggle from "./Toggle";
import SelectControl from './SelectControl';
import {
  FiMusic,
} from "react-icons/fi";
import { useSettings } from './../../context/Settings/SettingsContext';
export default function AmbientMusicSettings() {
  const {
    enabled,
    setEnabled,
    track,
    setTrack,
    volume,
    setVolume,
  } = useSettings();

  return (
    <SettingsCard
      title="Ambient Music"
      description="Customize the atmosphere while exploring stories and places."
      icon={FiMusic}
    >
      <SettingsRow
        title="Enable ambient music"
        description="Play subtle background music while browsing Kemetra."
      >
        <Toggle
          checked={enabled}
          onChange={setEnabled}
          label="Enable ambient music"
        />
      </SettingsRow>


      <div className={`rounded-lg bg-surface p-3 ${!enabled ? "opacity-50" : ""}`}>
        <div className="flex items-center justify-between gap-3">
          <label htmlFor="ambient-track" className="text-xs font-semibold">
            Ambient track
          </label>

          <SelectControl
            disabled={!enabled}
            label="Ambient track"
            value={track}
            onChange={(value) => setTrack(value)}
            options={[
              { value: "ancientEgypt", label: "Ancient Egypt" },
              { value: "nileAtNight", label: "Nile at Night" },
              { value: "desertWinds", label: "Desert Winds" },
            ]}
          />
        </div>

        <div className="mt-4 flex items-center justify-between text-xs">
          <label htmlFor="ambient-volume" className="font-semibold">
            Volume
          </label>

          <span className="tabular-nums text-muted-foreground">
            {volume}%
          </span>
        </div>

        <input
          id="ambient-volume"
          type="range"
          min="0"
          max="100"
          value={volume}
          disabled={!enabled}
          onChange={(e) => setVolume(+e.target.value)}
          className="mt-2 w-full accent-primary"
        />

        <p className="mt-2 text-[11px] text-muted-foreground">
          Track selection and volume are ready to connect to your audio player.
        </p>
      </div>
    </SettingsCard>
  );
}