import React from "react";
import { motion } from "framer-motion";

const Pone = () => {
  return (
    <motion.div
      className="grid gap-8 md:grid-cols-2 justify-center items-start p-8 lg:p-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-left">
        <h1 className="text-lg text-cyan-900 md:text-4xl font-bold mb-4">
          Each Forex trading signal comes with a buy/sell entry price.
        </h1>
        <p className="text-gray-600">
          With few exceptions, our forex Telegram alerts nearly usually contain
          a proposed buy or sell limit price. This rule only deviates if a
          trading opportunity must be taken advantage of immediately. We will
          advise you to place a market order, in other words.
        </p>
        <p className="text-gray-600">
          Nonetheless, the limit order price will be the most beneficial price
          to enter the market, and you will be notified via Telegram.
        </p>
        <p className="text-gray-600">
          For example, suppose we advised you to sell short the EUR/JPY currency
          pair, which is currently trading at 153.04.
        </p>
        <p className="text-gray-600">
          We feel that this pair should be shorted with a sell order, but we do
          not think that 153.04 is a good entry point into the market.
        </p>
        <p className="text-gray-600">
          Instead, we should expect a price gain in the next hours before
          hitting a key resistance level.
        </p>
        <p className="text-gray-600">
          Given the aforementioned, you might wish to set your sell limit order
          at 153.58.
        </p>
        <p className="text-gray-600">
          As previously indicated, we virtually never prefer market orders over
          limit orders.
        </p>
      </div>
      <div className="text-left">
        <h1 className="text-lg text-cyan-900 md:text-4xl font-bold mb-4">
          Every Telegram Forex signal that we send you will have a take-profit
          price.
        </h1>
        <p className="text-gray-600">
          Make no mistake. Each Telegram Forex signal that we send you will
          include a take-profit order price. Put simply, this is the price that
          we believe the particular forex pair will achieve In the short term.
        </p>
        <p className="text-gray-600">
          If this happens, your take-profit order will immediately close your
          position and lock in your earnings.
        </p>
        <p className="text-gray-600">
          We typically use a thorough approach when providing Telegram Forex
          signals. That is, we often use a risk-to-reward ratio of 1:3.
        </p>
        <p className="text-gray-600">
          This means that in percentage terms, our take-profit order aim will be
          three times more than our potential risk.
        </p>
        <p className="text-gray-600">
          For example, our take-profit target would be 3% profits if we were
          willing to endure a maximum loss of 1%.
        </p>
      </div>
    </motion.div>
  );
};

export default Pone;
