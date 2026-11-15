
import { FaBookOpen } from "react-icons/fa";

const fieldGuides = [
  {
    id: 1,
    title: "Giza Pyramids",
    label: "SAMPLE GUIDE",
    description:
      "Field Navigation Guide · PDF concept only. No downloadable file attached.",
    status: "Not downloaded · Preview only",
  },
  {
    id: 2,
    title: "Historic Cairo",
    label: "SAMPLE GUIDE",
    description:
      "Field Navigation Guide · PDF concept only. No downloadable file attached.",
    status: "Not downloaded · Preview only",
  },
];

export default function FieldGuides() {
  return (
    <section className="w-full">
      {/* Section Heading */}
      <div className="mb-5">
        <h2 className="font-serif text-2xl font-bold text-[#29251F]">
          Field guides
        </h2>

        <p className="mt-1 text-sm text-[#756D60]">
          Sample concepts for your collection, not downloaded files.
        </p>
      </div>

      {/* Field Guides Cards */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {fieldGuides.map((guide) => (
          <article
            key={guide.id}
            className="flex items-start gap-4 rounded-md border border-[#E6D9C1] bg-[#F3ECDD] p-5 transition-all duration-300 hover:border-[#C9AA78] hover:shadow-md"
          >
            {/* Guide Icon */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-[#C9A34F] bg-[#EDE0BF] text-[#29251F]">
              <FaBookOpen size={19} />
            </div>

            {/* Guide Information */}
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-semibold uppercase tracking-wide text-[#967018]">
                {guide.label}
              </p>

              <h3 className="mt-2 font-serif text-xl font-semibold text-[#29251F]">
                {guide.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#756D60]">
                {guide.description}
              </p>

              <p className="mt-3 text-xs text-[#81735E]">
                {guide.status}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
