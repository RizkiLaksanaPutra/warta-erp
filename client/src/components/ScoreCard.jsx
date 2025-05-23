import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const ScoreCard = ({ title, value, percentage, positive = true }) => {
  return (
    <div className="flex w-full flex-col justify-between gap-2 rounded-md border border-gray-200 bg-white p-3 shadow">
      <p className="text-sm text-gray-500">{title}</p>
      <div className="flex flex-col gap-2 justify-between xl:flex-row">
        <p className="text-sm font-semibold text-gray-800">{value}</p>
        <div className="flex items-center gap-1">
          {positive ? (
            <FaArrowUp className="text-sm text-green-600" />
          ) : (
            <FaArrowDown className="text-sm text-red-600" />
          )}
          {positive ? (
            <span className="text-sm text-green-600">{percentage}</span>
          ) : (
            <span className="text-sm text-red-600">{percentage}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
