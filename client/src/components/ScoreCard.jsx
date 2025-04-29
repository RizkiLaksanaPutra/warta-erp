import React from "react";
import { FaArrowUp } from "react-icons/fa";

const ScoreCard = () => {
  return (
    <div className="flex w-full max-w-sm flex-col justify-between gap-2 rounded-2xl bg-white p-6 shadow-md">
      <p className="text-sm text-gray-500">Revenue</p>
      <div className="flex items-center justify-between font-medium text-green-600">
        <p className="text-2xl font-semibold text-gray-800">Rp 100.000.000</p>
        <div className="flex items-center">
          <FaArrowUp className="text-sm" />
          <span>+36%</span>
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
