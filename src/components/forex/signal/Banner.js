import React from "react";
import ReactPlayer from "react-player";
import video from "../../../assets/forex/trading-sgnals.mp4";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center p-8 bg-gray-100 py-[120px] md:py-[180px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center max-w-4xl mb-8">
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          You may question where we get our respected Telegram Forex signals.
        </motion.span>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-4"
        >
          Identifying a potential trading opportunity is only half the battle,
          as should be obvious. In other words, Learning too Trade will seek to find
          the most effective and risk-averse entry and departure points. As you
          may be aware, this requires a variety of orders, including buy/sell,
          stop-loss, and take-profit orders.
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="w-full max-w-5xl"
      >
        <ReactPlayer url={video} width="100%" height="auto" controls />
      </motion.div>
    </motion.div>
  );
};

export default Banner;
