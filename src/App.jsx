import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Story from "./pages/Story"
import ExploreMap from "./pages/ExploreMap"
import Login from './pages/Login';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { NavbarProvider } from "./context/Navbar/navbarContext";
import { ProfileProvider } from "./context/Profile/profileContext";
import { AuthProvider } from "./context/Authentication/authContext";

function App() {
  return (
    <NavbarProvider>
      <ProfileProvider>
        <AuthProvider>
          <div>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/stories" element={<Story />} />
              <Route path="/explore-map" element={<ExploreMap />} />
              <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
          </div>
        </AuthProvider>
      </ProfileProvider>
    </NavbarProvider>
  );
}

export default App;
