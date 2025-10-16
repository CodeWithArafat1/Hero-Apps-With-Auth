import React, { memo, Suspense } from "react";
import Home from "../pages/Home";
import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import SetLoading from "../components/SetLoading";

const Root = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-381px)] ">
        <Suspense fallback={<SetLoading />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default memo(Root);
