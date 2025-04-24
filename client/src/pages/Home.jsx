import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../libs/firebase";

const Home = () => {
  const handleSignOut = () => {
    signOut(auth)
      .then(() => console.log("Sign Out"))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <p>Home</p>
      <button onClick={handleSignOut} className="cursor-pointer">
        Sign Out
      </button>
    </div>
  );
};

export default Home;
