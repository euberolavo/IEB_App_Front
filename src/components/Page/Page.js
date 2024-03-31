import React from "react";
import Style from "./Page.module.css";
import Header from "../header/header.js";

function Page({ children }) {
  return (
    <div className={Style.Page}>
      <Header />
      <div className={Style.Container}>{children}</div>
    </div>
  );
}

export default Page;
