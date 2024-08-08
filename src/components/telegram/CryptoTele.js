import axios from "axios";
import React from "react";
import { FaBitcoin } from "react-icons/fa";

const CryptoTele = ({ localStorageUser, price }) => {
  const handleCryptoPayment = async () => {
    try {
      const payload = {
        amount: parseFloat(price),
        currency: "USD",
        email: localStorageUser?.name,
        description: localStorageUser?.name,
        metadata: JSON.stringify({ telegram: { id: "123456" } }),
      };
      const response = await axios.post(
        "https://www.chimetrading.com/api/chime/payments/pilisio/initialize",
        payload
      );
      if (response.status === 200) {
        // Redirect to the invoice URL
        window.location.href = response.data.invoice_url;
      } else {
        console.error("Error initializing payment:", response.data);
        alert("Failed to initialize payment");
      }
    } catch (error) {
      console.error("Error initializing payment:", error);
      alert("An error occurred while initializing payment");
    }
  };

  return (
    <div
      className="flex justify-center items-center"
      onClick={handleCryptoPayment}
    >
      <button className="flex items-center space-x-2 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
        <FaBitcoin size={24} />
        <span>Pay with Crypto</span>
      </button>
    </div>
  );
};

export default CryptoTele;
