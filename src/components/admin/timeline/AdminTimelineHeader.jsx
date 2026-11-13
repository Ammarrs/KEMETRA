import { FiEye, FiPlus } from "react-icons/fi";

const AdminTimelineHeader = ({ onAddMilestone, onPreview }) => (
  <header>
    <p className="font-body text-[0.65rem] font-extrabold uppercase tracking-[0.25em] text-primary">
      The chronological catalog
    </p>
    <h1 className="mt-2 font-display text-4xl font-semibold text-foreground md:text-5xl">
      Timeline Management
    </h1>
    <p className="mt-3 font-body text-sm leading-6 text-muted-foreground">
      Arrange milestones and connect each period to the collection.
    </p>
    <div className="mt-6 flex flex-wrap gap-3">
      <button
        type="button"
        onClick={onAddMilestone}
        className="inline-flex items-center gap-2 bg-primary px-4 py-2.5 font-body text-sm font-bold text-secondary transition-colors hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
        <FiPlus aria-hidden="true" /> Add milestone
      </button>
      <button
        type="button"
        onClick={onPreview}
        className="inline-flex items-center gap-2 border border-border bg-card px-4 py-2.5 font-body text-sm font-semibold text-foreground transition-colors hover:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
        <FiEye aria-hidden="true" /> Preview timeline
      </button>
    </div>
  </header>
);

export default AdminTimelineHeader;
