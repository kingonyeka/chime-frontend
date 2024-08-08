import React from "react";
import { motion } from "framer-motion";
import { AiOutlineShoppingCart } from "react-icons/ai";

const EmptyCart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="border-b border-base-300 pb-5 py-40 text-center text-gray-700"
    >
      <AiOutlineShoppingCart className="mx-auto text-6xl mb-6 text-gray-500" />
      <h2 className="text-3xl font-medium tracking-wider capitalize">
        Your cart is empty
      </h2>
    </motion.div>
  );
};

export default EmptyCart;
