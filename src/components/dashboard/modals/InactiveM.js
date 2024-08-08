// Modal.js
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const InactiveM = ({ onClose }) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    onClose();
    setTimeout(() => {
      navigate("/login");
    }, 3000);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="bg-white rounded-lg shadow-lg p-8 z-50 max-w-md mx-auto text-black"
      >
        <h2 className="text-xl font-bold mb-4">Complete Your Registration</h2>
        <p className="mb-4">
          Please check your email and follow the link to complete your
          registration.
        </p>
        <button
          onClick={handleRedirect}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Ok
        </button>
      </motion.div>
    </div>
  );
};

export default InactiveM;
