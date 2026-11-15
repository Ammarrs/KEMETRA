
import { useState } from "react";
import {
  FaBookmark,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

const initialPlaces = [
  {
    id: 1,
    name: "Giza Pyramids",
    location: "Giza, Egypt",
    image: "/profile/giza-pyramids.jpg",
    category: "Ancient Egypt",
  },
  {
    id: 2,
    name: "Hanging Church",
    location: "Old Cairo, Egypt",
    image: "/profile/hanging-church.jpg",
    category: "Coptic Heritage",
  },
  {
    id: 3,
    name: "Sultan Hassan Mosque",
    location: "Cairo, Egypt",
    image: "/profile/sultan-hassan.jpg",
    category: "Islamic Heritage",
  },
];

export default function SavedPlaces() {
  const [savedPlaces, setSavedPlaces] = useState(initialPlaces);

  const removePlace = (id) => {
    setSavedPlaces((previousPlaces) =>
      previousPlaces.filter((place) => place.id !== id)
    );
  };

  return (
    <section className="rounded-2xl border border-[#E8DDCB] bg-white p-5 shadow-sm sm:p-7">
      {/* Section Header */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-[#493722]">
            Saved Places
          </h2>

          <p className="mt-1 text-sm text-[#806D55]">
            Your favorite historical destinations.
          </p>
        </div>

        <span className="w-fit rounded-full bg-[#F5EBD9] px-4 py-2 text-sm font-medium text-[#9B713D]">
          {savedPlaces.length} Saved Places
        </span>
      </div>

      {/* Places Grid */}
      {savedPlaces.length > 0 ? (
        <div className="grid grid-cols-1 items-start gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {savedPlaces.map((place) => (
            <article
              key={place.id}
              className="overflow-hidden rounded-xl border border-[#E8DDCB] bg-white transition-shadow hover:shadow-md"
            >
              {/* Place Image */}
              <div className="relative bg-[#F5EBD9]">
                <img
                  src={place.image}
                  alt={place.name}
                  className="block h-auto w-full"
                />

                <button
                  type="button"
                  onClick={() => removePlace(place.id)}
                  title={`Remove ${place.name} from saved places`}
                  aria-label={`Remove ${place.name} from saved places`}
                  className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#A67C45] shadow-md transition-colors hover:bg-[#F5EBD9]"
                >
                  <FaBookmark size={15} />
                </button>
              </div>

              {/* Place Details */}
              <div className="p-4">
                <span className="text-xs font-semibold text-[#A67C45]">
                  {place.category}
                </span>

                <h3 className="mt-2 text-lg font-bold text-[#493722]">
                  {place.name}
                </h3>

                <p className="mt-2 flex items-center gap-2 text-sm text-[#806D55]">
                  <FaMapMarkerAlt className="shrink-0" />
                  {place.location}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-[#EDE5D8] pt-4">
                  <span className="text-sm font-medium text-[#9B713D]">
                    Saved Destination
                  </span>

                  <FaArrowRight className="text-[#A67C45]" />
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-xl bg-[#FAF7F0] px-5 py-12 text-center">
          <FaBookmark className="mb-4 text-3xl text-[#A67C45]" />

          <h3 className="text-lg font-bold text-[#493722]">
            No Saved Places Yet
          </h3>

          <p className="mt-2 text-sm text-[#806D55]">
            Your saved destinations will appear here.
          </p>
        </div>
      )}
    </section>
  );
}
