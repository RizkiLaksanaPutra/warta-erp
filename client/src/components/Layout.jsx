import logo from "../assets/logo.svg";
import {
  PiSignOut,
  PiSquaresFourThin,
  PiUsersThreeThin,
  PiPackageThin,
  PiTrendUpThin,
  PiTrendDownThin,
  PiSquaresFourBold,
  PiTrendUpBold,
  PiTrendDownBold,
  PiPackageBold,
  PiUsersThreeBold,
  PiListBold,
  PiXBold,
} from "react-icons/pi";
import { Link, Outlet, useLocation } from "react-router-dom";
import { auth } from "../libs/firebase";
import { signOut } from "firebase/auth";
import { useState } from "react";

const Layout = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const SIDEBARMENU = [
    {
      menu: "Dashboard",
      path: "/dashboard",
      icon: {
        normal: <PiSquaresFourThin />,
        active: <PiSquaresFourBold />,
      },
    },
    {
      menu: "Revenue",
      path: "/revenue",
      icon: {
        normal: <PiTrendUpThin />,
        active: <PiTrendUpBold />,
      },
    },
    {
      menu: "Expenses",
      path: "/expenses",
      icon: {
        normal: <PiTrendDownThin />,
        active: <PiTrendDownBold />,
      },
    },
    {
      menu: "Inventory",
      path: "/inventory",
      icon: {
        normal: <PiPackageThin />,
        active: <PiPackageBold />,
      },
    },
    {
      menu: "Employee",
      path: "/employee",
      icon: {
        normal: <PiUsersThreeThin />,
        active: <PiUsersThreeBold />,
      },
    },
  ];

  const handleSignOut = () => {
    signOut(auth)
      .then(() => console.log("Sign Out"))
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex h-screen w-screen font-sans">
      <aside className="hidden h-full w-[15%] flex-col justify-between gap-6 bg-slate-200 p-6 shadow-sm md:flex">
        <img
          src={logo}
          alt="Logo"
          className="rounded-md bg-white p-3 shadow-md"
        />

        <nav className="flex flex-1 flex-col gap-2">
          {SIDEBARMENU.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 rounded-sm py-3 pl-3 transition-all duration-200 ${
                  isActive
                    ? "bg-white font-semibold shadow"
                    : "hover:bg-slate-100"
                }`}
              >
                <span>{isActive ? item.icon.active : item.icon.normal}</span>
                <span>{item.menu}</span>
              </Link>
            );
          })}
        </nav>

        <button
          onClick={handleSignOut}
          className="flex items-center gap-3 rounded-sm bg-slate-100 py-3 pl-3 shadow-sm transition-all hover:text-red-700 hover:shadow-lg"
        >
          <PiSignOut />
          Sign Out
        </button>
      </aside>

      <div className="absolute top-0 left-0 z-50 md:hidden">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="rounded bg-white p-2 text-2xl shadow"
        >
          {sidebarOpen ? <PiXBold /> : <PiListBold />}
        </button>
      </div>

      {sidebarOpen && (
        <aside className="fixed inset-y-0 left-0 z-40 flex w-full flex-col justify-between bg-slate-200 p-6 shadow-md">
          <div>
            <img
              src={logo}
              alt="Logo"
              className="mb-6 rounded-md bg-white p-3 shadow-md"
            />
            <nav className="flex flex-col gap-2">
              {SIDEBARMENU.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 rounded-sm py-3 pl-3 transition-all duration-200 ${
                      isActive
                        ? "bg-white font-semibold shadow"
                        : "hover:bg-slate-100"
                    }`}
                  >
                    <span>
                      {isActive ? item.icon.active : item.icon.normal}
                    </span>
                    <span>{item.menu}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
          <button
            onClick={handleSignOut}
            className="flex items-center gap-3 rounded-sm bg-slate-100 py-3 pl-3 shadow-sm transition-all hover:text-red-700 hover:shadow-lg"
          >
            <PiSignOut />
            Sign Out
          </button>
        </aside>
      )}

      <main className="flex flex-1 flex-col overflow-hidden bg-slate-200">
        <div className="sm:m-6 flex-1 overflow-y-auto rounded-md bg-white p-5">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
