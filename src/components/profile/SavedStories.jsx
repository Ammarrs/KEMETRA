
import { useState } from "react";
import { FaBookmark, FaArrowRight } from "react-icons/fa";

const initialStories = [
  {
    id: 1,
    category: "PHARAONIC · GIZA PYRAMIDS",
    title: "Giza: a horizon in stone",
    description: "Written story · Audio interface sample",
    image: "/profile/giza-pyramids.jpg",
  },
  {
    id: 2,
    category: "COPTIC · THE HANGING CHURCH",
    title: "A sanctuary above the city",
    description: "Written story · Audio interface sample",
    image: "/profile/hanging-church.jpg",
  },
  {
    id: 3,
    category: "ISLAMIC · SULTAN HASSAN",
    title: "The art of the courtyard",
    description: "Written story · Audio interface sample",
    image: "/profile/sultan-hassan.jpg",
  },
];

export default function SavedStories() {
  const [savedStories, setSavedStories] = useState(initialStories);

  const removeStory = (id) => {
    setSavedStories((previous) =>
      previous.filter((story) => story.id !== id)
    );
  };

  return (
    <section className="w-full">
      {/* Section Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[#493722]">
          Saved Stories
        </h2>

        <p className="mt-2 text-sm text-[#806D55]">
          Stories you bookmarked to explore later.
        </p>
      </div>

      {/* Stories List */}
      <div className="flex flex-col gap-4">
        {savedStories.map((story) => (
          <article
            key={story.id}
            className="flex flex-col gap-5 rounded-md border border-[#E6D9C1] bg-[#F3ECDD] p-4 transition-shadow duration-300 hover:shadow-md sm:flex-row sm:items-center"
          >
            {/* Story Image */}
            <div className="h-32 w-full shrink-0 overflow-hidden rounded-md sm:h-24 sm:w-24">
              <img
                src={story.image}
                alt={story.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Story Content */}
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-medium uppercase tracking-wide text-[#81735E]">
                {story.category}
              </p>

              <h3 className="mt-2 font-serif text-xl font-semibold text-[#29251F]">
                {story.title}
              </h3>

              <p className="mt-2 text-xs text-[#756D60]">
                {story.description}
              </p>

              {/* Read Story - Hover Animation Only */}
              <span className="group mt-4 inline-flex cursor-default items-center gap-3 rounded-md px-2 py-1.5 text-sm font-semibold text-[#29251F] transition-all duration-300 hover:bg-[#E9DCC4] hover:text-[#967018]">
                Read story

                <FaArrowRight
                  size={13}
                  className="text-[#967018] transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </span>
            </div>

            {/* Saved Button */}
            <button
              type="button"
              onClick={() => removeStory(story.id)}
              className="flex items-center gap-2 self-end text-xs font-medium text-[#967018] transition-colors hover:text-[#654B12]"
              aria-label={`Remove ${story.title} from saved stories`}
            >
              <FaBookmark size={13} />
              Saved
            </button>
          </article>
        ))}
      </div>

      {/* Empty State */}
      {savedStories.length === 0 && (
        <div className="rounded-md bg-[#F3ECDD] p-8 text-center text-[#756D60]">
          No saved stories yet.
        </div>
      )}
    </section>
  );
}
