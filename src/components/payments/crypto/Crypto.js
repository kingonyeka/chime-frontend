import axios from "axios";
import React, { useState } from "react";
import { FaBitcoin } from "react-icons/fa";
import { useSelector } from "react-redux";
import { cartFetch } from "../../utils/http";
import { useQuery } from "@tanstack/react-query";

const Crypto = ({ localStorageUser }) => {
  const det = useSelector((state) => state.usersState.userDet);
  const [loading, setLoading] = useState(false);

  const { data: products } = useQuery({
    queryKey: ["cart"],
    queryFn: () => cartFetch.get(`fetch?email=${localStorageUser?.name}`),
    enabled: !!localStorageUser?.name,
  });

  const cartProducts = products?.data?.data?.products || [];
  const robots = cartProducts.filter((product) => product.type === "robot");
  const courses = cartProducts.filter((product) => product.type === "course");
  const amount = products?.data?.data?.total_amount;

  const handleCryptoPayment = async () => {
    const metadata = {
      courses,
      robots,
      email: localStorageUser?.name,
      first_name: det.first_name,
      middle_name: det.middle_name || "",
      last_name: det.last_name,
    };

    const payload = {
      amount: parseFloat(amount),
      currency: "USD",
      email: localStorageUser?.name,
      description: localStorageUser?.name,
      metadata: JSON.stringify(metadata),
    };

    setLoading(true);

    try {
      const response = await axios.post(
        "https://www.chimetrading.com/api/chime/payments/pilisio/initialize",
        payload
      );

      if (response.status === 200) {
        window.location.href = response.data.invoice_url;
      } else {
        alert("Error initializing payment:", response.data);
      }
    } catch (error) {
      console.error("Error initializing payment:", error);
      alert(error.response.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex justify-center items-center"
      onClick={handleCryptoPayment}
    >
      <button
        className="flex items-center space-x-2 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        disabled={loading}
      >
        {loading ? (
          <span>Processing...</span>
        ) : (
          <>
            <FaBitcoin size={24} />
            <span>Pay with Crypto</span>
          </>
        )}
      </button>
    </div>
  );
};

export default Crypto;
