import { useState, useEffect } from "react";
import { UserContext } from "../context/Context";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../libs/firebase";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(auth.currentUser);
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
