import { useState } from "react";
import SettingsCard from "./SettingsCard";
import { FiGlobe } from "react-icons/fi";
export default function LanguageSettings() {
  const [language, setLanguage] = useState("English");

  return (
    <SettingsCard
      title="Language"
      description="Choose the language used across your Kemetra experience."
      icon={FiGlobe}
    >
      <div className="flex flex-wrap gap-2">
        {["English", "العربية"].map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setLanguage(item)}
            aria-pressed={language === item}
            className={`min-w-28 rounded-lg border px-5 py-2.5 text-xs font-bold transition ${language === item
              ? "border-secondary bg-secondary text-background dark:border-primary dark:bg-primary dark:text-secondary"
              : "border-border bg-background text-foreground hover:border-primary"
              }`}
          >
            {item}
          </button>
        ))}
      </div>

      <p className="mt-3 text-xs text-muted-foreground">
        Selected language: {language}. Interface translation can be connected
        to your app's i18n setup.
      </p>
    </SettingsCard>
  );
}