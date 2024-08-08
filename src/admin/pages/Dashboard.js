import React, { useEffect, useState } from "react";
import {
  BsCardChecklist,
  BsPeople,
  BsBoxArrowUpRight,
  BsPencilSquare,
} from "react-icons/bs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { adminCustomFetch } from "../../components/utils/http";
import Table from "../components/admin/users/Table";

const Dashboard = () => {
  const admin_user = useSelector((state) => state.adminUsersState?.admin_user);
  const [studentsNo, setStudentsNo] = useState(0);
  const [robotsNo, setRobotsNo] = useState(0);
  const [coursesNo, setCoursesNo] = useState(0);
  const [revenuesNou, setRevenuesNoU] = useState(0);

  // console.log(coursesNo);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const usersResponse = await adminCustomFetch.get("users/");
        const robotsResponse = await adminCustomFetch.get("robots");
        const coursesResponse = await adminCustomFetch.get("courses");
        const revenueUsd = await adminCustomFetch.get("revenues/usd");

        // console.log(revenueResponse);


        setRevenuesNoU(revenueUsd.data.totalAmountMade || 0);
        setCoursesNo(coursesResponse.data?.totalRecords || 0);
        setStudentsNo(usersResponse.data?.totalRecords || 0);
        setRobotsNo(robotsResponse.data?.totalRecords || 0);
      } catch (error) {
        console.error("Failed to fetch counts", error);
      }
    };

    fetchCounts();
  }, []);

  useEffect(() => {
    if (
      !admin_user ||
      !admin_user.name ||
      !admin_user.token ||
      !admin_user.rToken
    ) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [admin_user]);

  if (
    !admin_user ||
    !admin_user.name ||
    !admin_user.token ||
    !admin_user.rToken
  ) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-cyan-900 to-cyan-700 min-h-screen text-white py-8 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-sm">
            Welcome back! Here's an overview of your platform.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm">{admin_user?.name}</span>
          <BsBoxArrowUpRight className="text-lg" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Student Count Card */}
        <div className="bg-indigo-800 p-6 rounded-md flex items-center justify-between shadow-lg">
          <div>
            <h2 className="text-xl font-semibold mb-2">Users</h2>
            <p className="text-lg">{studentsNo}</p>
          </div>
          <BsPeople className="text-4xl" />
        </div>
        {/* Robot Count Card */}
        <div className="bg-indigo-800 p-6 rounded-md flex items-center justify-between shadow-lg">
          <div>
            <h2 className="text-xl font-semibold mb-2">Robots</h2>
            <p className="text-lg">{robotsNo}</p>
          </div>
          <BsCardChecklist className="text-4xl" />
        </div>

        {/* Total courses card*/}
        <div className="bg-indigo-800 p-6 rounded-md flex items-center justify-between shadow-lg">
          <div>
            <h2 className="text-xl font-semibold mb-2">Courses</h2>
            <p className="text-lg">{coursesNo}</p>
          </div>
          <BsPencilSquare className="text-4xl" />
        </div>

        {/* Total Revenue Card */}
        <div className="bg-indigo-800 p-6 rounded-md flex items-center justify-between shadow-lg">
          <div>
            <div>
              <h2 className="text-xl font-semibold mb-2">
                Total Revenue
              </h2>
              <p className="text-lg">USD{revenuesNou.toLocaleString()}</p>
            </div>
          </div>
          <BsPencilSquare className="text-4xl" />
        </div>
      </div>
      {/* Student Orders Table */}
      <div className="mt-8">
        <div className="bg-white rounded-lg shadow-md overflow-x-auto max-w-5xl">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
