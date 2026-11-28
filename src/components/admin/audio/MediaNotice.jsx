import { FiInfo } from "react-icons/fi";

const MediaNotice = () => (
  <aside
    className="mt-8 flex gap-3 rounded-sm border border-success/15 bg-success/10 px-4 py-4 font-body md:px-5"
    aria-label="Sample data notice">
    <FiInfo aria-hidden="true" className="mt-0.5 shrink-0 text-lg text-success" />
    <div>
      <p className="text-sm font-bold text-success">Sample data · No live media connected</p>
      <p className="mt-1 text-sm leading-6 text-muted-foreground">
        Availability and processing statuses are illustrative. Audio cannot play; 3D previews are
        static and no files are uploaded.
      </p>
    </div>
  </aside>
);
export default MediaNotice;
