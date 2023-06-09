import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../Firebase/firebase";
import axios from "axios";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [allUsers, setAllUsers] = useState([]);
  const [isInstructor, setInstructor] = useState(null);

  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // manage user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("current user", currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  // google signing
  const googleSigning = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // log out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // get all users
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_LINK}/users`)
      .then((res) => setAllUsers(res.data));
  }, []);

  // getCurrentUser(user?.email).then((res) => {
  //   setInstructor(res.data)
  //   console.log(res?.data)
  // });
  // console.log(isInstructor)

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_LINK}/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setInstructor(data?.role));
  }, [user]);

  const authInfo = {
    user,
    allUsers,
    loading,
    isInstructor,
    setLoading,
    createUser,
    loginUser,
    googleSigning,
    logOut,
    updateUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
