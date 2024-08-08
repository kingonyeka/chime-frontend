import React, { useEffect } from "react";
import Header from "../Header";
import Fvideo from "../../../assets/forex/course-ad.mp4";
import ForexTradingProduct from "./ForexTradingProduct";

const Forex = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section>
      <Header
        heading="  Unlock The Complete Trading Course, Master My Powerful Strategy, and
          Join the Signal Group for Free"
        textOne=" The complete trading course gives the opportunity to beginner and
          advanced traders to learn how to trade, they will learn the
          fundamental of trading, the several laws that guide trading. The
          course teaches about the psychology of trading, which will help
          traders in the trading journey. The course also teaches the area of
          value strategy which has been proven to have a high success rate
          producing millions of dollars for my investors. Purchasing the course
          gives you lifetime access and the opportunity to be part of the
          mentorship group."
        video={Fvideo}
        textTwo="It also provides the opportunity to join the signal group which can
        help you trade, earn money, and master the area of value strategy."
      />

      <ForexTradingProduct />
    </section>
  );
};

export default Forex;
