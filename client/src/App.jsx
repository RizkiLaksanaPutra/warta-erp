import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Employee from "./pages/Employee";
import Revenue from "./pages/Revenue";
import Expenses from "./pages/Expenses";
import Inventory from "./pages/Inventory";
import UserProvider from "./providers/UserProvider";
import { UserContext } from "./context/Context";

const App = () => {
  const [user] = useContext(UserContext);

  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login user={user} />} />
          <Route
            element={
              <ProtectedRoute user={user}>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/revenue" element={<Revenue />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/employee" element={<Employee />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
