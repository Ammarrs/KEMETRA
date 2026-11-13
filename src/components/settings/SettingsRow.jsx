export default function SettingsRow({
  title,
  description,
  children,
  className = "",
}) {
  return (
    <div
      className={`flex flex-col gap-3 py-3 sm:flex-row sm:items-center sm:justify-between ${className}`}
    >
      <div className="min-w-0">
        <p className="text-sm font-semibold">{title}</p>

        {description && (
          <p className="mt-1 max-w-2xl text-xs leading-5 text-muted-foreground">
            {description}
          </p>
        )}
      </div>

      <div className="shrink-0 sm:ml-6">{children}</div>
    </div>
  );
}

