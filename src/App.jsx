import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Story from "./pages/Story"

function App() {

  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stories" element={<Story />} />
      </Routes>

    </div>
  )
}

export default App
