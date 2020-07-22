import React from "react";

import { Logo } from "../../logo";
import { Button } from "../../button";

import "./style.css";

export const Header = () => {
  return (
    <header className="headerWrap">
      <Logo />
      <Button />
    </header>
  );
};
