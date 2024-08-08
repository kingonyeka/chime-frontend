import React, { useEffect } from "react";
import Banner from "../components/about/Banner";
import Why from "../components/about/Why";
import Enroll from "../components/about/Enroll";
import Who from "../components/about/Who";

export const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Banner />
      <Who />
      <Why />
      <Enroll />
    </div>
  );
};
