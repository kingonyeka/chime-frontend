import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { adminCustomFetch } from "../../../../components/utils/http";
import Table from "./Table";

const RobotPage = () => {
  const [robotsNo, setRobotsNo] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const robotsResponse = await adminCustomFetch.get("robots");
        // console.log(robotsResponse);

        setRobotsNo(robotsResponse.data?.totalRecords || 0);
      } catch (error) {
        console.error("Failed to fetch counts", error);
      }
    };

    fetchCounts();
  }, []);

  return (
    <div className="min-h-screen bg-cyan-100 flex flex-col items-center p-4">
      <div className="w-full max-w-4xl">
        <header className="flex justify-between items-center bg-cyan-500 text-white p-4 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold">Robots</h1>
          <Link
            to="/admin/create-robot"
            className="bg-cyan-700 text-white p-2 rounded-md flex items-center hover:bg-cyan-800"
          >
            <FaPlus className="mr-2" /> Create Robot
          </Link>
        </header>
        <main className="mt-4">
          <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <h2 className="text-xl font-semibold">Number of Robots</h2>
            <p className="text-2xl">{robotsNo}</p>
          </div>
          <div className="grid grid-cols-1 w-full">
            <Table />
          </div>
        </main>
      </div>
    </div>
  );
};

export default RobotPage;
