import React, { useState, useEffect } from "react";
import { adminCustomFetch } from "../../../../components/utils/http";
import { Link } from "react-router-dom";
import Table from "./Table";

const RobotPage = () => {
  const [revenuesNou, setRevenuesNoU] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const revenueUsd = await adminCustomFetch.get("revenues/usd");
      
        setRevenuesNoU(revenueUsd.data.totalAmountMade || 0);
      } catch (error) {
        console.error("Failed to fetch counts", error);
      }
    };

    fetchCounts();
  }, []);

  return (
    <div className="min-h-screen bg-cyan-100 flex flex-col items-center p-4">
      <div className="w-full max-w-7xl">
        <header className="flex justify-between items-center bg-cyan-500 text-white p-4 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold">Revenue</h1>
          <Link
            to="/admin/create-robot"
            className="bg-cyan-700 text-white p-2 rounded-md flex items-center hover:bg-cyan-800"
          >
            Create Robot
          </Link>
        </header>
        <main className="mt-4">
          <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <h2 className="text-xl font-semibold mb-4">
              Total Number of Purchases (courses + robots)
            </h2>
            <div className="flex flex-col md:flex-row justify-between">
              <p className="text-2xl">USD{revenuesNou.toLocaleString()}</p>
            </div>
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
