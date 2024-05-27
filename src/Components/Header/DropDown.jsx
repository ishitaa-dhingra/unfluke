import React from "react";
import { FaBell, FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const DropDown = () => {
  return (
    <Link className="flex justify-center items-center border-2 border-gray-300 p-2 rounded-xl">
      <FaBell />
      <FaCaretDown className="text-lg" />
    </Link>
  );
};

export default DropDown;
