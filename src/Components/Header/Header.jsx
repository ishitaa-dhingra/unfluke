import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <header className="h-20 px-16 border-b-2 border-gray-300 flex justify-between items-end overflow-hidden">
      <Link to="/">
        <img src={Logo} className="h-24 relative -bottom-4" alt="" />
      </Link>
      <Nav />
    </header>
  );
};

export default Header;
