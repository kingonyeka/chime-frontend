// Dashboard.js
import React, { useEffect, useState } from "react";
import { BsCardChecklist, BsPeople, BsBoxArrowUpRight } from "react-icons/bs";
import { store } from "../../store";
import { redirect, useLoaderData, Link, useNavigate } from "react-router-dom";
import { userFetch } from "../utils/http";
import InactiveM from "./modals/InactiveM";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const data = useLoaderData();
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (data) {
      setLoading(false);
    }

    // console.log(data)

    if (data?.status === "banned") {
      alert("unauthorized user");
      navigate("/");
    } else {
      console.log("");
    }

    if (data?.status === "inactive") {
      setShowModal(true);
    } else {
      console.log("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-black min-h-screen text-white py-40 px-4 md:px-12 lg:px-20">
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <>
          <div className="flex flex-col justify-between items-center mb-8 md:flex-row">
            <div className="py-2">
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="text-sm">
                Welcome back! You can view your recent orders and edit your
                password and account details.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm ">{user?.name}</span>
              <BsBoxArrowUpRight className="text-lg" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-cyan-800 p-6 rounded-md flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-2">Robots Purchased</h2>
                <p className="text-lg">{data?.robots_purchased}</p>
              </div>
              <BsCardChecklist className="text-4xl" />
            </div>
            <div className="bg-cyan-800 p-6 rounded-md flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-2">
                  Courses Purchased
                </h2>
                <p className="text-lg">{data?.courses_purchased}</p>
              </div>
              <BsPeople className="text-4xl" />
            </div>
          </div>
          <div className="mt-8">
            <p className="text-sm">
              Here you can view your recent orders, change your password, and
              manage your account details.
            </p>
            <div className="mt-4 flex items-center space-x-4">
              {/* <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                View Orders
              </button> */}
              <Link
                to="/chime-platform/forgot-password"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
              >
                Change Password
              </Link>
              <Link
                to={`account-details?id=${user?.name}`}
                className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded"
              >
                Account Details
              </Link>
            </div>
          </div>
        </>
      )}
      {showModal && <InactiveM onClose={closeModal} />}
    </div>
  );
};

export default Dashboard;

export const userDetailsLoader = async () => {
  const state = store.getState();
  const user = state.usersState.user;

  if (!user) {
    return redirect("/");
  }

  try {
    const res = await userFetch.get("details", {
      params: { email: user.name },
    });

    const data = res?.data;

    return data;
  } catch (error) {
    console.log(error);
    return redirect("/");
  }
};
