import {
  FiUser,
  FiGlobe,
  FiMusic,
  FiPlayCircle,
  FiEye,
  FiShield,
} from "react-icons/fi";

export default function SettingsNav({ activeSection, setActiveSection }) {
  const sections = [
    { id: "account", label: "Account", icon: FiUser },
    { id: "language", label: "Language", icon: FiGlobe },
    { id: "ambient", label: "Ambient Music", icon: FiMusic },
    { id: "playback", label: "Playback", icon: FiPlayCircle },
    { id: "accessibility", label: "Accessibility", icon: FiEye },
    { id: "privacy", label: "Privacy", icon: FiShield },
  ];


  return (
    <aside className="lg:sticky lg:top-6 overflow-auto">
      <nav
        aria-label="Settings sections"
        className="flex gap-2 rounded-xl border border-border bg-card p-2 lg:flex-col lg:gap-1 lg:p-3 overflow-x-auto"
      >
        {sections.map((section) => {
          const active = activeSection === section.id;
          const Icon = section.icon;

          return (
            <button
              key={section.id}
              type="button"
              onClick={() => setActiveSection(section.id)}
              aria-current={active ? "page" : undefined}
              className={`flex shrink-0 items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-semibold transition-colors lg:w-full ${active
                ? "bg-secondary text-background dark:bg-primary dark:text-secondary"
                : "text-muted-foreground hover:bg-surface hover:text-foreground"
                }`}
            >
              <Icon size={17} />

              <span>{section.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="mt-3 hidden rounded-xl border border-border bg-surface p-4 text-xs leading-5 text-muted-foreground lg:block">
        Your preferences are stored locally in this session. Account-level
        changes require a connected account service.
      </div>
    </aside>
  );
}