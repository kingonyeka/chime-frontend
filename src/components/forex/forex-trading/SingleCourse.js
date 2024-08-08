import { useEffect, useState, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { cartFetch, chimeBaseURL } from "../../utils/http";
import "react-toastify/dist/ReactToastify.css";
import { useMutation } from "@tanstack/react-query";
import { formatPrice } from "../../utils/utils";
// import { useCurrency } from "../../../contexts/CurrencyContext";

const SingleCourse = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [addedToCart, setAddedToCart] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((state) => state.usersState.user);
  const buttonRef = useRef(null);
  const [country, setCountry] = useState("");

  useEffect(() => {
    const savedCountry = localStorage.getItem("country");
    setCountry(savedCountry || "Nigeria");
  }, []);

  const getPriceLabel = () => {
    return country === "Nigeria"
      ? `NGN${formatPrice(course.price)}`
      : `USD${formatPrice(course.usd)}`;
  };

  const fetchCourse = useCallback(async () => {
    try {
      const { data } = await chimeBaseURL(
        `https://chimetrading.com/api/chime/singleCourse?slug=${id}`
      );
      setCourse(data?.data);
    } catch (error) {
      console.error("Error fetching the course data", error);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchCourse();
  }, [fetchCourse]);

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

  const addToCart = useCallback(() => {
    if (!user) {
      navigate("/login");
    } else if (buttonRef.current) {
      buttonRef.current.disabled = true;
      const sendCart = {
        email: user.name,
        country,
        products: [
          {
            slug: course.slug,
            quantities: 1,
          },
        ],
      };
      addToCartMutation.mutate(sendCart);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, course, country]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-cyan-900"></div>
      </div>
    );
  }

  if (!course) {
    return <div>Course not found</div>;
  }

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
            src={course.image}
            alt={course.title}
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
            {course.title}
          </motion.h1>
          {course.description && (
            <motion.p
              className="text-gray-600 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {course.description}
            </motion.p>
          )}

          <motion.p
            className="text-gray-600 mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Author: Okeke C. Christian
          </motion.p>
          <motion.p
            className="text-gray-600 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Price: {getPriceLabel()}
          </motion.p>
          <motion.button
            ref={buttonRef}
            className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ${
              addToCartMutation.isLoading || addedToCart
                ? "cursor-not-allowed hidden bg-blue-300"
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

export default SingleCourse;
