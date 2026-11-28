const MediaTabs = ({ tabs, active, onChange }) => (
  <div
    role="tablist"
    aria-label="Media type"
    className="mt-6 flex gap-3 overflow-x-auto pb-1">
    {tabs.map((tab) => {
      const selected = tab.id === active;
      return (
        <button
          key={tab.id}
          type="button"
          role="tab"
          aria-selected={selected}
          onClick={() => onChange(tab.id)}
          className={`shrink-0 rounded-sm border px-4 py-3 font-body text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${selected ? "border-secondary bg-secondary text-primary" : "border-border bg-surface text-foreground hover:border-primary"}`}>
          {tab.label} ({tab.count})
        </button>
      );
    })}
  </div>
);
export default MediaTabs;
