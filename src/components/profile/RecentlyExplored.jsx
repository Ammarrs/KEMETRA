
const recentlyExploredPlaces = [
  {
    id: 1,
    name: "Giza Pyramids",
    date: "Today",
    location: "Giza · Pharaonic",
    image: "/profile/giza-pyramids.jpg",
  },
  {
    id: 2,
    name: "Philae Temple",
    date: "Yesterday",
    location: "Aswan · Pharaonic",
    image: "/profile/philae-temple.jpg",
  },
  {
    id: 3,
    name: "Karnak Temple",
    date: "This week",
    location: "Luxor · Pharaonic",
    image: "/profile/karnak-temple.jpg",
  },
];

export default function RecentlyExplored() {
  return (
    <section className="w-full">
      {/* Section Heading */}
      <div className="mb-5">
        <h2 className="font-serif text-2xl font-bold text-[#29251F]">
          Recently explored
        </h2>

        <p className="mt-1 text-sm text-[#756D60]">
          Pick up the thread of your latest discoveries.
        </p>
      </div>

      {/* Recently Explored Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {recentlyExploredPlaces.map((place) => (
          <article
            key={place.id}
            className="flex min-w-0 items-center gap-4 rounded-md border border-[#E6D9C1] bg-[#FFFCF7] p-3 transition-all duration-300 hover:border-[#C9AA78] hover:shadow-md"
          >
            {/* Place Image */}
            <div className="h-20 w-20 shrink-0 overflow-hidden rounded-md bg-[#F3ECDD]">
              <img
                src={place.image}
                alt={place.name}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Place Information */}
            <div className="min-w-0 flex-1">
              <p className="text-xs text-[#756D60]">
                {place.date}
              </p>

              <h3 className="mt-1 text-sm font-semibold text-[#29251F]">
                {place.name}
              </h3>

              <p className="mt-1 text-xs text-[#756D60]">
                {place.location}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
