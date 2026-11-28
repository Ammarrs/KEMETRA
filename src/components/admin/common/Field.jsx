// Label + control + optional helper text for admin forms.
const Field = ({ label, required, hint, className = "", children }) => (
  <label className={`block font-body text-xs font-semibold text-foreground ${className}`}>
    <span className="mb-2 block">
      {label}
      {required && <span aria-hidden="true"> *</span>}
    </span>
    {children}
    {hint && (
      <span className="mt-2 block text-[0.7rem] font-normal leading-5 text-muted-foreground">
        {hint}
      </span>
    )}
  </label>
);
export default Field;
