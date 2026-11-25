import UserLayout from "./layouts/UserLayout";
import AdminLayout from "./layouts/AdminLayout";
import SignUp from "./pages/SignUp";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSettings } from "./context/Settings/SettingsContext";

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

export default AppContent