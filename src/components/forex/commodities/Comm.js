import React, { useEffect } from "react";
import Header from "../Header";
import CommoditiesVideo from "../../../assets/forex/course-ad.mp4";
import CommTradingProduct from "./CommTradingProduct";

const Comm = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section>
      <Header
        heading="Unlock The Complete Commodities Trading Course, Master My Powerful Strategy, and Join the Signal Group for Free"
        textOne="The complete commodities trading course provides beginners and experienced traders with the tools to navigate the dynamic commodities market. Gain a deep understanding of commodity fundamentals, market trends, and trading strategies. Explore topics like supply and demand dynamics, technical analysis, and risk management to make informed trading decisions. Our course also includes insights into advanced trading techniques like futures trading and options strategies. Purchasing the course gives you lifetime access and membership to our exclusive mentorship group."
        video={CommoditiesVideo}
        textTwo="Join our signal group to enhance your commodities trading skills, capitalize on market opportunities, and master advanced trading strategies in the commodities market."
      />
      <CommTradingProduct />
    </section>
  );
};

export default Comm;
