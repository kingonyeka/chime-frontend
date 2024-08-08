import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/utils";

const Card = ({ course }) => {
  const [country, setCountry] = useState("");

  useEffect(() => {
    const savedCountry = localStorage.getItem("country");
    setCountry(savedCountry || "Nigeria");
  }, []);

  const getPriceLabel = () => {
    return country === "Nigeria"
      ? `NGN${formatPrice(course.price)}`
      : `USD${formatPrice(course.usd)}`;
  };

  return (
    <Link to={`${course.slug}`}>
      <motion.div
        className="rounded-lg shadow-md overflow-hidden bg-gradient-to-br from-cyan-400 to-cyan-600"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-40 object-cover rounded-t-lg"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white">{course.title}</h3>
          <p className="text-sm text-gray-200">By Okeke C. Christian</p>
          <p className="text-lg font-semibold text-white mt-2">
            {getPriceLabel()}
          </p>
          <button className="bg-white text-cyan-600 hover:bg-cyan-400 hover:text-white py-2 px-4 rounded-md mt-4">
            View Course
          </button>
        </div>
      </motion.div>
    </Link>
  );
};

export default Card;
