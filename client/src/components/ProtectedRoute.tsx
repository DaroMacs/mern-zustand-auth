import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface IProtectedRouteProps {
  isAuthenticated: boolean;
  children?: React.ReactNode;
}

const ProtectedRoute = ({
  children,
  isAuthenticated,
}: IProtectedRouteProps) => {
  if (!isAuthenticated) return <Navigate to="/login" />;

  return children ? <>{children}</> : <Outlet />;
};

export default ProtectedRoute;
