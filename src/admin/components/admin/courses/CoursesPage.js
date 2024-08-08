import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { adminCustomFetch } from "../../../../components/utils/http";
import Table from "./Table";

const CoursesPage = () => {
  const [coursesNo, setCoursesNo] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const robotsResponse = await adminCustomFetch.get("courses");
        // console.log(robotsResponse);

        setCoursesNo(robotsResponse.data?.totalRecords || 0);
      } catch (error) {
        console.error("Failed to fetch counts", error);
      }
    };

    fetchCounts();
  }, []);

  return (
    <div className="min-h-screen bg-cyan-900 flex flex-col items-center p-4">
      <div className="w-full max-w-4xl">
        <header className="flex justify-between items-center bg-cyan-700 text-white p-4 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold">Courses Dashboard</h1>
          <Link
            to="/admin/create-course"
            className="bg-cyan-800 text-white p-2 rounded-md flex items-center hover:bg-cyan-900"
          >
            <FaPlus className="mr-2" /> Create Course
          </Link>
        </header>
        <main className="mt-4">
          <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <h2 className="text-xl font-semibold">Number of Courses</h2>
            <p className="text-2xl">{coursesNo}</p>
          </div>
          <div className="grid grid-cols-1">
            <Table />
          </div>
        </main>
      </div>
    </div>
  );
};

export default CoursesPage;
