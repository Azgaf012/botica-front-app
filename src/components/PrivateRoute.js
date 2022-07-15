import React from "react";
import { Navigate, Outlet, Route } from "react-router-dom";

const useAuth = () => {
  return document.cookie || false;
};

const PrivateRoute = (props) => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
