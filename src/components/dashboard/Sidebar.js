import React from "react";
import { NavLink } from "react-router-dom";
import {
  BsHouseDoorFill,
  BsBook,
  BsRobot,
  BsPerson,
  // BsCreditCard,
  // BsCart,
  BsBoxArrowRight,
} from "react-icons/bs";

const Sidebar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return ( 
    <section className="w-full py-4 sm:py-20 md:py-20 lg:py-40 h-full xl:h-screen">
      <div className="flex flex-col justify-center items-center space-y-8">
        <div className="flex flex-col space-y-2">
          <NavLink
            to="/dashboard"
            className={({ isActive, isPending }) =>
              isPending
                ? "bg-transparent"
                : isActive
                ? "flex items-center text-white capitalize md:text-lg xl:text-xl space-x-4  px-8 py-2 border border-cyan-700 rounded-md transition-all duration-500 hover:bg-transparent hover:text-cyan-700"
                : "flex items-center text-white capitalize md:text-lg xl:text-xl space-x-4 bg-transparent"
            }
          >
            <BsHouseDoorFill className="sidebar-icon" />
            <span className="text-white">Dashboard</span>
          </NavLink>
          <NavLink
            to="/dashboard/courses"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "flex items-center text-white capitalize md:text-lg xl:text-xl space-x-4 bg-cyan-900  px-8 py-2 border border-cyan-700 rounded-md transition-all duration-500 hover:bg-transparent hover:text-cyan-700"
                : "flex items-center text-white capitalize md:text-lg xl:text-xl space-x-4"
            }
          >
            <BsBook className="sidebar-icon" />
            <span>Courses</span>
          </NavLink>
          <NavLink
            to="/dashboard/robots"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "flex items-center text-white capitalize md:text-lg xl:text-xl space-x-4 bg-cyan-900  px-8 py-2 border border-cyan-700 rounded-md transition-all duration-500 hover:bg-transparent hover:text-cyan-700"
                : "flex items-center text-white capitalize md:text-lg xl:text-xl space-x-4"
            }
          >
            <BsRobot className="sidebar-icon" />
            <span>Robots</span>
          </NavLink>
          <NavLink
            to={`/dashboard/account-details?id=${user?.name}`}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "flex items-center text-white capitalize md:text-lg xl:text-xl space-x-4 bg-cyan-900  px-8 py-2 border border-cyan-700 rounded-md transition-all duration-500 hover:bg-transparent hover:text-cyan-700"
                : "flex items-center text-white capitalize md:text-lg xl:text-xl space-x-4"
            }
          >
            <BsPerson className="sidebar-icon" />
            <span>Account Details</span>
          </NavLink>
        </div>

        <hr className="border-white border-2 my-8 w-full" />

        <div className="flex flex-col space-y-2">
          {/* <NavLink
            to="/payment-methods"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "flex items-center text-white capitalize md:text-lg xl:text-xl space-x-4 bg-cyan-900  px-8 py-2 border border-cyan-700 rounded-md transition-all duration-500 hover:bg-transparent hover:text-cyan-700"
                : "flex items-center text-white capitalize md:text-lg xl:text-xl space-x-4"
            }
          >
            <BsCreditCard className="sidebar-icon" />
            <span>Payment Methods</span>
          </NavLink> */}
          {/* <NavLink
            to="/dashboard/orders"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "flex items-center text-white capitalize md:text-lg xl:text-xl space-x-4 bg-cyan-900  px-8 py-2 border border-cyan-700 rounded-md transition-all duration-500 hover:bg-transparent hover:text-cyan-700"
                : "flex items-center text-white capitalize md:text-lg xl:text-xl space-x-4"
            }
          >
            <BsCart className="sidebar-icon" />
            <span>Orders</span>
          </NavLink> */}

          <NavLink
            to="/dashboard/orders"
            className={
              "flex items-center text-white capitalize md:text-lg xl:text-xl space-x-4"
            }
          >
            <BsBoxArrowRight />
            <span>Logout</span>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
