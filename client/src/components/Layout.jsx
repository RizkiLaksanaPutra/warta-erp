import React from "react";
import logo from "../assets/logo.svg";
import {
  PiSignOut,
  PiChartDonutLight,
  PiUsersThreeLight,
  PiPackageLight,
  PiTrendUpLight,
  PiTrendDownLight,
} from "react-icons/pi";
import { Link, Outlet } from "react-router";
import { auth } from "../libs/firebase";
import { signOut } from "firebase/auth";

const Layout = () => {
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
    <div className="w-screen h-screen flex">
      <aside className="w-[15%] h-full flex flex-col justify-between gap-6 bg-gray-100 p-4">
        <img src={logo} alt="Logo" className="p-4" />
        <div className="flex flex-col flex-1 gap-4">
          {SIDEBARMENU.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="pl-6 py-3 text-lg flex items-center gap-3 cursor-pointer hover:bg-blue-300 hover:text-white rounded-lg transition-all"
            >
              {item.icon}
              {item.menu}
            </Link>
          ))}
        </div>
        <button
          onClick={handleSignOut}
          className="cursor-pointer border flex items-center p-3 gap-3 text-lg border-red-700 text-red-700 hover:bg-red-700 hover:text-white rounded-lg transition-all"
        >
          <PiSignOut />
          Sign Out
        </button>
      </aside>
      <div className="w-[85%] flex flex-col">
        <nav className="border-b border-gray-300 flex items-center justify-between p-4 bg-white shadow-md">
          <p className="text-lg font-semibold">{handleGreet()}</p>
        </nav>
        <main className="h-full p-6 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
