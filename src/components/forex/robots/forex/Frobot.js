import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBug } from "react-icons/fa";
import RobotCard from "./RobotCard";
import { chimeBaseURL } from "../../../utils/http";

const Frobot = () => {
  const [robots, setRobots] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const robotsPerPage = 8;



  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await chimeBaseURL("robots");

        const formattedData = {
          code: 200,
          message: "fetched successfully",
          items: data.data.length,
          totalRecords: data.totalRecords || data.data.length,
          filteredRecords: data.filteredRecords || data.data.length,
          data: data.data,
        };
        // console.log(formattedData)

        setRobots(formattedData.data);
      } catch (error) {
        console.error("Error fetching the robots data", error);
      }
    };

    fetchData();
  }, []);

  const indexOfLastRobot = currentPage * robotsPerPage;
  const indexOfFirstRobot = indexOfLastRobot - robotsPerPage;
  const currentRobots = robots.slice(indexOfFirstRobot, indexOfLastRobot);

  const filteredRobots = currentRobots.filter((robot) =>
    robot.type_id.includes("forex-rob")
  );



  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <motion.section
      className="py-20 bg-gray-300 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {filteredRobots.length === 0 ? (
        <div className="text-center py-10">
          <FaBug className="text-4xl text-gray-800 mx-auto mb-4" />
          <p className="text-2xl text-gray-800">
            Your Robot is on its way
            <span className="loading-dots">
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </span>
          </p>
        </div>
      ) : (
        <>
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredRobots.map((robot) => (
              <div key={robot.id}>
                <RobotCard robot={robot} />
              </div>
            ))}
          </div>
          <Pagination
            itemsPerPage={robotsPerPage}
            totalItems={robots.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </>
      )}
    </motion.section>
  );
};

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination py-4 mt-8">
      <ul className="flex justify-center space-x-2">
        {pageNumbers.map((number, index) => (
          <li key={index}>
            <button
              className={`mx-2 px-4 py-2 rounded-md ${
                currentPage === number
                  ? "bg-cyan-600 text-white"
                  : "bg-gray-400 text-gray-800"
              } hover:bg-cyan-700 hover:text-white`}
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Frobot;
