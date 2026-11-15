
function PlaceSelector({
  places,
  selectedPlace,
  onSelectPlace,
}) {
  return (
    <div className="flex flex-col gap-[6px]">
      <h3 className="mb-[3px] font-display text-[16px] text-foreground">
        Historical Sites
      </h3>

      {places.map((place) => (
        <button
          key={place.id}
          type="button"
          className={`w-full cursor-pointer rounded-[8px] border px-[11px] py-[8px] text-left font-body text-[12px] font-semibold transition-all duration-200 ease-in-out hover:border-primary hover:bg-surface ${
            selectedPlace.id === place.id
              ? "border-primary bg-surface-secondary text-muted"
              : "border-[#E3D8C7] bg-background text-muted-foreground"
          }`}
          onClick={() => onSelectPlace(place)}
        >
          {place.name}
        </button>
      ))}
    </div>
  )
}

export default PlaceSelector
