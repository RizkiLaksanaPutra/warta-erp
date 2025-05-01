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
} from "react-icons/pi";
import { Link, Outlet, useLocation } from "react-router-dom";
import { auth } from "../libs/firebase";
import { signOut } from "firebase/auth";

const Layout = () => {
  const location = useLocation();

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
      <aside className="flex h-full w-[15%] flex-col justify-between gap-6 bg-slate-200 p-6 shadow-sm">
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
                <span className="flex items-center justify-center">
                  {isActive ? item.icon.active : item.icon.normal}
                </span>
                <span className="leading-none">{item.menu}</span>
              </Link>
            );
          })}
        </nav>

        <button
          onClick={handleSignOut}
          className="flex cursor-pointer items-center gap-3 rounded-sm bg-slate-100 py-3 pl-3 leading-none shadow-sm transition-all hover:text-red-700 hover:shadow-lg"
        >
          <PiSignOut />
          Sign Out
        </button>
      </aside>

      <main className="flex w-[85%] flex-col bg-slate-200">
        <div className="flex-1 overflow-y-auto bg-white m-6 p-5 rounded-md">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
