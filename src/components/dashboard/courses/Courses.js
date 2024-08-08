import React, { useState } from "react";
import { store } from "../../../store";
import { insertUserDet } from "../../../features/users/UsersSlice";
import { redirect, useLoaderData, Link } from "react-router-dom";
import { userFetch } from "../../utils/http";
import { AiFillFileText } from "react-icons/ai";
import { FaBook, FaSmileBeam } from "react-icons/fa";

const Courses = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 12;
  const data = useLoaderData();
  const courses = data?.courses || [];
  // console.log(courses);

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);

  const totalPages = Math.ceil(courses.length / coursesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="bg-cyan-100 min-h-screen text-gray-800 py-20 px-4 md:px-12 lg:px-40 lg:py-40">
      <div className="bg-cyan-700 p-6 rounded-lg shadow-lg flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold uppercase text-white flex items-center">
          Your Courses
          <FaBook className="ml-3 text-white" />
        </h1>
      </div>
      {courses.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {currentCourses.map((course) => (
              <Link
                to={`/dashboard/course/${course.slug}`}
                key={course.course_id}
                className="block bg-purple-500 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 text-white"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
                {/* <p className="text-gray-200">{course.description}</p> */}
                <div className="mt-4">
                  <span className="text-yellow-400 hover:underline">
                    View Course <AiFillFileText className="inline-block ml-1" />
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
            You don't have any courses yet!
          </h2>
          <p className="text-lg mb-8">
            But don't worry, we've got you covered. Check out our exciting
            courses and start learning today!
          </p>
          <Link
            to="/forex-trading"
            className="bg-cyan-700 text-white py-2 px-6 rounded-full hover:bg-cyan-600 transition-colors duration-300"
          >
            Purchase a Course
          </Link>
        </div>
      )}
    </section>
  );
};

export default Courses;

export const coursesLoader = async () => {
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
