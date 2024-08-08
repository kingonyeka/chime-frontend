import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaRobot } from "react-icons/fa";
import CryptoRobList from "./CryptoRobList";

const TopCrypRob = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  const headerVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <section className="py-20 bg-gray-100">
      <motion.h1
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={headerVariants}
        transition={{ duration: 0.5 }}
        className="text-lg capitalize font-bold text-cyan-900 px-9 text-center md:text-3xl md:text-justify flex items-center justify-center"
      >
        <FaRobot className="mr-2 text-xl" /> Crypto Robots
      </motion.h1>
      <CryptoRobList />
    </section>
  );
};

export default TopCrypRob;
