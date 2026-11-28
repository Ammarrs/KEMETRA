import { createContext, useContext, useState } from "react";

const SettingsContext = createContext();


export function SettingsProvider({ children }) {
  const [theme, setTheme] = useState("Light");
  const [reducedMotion, setReducedMotion] = useState(true);
  const [contrast, setContrast] = useState(true);
  const [textSize, setTextSize] = useState(100);
  const [enabled, setEnabled] = useState(false);
  const [volume, setVolume] = useState(50);
  const [track, setTrack] = useState("Ancient Egypt");
  const [language, setLanguage] = useState("English");
  const [quality, setQuality] = useState("normal");
  const [rememberPlayback, setRememberPlayback] = useState(false);
  const [captions, setCaptions] = useState(true);
  const [profileVisibility, setProfileVisibility] = useState("private");
  const [analytics, setAnalytics] = useState(false);
  const [personalization, setPersonalization] = useState(true);

  const value = {
    theme,
    setTheme,
    reducedMotion,
    setReducedMotion,
    contrast,
    setContrast,
    textSize,
    setTextSize,
    enabled,
    setEnabled,
    volume,
    setVolume,
    track,
    setTrack,
    language,
    setLanguage,
    quality,
    setQuality,
    rememberPlayback,
    setRememberPlayback,
    captions,
    setCaptions,
    profileVisibility,
    setProfileVisibility,
    analytics,
    setAnalytics,
    personalization,
    setPersonalization,
  };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  return useContext(SettingsContext);
}

export default SettingsContext;