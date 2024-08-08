import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { cartFetch } from "../../utils/http";
import { toast } from "react-toastify";
import { formatPrice } from "../../utils/utils";
// import { useCurrency } from "../../../contexts/CurrencyContext";

const CartItem = ({ cartItem }) => {
  const { price, title, slug, image } = cartItem;
  const user = useSelector((state) => state.usersState.user);
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState("");

  useEffect(() => {
    const savedCountry = localStorage.getItem("country");
    setCountry(savedCountry || "Nigeria");
  }, []);

  const getPriceLabel = () => {
    return country === "Nigeria" ? `NGN${formatPrice(price)}` : `USD${formatPrice(price)}`;
  };

  const removeFromCartMutation = useMutation({
    mutationKey: ["cart"],
    mutationFn: async (sendCart) => {
      setLoading(true);
      const { data } = await cartFetch.post("remove", sendCart);

      setLoading(false);
      return data;
    },
    onSuccess: (data) => {
      if (data?.code === 200) {
        toast.success("Item removed successfully");
      }
    },
    onError: (error) => {
      console.error("Error removing from cart", error);
      toast.error("Failed to remove from cart");
      setLoading(false);
    },
  });

  const removeItemFromTheCart = () => {
    if (!user) {
      toast.error("You need to be logged in to remove items from the cart");
      return;
    }
    const sendCart = {
      email: user.name,
      country,
      products: [{ slug }],
    };
    removeFromCartMutation.mutate(sendCart);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col md:flex-row items-center justify-between border-b border-gray-300 py-4 px-6 md:px-8"
    >
      <div className="flex items-center space-x-4 mb-4 md:mb-0">
        {image && (
          <img
            src={image}
            alt={title}
            className="w-16 h-16 md:w-24 md:h-24 rounded-lg object-cover"
          />
        )}

        <div>
          <h3 className="font-medium text-base md:text-lg">{title}</h3>
          <p className="text-sm text-gray-600">By Okeke C. Christian</p>
          <p className="text-sm text-gray-600">Price: {getPriceLabel()}</p>
        </div>
      </div>
      <button
        className={`text-sm text-red-500 hover:text-red-700 focus:outline-none mt-2 md:mt-0 ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={removeItemFromTheCart}
        disabled={loading}
      >
        {loading ? "Removing..." : "Remove"}
      </button>
    </motion.div>
  );
};

export default CartItem;
