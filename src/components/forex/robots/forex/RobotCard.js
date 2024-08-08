import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { formatPrice } from "../../../utils/utils";

const RobotCard = ({ robot }) => {
  const [country, setCountry] = useState("");

  useEffect(() => {
    const savedCountry = localStorage.getItem("country");
    setCountry(savedCountry || "Nigeria");
  }, []);

  const getPriceLabel = () => {
    return country === "Nigeria"
      ? `NGN${formatPrice(robot.price)}`
      : `USD${formatPrice(robot.usd)}`;
  };

  
  return (
    <Link
      to={`${robot.slug}`}
      className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-blue-500 text-white rounded-lg p-4 h-full flex flex-col"
      >
        <img
          src={robot.image}
          alt={robot.title}
          className="w-full h-32 object-cover mb-4 rounded"
        />
        <div className="flex flex-col flex-grow">
          <h2 className="text-lg font-semibold mb-2">{robot.title}</h2>
          <p className="text-sm mb-2">Okeke C. Christian</p>
       
          <p className="text-lg font-bold mb-2">{getPriceLabel()}</p>
        </div>
        <button className="bg-white text-blue-500 px-4 py-2 rounded mt-2 hover:shadow-md">
          View Robot
        </button>
      </motion.div>
    </Link>
  );
};

export default RobotCard;
