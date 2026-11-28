import { FiChevronDown } from "react-icons/fi";
import { controlClass } from "./formStyles";

// Native <select> with a custom chevron so it matches the design on every browser.
// `options` accepts strings or { value, label } objects.
const AdminSelect = ({ value, onChange, options, label, className = "", id }) => (
  <div className={`relative ${className}`}>
    <select
      id={id}
      value={value}
      aria-label={label}
      onChange={(event) => onChange(event.target.value)}
      className={`${controlClass} cursor-pointer appearance-none pr-10`}>
      {options.map((option) => {
        const item = typeof option === "string" ? { value: option, label: option } : option;
        return (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        );
      })}
    </select>
    <FiChevronDown
      aria-hidden="true"
      className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-lg text-foreground"
    />
  </div>
);
export default AdminSelect;
