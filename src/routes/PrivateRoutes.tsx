import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import Profile from "@/pages/Profile";
import { Outlet } from "react-router-dom";

export default function PrivateRoutes() {
  return {
    path: "/",
    element: <Outlet />,
    children: [
      { path: "", element: <Register /> },
      { path: "/login", element: <Login /> },
      { path: "/profile", element: <Profile /> },
    ],
  };
}
