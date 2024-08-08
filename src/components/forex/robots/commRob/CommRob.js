import React, { useEffect } from "react";
import Banner from "../forex/Banner";
import TopCommRob from "./TopCommRob";

const CommRob = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div>
        <Banner
          t1="Ongoing Updates: The 5 Commodities Trading Robots app is being updated daily so we are testing the Robots for you!"
          t2="No restrictions"
          t3="for the Robots. You can trade the 5 Commodities Trading Robots on as many accounts as you’d like – Demo and Live."
          t4="We generate new Robots 24/7 and when we find a great one we will push it in the"
          t5="Top 5 Commodities Trading Robots"
          t6="Connect the account with FxBlue or MyFxBook and follow their performance. This way you will always know which are the most profitable"
          t7="Gold and Silver Robots"
          t8=", for example, suitable for the current market!"
          t9="Test the Robots on the Demo first. From our experience in Commodities Trading with Robots, we can share that the best practice to follow is to put these 10 Commodities Trading Robots on a Demo account with one of the brokers we use and test them for a few weeks."
        />
        <TopCommRob />
      </div>
    </div>
  );
};

export default CommRob;
