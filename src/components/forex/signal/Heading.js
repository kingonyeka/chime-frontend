import React from "react";
import { motion } from "framer-motion";
import { RiSignalTowerLine } from "react-icons/ri";

const Heading = () => {
  return (
    <motion.div
      className="flex flex-col justify-center items-center py-10 px-4 lg:px-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center max-w-xl">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">
          You Receive Suggested Forex Trading Orders
        </h1>
        <p className="text-gray-600">
          Any seasoned trader will tell you that while dealing with the forex
          market, you should always have an entry and exit strategy. You're
          effectively gambling without one. As a result, our in-house trading
          team is always focused on profit and risk management. Before doing
          so, Let us begin with the crucial entry price.
        </p>
      </div>
      <motion.div
        className="mt-8 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <RiSignalTowerLine className="text-blue-500 text-4xl lg:text-5xl" />
      </motion.div>
    </motion.div>
  );
};

export default Heading;
