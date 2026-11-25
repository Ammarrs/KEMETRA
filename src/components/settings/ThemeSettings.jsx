
import SettingsCard from "./SettingsCard";
import { FiMoon, FiSun } from "react-icons/fi";
import { useSettings } from './../../context/Settings/SettingsContext';

const themes = [
  { name: "Light", icon: FiSun },
  { name: "Dark", icon: FiMoon },
];

export default function ThemeSettings() {
  const { theme, setTheme } = useSettings();


  return (
    <SettingsCard
      title="Appearance"
      description="Choose how Kemetra looks on your device."
      icon={FiSun}
    >
      <div className="flex flex-wrap gap-2">
        {themes.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              type="button"
              onClick={() => setTheme(item.name)}
              aria-pressed={theme === item.name}
              className={`flex min-w-28 items-center justify-center gap-2 rounded-lg border px-5 py-2.5 text-xs font-bold transition ${theme === item.name
                ? "border-secondary bg-secondary text-background dark:border-primary dark:bg-primary dark:text-secondary"
                : "border-border bg-background text-foreground hover:border-primary"
                }`}
            >
              <Icon size={15} />
              {item.name}
            </button>
          );
        })}
      </div>

      <p className="mt-3 text-xs text-muted-foreground">
        Selected appearance: {theme}.
        {theme === "System"
          ? " Kemetra follows your device appearance."
          : ` Kemetra is using ${theme.toLowerCase()} mode.`}
      </p>
    </SettingsCard>
  );
}
