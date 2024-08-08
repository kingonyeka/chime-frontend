import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTelegramPlane } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";

const Btn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleClick = () => {
    localStorage.setItem("telegram", "true");
    if (user && user.name) {
      navigate(`/checkout?telegram-payment=${user.name}`);
    } else {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    navigate("/login");
  };

  return (
    <>
      <motion.button
        className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-md shadow-lg flex items-center space-x-2 focus:outline-none"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleClick}
      >
        <FaTelegramPlane className="text-2xl" />
        <span>Join Telegram Channel</span>
      </motion.button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="flex items-center justify-center h-screen"
        overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75"
        contentLabel="Register Modal"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          className="bg-white p-6 rounded-lg shadow-lg text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Required</h2>
          <p className="mb-6">please login  before joining the Telegram group.</p>
          <button
            onClick={closeModal}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md shadow-md"
          >
         Login Now
          </button>
        </motion.div>
      </Modal>
    </>
  );
};

export default Btn;
