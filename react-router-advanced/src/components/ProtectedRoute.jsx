import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";  // 👈 must be imported and used

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // 👈 must use useAuth here

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;