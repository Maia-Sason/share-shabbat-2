import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import { auth } from "../../firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";

const useAuth = () => {
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.
  // Listen to the Firebase Auth state and set the local state.
  const [isFetching, setIsFetching] = useState(true);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const links = isSignedIn
    ? [
        { path: "/", name: "Join" },
        { path: "/account/blocks", name: "Blocks" },
        { path: "/account/rooms", name: "Rooms" },
        { name: "Log out", type: "button" },
      ]
    : [{ path: "/login", name: "Login" }];

  useEffect(() => {
    const unregisterAuthObserver = onAuthStateChanged(auth, (user) => {
      setIsSignedIn(!!user);
      if (user && !user.isAnonymous) setUser(user);
      setIsFetching(false);
    });
    return () => {
      unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
    };
  }, [setIsSignedIn, setLoading]);

  useEffect(() => {
    if (!isFetching) setLoading(false);
  }, [isFetching, setLoading]);

  const logout = () => {
    signOut(auth);
  };

  return { isSignedIn, loading, user, links, logout };
};

export default useAuth;
