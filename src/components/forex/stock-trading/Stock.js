import React from "react";
import Header from "../Header";
import StockVideo from "../../../assets/forex/course-ad.mp4";
import StockTradingProduct from "./StockTradingProduct";
const Stock = () => {
  return (
    <section>
      <Header
        heading="Unlock The Complete Stock Trading Course, Master My Powerful Strategy, and Join the Signal Group for Free"
        textOne="The complete stock trading course gives beginners and advanced traders the opportunity to learn how to trade. They will gain a deep understanding of stock market fundamentals and the various principles that govern trading. The course also delves into the psychology of trading, providing valuable insights to navigate the trading journey effectively. Additionally, it covers advanced strategies like value investing, which has a proven track record of generating substantial returns for investors. Purchasing the course grants lifetime access and membership to our mentorship group."
        video={StockVideo}
        textTwo="Join our signal group to enhance your trading skills, earn profits, and master advanced stock trading strategies."
      />
      <StockTradingProduct />
    </section>
  );
};

export default Stock;
