import { useEffect, useState } from "react";
import SettingsCard from "./SettingsCard";
import SettingsRow from "./SettingsRow";
import Toggle from "./Toggle";
import {
  FiMusic,
} from "react-icons/fi";
export default function AmbientMusicSettings() {
  const [enabled, setEnabled] = useState(localStorage.enabled !== "false");
  const [volume, setVolume] = useState(localStorage.volume ? +localStorage.volume : 50);
  const [track, setTrack] = useState(localStorage.track ? localStorage.track : "Ancient Egypt");

  const selectOnChange = (value) => {
    localStorage.track = value;
    setTrack(() => (value))
  }
  const rangeOnChange = (value) => {
    localStorage.volume = value;
    setVolume(() => (value))
  }
  useEffect(() => {
    localStorage.enabled = enabled;
  }, [enabled])
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

          <select
            id="ambient-track"
            disabled={!enabled}
            value={track}
            onChange={(event) => selectOnChange(event.target.value)}
            className="max-w-40 rounded-md border-2 border-border bg-card px-2 py-1.5 text-xs"
          >
            <option>Ancient Egypt</option>
            <option>Nile at Night</option>
            <option>Desert Winds</option>
          </select>
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
          onChange={(event) => rangeOnChange(Number(event.target.value))}
          className="mt-2 w-full accent-primary"
        />

        <p className="mt-2 text-[11px] text-muted-foreground">
          Track selection and volume are ready to connect to your audio player.
        </p>
      </div>
    </SettingsCard>
  );
}