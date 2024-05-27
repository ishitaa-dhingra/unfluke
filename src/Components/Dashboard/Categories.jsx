import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div>
      <ul className="flex justify-center items-center ">
        <li className="px-3 py-2   font-semibold text-gray-700 border-b">
          <Link>Leaderboard</Link>
        </li>
        <li className="px-3 py-2  font-semibold text-gray-700 border-b">
          <Link>Historical Trading</Link>
        </li>
        <li className="px-3 py-2   font-semibold text-sky-950 border-b">
          <Link>Historical charts</Link>
        </li>
        <li className="px-3 py-2   font-semibold text-sky-950 border-b">
          <Link>Scanners</Link>
        </li>
        <li className="px-3 py-2   font-semibold text-sky-950 border-b">
          <Link>Alerts</Link>
        </li>
        <li className="px-3 py-2   font-semibold text-sky-950 border-b">
          <Link>Basic Backtest</Link>
        </li>
        <li className="px-3 py-2   font-semibold text-sky-950 border-b">
          <Link>Advanced Backtest</Link>
        </li>
        <li className="px-3 py-2   font-semibold text-sky-950 border-b">
          <Link>Pricing</Link>
        </li>
        <li className="px-3 py-2   font-semibold text-sky-950 border-b">
          <Link>My-earnings</Link>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
