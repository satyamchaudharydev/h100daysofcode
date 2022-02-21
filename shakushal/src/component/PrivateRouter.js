import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Outlet } from "react-router";
import Login from "./Login";
export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();
  return currentUser ? <Outlet /> : <Login />;
}
