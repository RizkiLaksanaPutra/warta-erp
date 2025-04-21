import React from "react";
import { NavLink } from "react-router";

const App = () => {
  return (
    <>
      <div>App</div>
      <NavLink to={"/login"}>Login</NavLink>
    </>
  );
};

export default App;
