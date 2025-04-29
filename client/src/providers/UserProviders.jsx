import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../libs/firebase";
import { UserContext } from "../context/Context";
import LoadingIcon from "../components/Icons/LoadingIcon";

const UserProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsFetching(false);
        return;
      }
      setUser(null);
      setIsFetching(false);
    });
    return () => unsubscribe();
  }, []);

  if (isFetching) {
    return <LoadingIcon />;
  }

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserProviders;
