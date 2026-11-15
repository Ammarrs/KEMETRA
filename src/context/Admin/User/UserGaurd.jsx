import { Navigate } from "react-router-dom";
import { useAuth } from "../../Authentication/authContext";

function UserGaurd({children}) {
  const { connected } = useAuth();

  if (!connected) {
    return <Navigate to="/login"/>
  }
  return children;
}

export default UserGaurd;
