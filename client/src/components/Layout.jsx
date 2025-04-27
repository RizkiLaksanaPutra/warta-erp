import React from "react";
import logo from "../assets/logo.svg";
import { Outlet } from "react-router";
import { auth } from "../libs/firebase";
import { signOut } from "firebase/auth";

const Layout = () => {
  const SIDEBARMENU = [
    { menu: "Dashboard", path: "/dashboard" },
    { menu: "Revenue", path: "/revenue" },
    { menu: "Expenses", path: "/expenses" },
    { menu: "Inventory", path: "/inventory" },
    { menu: "Employee", path: "/employee" },
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
      <aside className="w-[15%] h-full flex flex-col justify-between border border-black">
        <img src={logo} alt="Logo" className="p-3" />
        <div className="flex flex-col flex-1">
          {SIDEBARMENU.map((item) => (
            <button
              key={item.path}
              onClick={() => (window.location.href = item.path)}
              className="p-2 m-2 border border-b-black cursor-pointer"
            >
              {item.menu}
            </button>
          ))}
        </div>
        <button
          onClick={handleSignOut}
          className="cursor-pointer border border-black p-2 m-2"
        >
          Sign Out
        </button>
      </aside>
      <div className="w-[85%] flex flex-col">
        <nav className="border border-black flex items-center justify-between p-2">
          <p>{handleGreet()}</p>
        </nav>
        <main className="h-full border border-black">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
