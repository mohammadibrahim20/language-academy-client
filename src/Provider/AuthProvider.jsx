import axios from "axios";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { getRole } from "../Api/api";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState("student");
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signinWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  useEffect(() => {
    if (user) {
      getRole(user.email).then((data) => setRole(data));
    }
  }, [user]);
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
      axios
        .post("http://localhost:5000/jwt", {
          email: loggedUser.email,
        })
        .then((data) => {
          // console.log(data);
          localStorage.setItem("access_token", data.data.token);
          setLoading(false);
        });
      setLoading(false);
      localStorage.removeItem("access_token");
    });
    return () => unSubscribe();
  }, []);
  const logOut = () => {
    signOut(auth);
  };

  const authInfo = {
    user,
    loading,
    auth,
    createUser,
    signIn,
    signinWithGoogle,
    logOut,
    role,
    setRole,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
