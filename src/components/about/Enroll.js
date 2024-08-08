import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Enroll = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-20 px-4 md:px-8 text-center md:text-left"
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="capitalize text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-center">
          ready to take your trading skills to the next level?
        </h1>
        <motion.p
          className="text-lg text-gray-700 capitalize"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Enroll in our knowledge-packed courses today and unlock the secrets to
          building profitable algorithmic trading strategies. Your journey to
          becoming a successful trader is just one step away. Gain valuable
          insights and master the basics of creating winning trading algorithms
          with us. Join now and take control of your trading future!
        </motion.p>
        <div className="flex justify-center py-8">
          <Link
            className="capitalize text-sm text-700 bg-cyan-900 text-white px-8 py-2 border border-cyan-700 rounded-md transition-all duration-500 hover:bg-transparent hover:text-cyan-700 md:text-lg"
            to="/courses"
          >
            Enroll
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default Enroll;
