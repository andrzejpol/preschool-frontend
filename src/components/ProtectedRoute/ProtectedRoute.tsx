import {Navigate} from "react-router-dom";
import React from "react";

const ProtectedRoute = ({children, isAuthenticated}: { children: React.ReactNode, isAuthenticated: boolean }) => {
  if (!isAuthenticated) {
    return <Navigate to={"/login"}/>;
  }

  return children;
};

export default ProtectedRoute;