
export default function SelectControl({
  disabled = false,
  value,
  onChange,
  options,
  label,
}) {
  return (
    <select
      disabled={disabled}
      aria-label={label}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="min-w-32 rounded-lg border border-border bg-background px-3 py-2 text-xs text-foreground outline-none transition focus:border-primary"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}