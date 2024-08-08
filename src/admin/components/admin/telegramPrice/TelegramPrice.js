import React, { useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";

const TelegramPrice = () => {
  const [usdPrice, setUsdPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://www.chimetrading.com/api/chime/telegram",
        {
          price: "2000",
          usd: usdPrice,
        }
      );

      if (data.code === 200) {
        toast("telegram prices updated successfully");
      } else {
        toast.error("telegram prices could not set");
      }

      setUsdPrice("");
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while setting the prices.");
    }
  };

  return (
    <div className="relative flex justify-center items-center h-screen bg-white">
      {/* Blurred Telegram Icon Background */}
      <div className="absolute inset-0 flex justify-center items-center">
        <FaTelegramPlane className="text-blue-100 text-[25rem] opacity-20" />
      </div>

      <form
        onSubmit={handleSubmit}
        className="relative bg-white p-6 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-4 text-center flex items-center justify-center">
          <FaTelegramPlane className="text-blue-500 mr-2" />
          Set Telegram Price
        </h2>

        <div className="mb-4">
          <label
            htmlFor="usdPrice"
            className="block text-gray-700 font-bold mb-2"
          >
            Price (USD):
          </label>
          <input
            type="number"
            id="usdPrice"
            value={usdPrice}
            onChange={(e) => setUsdPrice(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Set Prices
        </button>
      </form>
    </div>
  );
};

export default TelegramPrice;
