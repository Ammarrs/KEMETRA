import { FiMapPin, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const sections = [
  {
    number: "I",
    title: "A landscape, not a single monument",
    id: "landscape",
  },
  {
    number: "II",
    title: "The human scale of stone",
    id: "human-scale",
  },
  {
    number: "III",
    title: "A heritage still in conversation",
    id: "heritage",
  },
];


const StoryCompanion = () => {
  return (
    <div><aside className="flex flex-col gap-6">

      {/* In This Story */}
      <div className="rounded-lg border border-ink/10 bg-sand p-6">
        <h3 className="mb-7 text-[10px] font-bold uppercase tracking-[0.2em] text-ink">
          In this story
        </h3>

        <div className="space-y-5">
          {sections.map((item) => (
            <Link
              to="/"
              key={item.number}
              className="group flex items-start gap-4 rounded-sm focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-4"
            >
              <span className="font-heading text-[15px] font-semibold leading-5 text-gold">
                {item.number}
              </span>

              <span className="text-[12px] leading-[1.6] text-ink transition-colors group-hover:text-gold">
                {item.title}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Location Card */}
      <div className="rounded-lg border border-ink/10 bg-paper p-7">
        <FiMapPin
          size={19}
          strokeWidth={1.5}
          className="mb-5 text-gold"
        />

        <h3 className="mb-5 font-heading text-[24px] font-semibold leading-tight text-ink">
          Keep your sense of place.
        </h3>

        <div className="mb-6 space-y-2">
          <p className="text-[12px] text-muted">
            Giza Pyramids
          </p>

          <p className="text-[12px] text-muted">
            Giza Plateau · Egypt
          </p>

          <p className="text-[12px] leading-relaxed text-muted">
            Pharaonic heritage · Old Kingdom
          </p>
        </div>

        <Link
          to="/"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 text-[11px] font-semibold text-ink transition-colors hover:text-gold focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-4"
        >
          Return to Giza on the map

          <FiArrowRight
            size={15}
            className="text-gold transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>

      {/* Explore Thoughtfully */}
      <div className="rounded-lg border border-ink/10 bg-sand p-6">
        <h3 className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-ink">
          Explore thoughtfully
        </h3>

        <p className="text-[12px] leading-[1.8] text-muted">
          Respect site guidance and protected areas. This story
          is a cultural introduction, not live visitor or
          navigation advice.
        </p>
      </div>

    </aside></div>
  )
}

export default StoryCompanion