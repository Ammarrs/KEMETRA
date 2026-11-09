import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { NavbarProvider } from "./context/Navbar/navbarContext";
import { ProfileProvider } from "./context/Profile/profileContext";
import { AuthProvider } from "./context/Authentication/authContext";
import UserLayout from "./layouts/UserLayout";
import AdminLayout from "./layouts/AdminLayout";

function App() {
  return (
    <AuthProvider>
      <NavbarProvider>
        <ProfileProvider>
          <div className="font-body">
            <Header />
            <Routes>
              <Route path="/*" element={<UserLayout />} />
              <Route path="/admin/*" element={<AdminLayout />} />
            </Routes>
            <Footer />
          </div>
        </ProfileProvider>
      </NavbarProvider>
    </AuthProvider>
  );
}

export default App;
