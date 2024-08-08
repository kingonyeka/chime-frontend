import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";
import { placeholderCoursesTrading } from "../utils/placeholderUtils";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 4;
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = placeholderCoursesTrading.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <motion.section
      className="py-20 bg-gray-300 px-4" 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentCourses.map((course) => (
          <div key={course.id}>
            <ProductCard course={course} />
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-6">
        {Array.from(
          {
            length: Math.ceil(
              placeholderCoursesTrading.length / coursesPerPage
            ),
          },
          (_, index) => (
            <button
              key={index}
              className={`mx-2 px-4 py-2 rounded-md ${
                currentPage === index + 1
                  ? "bg-cyan-600 text-white"
                  : "bg-gray-400 text-gray-800"
              } hover:bg-cyan-700 hover:text-white`}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </motion.section>
  );
};

export default Products;
