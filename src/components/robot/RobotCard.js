import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import imageUrl from '../../assets/top-scaling-robots.jpg'


const RobotCard = ({ robot }) => (
 
  <motion.div
    initial={{ x: "-100%", opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="flex flex-col items-center justify-center text-center bg-white rounded-lg transition-all duration-300 hover:shadow-lg py-4"
  >
    <img src={robot.image} alt="robot" className="w-full max-w-[300px] rounded-lg mb-4" />
    <h2 className="text-2xl lg:text-3xl font-bold text-cyan-900 mb-4">{robot.title}</h2>
    <p className="text-base lg:text-lg text-cyan-700 mb-6 max-w-md mx-auto">{robot.escription}</p>
    <Link
      to="/forex-robots"
      className="uppercase text-sm md:text-lg bg-cyan-900 text-white px-6 py-3 border border-cyan-700 rounded-md transition-all duration-500 hover:bg-transparent hover:text-cyan-700"
    >
      See Robots
    </Link>
  </motion.div>
);

export default RobotCard;
