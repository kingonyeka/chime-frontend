import React from "react";
import { motion } from "framer-motion";

const Ptwo = () => {
  return (
    <motion.section
      className="bg-white py-12 px-6 md:px-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-left">
        <h1 className="text-3xl font-bold mb-4">Stop-Profit Price.</h1>
        <p className="text-gray-600">
          All of our Telegram forex signals will include stop-loss orders, as
          well as take-profit orders. This is simply the price at which we will
          close our position if the trade moves in the right direction, as We
          briefly discussed it above. If we stick with the traditional
          risk/reward ratio of 1:3, we will set our stop-loss price at 1%.
        </p>
        <p className="text-gray-600">For example:</p>
        <p className="text-gray-600">
          Assume we're trading the EUR/USD currency pair, which is currently
          trading at 1.3678. We placed an appropriate buy limit order because we
          foresee the pair increasing over the following few hours. To execute
          our 1% stop-loss order, we'd need to set the price at 1.2949. In other
          words, if the GBP/USD plummeted to this level, we would close the deal
          and restrict our losses to 1%. Importantly, this ensures that you may
          trade in a highly risk-averse manner with our Forex Telegram
          recommendations.
        </p>
      </div>
      <div className="text-left mt-8">
        <h1 className="text-3xl font-bold mb-4">Distribution via Telegram</h1>
        <p className="text-gray-600">
          The information will be distributed to Our Telegram forex signals
          members will be notified once all of the aforementioned have been
          quantified by our in-house traders. This will alert you as a member
          that you have a new message on Telegram and send a notification to
          your mobile device.
        </p>
        <p className="text-gray-600">EURCHF (intra-day)</p>
        <div className="flex flex-wrap">
          <span className="text-gray-600 mr-4">
            <strong>Order:</strong> sell
          </span>
          <span className="text-gray-600 mr-4">
            <strong>The entry price is:</strong> 1.5610
          </span>
          <span className="text-gray-600 mr-4">
            <strong>Stop:</strong> 1.5700
          </span>
          <span className="text-gray-600 mr-4">
            <strong>Goal:</strong> 1.5489
          </span>
          <span className="text-gray-600 mr-4">
            <strong>The recommended risk is:</strong> one percent
          </span>
          <span className="text-gray-600 mr-4">
            <strong>RRR:</strong> 1:2
          </span>
         
        </div>
      </div>
    </motion.section>
  );
};

export default Ptwo;
