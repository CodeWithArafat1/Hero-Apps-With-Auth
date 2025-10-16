import React from "react";
import { useAppContext } from "../contexts/context";
import { Navigate, useLocation } from "react-router";
import SetLoading from "../components/SetLoading";

const PrivetRouter = ({ children }) => {
  const { user, loadUser } = useAppContext();
  const location = useLocation();

  if (loadUser) {
    return <SetLoading />;
  }

  if (user) {
    return children;
  }

  return (
    <>
      <Navigate state={location.pathname} to="/login" />
    </>
  );
};

export default PrivetRouter;
