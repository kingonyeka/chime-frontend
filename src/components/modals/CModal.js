// src/components/Modal.js

import React from 'react';

const CModal = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-lg font-bold mb-4">Notification</h2>
        <p className="mb-4">{message}</p>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={onClose}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default CModal;
