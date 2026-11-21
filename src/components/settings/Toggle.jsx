export default function Toggle({ checked, onChange, label }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${checked ? "bg-primary" : "bg-subtitle"
        }`}
    >
      <span
        className={`inline-block size-4 rounded-full bg-white shadow transition-transform ${checked ? "translate-x-6" : "translate-x-1"
          }`}
      />
    </button>
  );
}
