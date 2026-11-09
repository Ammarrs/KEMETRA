import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
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
            </Routes>
            <Footer />
          </div>
        </AuthProvider>
      </ProfileProvider>
    </NavbarProvider>
  );
}

export default App;
