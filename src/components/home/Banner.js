import React from "react";
import BannerLogo from "../../../src/assets/fscm-gm-banner-desktop-full@2x.webp";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row bg-gray-300 px-6 md:px-20 space-y-10 md:space-y-0 md:space-x-12 lg:space-x-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center md:text-left"
      >
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          className="text-4xl max-w-lg lg:max-w-xl xl:max-w-lg pt-10 text-cyan-900"
        >
          Explore Unbeatable Trading Courses, Robots & Signals
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
          className="py-4 text-cyan-800"
        >
          Unlock Your Potential with Cutting-Edge Solutions from Our Resources
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
        >
          <Link
            to="/login"
            className="uppercase text-sm xl:text-lg bg-cyan-900 text-white px-6 md:px-8 py-2 border border-cyan-700 rounded-md transition-all duration-500 my-4 hover:bg-transparent hover:text-cyan-700"
          >
            Start Your Journey
          </Link>
        </motion.div>
      </motion.div>
      <div className="w-full md:w-auto py-10">
        <img
          src={BannerLogo}
          alt="banner"
          className="w-full h-auto xl:w-[600px] xl:h-[600px] rotate-animation -z-50"
        />
      </div>
    </div>
  );
};

export default Banner;
