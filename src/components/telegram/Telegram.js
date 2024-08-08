import React, { useEffect, useState } from "react";
import { FaTelegramPlane, FaMoneyBillWave } from "react-icons/fa";
import axios from "axios";
import StripeTele from "./StripeTele";
import CryptoTele from "./CryptoTele";

const Telegram = () => {
  const [country, setCountry] = useState("");
  const [price, setPrice] = useState(null);
  const [usdPrice, setUsdPrice] = useState(null);
  const localStorageUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const savedCountry = localStorage.getItem("country");
    setCountry(savedCountry || "Nigeria");

    const fetchPrice = async () => {
      try {
        const { data } = await axios.get(
          "https://www.chimetrading.com/api/chime/telegram"
        );

        setPrice(data?.data?.price);
        setUsdPrice(data?.data?.usd);
      } catch (error) {
        console.error("Error fetching the price:", error);
      }
    };

    fetchPrice();
  }, []);

  const formatPrice = (price) => {
    return new Intl.NumberFormat().format(price);
  };

  const getPriceLabel = () => {
    return country === "Nigeria"
      ? `NGN ${formatPrice(price)}`
      : `USD ${formatPrice(usdPrice)}`;
  };

  const getFormattedPrice = () => {
    return country === "Nigeria" ? price : usdPrice;
  };

  return (
    <div className="p-4 pt-6 md:p-8 md:pt-24 bg-gray-300">
      <header className="flex items-center space-x-2 bg-blue-500 text-white p-4 rounded-md shadow-md my-20">
        <FaTelegramPlane className="text-2xl" />
        <h1 className="text-lg md:text-2xl lg:text-3xl font-semibold ">
          Join Telegram Group
        </h1>
      </header>
      <div className="mt-4">
        <p className="text-blue-500">
          Here you can make your payment for accessing the Telegram channel.
        </p>
        <section className="mt-4 text-white">
          {price !== null && usdPrice !== null ? (
            <div className="text-gray-800 p-4 rounded-md shadow-lg mt-4">
              <div className="flex items-center space-x-2">
                <FaMoneyBillWave className="text-green-500 text-2xl" />
                <p className="text-lg font-semibold">Price:</p>
              </div>
              <p className="text-xl mt-2">{getPriceLabel()}</p>
            </div>
          ) : (
            <p>Loading price...</p>
          )}
        </section>
        <section className="flex flex-col justify-evenly bg-cyan-900 px-10 py-8 md:flex-row xl:px-14">
          {/* <h2 className="bg-cyan-950 text-white pt-10">Payment Methods</h2> */}
          <div className="py-8">
            {/* <StripeTele
              localStorageUser={localStorageUser}
              price={getFormattedPrice()}
            />  */}
          </div>
          <CryptoTele
            localStorageUser={localStorageUser}
            price={getFormattedPrice()}
          />
        </section>
      </div>
    </div>
  );
};

export default Telegram;
