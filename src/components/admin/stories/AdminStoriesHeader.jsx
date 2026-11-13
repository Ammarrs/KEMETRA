import { FiPlus } from "react-icons/fi";

const AdminStoriesHeader = ({ totalStories, onAddStory }) => (
  <header>
    <p className="font-body text-[0.65rem] font-extrabold uppercase tracking-[0.25em] text-primary">
      The editorial catalog
    </p>
    <h1 className="mt-2 font-display text-4xl font-semibold text-foreground md:text-5xl">
      Stories Management
    </h1>
    <p className="mt-3 font-body text-sm leading-6 text-muted-foreground">
      Shape the stories that connect places, people and heritage.
    </p>
    <div className="mt-6 flex items-end justify-between gap-4">
      <div>
        <p className="font-display text-2xl text-foreground">
          {totalStories} stories
        </p>
        <p className="mt-1 font-body text-[0.67rem] text-muted-foreground">
          Sample data · All records
        </p>
      </div>
      <button
        type="button"
        onClick={onAddStory}
        className="inline-flex items-center gap-2 bg-primary px-4 py-2.5 font-body text-sm font-bold text-secondary transition-colors hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
        <FiPlus aria-hidden="true" /> Add Story
      </button>
    </div>
  </header>
);
export default AdminStoriesHeader;
