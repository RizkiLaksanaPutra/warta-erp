import React from "react";
import logo from "../assets/logo.svg";
import { Link, Outlet } from "react-router";
import { auth } from "../libs/firebase";
import { signOut } from "firebase/auth";
import { useContext } from "react";
import { UserContext } from "../context/Context";
import Loading from "./Loading";
import ChartIcon from "./ChartIcon";

const Layout = () => {
  const [user] = useContext(UserContext);

  const SIDEBARMENU = [
    { menu: "Dashboard", path: "/dashboard", icon: <ChartIcon /> },
    { menu: "Revenue", path: "/revenue", icon: <ChartIcon /> },
    { menu: "Expenses", path: "/expenses", icon: <ChartIcon /> },
    { menu: "Inventory", path: "/inventory", icon: <ChartIcon /> },
    { menu: "Employee", path: "/employee", icon: <ChartIcon /> },
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
      <aside className="w-[15%] h-full flex flex-col justify-between">
        <img src={logo} alt="Logo" className="p-3" />
        <div className="flex flex-col flex-1 gap-2">
          {SIDEBARMENU.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="p-1 border border-black cursor-pointer flex items-center gap-2"
            >
              {item.icon}
              {item.menu}
            </Link>
          ))}
        </div>
        <button
          onClick={handleSignOut}
          className="cursor-pointer border border-black p-2 m-2 flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
            />
          </svg>
          Sign Out
        </button>
      </aside>
      <div className="w-[85%] flex flex-col">
        <nav className="border border-black flex items-center justify-between p-2">
          <p>{handleGreet()}</p>
        </nav>
        <main className="h-full border border-black">
          {user ? (
            <Outlet />
          ) : (
            <div className="size-full flex justify-center items-center">
              <Loading className="size-10 text-gray-400" />
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Layout;
