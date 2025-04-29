import React, { useContext } from "react";
import logo from "../assets/logo.svg";
import {
  PiSignOut,
  PiChartDonutLight,
  PiUsersThreeLight,
  PiPackageLight,
  PiTrendUpLight,
  PiTrendDownLight,
} from "react-icons/pi";
import { Link, Outlet, useLocation } from "react-router-dom";
import { auth } from "../libs/firebase";
import { signOut } from "firebase/auth";
import { useContext } from "react";
import { UserContext } from "../context/Context";
import ChartIcon from "./ChartIcon";
import LoadingIcon from "./LoadingIcon";

const Layout = () => {
  const user = useContext(UserContext);
  const location = useLocation();

  const SIDEBARMENU = [
    { menu: "Dashboard", path: "/dashboard", icon: <PiChartDonutLight /> },
    { menu: "Revenue", path: "/revenue", icon: <PiTrendUpLight /> },
    { menu: "Expenses", path: "/expenses", icon: <PiTrendDownLight /> },
    { menu: "Inventory", path: "/inventory", icon: <PiPackageLight /> },
    { menu: "Employee", path: "/employee", icon: <PiUsersThreeLight /> },
  ];

  const handleSignOut = () => {
    signOut(auth)
      .then(() => console.log("Sign Out"))
      .catch((error) => console.log(error));
  };

  const handleGreet = () => {
    const hours = new Date().getHours();
    if (hours >= 5 && hours < 12) {
      return "Selamat Pagi";
    } else if (hours >= 12 && hours < 15) {
      return "Selamat Siang";
    } else if (hours >= 15 && hours < 18) {
      return "Selamat Sore";
    } else {
      return "Selamat Malam";
    }
  };

  return (
    <div className="w-screen h-screen flex font-sans text-gray-800">
      <aside className="w-[15%] h-full flex flex-col justify-between bg-white shadow-md p-6 gap-6">
        <img src={logo} alt="Logo" className="p-2 mb-4" />

        <nav className="flex flex-col flex-1 gap-2">
          {SIDEBARMENU.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`pl-5 pr-3 py-3 text-lg rounded-xl flex items-center gap-3 transition-all ${
                location.pathname === item.path
                  ? "bg-blue-500 text-white"
                  : "hover:bg-blue-100 hover:text-blue-600"
              }`}
            >
              {item.icon}
              {item.menu}
            </Link>
          ))}
        </nav>

        <button
          onClick={handleSignOut}
          className="flex items-center gap-3 px-4 py-3 font-medium text-red-600 hover:bg-red-100 hover:text-red-700 rounded-lg transition-all cursor-pointer"
        >
          <PiSignOut />
          Sign Out
        </button>
      </aside>

      <div className="w-[85%] flex flex-col">
        <nav className="border-b border-gray-200 bg-white p-5 shadow-sm flex items-center justify-between">
          <p className="text-lg font-semibold">{handleGreet()}</p>
        </nav>
        <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">
          {user ? <Outlet /> : <LoadingIcon />}
        </main>
      </div>
    </div>
  );
};

export default Layout;
