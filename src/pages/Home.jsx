import { useMemo, useState } from 'react'
import { FiChevronDown, FiDownload, FiInfo, FiMap, FiMapPin, FiMinus, FiNavigation, FiPlus, FiSearch, FiVolume2 } from 'react-icons/fi'

const mapImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Egypt%20heritage%20map-TouFxLaPesSYoCgYVRSYxzam9xKUhv.png'
const pyramidsImage = 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1000&q=85'

const places = [
  { name: 'Giza Pyramids', type: 'Pharaonic', region: 'Giza, Egypt', description: 'A monumental landmark assembled at the edge of the desert. Explore the pyramids as part of a wider story of architecture, belief and human endeavour.', period: 'Old Kingdom', placeType: 'Pyramid complex' },
  { name: 'Sultan Hassan', type: 'Islamic', region: 'Cairo, Egypt', description: 'One of Cairo’s most celebrated Mamluk monuments, known for its monumental scale and elegant stonework.', period: 'Mamluk era', placeType: 'Historic mosque' },
  { name: 'Hanging Church', type: 'Coptic', region: 'Old Cairo, Egypt', description: 'A landmark of Coptic Cairo with a rich story shaped by faith, community and centuries of craft.', period: 'Roman era', placeType: 'Coptic church' },
]

function Filter({ label, value, onChange, options }) {
  return (
    <label className="filter-select">
      <span className="sr-only">{label}</span>
      <select value={value} onChange={(event) => onChange(event.target.value)} aria-label={label}>
        {options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
      <FiChevronDown aria-hidden="true" />
    </label>
  )
}

function Home() {
  const [selectedPlace, setSelectedPlace] = useState(places[0])
  const [query, setQuery] = useState('')
  const [placeType, setPlaceType] = useState('Place type · All')
  const [region, setRegion] = useState('Region · All')
  const [view, setView] = useState('map')

  const filteredPlaces = useMemo(() => places.filter((place) => {
    const matchesQuery = place.name.toLowerCase().includes(query.toLowerCase())
    const matchesType = placeType === 'Place type · All' || place.type === placeType
    const matchesRegion = region === 'Region · All' || place.region.includes(region)
    return matchesQuery && matchesType && matchesRegion
  }), [query, placeType, region])

  return (
    <main className="explore-page">
      <header className="page-header">
        <p className="eyebrow">DISCOVER EGYPT, PLACE BY PLACE</p>
        <h1>Explore the Map</h1>
        <p className="intro">Choose a landmark to uncover its story. Start with Giza, then let curiosity lead you along the Nile.</p>
        <div className="view-switcher" role="group" aria-label="Choose view">
          <button className={view === 'map' ? 'active' : ''} onClick={() => setView('map')}><FiMap /> Map</button>
          <button className={view === 'list' ? 'active' : ''} onClick={() => setView('list')}><FiMapPin /> List</button>
        </div>
      </header>

      <section className="filters" aria-label="Map filters">
        <label className="search-box">
          <FiSearch aria-hidden="true" />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search for a temple or historic place..." aria-label="Search places" />
        </label>
        <Filter label="Era" value={placeType} onChange={setPlaceType} options={['Place type · All', 'Pharaonic', 'Coptic', 'Islamic']} />
        <Filter label="Place type" value={placeType} onChange={setPlaceType} options={['Place type · All', 'Pharaonic', 'Coptic', 'Islamic']} />
        <Filter label="Region" value={region} onChange={setRegion} options={['Region · All', 'Giza', 'Cairo', 'Old Cairo']} />
      </section>

      {view === 'map' ? (
        <section className="map-layout">
          <div className="map-panel" role="img" aria-label="Schematic map of Egypt with heritage locations">
            <img src={mapImage} alt="Schematic map of Egypt showing the Nile and heritage locations" />
            <div className="map-badge"><FiMapPin /> 6 curated places · Giza selected</div>
            <div className="map-tools" aria-label="Map controls">
              <button aria-label="Zoom in"><FiPlus /></button>
              <button aria-label="Zoom out"><FiMinus /></button>
              <button aria-label="Reset map"><FiNavigation /></button>
            </div>
            <button className="map-marker marker-giza" onClick={() => setSelectedPlace(places[0])} aria-label="Select Giza Pyramids" />
            <button className="map-marker marker-sultan" onClick={() => setSelectedPlace(places[1])} aria-label="Select Sultan Hassan" />
            <button className="map-marker marker-hanging" onClick={() => setSelectedPlace(places[2])} aria-label="Select Hanging Church" />
            <div className="map-legend"><span><i className="dot selected" />Selected</span><span><i className="dot pharaonic" />Pharaonic</span><span><i className="dot coptic" />Coptic</span><span><i className="dot islamic" />Islamic</span></div>
            <p className="map-note">KEMETRA · Schematic geography · Approximate locations · Not for navigation</p>
          </div>

          <aside className="place-card">
            <img className="place-image" src={pyramidsImage} alt="The Pyramids of Giza at sunset" />
            <div className="place-content">
              <div className="place-meta"><span className="category-pill">{selectedPlace.type}</span><span>SELECTED PLACE</span></div>
              <h2>{selectedPlace.name}</h2>
              <p className="location"><FiMapPin /> {selectedPlace.region}</p>
              <p className="place-description">{selectedPlace.description}</p>
              <div className="place-facts"><div><span>HISTORICAL PERIOD</span><strong>{selectedPlace.period}</strong></div><div><span>PLACE TYPE</span><strong>{selectedPlace.placeType}</strong></div></div>
              <div className="preview-box"><span>IN THIS PREVIEW</span><p>Written story · Sample interface<br />3D model not connected · Guide sample only</p></div>
              <button className="card-action secondary">Launch 3D Explorer <FiNavigation /></button>
              <button className="card-action primary">Hear the Story <FiVolume2 /></button>
              <div className="download-link"><FiDownload /> <span><strong>Download Field Navigation Guide</strong><small>Sample guide · PDF concept only<br />No downloadable file attached.</small></span></div>
            </div>
          </aside>
        </section>
      ) : (
        <section className="list-view" aria-label="Heritage places list">
          {filteredPlaces.map((place) => <button className="list-place" key={place.name} onClick={() => { setSelectedPlace(place); setView('map') }}><span className="category-pill">{place.type}</span><strong>{place.name}</strong><span>{place.region}</span><FiChevronDown /></button>)}
        </section>
      )}

      <section className="disclaimer"><p><FiInfo /> <strong>Use only on location</strong></p><p>Location stays off until you give permission.</p><p><FiInfo /> A curated starting collection. Place markers are approximate; nearby Cairo sites are labelled with callouts for clarity.</p></section>
    </main>
  )
}

export default Home
