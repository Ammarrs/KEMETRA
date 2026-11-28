import { FiPlus } from "react-icons/fi";
import { primaryButton } from "./formStyles";

// Eyebrow + title + description, followed by the record count and primary action.
const AdminPageHeader = ({
  eyebrow,
  title,
  description,
  count,
  countNote,
  actionLabel,
  onAction,
}) => (
  <header>
    <p className="font-body text-[0.68rem] font-extrabold uppercase tracking-[0.22em] text-muted">
      {eyebrow}
    </p>
    <h1 className="mt-3 font-display text-[2rem] font-semibold leading-tight text-foreground sm:text-4xl md:text-[2.6rem]">
      {title}
    </h1>
    <p className="mt-3 max-w-2xl font-body text-sm leading-6 text-muted-foreground sm:text-base">
      {description}
    </p>
    <div className="mt-8 flex items-end justify-between gap-4">
      <div>
        <p className="font-display text-2xl font-medium text-foreground md:text-[1.7rem]">
          {count}
        </p>
        <p className="mt-1 font-body text-[0.7rem] text-muted">{countNote}</p>
      </div>
      <button
        type="button"
        onClick={onAction}
        className={`${primaryButton} px-5 py-3.5 text-sm`}>
        <FiPlus aria-hidden="true" className="text-lg" /> {actionLabel}
      </button>
    </div>
  </header>
);
export default AdminPageHeader;
