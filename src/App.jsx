import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Story from "./pages/Story"
import ExploreMap from "./pages/ExploreMap"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stories" element={<Story />} />
        <Route path="/explore-map" element={<ExploreMap />} />
      </Routes>
    </div>
  )
}

export default App