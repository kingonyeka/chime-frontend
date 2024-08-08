import React from "react";
import Banner from "../components/home/Banner";
import Card from "../components/home/Card";
import Features from "../components/home/Features";
import Robots from "../components/home/Robots";
import Steps from "../components/home/Steps";
import Support from "../components/home/Support";
import Review from "../components/home/Review";

const Home = () => {
  return (
    <section className="mx-auto bg-gray-50 py-28  xl:px-0">
      <Banner />
      <Card />
      <Features />
      <Robots />
      <Steps />
      <Support />
      <Review />
    </section>
  );
};

export default Home;
