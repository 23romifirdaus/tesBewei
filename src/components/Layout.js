import React from "react";
import Header from "./shared/header";

import "bootswatch/dist/lux/bootstrap.css";

const Layout = ({ title, description, children }) => {
  return (
    <>
      <Header />
      <main className="container">{children}</main>
    </>
  );
};

export default Layout;
