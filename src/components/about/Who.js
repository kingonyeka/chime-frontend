import React from "react";
import { motion } from "framer-motion";

const Who = () => {
  return (
    <motion.section
      className="flex flex-col justify-center items-center py-12 px-4 lg:px-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-6 text-center text-blue-900"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Who We Are
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl text-center text-gray-700 max-w-4xl py-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        My name is Okeke Chukwuike Christian, the CEO and Head Mentor & Trader
        at Chime Trading Academy. These days, the most efficient and convenient
        way to learn is online, and I have spent countless hours becoming a
        specialist in recording quality online trading courses, that give
        traders everything they need to start trading professionally. My team
        and I give our all to produce the highest quality education, review
        platforms and brokers to help everyone stay on the profitable side of
        trading. If you have any questions or require additional information,
        please contact my email, and one of our experienced mentors and
        moderators will gladly assist.
      </motion.p>
    </motion.section>
  );
};

export default Who;
