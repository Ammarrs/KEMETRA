import { FiChevronUp } from "react-icons/fi";

const transcript = [
  {
    time: "00:00",
    title: "Arriving at the plateau",
    description:
      "Before you look up at the pyramids, look around. The pale ground, the open sky and the edge of the city are all part of the experience of Giza. From a distance, the pyramids seem almost simple: angled lines meeting the horizon. Closer to them, that first impression changes. Individual stones, broken edges and long shadows bring their vast scale into view. The monument becomes a landscape, and the landscape invites us to slow down.",
  },
  {
    time: "00:48",
    title: "Reading the landscape",
    description:
      "The pyramids belong to a wider complex of tombs, temples and connecting spaces. Seeing them together helps us move beyond the idea of a single isolated wonder. Their setting speaks to ancient ideas about kingship, memory and the afterlife. Not every part of that past can be recovered, and not every question has a simple answer. A thoughtful visit makes room for what is known, what scholars continue to discuss and what remains uncertain.",
  },
  {
    time: "01:42",
    title: "Looking more closely",
    description:
      "Alongside the monumental forms, notice the work of making: the meeting of stone surfaces, the rhythm of blocks and the changing texture of the limestone. These details offer another way to encounter Giza, one that holds human effort beside architectural ambition. Before leaving, turn once more toward the horizon. The familiar silhouette is still there, but it may no longer feel quite so familiar. The story of a place grows richer when we give it our attention.",
  },
];

const ExpandedNarrationTranscript = () => {
  return (
    <section className="bg-background py-12 lg:py-16">
      <div className="mx-auto w-[90%] rounded-lg border border-foreground/10 bg-surface p-5 sm:p-7 lg:p-7.5">
        {/* Header */}
        <header>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            {/* Title */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground">
                Read along · English
              </p>

              <h2 className="mt-2 font-display text-[28px] font-bold leading-tight text-foreground">
                The story, in words.
              </h2>

              <p className="mt-7 text-[11px] leading-relaxed text-muted-foreground">
                Complete sample narration · Editorial placeholder for the
                proposed recording.
              </p>
            </div>

            {/* Expanded Label */}
            <div className="flex items-center gap-2 text-[11px] text-muted-foreground sm:pt-2">
              <span>Transcript expanded</span>
              <FiChevronUp size={14} className="text-primary" />
            </div>
          </div>

          <div className="mt-6 border-t border-foreground/15" />
        </header>

        {/* Transcript Rows */}
        <ol className="space-y-7 pt-7">
          {transcript.map((item) => (
            <li
              key={item.time}
              className="grid grid-cols-1 gap-2 sm:grid-cols-[75px_minmax(0,1fr)] sm:gap-5"
            >
              {/* Timestamp */}
              <time className="pt-0.5 font-body text-[12px] tabular-nums text-teal">
                {item.time}
              </time>

              {/* Transcript Content */}
              <div>
                <h3 className="mb-2 font-body text-[12px] font-bold leading-relaxed text-foreground">
                  {item.title}
                </h3>

                <p className="font-body text-[13px] font-normal leading-[1.65] text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ExpandedNarrationTranscript;