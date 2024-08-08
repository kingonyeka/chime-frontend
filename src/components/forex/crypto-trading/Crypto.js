import React, { useEffect } from "react";
import Header from "../Header";
import CryptoVideo from "../../../assets/forex/course-ad.mp4";
import CryptoTradingProduct from "./CryptoTradingProduct";

const CryptoTrading = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section>
      <Header
        heading="Unlock The Complete Crypto Trading Course, Master My Powerful Strategy, and Join the Signal Group for Free"
        textOne="The complete crypto trading course provides beginners and experienced traders with the tools to navigate the dynamic cryptocurrency market. Gain a deep understanding of blockchain technology, cryptocurrency fundamentals, and trading strategies. Explore topics like market analysis, risk management, and portfolio diversification to make informed trading decisions. Our course also includes insights into advanced trading techniques like algorithmic trading and arbitrage. Purchasing the course gives you lifetime access and membership to our exclusive mentorship group."
        video={CryptoVideo}
        textTwo="Join our signal group to enhance your crypto trading skills, capitalize on market opportunities, and master advanced trading strategies in the crypto space."
      />
      <CryptoTradingProduct />
    </section>
  );
};

export default CryptoTrading;
