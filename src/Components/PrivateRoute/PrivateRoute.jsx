import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const isAuthenticated =
    typeof window !== "undefined" &&
    window.localStorage.getItem("renti_admin_auth") === "true";

  if (isAuthenticated) {
    return children;
  }

  return <Navigate to="/signin" state={{ from: location }} replace />;
};

export default PrivateRoute;
