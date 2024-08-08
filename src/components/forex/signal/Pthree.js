import React from "react";
import { motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";

const Pthree = () => {
  return (
    <motion.div
      className="bg-cyan-900 text-white p-8 md:p-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-8">
        <p className="text-lg md:text-xl italic">
          As you may have noticed, the risk/reward ratio for the EUR/CHF
          transaction described earlier is{" "}
          <span className="text-yellow-500">1:2</span>. Sure, we mentioned
          before that we frequently use a{" "}
          <span className="text-yellow-500">1:3</span> method, but this is not a
          rule. After all, the world of forex trading is a highly complex and
          diverse battleground. If your forex broker account balance is{" "}
          <span className="text-yellow-500">$2,000</span> and the recommended
          risk level is <span className="text-yellow-500">1%</span>, you would
          stake <span className="text-yellow-500">$20</span> on this
          transaction. As a result, this should not be confused with the price
          of our recommended stop-loss order.
        </p>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Trading Strategy Flexibility
        </h2>
        <p className="text-lg md:text-xl">
          <span className="text-yellow-500">
            <FiAlertCircle className="inline-block mr-2" />
            As a result, we may occasionally offer a trading strategy that
            deviates slightly from the usual.
          </span>{" "}
          The goal remains the same: we want to profit from our trade in the
          least hazardous method feasible.
        </p>
      </div>
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Telegram Forex Signals
        </h2>
        <p className="text-lg md:text-xl">
          You may also have noticed that our Telegram Forex signal has a
          "recommended risk" level of{" "}
          <span className="text-yellow-500">1%</span>. All of our Telegram Forex
          signals incorporate this information. This refers to the amount of
          trading capital we believe you should risk on this particular
          recommendation.
        </p>
      </div>
    </motion.div>
  );
};

export default Pthree;
