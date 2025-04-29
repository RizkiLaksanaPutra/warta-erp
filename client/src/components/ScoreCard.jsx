import React from "react";
import { FaArrowUp } from "react-icons/fa";

const ScoreCard = () => {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-md w-full max-w-sm flex gap-10 justify-between items-center">
      <div className="flex flex-col gap-2">
        <p className="text-sm text-gray-500">Revenue</p>
        <p className="text-2xl font-semibold text-gray-800">Rp 100.000.000</p>
      </div>
      <div className="flex items-center gap-1 text-green-600 font-medium">
        <FaArrowUp className="text-sm" />
        <span>+36%</span>
      </div>
    </div>
  );
};

export default ScoreCard;
