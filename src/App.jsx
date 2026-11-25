
import { NavbarProvider } from "./context/Navbar/navbarContext";
import { ProfileProvider } from "./context/Profile/profileContext";
import { AuthProvider } from "./context/Authentication/authContext";
import { SettingsProvider } from "./context/Settings/SettingsContext";
import AppContent from './AppContent';


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
