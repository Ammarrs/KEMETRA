import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
const EraNavigation = ({ eras, activeIndex, onSelect }) => (
  <nav className="mx-auto grid w-full max-w-[1180px] grid-cols-2 border-y border-border px-5 sm:px-8" aria-label="Adjacent eras">
    <button type="button" disabled={activeIndex === 0} onClick={() => onSelect(activeIndex - 1)} className="flex min-h-28 items-center gap-4 bg-transparent py-6 text-left text-foreground transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-25" aria-label="Go to previous era">
      <FiArrowLeft className="shrink-0" aria-hidden="true" /><span className="font-body text-sm"><small className="mb-1 block text-[0.62rem] font-extrabold uppercase tracking-[0.16em] text-muted-foreground">Previous era</small>{activeIndex > 0 && eras[activeIndex - 1].name}</span>
    </button>
    <button type="button" disabled={activeIndex === eras.length - 1} onClick={() => onSelect(activeIndex + 1)} className="flex min-h-28 items-center justify-end gap-4 bg-transparent py-6 text-right text-foreground transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-25" aria-label="Go to next era">
      <span className="font-body text-sm"><small className="mb-1 block text-[0.62rem] font-extrabold uppercase tracking-[0.16em] text-muted-foreground">Next era</small>{activeIndex < eras.length - 1 && eras[activeIndex + 1].name}</span><FiArrowRight className="shrink-0" aria-hidden="true" />
    </button>
  </nav>
);
export default EraNavigation;
