import React, { useState } from "react";
export function Tabs({ setChartType }) {
  const [activeStatus, setActiveStatus] = useState(1);
  return (
    <div className="mb-5">
      <div className="sm:hidden relative w-11/12 mx-auto bg-white rounded">
        <div className="absolute inset-0 m-auto mr-4 z-0 w-6 h-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-selector"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#A0AEC0"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <polyline points="8 9 12 5 16 9" />
            <polyline points="16 15 12 19 8 15" />
          </svg>
        </div>
        <select
          aria-label="Selected tab"
          className="form-select block w-full p-3 border border-gray-300 rounded text-gray-600 appearance-none bg-transparent relative z-10"
        >
          <option
            selected
            className="text-sm text-gray-600"
            onClick={() => setChartType("status")}
          >
            Issue by status
          </option>
          <option
            className="text-sm text-gray-600"
            onClick={() => setChartType("priority")}
          >
            Issue by priority{" "}
          </option>
        </select>
      </div>
      <div className="xl:w-full xl:mx-0 h-12 hidden sm:block bg-white shadow rounded">
        <ul className="flex px-5">
          <li
            onClick={() => {
              setChartType("status");
              setActiveStatus(1);
            }}
            className={
              activeStatus == 1
                ? "text-sm border-indigo-700 pt-3 rounded-t text-indigo-700 mr-12"
                : "text-sm text-gray-600 py-3 flex items-center mr-12 hover:text-indigo-700 cursor-pointer"
            }
          >
            <div className="flex items-center mb-3">
              <span className="ml-1 font-normal">Issue by status</span>
            </div>
            {activeStatus == 1 && (
              <div className="w-full h-1 bg-indigo-700 rounded-t-md" />
            )}
          </li>
          <li
            onClick={() => {
              setChartType("priority");
              setActiveStatus(2);
            }}
            className={
              activeStatus == 2
                ? "text-sm border-indigo-700 pt-3 rounded-t text-indigo-700 mr-12"
                : "text-sm text-gray-600 py-3 flex items-center mr-12 hover:text-indigo-700 cursor-pointer"
            }
          >
            <div className="flex items-center mb-3">
              <span className="ml-1 font-normal">Issue by priority</span>
            </div>
            {activeStatus == 2 && (
              <div className="w-full h-1 bg-indigo-700 rounded-t-md" />
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
