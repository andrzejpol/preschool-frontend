import {Navigate} from "react-router-dom";
import {getToken} from "../../../authService";
import React from "react";

const ProtectedRoute = ({children}: { children: React.ReactNode }) => {
  const token = getToken();

  return token ? children : <Navigate to="/login"/>;
};

export default ProtectedRoute;
