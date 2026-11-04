import { FiHeadphones, FiMapPin } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const RelatedStory = ({ story }) => {
  return (
    <article className="min-w-0">
      <img
        src={story.image}
        alt={story.imageAlt}
        className="aspect-335/180 w-full rounded-lg bg-surface object-cover"
      />

      <div className="mt-4">
        <span
          className={`inline-flex rounded-full px-3 py-1 text-[10px] font-bold tracking-[0.12em] text-white ${story.categoryColor}`}
        >
          {story.category}
        </span>
      </div>

      <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-foreground">
        {story.title}
      </h3>

      <p className="mt-2 font-body text-[13px] leading-[1.6] text-muted-foreground">
        {story.description}
      </p>

      <div className="mt-4 flex items-center justify-between gap-3">
        <Link
          to={story.storyLink}
          className="inline-flex items-center gap-2 font-body text-xs font-medium text-foreground transition-colors hover:text-primary"
        >
          Hear the Story
          <FiHeadphones className="size-4 text-primary" />
        </Link>

        <Link
          to={story.placeLink}
          className="inline-flex items-center gap-2 font-body text-xs font-medium text-foreground transition-colors hover:text-primary"
        >
          View place
          <FiMapPin className="size-4 text-primary" />
        </Link>
      </div>

      <p className="mt-4 font-body text-[10px] font-medium tracking-[0.13em] text-foreground">
        {story.location}
      </p>
    </article>
  );
};

export default RelatedStory;