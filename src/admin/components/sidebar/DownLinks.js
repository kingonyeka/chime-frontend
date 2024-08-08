import React from "react";
import { BsBoxArrowRight, BsCreditCard } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { FaTelegramPlane } from "react-icons/fa";

const DownLinks = ({ handleLogout }) => {
  return (
    <div>
      <div className="flex flex-col space-y-2">
        <NavLink
          to="revenue"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "flex items-center text-white capitalize md:text-lg xl:text-xl space-x-4 bg-cyan-900  px-8 py-2 border border-cyan-700 rounded-md transition-all duration-500 hover:bg-transparent hover:text-cyan-700"
              : "flex items-center text-white capitalize md:text-lg xl:text-xl space-x-4"
          }
        >
          <BsCreditCard className="sidebar-icon" />
          <span>Revenue</span>
        </NavLink>
        {/* <NavLink
            to="/admin/create-admin"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "flex items-center text-white capitalize md:text-lg xl:text-xl space-x-4 bg-cyan-900  px-8 py-2 border border-cyan-700 rounded-md transition-all duration-500 hover:bg-transparent hover:text-cyan-700"
                : "flex items-center text-white capitalize md:text-lg xl:text-xl space-x-4"
            }
          >
            <RiAdminLine className="sidebar-icon" />
            <span>Admins</span>
          </NavLink> */}
        <NavLink
          to="/admin/telegram-price"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "flex items-center text-white capitalize md:text-lg xl:text-xl space-x-4 bg-cyan-900  px-8 py-2 border border-cyan-700 rounded-md transition-all duration-500 hover:bg-transparent hover:text-cyan-700"
              : "flex items-center text-white capitalize md:text-lg xl:text-xl space-x-4"
          }
        >
          <FaTelegramPlane className="sidebar-icon" />
          <span>Telegram</span>
        </NavLink>
        <button
          onClick={handleLogout}
          className={
            "flex items-center text-white capitalize md:text-lg xl:text-xl space-x-4"
          }
        >
          <BsBoxArrowRight />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default DownLinks;
