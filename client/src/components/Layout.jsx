import React from "react";
import logo from "../assets/logo.svg";
import { Outlet } from "react-router";
import { auth } from "../libs/firebase";
import { signOut } from "firebase/auth";

const Layout = () => {
  const SIDEBARMENU = [
    { menu: "Dashboard", path: "/dashboard" },
    { menu: "Inventory", path: "/inventory" },
    { menu: "Employee", path: "/employee" },
    { menu: "Something", path: "/something" },
    { menu: "Aku Koding", path: "/idk" },
  ];

  const handleSignOut = () => {
    signOut(auth)
      .then(() => console.log("Sign Out"))
      .catch((error) => console.log(error));
  };

  return (
    <div className="w-screen h-screen flex">
      <aside className="w-[15%] h-full flex flex-col justify-between border border-black">
        <img src={logo} alt="Logo" className="p-3" />
        <div className="flex flex-col flex-1">
          {SIDEBARMENU.map((item) => (
            <button
              key={item.path}
              onClick={() => (window.location.href = item.path)}
              className="p-2 m-2 border border-b-black"
            >
              {item.menu}
            </button>
          ))}
        </div>
        <button
          onClick={handleSignOut}
          className="cursor-pointer border border-black p-2 m-2 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="black"
            width={30}
          >
            <path d="M4 18H6V20H18V4H6V6H4V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V18ZM6 11H13V13H6V16L1 12L6 8V11Z"></path>
          </svg>
        </button>
      </aside>
      <div className="w-[85%] flex flex-col">
        <nav className="border border-black flex items-center justify-between">
          <button className="cursor-pointer border border-black p-2 m-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="black"
              width={30}
            >
              <path d="M4 18H6V20H18V4H6V6H4V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V18ZM6 11H13V13H6V16L1 12L6 8V11Z"></path>
            </svg>
          </button>
        </nav>
        <main className="h-full border border-black">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
