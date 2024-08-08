import React from "react";
import { motion } from "framer-motion";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { FaRobot } from "react-icons/fa";
import Video from "../Video";

const Banner = ({ t1, t2, t3, t4, t5, t6, t7, t8, t9 }) => {
  return (
    <section className="mx-auto pt-[150px] px-4 bg-gradient-to-br from-cyan-900 to-cyan-200 text-black">
      <div className="max-w-3xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="block text-lg mb-4"
        >
          <HiOutlineInformationCircle className="inline-block mr-2 text-yellow-400" />
          {t1}
        </motion.span>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8"
        >
          <span className="font-semibold text-lg text-yellow-400">{t2}</span>{" "}
          {t3}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-4xl font-bold mb-6"
        >
          {t4} <span className="text-yellow-400">{t5}</span>!
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-xl mb-12"
        >
          {t6} <span className="text-yellow-400"> {t7}</span>,{t8}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="rounded-lg overflow-hidden shadow-lg bg-gray-800 relative"
        >
          <FaRobot className="text-6xl text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </motion.div>
      </div>
      <Video />
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="text-lg mt-8 text-center font-bold text-black px-10 py-4 italic"
      >
        {t9}
      </motion.p>
    </section>
  );
};

export default Banner;
