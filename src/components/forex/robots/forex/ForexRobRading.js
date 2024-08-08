import React from "react";
import Banner from "./Banner";
import ForexRobotComp from "./ForexRobotComp";

const ForexRobRading = () => {
  return (
    <div>
      <Banner
        t1="  Ongoing Updates: The 5 Forex EAs app is being updated daily so we are
          testing the EAs for you!"
        t2="    No restrictions"
        t3="  for the EAs. You can trade the 5 Forex Robots on as many accounts as
          you’d like – Demo and Live."
        t4=" We generate new EAs 24/7 and when we find a great one we will push it
          in the "
        t5="Top 5 Forex Robots"
        t6=" Connect the account with FxBlue or MyFxBook and follow their
          performance. This way you will always know which are the most
          profitable"
        t7="Robots"
        t8="for
          example, suitable for the current market!"
        t9="  Test the EAs on the Demo first. From our experience in Forex Trading
          with Robots, we can share that the best practice to follow is to put
          these 10 Forex Robots on a Demo account with one of the brokers we use
          and test them for a few weeks."
      />
      <ForexRobotComp/>
    </div>
  );
};

export default ForexRobRading;
