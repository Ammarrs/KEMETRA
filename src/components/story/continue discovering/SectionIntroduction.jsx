import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const SectionIntroduction = () => {
  return (
    <div>
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-body text-[10px] font-semibold tracking-[0.17em] text-foreground">
            THE JOURNEY CONTINUES
          </p>

          <h2 className="mt-3 font-display text-[30px] font-bold leading-tight text-foreground sm:text-[36px]">
            More stories. New perspectives.
          </h2>
        </div>
        <Link
          to="/"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 text-[11px] font-semibold text-ink transition-colors hover:text-gold focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-4"
        >
          Browse all stories
          <FiArrowRight
            size={15}
            className="text-gold transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </div>
  );
};

export default SectionIntroduction;