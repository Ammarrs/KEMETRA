import { Navigate, Route, Routes } from "react-router-dom";
import { NavbarProvider } from "./context/Navbar/navbarContext";
import { ProfileProvider } from "./context/Profile/profileContext";
import { AuthProvider } from "./context/Authentication/authContext";
import UserLayout from "./layouts/UserLayout";
import AdminLayout from "./layouts/AdminLayout";
import SignUp from "./pages/SignUp";
import { SettingsProvider, useSettings } from "./context/Settings/SettingsContext";

function AppContent() {
  const { theme } = useSettings();
  return (
    <div className={`font-body ${theme.toLowerCase()}`}>
      <Routes>
        <Route path="/create-account" element={<SignUp />} />
        <Route path="/signup/*" element={<Navigate to="/create-account" replace />} />
        <Route path="/*" element={<UserLayout />} />
        <Route path="/admin/*" element={<AdminLayout />} />
      </Routes>
    </div>
  );

}
function App() {
  return (
    <AuthProvider>
      <NavbarProvider>
        <ProfileProvider>
          <SettingsProvider>
            <AppContent />
          </SettingsProvider>
        </ProfileProvider>
      </NavbarProvider>
    </AuthProvider>
  );
}
export default App;
