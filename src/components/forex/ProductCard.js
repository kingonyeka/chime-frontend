import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProductCard = ({ course }) => {
  return (
    <Link to={`${course.id}`}>
      <motion.div
        className="rounded-lg shadow-md overflow-hidden bg-gradient-to-br from-cyan-400 to-cyan-600"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-40 object-cover rounded-t-lg"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white">{course.title}</h3>
          <p className="text-sm text-gray-200">By {course.author}</p>
          <p className="text-lg font-semibold text-white mt-2">
          ₦{course.price}
          </p>
          <button className="bg-white text-cyan-600 hover:bg-cyan-400 hover:text-white py-2 px-4 rounded-md mt-4">
            View Course
          </button>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProductCard;
