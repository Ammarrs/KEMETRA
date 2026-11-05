import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import ExploreMap from "./pages/ExploreMap"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore-map" element={<ExploreMap />} />
      </Routes>
    </div>
  )
}

export default App