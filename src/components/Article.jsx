import { FiClock, FiMapPin, FiBookOpen, FiArrowRight } from "react-icons/fi";

const lorem =
  "Few places have been described as often as the plateau at Giza, and fewer still reward a slow second look. Walk the causeway at dawn and the monuments stop being symbols and become what they always were: work, measured by hands.";

const facts = [
  { icon: FiClock, text: "Built over roughly 80 years" },
  { icon: FiMapPin, text: "On the west bank of the Nile" },
  { icon: FiBookOpen, text: "Documented since antiquity" },
];

const reads = ["The workers' town", "Reading the causeway", "Light on limestone"];

function Block({ title, children }) {
  return (
    <div>
      <h3 className="font-serif text-2xl font-semibold">{title}</h3>
      <p className="mt-3 leading-7 text-ink/80">{children}</p>
    </div>
  );
}

export default function Article() {
  return (
    <section className="grid gap-12 py-14 lg:grid-cols-[1fr_300px]">
      <article className="max-w-2xl space-y-9">
        <div>
          <p className="mb-3 text-sm text-gold">Where history stays alive</p>
          <h2 className="font-serif text-4xl font-semibold leading-tight">
            A familiar wonder, seen anew.
          </h2>
          <p className="mt-4 text-lg leading-8 text-ink/80">{lorem}</p>
        </div>

        <Block title="A landscape, not a single monument">{lorem} {lorem}</Block>
        <Block title="The human scale of stone">{lorem}</Block>

        <blockquote className="border-l-2 border-gold py-1 pl-6 font-serif text-2xl italic leading-snug text-ink/80">
          “If there's been a place where we learn not only what is built, but how it is held.”
        </blockquote>

        <Block title="A hallway still in conversation">{lorem}</Block>
      </article>

      <aside className="space-y-5 lg:pt-2">
        <div className="rounded-md bg-sand/70 p-5">
          <p className="mb-4 font-serif text-lg font-semibold">Quick facts</p>
          <ul className="space-y-3 text-sm text-ink/80">
            {facts.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3">
                <Icon className="shrink-0 text-gold" size={16} />
                {text}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-md bg-sand/70 p-5">
          <p className="font-serif text-xl font-semibold leading-snug">Keep your sense of place.</p>
          <p className="mt-2 text-sm leading-6 text-muted">
            Giza Plateau, 13 km southwest of central Cairo.
          </p>
          <button className="mt-4 inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm text-paper">
            Open on the map <FiArrowRight size={14} />
          </button>
        </div>

        <div className="rounded-md border border-ink/10 p-5">
          <p className="mb-3 font-serif text-lg font-semibold">For the curious reader</p>
          <ul className="space-y-2 text-sm text-muted">
            {reads.map((r) => (
              <li key={r}><a href="#" className="hover:text-ink">{r}</a></li>
            ))}
          </ul>
        </div>
      </aside>
    </section>
  );
}
