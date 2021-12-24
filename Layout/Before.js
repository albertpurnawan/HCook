import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

export const Layout = ({ children }) => {
  return (
    <div className="w-full m-auto">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
