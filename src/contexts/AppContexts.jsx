import React, { useEffect, useReducer } from "react";
import {
  DISPLAY_DATA,
  reducer,
  SET_LOAD_USER,
  SET_LOADING,
  SET_USER,
} from "../reducer/reducer";
import { AppContext } from "./context";
import { ToastContainer } from "react-toastify";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const initialState = {
  data: [],
  user: null,
  displayData: [],
  showChart: [],
  loading: true,
  savedLocal: [],
  isSelected: "def",
  isExisting: false,
  loadUser: true,
};

const AppContexts = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchDataJosn = async () => {
      try {
        const res = await fetch("/api.json");
        const data = await res.json();
        dispatch({ type: DISPLAY_DATA, payload: data });
      } catch (err) {
        console.log(err);
      }
    };
    fetchDataJosn();
  }, [dispatch]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      let userDispatch = currentUser;
      if (currentUser && !currentUser.email && currentUser.providerData) {
        const githubProvider = currentUser.providerData.find(
          (p) => p.providerId === "github.com"
        );

        if (githubProvider && githubProvider.email) {
          userDispatch = { ...currentUser, email: githubProvider.email };
        }
      }
      dispatch({ type: SET_USER, payload: userDispatch });
      dispatch({ type: SET_LOAD_USER, payload: false });
    });
    return () => unsubscribe();
  }, []);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
      <ToastContainer />
    </AppContext.Provider>
  );
};

export default AppContexts;
