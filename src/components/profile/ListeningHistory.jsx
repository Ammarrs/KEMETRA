
import { FaPlay } from "react-icons/fa";

const listeningHistory = [
  {
    id: 1,
    title: "Giza: a horizon in stone",
    status: "Paused · 00:48 / 02:40 · English",
    progress: 28,
  },
  {
    id: 2,
    title: "A sanctuary above the city",
    status: "Not started · English · Sample episode",
    progress: 0,
  },
];

export default function ListeningHistory() {
  return (
    <section className="w-full">
      {/* Section Heading */}
      <div className="mb-5">
        <h2 className="font-serif text-2xl font-bold text-[#29251F]">
          Listening history
        </h2>

        <p className="mt-1 text-sm text-[#756D60]">
          Your place in the story, at your own pace.
        </p>
      </div>

      {/* Listening Room */}
      <div className="overflow-hidden rounded-md border-t-2 border-[#C9A34F] bg-[#0E1420] p-5 text-white sm:p-7">

        {/* Room Label */}
        <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#D4AA48]">
          THE KEMETRA LISTENING ROOM
        </p>

        {/* Listening Items */}
        <div className="flex flex-col">
          {listeningHistory.map((item, index) => (
            <div
              key={item.id}
              className={
                index === 0
                  ? "border-b border-[#303642] pb-4"
                  : "pt-5"
              }
            >
              <div className="flex items-center gap-4">

                {/* Play Icon - Hover Only */}
                <div
                  className="group flex h-11 w-11 shrink-0 cursor-default items-center justify-center rounded-full bg-[#D4AA48] text-[#0E1420] transition-all duration-300 hover:scale-110 hover:bg-[#E8BE60]"
                >
                  <FaPlay
                    size={14}
                    className="ml-0.5 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Story Information */}
                <div className="min-w-0 flex-1">
                  <h3 className="font-serif text-lg font-medium text-[#F7F1E7]">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs text-[#A6A9B0]">
                    {item.status}
                  </p>
                </div>
              </div>

              {/* Static Progress Bar */}
              {item.progress > 0 && (
                <div className="mt-4 h-[3px] w-full overflow-hidden rounded-full bg-[#303642]">
                  <div
                    className="h-full rounded-full bg-[#D4AA48]"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <p className="mt-6 text-xs leading-5 text-[#A6A9B0]">
          Sample listening history · No recording attached. Story audio is
          separate from ambient music. Nothing autoplays.
        </p>
      </div>
    </section>
  );
}
