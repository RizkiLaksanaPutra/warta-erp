import React from "react";

const Alert = ({ props }) => {
  return (
    <div className="my-4 rounded-md bg-slate-50 p-4">
      <div className="flex">
        <div className="flex-0">
          <svg className="h-5 w-5 text-black">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <p className="ml-3 text-sm font-medium text-black">{props}</p>
      </div>
    </div>
  );
};

export default Alert;
