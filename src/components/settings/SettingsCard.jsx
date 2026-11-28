
export default function SettingsCard({ title, description, icon, children, className = "", }) {
  const Icon = icon;
  return (
    <section
      className={`rounded-xl border border-border bg-card p-4 shadow-sm sm:p-5 ${className}`}
    >
      <div className="mb-4 flex items-start gap-3 border-b border-divider pb-3">
        <Icon aria-hidden="true" className="mt-0.5 text-lg text-primary" size={40} />

        <div className="min-w-0">
          <h2 className="text-lg font-semibold leading-tight">{title}</h2>

          {description && (
            <p className="mt-1 text-xs leading-5 text-muted-foreground">
              {description}
            </p>
          )}
        </div>
      </div>

      {children}
    </section>
  );
}