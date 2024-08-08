import React from "react";
import { FaThumbsUp } from "react-icons/fa"; 

const SuccessModal = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <FaThumbsUp className="text-green-500 text-4xl mb-4" />
        <p className="text-lg">{message}</p>
        <button
          onClick={onClose}
          className="mt-4 bg-green-500 text-white py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
