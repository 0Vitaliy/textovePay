import React from "react";
import { Header } from "./header";

import "./style.css";

export default ({ children }) => {
  return (
    <div className="layout">
      <div className="wrapper">
        <Header />
        {children}
      </div>
    </div>
  );
};
