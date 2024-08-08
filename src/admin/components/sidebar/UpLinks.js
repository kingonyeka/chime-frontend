import React from 'react'
import { BsHouseDoorFill } from 'react-icons/bs'
import { FaDiscourse } from 'react-icons/fa6'
import { IoIosPerson } from 'react-icons/io'
import { MdTroubleshoot } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

const UpLinks = () => {
  return (
    <div>
          <div className="flex flex-col space-y-2">
          <NavLink
            to="/admin"
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
            to="/admin/robots"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "flex items-center text-white capitalize md:text-lg xl:text-xl space-x-4 bg-cyan-900  px-8 py-2 border border-cyan-700 rounded-md transition-all duration-500 hover:bg-transparent hover:text-cyan-700"
                : "flex items-center text-white capitalize md:text-lg xl:text-xl space-x-4"
            }
          >
            <MdTroubleshoot className="sidebar-icon" />
            <span>Robots</span>
          </NavLink>

          <NavLink
            to="/admin/courses"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "flex items-center text-white capitalize md:text-lg xl:text-xl space-x-4 bg-cyan-900  px-8 py-2 border border-cyan-700 rounded-md transition-all duration-500 hover:bg-transparent hover:text-cyan-700"
                : "flex items-center text-white capitalize md:text-lg xl:text-xl space-x-4"
            }
          >
            <FaDiscourse className="sidebar-icon" />
            <span>Courses</span>
          </NavLink>
          <NavLink
            to="/admin/profile"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "flex items-center text-white capitalize md:text-lg xl:text-xl space-x-4 bg-cyan-900  px-8 py-2 border border-cyan-700 rounded-md transition-all duration-500 hover:bg-transparent hover:text-cyan-700"
                : "flex items-center text-white capitalize md:text-lg xl:text-xl space-x-4"
            }
          >
            <IoIosPerson className="sidebar-icon" />
            <span>Profile</span>
          </NavLink>
        </div>
    </div>
  )
}

export default UpLinks