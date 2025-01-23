import AddTransaction from "@/pages/AddTransaction";
import AllTransactions from "@/pages/AllTransactions";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import Dashboard from "@/pages/Dashboard";
import Profile from "@/pages/Profile";
import SpendArea from "@/pages/SpendArea";
import { Outlet } from "react-router-dom";

export default function PrivateRoutes() {
  return {
    path: "/",
    element: <Outlet />,
    children: [
      { path: "", element: <Register /> },
      { path: "/login", element: <Login /> },
      { path: "/profile", element: <Profile /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/spend-area", element: <SpendArea /> },
      { path: "/add-transaction", element: <AddTransaction /> },
      { path: "/all-transactions", element: <AllTransactions /> },
    ],
  };
}
