import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { cartFetch, chimeBaseURL } from "../../../utils/http";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
// import { useCurrency } from "../../../../contexts/CurrencyContext";

const SingleCryptoRobots = () => {
  const { id } = useParams();
  const [robot, setRobot] = useState(null);
  const [loading, setLoading] = useState(true);
  const [addedToCart, setAddedToCart] = useState(false);
  const user = useSelector((state) => state.usersState.user);
  const navigate = useNavigate();
  const [country, setCountry] = useState("");

  useEffect(() => {
    const savedCountry = localStorage.getItem("country");
    setCountry(savedCountry || "Nigeria");
  }, []);

  useEffect(() => {
    const fetchRobot = async () => {
      try {
        const { data } = await chimeBaseURL(
          `https://chimetrading.com/api/chime/singleRobot?slug=${id}`
        );
        setRobot(data?.data);
      } catch (error) {
        console.error("Error fetching the robot data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRobot();
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const addToCartMutation = useMutation({
    mutationKey: ["cart", id],
    mutationFn: async (sendCart) => {
      const { data } = await cartFetch.post("upsert", sendCart);
      return data;
    },
    onSuccess: (data) => {
      if (data?.code === 200) {
        toast.success("Cart added successfully");
        setAddedToCart(true);
      }
    },
    onError: (error) => {
      console.error("Error adding to cart", error);
      toast.error("Failed to add to cart");
    },
  });

  const addToCart = () => {
    if (!user) {
      navigate("/login");
    } else {
      const sendCart = {
        email: user.name,
        country,
        products: [
          {
            slug: robot.slug,
            quantities: 1,
          },
        ],
      };
      addToCartMutation.mutate(sendCart);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-cyan-900"></div>
      </div>
    );
  }

  if (!robot) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Robot not found
      </div>
    );
  }

  const { title, price, image, usd, description } = robot;

  const getPriceLabel = () => {
    return country === "Nigeria" ? `NGN${price}` : `USD${usd}`;
  };

  return (
    <motion.div
      className="mx-auto px-4 py-8 bg-cyan-100 min-h-screen"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 pt-[130px] md:grid-cols-2 gap-8">
        <div className="flex justify-center items-center">
          <motion.img
            src={image}
            alt={title}
            className="w-full md:max-w-lg rounded-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div>
          <motion.h1
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="text-gray-600 mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Author: Okeke C. Christian
          </motion.p>
          {description && (
            <motion.p
              className="text-gray-600 mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {description}
            </motion.p>
          )}

          <motion.p
            className="text-gray-600 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Price: {getPriceLabel()}
          </motion.p>
          <motion.button
            className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ${
              addToCartMutation.isLoading || addedToCart
                ? "cursor-not-allowed bg-blue-300 hidden"
                : ""
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            onClick={addToCart}
            disabled={addToCartMutation.isLoading || addedToCart}
          >
            {addToCartMutation.isLoading
              ? "Adding to Cart..."
              : addedToCart
              ? "Added to Cart"
              : "Add to Cart"}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default SingleCryptoRobots;
