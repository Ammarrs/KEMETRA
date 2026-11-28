
import PlaceSelector from "./PlaceSelector"

function PlaceDetails({
  places,
  selectedPlace,
  onSelectPlace,
}) {
  return (
    <aside className="flex min-h-0 flex-col gap-[10px] overflow-y-auto rounded-[18px] border border-border bg-card p-4 max-[850px]:overflow-visible">

      <PlaceSelector
        places={places}
        selectedPlace={selectedPlace}
        onSelectPlace={onSelectPlace}
      />

      {places.length > 0 ? (
        <>
          <div className="flex h-[220px] w-full shrink-0 items-center justify-center overflow-hidden rounded-[12px] border border-border bg-surface">
            <img
              className="block h-full w-full object-cover"
              src={selectedPlace.image}
              alt={selectedPlace.name}
            />
          </div>

          <h2 className="box-border m-0 w-fit max-w-full self-start rounded-[10px] border border-primary bg-[#171717] px-[16px] py-[9px] font-display text-[21px] font-bold text-[#D8B45A]">
            {selectedPlace.name}
          </h2>

          <p className="m-0 font-body text-[12px] leading-[1.6] text-muted-foreground">
            {selectedPlace.description}
          </p>

          <div className="grid grid-cols-2 gap-[8px] max-[480px]:grid-cols-1">

            <div className="rounded-[8px] bg-surface p-[9px]">
              <span className="mb-[4px] block text-[10px] text-muted">
                LOCATION
              </span>
              <strong className="text-[11px] text-foreground">
                {selectedPlace.location}
              </strong>
            </div>

            <div className="rounded-[8px] bg-surface p-[9px]">
              <span className="mb-[4px] block text-[10px] text-muted">
                HISTORICAL ERA
              </span>
              <strong className="text-[11px] text-foreground">
                {selectedPlace.era}
              </strong>
            </div>

            <div className="rounded-[8px] bg-surface p-[9px]">
              <span className="mb-[4px] block text-[10px] text-muted">
                PLACE TYPE
              </span>
              <strong className="text-[11px] text-foreground">
                {selectedPlace.type}
              </strong>
            </div>

          </div>

          <p className="m-0 text-[11px] leading-[1.6] text-muted">
            {places.length} historical places found
          </p>

          <div className="flex flex-col gap-[7px]">
            <button
              type="button"
              className="w-full cursor-pointer rounded-[8px] border border-primary bg-primary p-[9px] font-body text-[11px] font-semibold text-white transition-all duration-200 ease-in-out hover:bg-primary-hover hover:text-white"
            >
              Launch 3D Explorer
            </button>

            <button
              type="button"
              className="w-full cursor-pointer rounded-[8px] border border-primary bg-card p-[9px] font-body text-[11px] font-semibold text-foreground transition-all duration-200 ease-in-out hover:bg-primary-hover hover:text-white"
            >
              Hear the Story
            </button>

            <button
              type="button"
              className="w-full cursor-pointer rounded-[8px] border border-primary bg-card p-[9px] font-body text-[11px] font-semibold text-foreground transition-all duration-200 ease-in-out hover:bg-primary-hover hover:text-white"
            >
              Download Field Navigation Guide
            </button>
          </div>
        </>
      ) : (
        <div className="py-[15px]">
          <h2 className="m-0 box-border w-fit max-w-full self-start rounded-[10px] border border-primary bg-[#171717] px-[16px] py-[9px] font-display text-[19px] font-bold text-[#D8B45A]">
            No places found
          </h2>

          <p className="m-0 font-body text-[12px] leading-[1.6] text-muted-foreground">
            Try changing your search or filters.
          </p>
        </div>
      )}
    </aside>
  )
}

export default PlaceDetails
