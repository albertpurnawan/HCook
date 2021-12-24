import React from "react";
import Footer from "../Components/Footer/Footer";
import HeaderHome from "../Components/Header/HeaderHome";
export const Layout = ({ children }) => {
  return (
    <div className="w-full m-auto">
      <HeaderHome />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
