import React from "react";
import { FiAlertCircle } from "react-icons/fi"; // Importing React Icons

import Products from "../components/forex/Products";

const Soon = () => {
  // Extract the last part of the URL pathname
  const path = window.location.pathname;
  const lastPartOfPath = path.substring(path.lastIndexOf("/") + 1);

  return (
    <div className="mx-auto  bg-black text-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-6 py-8 capitalize">
        {lastPartOfPath.replace(/-/g, " ")}
      </h1>
      <div className="flex items-center justify-center mb-8">
        <FiAlertCircle className="text-red-500 text-xl mr-2" />{" "}
        {/* React Icon */}
        <p className="text-lg text-red-500 font-semibold">
          This course is currently under development. Stay tuned for updates!
        </p>
      </div>
      <div className="h-full">
        <Products />
      </div>
    </div>
  );
};

export default Soon;
