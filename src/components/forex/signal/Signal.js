import React from "react";
import Banner from "./Banner";
import Heading from "./Heading";
import Pone from "./Pone";
import Ptwo from "./Ptwo";
import Pthree from "./Pthree";
import Pfour from "./Pfour";
import Btn from "./Btn";

const Signal = () => {
  return (
    <section className="font-poet">
      <Banner />
      <div className="py-20 flex items-center justify-center">
        <Btn />
      </div>
      <Heading />
      <Pone />
      <Ptwo />
      <Pthree />
      <Pfour />
      <div className="py-20 flex items-center justify-center">
        <Btn />
      </div>
    </section>
  );
};

export default Signal;
