import React, { useState } from "react";
import { FaCreditCard } from "react-icons/fa";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { cartFetch } from "../../utils/http";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert";

const stripePromise = loadStripe(
  "pk_live_51PaxpLRxVNL1STfl6KwsMJ0ObxD3JpFXQkpOKjviWEdQfdexHmCy0DMXNO04zChnIEQaCA3CsGI9QdqUGbVbBNl500VsFEIFDn"
);

const StripeForm = ({ localStorageUser }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const det = useSelector((state) => state.usersState.userDet);

  const { data: products } = useQuery({
    queryKey: ["cart"],
    queryFn: () => cartFetch.get(`fetch?email=${localStorageUser?.name}`),
    enabled: !!localStorageUser?.name,
  });

  const cartProducts = products?.data?.data?.products || [];
  const robots = cartProducts.filter((product) => product.type === "robot");
  const courses = cartProducts.filter((product) => product.type === "course");
  const amount = products?.data?.data?.total_amount * 100; // Amount in cents

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const cardholderName = event.target["cardholder-name"].value;
    const email = event.target["email"].value;

    let validationErrors = {};
    if (!cardholderName)
      validationErrors.cardholderName = "Cardholder name is required";
    if (!email) validationErrors.email = "Email is required";

    setErrors(validationErrors);

    if (!stripe || !elements || Object.keys(validationErrors).length > 0) {
      setLoading(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);

    try {
      let metadata = {
        courses: courses,
        robots: robots,
        total: amount,
        email: localStorageUser?.name,
        first_name: det.first_name,
        middle_name: det.middle_name || "",
        last_name: det.last_name,
      };

      let payload = {
        amount,
        currency: "usd",
        metadata: metadata,
      };

      const { data: paymentIntent } = await axios.post(
        "https://www.chimetrading.com/api/chime/stripe/create_payment_intent",
        payload
      );

      const result = await stripe.confirmCardPayment(
        paymentIntent.clientSecret,
        {
          payment_method: {
            card: cardElement,
            billing_details: { name: cardholderName, email },
          },
        }
      );

      if (result.error) {
        toast.error(result.error.message);
      }

      if (result.paymentIntent.status === "succeeded") {
        await axios.post(
          "https://www.chimetrading.com/api/chime/stripe/callback",
          {
            paymentIntentId: result.paymentIntent.id,
            email,
            amount: result.paymentIntent.amount,
            status: result.paymentIntent.status,
            metadata: result.paymentIntent.metadata,
          }
        );

        toast.success("Payment successful!");
        Swal({
          title: "Success",
          text: "Payment successful!",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          window.location.href = "https://www.chimetrading.com/dashboard";
        });
      } else {
        toast.error(
          "payment declined, contact your bank administrator or card service provider"
        );
      }
    } catch (error) {
      toast.error("payment declined");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full  p-4 space-y-4 bg-white rounded-lg shadow-md"
    >
      <ToastContainer />
      <div className="mb-4">
        <label
          htmlFor="cardholder-name"
          className="block text-sm font-medium text-gray-700"
        >
          Cardholder Name <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="cardholder-name"
          name="cardholder-name"
          placeholder="Cardholder Name"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-600 focus:border-cyan-600 sm:text-sm"
        />
        {errors.cardholderName && (
          <p className="mt-2 text-sm text-red-600">{errors.cardholderName}</p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email <span className="text-red-600">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-600 focus:border-cyan-600 sm:text-sm"
        />
        {errors.email && (
          <p className="mt-2 text-sm text-red-600">{errors.email}</p>
        )}
      </div>

      <div className="mb-4">
        <label
          className="block mb-2 text-sm font-medium text-gray-700"
          htmlFor="cardNumber"
        >
          Card Number <span className="text-red-600">*</span>
        </label>
        <div className="relative">
          <FaCreditCard className="absolute left-3 top-3 text-gray-400" />
          <CardElement
            id="card-element"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-600 focus:border-cyan-600"
            options={{
              style: { base: { fontSize: "16px", color: "#32325d" } },
            }}
          />
        </div>
      </div>

      <button
        className="w-full bg-cyan-900 text-white py-2 px-4 rounded-md hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        type="submit"
        disabled={loading}
      >
        {loading ? "Processing..." : "Make Payment"}
      </button>
    </form>
  );
};

const Stripe = ({ localStorageUser }) => {
  return (
    <Elements stripe={stripePromise}>
      <div className="stripe-component w-full">
        <h2 className="text-xl font-bold mb-4">
          Pay with your credit card via Stripe
        </h2>
        <StripeForm localStorageUser={localStorageUser} />
      </div>
    </Elements>
  );
};

export default Stripe;
