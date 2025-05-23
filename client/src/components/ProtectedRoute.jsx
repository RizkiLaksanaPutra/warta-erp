import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/Context";

const ProtectedRoute = ({ children }) => {
  const user = useContext(UserContext);

  if (!user) return <Navigate to="/" replace />;
  return children;
};

export default ProtectedRoute;
