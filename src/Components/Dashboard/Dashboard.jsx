import React, { useState } from "react";
import Categories from "./Categories";
import { FaArrowTrendUp } from "react-icons/fa6";

const Dashboard = () => {
  const [slippage, setSlippage] = useState(0);

  const handleSlippageChange = (event) => {
    setSlippage(parseFloat(event.target.value));
  };
  return (
    <section className="flex flex-col gap-14 p-6 bg-slate-100">
      <Categories />
      <article className="flex flex-col justify-center gap-5">
        <h2 className="flex text-5xl font-raleway items-center justify-center font-medium text-sky-950 ">
          LeaderBoard
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",

            borderRadius: "8px",
          }}
        >
          <div style={{ fontWeight: "bold", fontSize: "1.25rem" }}>
            Basic Backtest
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <label htmlFor="slippage" style={{ marginRight: "8px" }}>
              Slippage:
            </label>
            <select
              id="slippage"
              value={slippage}
              onChange={handleSlippageChange}
              style={{
                padding: "4px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            >
              <option value={0}>0%</option>
              <option value={0.005}>0.5%</option>
              <option value={0.01}>1%</option>
            </select>
          </div>
        </div>
        <div className=" relative overflow-x-auto w-[80 vh]">
          <table className="px-4 py-5  bg-slate-100 bg-lightblack w-full  text-left rtl:text-right  text-base font-semibold rounded-xl text-sky-950  tracking-wider ">
            <thead className=" bg-sky-950 rounded-xl">
              <th className="border-1 p-4 text-green-300 ">Rank</th>
              <th className="border-1 p-4  text-green-300">Name</th>
              <th className="border-1 p-4  text-green-300">Calmar Ratio</th>
              <th className="border-1 p-4  text-green-300">Overall Profit</th>
              <th className="border-1 p-4  text-green-300">
                Avg. Daily Profit
              </th>
              <th className="border-1 p-4  text-green-300">Win %(Day)</th>
              <th className="border-1 p-4  text-green-300">Price (Rs)</th>
              <th className="border-1 p-4  text-green-300">Action</th>
            </thead>
            <tbody>
              <tr className=" border-sky-950 p-4 md:table-row ">
                <td className=" px-6 py-3 border-b ">#1</td>
                <td className=" px-6 py-3 border-b ">Selling with re entr</td>
                <td className=" px-6 py-3 border-b ">
                  <FaArrowTrendUp />
                  <p>3.96</p>
                </td>
                <td className="px-6 py-3 border-b">381845</td>
                <td className="px-6 py-3 border-b">319.54</td>
                <td className="px-6 py-3 border-b">0.65</td>
                <td className="px-6 py-3 border-b">-</td>
                <td className="px-6 py-3 border-b">
                  <div className="border-2 rounded-xl px-2 py-1 hover:bg-slate-200">
                    View
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-3 border-b ">#2</td>
                <td className="px-6 py-3 border-b ">Selling with re entr</td>
                <td className="px-6 py-3 border-b  ">
                  <FaArrowTrendUp />
                  <p>3.96</p>
                </td>
                <td className="px-6 py-3 border-b ">381845</td>
                <td className="px-6 py-3 border-b">319.54</td>
                <td className="px-6 py-3 border-b">0.65</td>
                <td className="px-6 py-3 border-b">-</td>
                <td className="px-6 py-3 border-b ">
                  <div className="border-2 rounded-xl px-2 py-1 hover:bg-slate-200">
                    View
                  </div>
                </td>
              </tr>

              <tr>
                <td className="px-6 py-3 border-b ">#3</td>
                <td className="px-6 py-3 border-b ">Selling with re entr</td>
                <td className="px-6 py-3 border-b ">
                  <FaArrowTrendUp />
                  <p>3.96</p>
                </td>
                <td className="px-6 py-3 border-b">381845</td>
                <td className="px-6 py-3 border-b">319.54</td>
                <td className="px-6 py-3 border-b">0.65</td>
                <td className="px-6 py-3 border-b">-</td>
                <td className="px-6 py-3 border-b">
                  <div className="border-2 rounded-xl px-2 py-1 hover:bg-slate-200">
                    View
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-3 border-b ">#3</td>
                <td className="px-6 py-3 border-b ">Selling with re entr</td>
                <td className="px-6 py-3 border-b ">
                  <FaArrowTrendUp />
                  <p>3.96</p>
                </td>
                <td className="px-6 py-3 border-b">381845</td>
                <td className="px-6 py-3 border-b">319.54</td>
                <td className="px-6 py-3 border-b">0.65</td>
                <td className="px-6 py-3 border-b">-</td>
                <td className="px-6 py-3 border-b">
                  <div className="border-2 rounded-xl px-2 py-1 hover:bg-slate-200">
                    View
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-3 border-b ">#3</td>
                <td className="px-6 py-3 border-b ">Selling with re entr</td>
                <td className="px-6 py-3 border-b ">
                  <FaArrowTrendUp />
                  <p>3.96</p>
                </td>
                <td className="px-6 py-3 border-b">381845</td>
                <td className="px-6 py-3 border-b">319.54</td>
                <td className="px-6 py-3 border-b">0.65</td>
                <td className="px-6 py-3 border-b">-</td>
                <td className="px-6 py-3 border-b">
                  <div className="border-2 rounded-xl px-2 py-1 hover:bg-slate-200">
                    View
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-3 border-b ">#3</td>
                <td className="px-6 py-3 border-b ">Selling with re entr</td>
                <td className="px-6 py-3 border-b ">
                  <FaArrowTrendUp />
                  <p>3.96</p>
                </td>
                <td className="px-6 py-3 border-b">381845</td>
                <td className="px-6 py-3 border-b">319.54</td>
                <td className="px-6 py-3 border-b">0.65</td>
                <td className="px-6 py-3 border-b">-</td>
                <td className="px-6 py-3 border-b">
                  <div className="border-2 rounded-xl px-2 py-1 hover:bg-slate-200">
                    View
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-3 border-b ">#3</td>
                <td className="px-6 py-3 border-b ">Selling with re entr</td>
                <td className="px-6 py-3 border-b ">
                  <FaArrowTrendUp />
                  <p>3.96</p>
                </td>
                <td className="px-6 py-3 border-b">381845</td>
                <td className="px-6 py-3 border-b">319.54</td>
                <td className="px-6 py-3 border-b">0.65</td>
                <td className="px-6 py-3 border-b">-</td>
                <td className="px-6 py-3 border-b">
                  <div className="border-2 rounded-xl px-2 py-1 hover:bg-slate-200">
                    View
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
    </section>
  );
};

export default Dashboard;
