import React from "react";
import DropDown from "./DropDown";
import { GiTwoCoins } from "react-icons/gi";
import { Link } from "react-router-dom";
import { FaCaretDown, FaUserCircle } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className="flex justify-center items-center relative bottom-3 text-xl gap-4">
      <div className="flex justify-center items-center gap-4 ">
        <DropDown />
        <span className="flex justify-center items-center text-2xl text-yellow-500 font-semibold">
          <GiTwoCoins />
          <p className="text-sm">100</p>
        </span>
      </div>
      <Link className="flex justify-center items-center gap-1 p-2 border-2 rounded-xl border-gray-300">
        <FaUserCircle />
        <FaCaretDown className="text-lg" />
      </Link>
    </nav>
  );
};

export default Nav;
