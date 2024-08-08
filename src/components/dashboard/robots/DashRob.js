import React, { useState } from "react";
import { store } from "../../../store";
import { insertUserDet } from "../../../features/users/UsersSlice";
import { redirect, useLoaderData, Link } from "react-router-dom";
import { userFetch } from "../../utils/http";
import { AiFillRobot } from "react-icons/ai";
import { FaRobot, FaSmileBeam } from "react-icons/fa";

const DashRob = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const robotsPerPage = 12;
  const data = useLoaderData();
  const robots = data?.robots || [];

  // console.log(robots);

  const indexOfLastRobot = currentPage * robotsPerPage;
  const indexOfFirstRobot = indexOfLastRobot - robotsPerPage;
  const currentRobots = robots.slice(indexOfFirstRobot, indexOfLastRobot);

  const totalPages = Math.ceil(robots.length / robotsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="bg-robot-pattern bg-cover bg-center min-h-screen text-gray-800 py-20 px-4 md:px-12 lg:px-40 lg:py-40 backdrop-blur-md">
      <div className="bg-blue-700 p-6 rounded-lg shadow-lg flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold uppercase text-white flex items-center">
          Your Robots
          <FaRobot className="ml-3 text-white" />
        </h1>
      </div>
      {robots.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {currentRobots.map((robot) => (
              // /dashboard/:id/robot/:id
              <Link
                to={`/dashboard/robot/${robot.slug}`}
                key={robot.robot_id}
                className="block bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 text-white"
              >
                <img
                  src={robot.image}
                  alt={robot.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h2 className="text-xl font-semibold mb-2 text-white">{robot.title}</h2>
                <div className="mt-4">
                  <span className="text-yellow-400 hover:underline">
                    View Robot <AiFillRobot className="inline-block ml-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (number) => (
                <button
                  key={number}
                  onClick={() => handlePageChange(number)}
                  className={`mx-1 px-3 py-1 rounded ${
                    currentPage === number ? "bg-yellow-500" : "bg-blue-500"
                  } hover:bg-blue-400 text-white transition-colors duration-200`}
                >
                  {number}
                </button>
              )
            )}
          </div>
        </>
      ) : (
        <div className="text-center mt-20">
          <FaSmileBeam className="text-6xl text-yellow-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">
            You don't have any robots yet!
          </h2>
          <p className="text-lg mb-8">
            But don't worry, we've got you covered. Check out our exciting robots and start exploring today!
          </p>
          <Link
            to="/forex-robots"
            className="bg-blue-700 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition-colors duration-300"
          >
            Purchase a Robot
          </Link>
        </div>
      )}
    </section>
  );
};

export default DashRob;

export const robotsLoader = async () => {
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

    if (data) {
      const userDet = {
        first_name: data.first_name,
        last_name: data.last_name,
        address: data.address,
        middle_name: data.middle_name || "",
      };

      store.dispatch(insertUserDet(userDet));
    }

    return data;
  } catch (error) {
    console.error("Error fetching user details:", error);
    return redirect("/");
  }
};
