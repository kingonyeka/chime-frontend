import React, { useEffect, useState, useCallback } from "react";
import { chimeBaseURL } from "../../utils/http";
import { motion } from "framer-motion";
import { FaBug } from "react-icons/fa";
import Card from "../forex-trading/Card";

const CryptoTradingProduct = () => {
  const [courses, setCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const coursesPerPage = 8;

  const fetchData = useCallback(async () => {
    try {
      const { data } = await chimeBaseURL("courses");

      const formattedData = {
        code: 200,
        message: "fetched successfully",
        items: data.data.length,
        totalRecords: data.totalRecords || data.data.length,
        filteredRecords: data.filteredRecords || data.data.length,
        data: data.data,
      };

      setCourses(formattedData.data);
    } catch (error) {
      console.error("Error fetching the courses data", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);

  const filteredCourses = currentCourses.filter((course) =>
    course.type_id.includes("crypto-trading")
  );

  const paginate = useCallback((pageNumber) => setCurrentPage(pageNumber), []);

  return (
    <motion.section
      className="py-20 bg-gray-300 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {filteredCourses.length === 0 ? (
        <div className="text-center py-10">
          <FaBug className="text-4xl text-gray-800 mx-auto mb-4" />
          <p className="text-2xl text-gray-800">
            Your course is on its way
            <span className="loading-dots">
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </span>
          </p>
        </div>
      ) : (
        <>
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredCourses?.map((course) => (
              <div key={course.id}>
                <Card course={course} />
              </div>
            ))}
          </div>
          <Pagination
            coursesPerPage={coursesPerPage}
            totalCourses={courses.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </>
      )}
    </motion.section>
  );
};

const Pagination = ({
  coursesPerPage,
  totalCourses,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCourses / coursesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination">
      <ul className="flex justify-center">
        {pageNumbers.map((number, index) => (
          <li key={index}>
            <button
              className={`mx-2 px-4 py-2 rounded-md ${
                currentPage === index + 1
                  ? "bg-cyan-600 text-white"
                  : "bg-gray-400 text-gray-800"
              } hover:bg-cyan-700 hover:text-white`}
              onClick={() => paginate(index + 1)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CryptoTradingProduct;
