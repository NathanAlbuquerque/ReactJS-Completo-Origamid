import React from "react";
import HeaderLink from "./HeaderLink";

const Header = () => {
  return (
    <header>
      <ul>
        <HeaderLink nome="Home" link="/" />
        <HeaderLink nome="Produtos" link="/produtos" />
      </ul>
    </header>
  );
};

export default Header;
