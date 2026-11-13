import { FiInfo } from "react-icons/fi";

const TimelineNotice = () => (
  <aside
    className="mt-7 flex gap-3 border border-success/15 bg-success/10 px-4 py-3 text-success"
    aria-label="Sample data notice">
    <FiInfo className="mt-0.5 shrink-0" aria-hidden="true" />
    <div className="font-body">
      <p className="text-xs font-bold">Sample data · Approximate periods</p>
      <p className="mt-1 text-xs leading-5 text-muted-foreground">
        These milestones are editorial specimens, not a verified historical
        chronology. No precise historical dates are asserted.
      </p>
    </div>
  </aside>
);

export default TimelineNotice;
