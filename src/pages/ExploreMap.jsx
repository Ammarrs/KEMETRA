
import { useMemo, useState, useEffect } from "react"

import places from "../data/places"

import ExploreHeader from "../components/explore/ExploreHeader"
import ExploreFilters from "../components/explore/ExploreFilters"
import EgyptMap from "../components/explore/EgyptMap"
import PlaceDetails from "../components/explore/PlaceDetails"

function ExploreMap() {
  const [selectedPlace, setSelectedPlace] = useState(places[0])
  const [search, setSearch] = useState("")
  const [selectedEra, setSelectedEra] = useState("all")
  const [selectedType, setSelectedType] = useState("all")
  const [selectedRegion, setSelectedRegion] = useState("all")

  const filteredPlaces = useMemo(() => {
    return places.filter((place) => {
      return (
        place.name.toLowerCase().includes(search.toLowerCase()) &&
        (selectedEra === "all" || place.eraFilter === selectedEra) &&
        (selectedType === "all" || place.typeFilter === selectedType) &&
        (selectedRegion === "all" || place.region === selectedRegion)
      )
    })
  }, [search, selectedEra, selectedType, selectedRegion])

  useEffect(() => {
    if (
      filteredPlaces.length > 0 &&
      !filteredPlaces.some((place) => place.id === selectedPlace.id)
    ) {
      setSelectedPlace(filteredPlaces[0])
    }
  }, [filteredPlaces, selectedPlace])

  return (
    <main className="box-border min-h-screen bg-background px-[32px] py-[22px] font-body text-foreground max-[850px]:px-[18px]">

      <ExploreHeader
        title="Explore the Map"
        description="Discover the ancient wonders and historical treasures of Egypt."
      />

      <ExploreFilters
        search={search}
        onSearchChange={setSearch}
        selectedEra={selectedEra}
        onEraChange={setSelectedEra}
        selectedType={selectedType}
        onTypeChange={setSelectedType}
        selectedRegion={selectedRegion}
        onRegionChange={setSelectedRegion}
      />

      <section className="grid h-[calc(100vh-190px)] min-h-[450px] grid-cols-[minmax(0,1.7fr)_minmax(280px,0.85fr)] gap-[18px] max-[850px]:h-auto max-[850px]:grid-cols-1">

        <div className="block min-h-0 overflow-hidden rounded-[18px] border border-border bg-[#F2EBDD] p-0 max-[850px]:min-h-[400px]">
          <EgyptMap
            places={places}
            selectedPlace={selectedPlace}
            onSelectPlace={setSelectedPlace}
          />
        </div>

        <PlaceDetails
          places={filteredPlaces}
          selectedPlace={selectedPlace}
          onSelectPlace={setSelectedPlace}
        />

      </section>
    </main>
  )
}

export default ExploreMap
