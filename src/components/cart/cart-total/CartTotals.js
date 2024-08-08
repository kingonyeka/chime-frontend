import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartFetch } from "../../utils/http";
import { formatPrice } from "../../utils/utils";
// import { useCurrency } from "../../../contexts/CurrencyContext";

const CartTotals = () => {
  const user = useSelector((state) => state.usersState.user);
  const [country, setCountry] = useState("");

  useEffect(() => {
    const savedCountry = localStorage.getItem("country");
    setCountry(savedCountry || "Nigeria");
  }, []);

  const { data, isLoading: cartLoading } = useQuery({
    queryKey: ["cart"],
    queryFn: () => cartFetch.get(`fetch?email=${user?.name}`),
    enabled: !!user?.name,
  });

  const isLoading = cartLoading;
  const totalAmount = data?.data?.data?.total_amount;

  const getPriceLabel = (amount) => {
    return country === "Nigeria"
      ? `NGN${formatPrice(amount)}`
      : `USD${formatPrice(amount)}`;
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center shadow-lg text-white font-poet rounded-lg p-6 border border-gray-900 max-w-md bg-gray-900 mx-auto my-5">
      <h2 className="text-2xl font-bold mb-4">Cart Totals</h2>
      <div className="flex flex-col gap-2 w-full mb-4">
        <div className="flex justify-between">
          <span className="font-semibold">Subtotal:</span>
          <span className="font-medium">{getPriceLabel(totalAmount)}</span>
        </div>
        <div className="border-b border-gray-300 my-2"></div>
        <div className="flex justify-between">
          <span className="font-semibold">Order Total:</span>
          <span className="font-medium">{getPriceLabel(totalAmount)}</span>
        </div>
      </div>
      {user ? (
        <Link
          to="/checkout"
          className="w-full bg-white text-cyan-900 px-4 py-2 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors"
        >
          Proceed to Checkout
        </Link>
      ) : (
        <Link
          to="/login"
          className="w-full bg-white text-cyan-900 px-4 py-2 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors"
        >
          Login
        </Link>
      )}
    </div>
  );
};

export default CartTotals;
