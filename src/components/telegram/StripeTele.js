import React, { useState } from "react";
import { FaCreditCard } from "react-icons/fa";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert";

const stripePromise = loadStripe(
  "pk_live_51PaxpLRxVNL1STfl6KwsMJ0ObxD3JpFXQkpOKjviWEdQfdexHmCy0DMXNO04zChnIEQaCA3CsGI9QdqUGbVbBNl500VsFEIFDn"
);

const StripeForm = ({ localStorageUser, price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

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
        telegram: JSON.stringify({
          email: localStorageUser?.name,
        }),
      };

      let payload = {
        amount: price * 100, // Amount in cents
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
          window.location.href = "https://t.me/+w2DV7vqf0TplNDk0";
          localStorage.setItem("telegram", false);
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
      className="max-w-md mx-auto p-4 space-y-4 bg-white rounded-lg shadow-md"
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

const StripeTele = ({ localStorageUser, price }) => {
  return (
    <Elements stripe={stripePromise}>
      <div className="stripe-component py-4 ">
        <h2 className="text-xl text-center font-bold mb-4 text-white">
          Pay with your credit card via Stripe
        </h2>
        <StripeForm localStorageUser={localStorageUser} price={price} />
      </div>
    </Elements>
  );
};

export default StripeTele;
