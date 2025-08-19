import React from "react";
import { Navigate } from "react-router-dom";

// Simulated authentication hook
const useAuth = () => {
  const isAuthenticated = false; // change to true to test
  return { isAuthenticated };
};

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // Redirect to home or login page if not authenticated
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
