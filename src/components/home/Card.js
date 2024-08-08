import React from "react";
import { Tilt } from "react-tilt";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { LuArrowUpLeftFromCircle } from "react-icons/lu";
import { LiaRobotSolid } from "react-icons/lia";
import { IoBarChartSharp } from "react-icons/io5";

const Card = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: { ease: "easeOut", duration: 0.8 },
    },
  };

  return (
    <div
      className="w-full grid grid-cols-1 bg-gray-100 gap-8 py-20 px-20 md:grid-cols-3 overflow-hidden"
      ref={ref}
    >
      <motion.div
        className="rounded-lg bg-cyan-100 shadow-md p-6"
        variants={cardVariants}
        initial="hidden"
        animate={controls}
        transition={{ delay: 0 }}
      >
        <Tilt>
          <div className="flex flex-col items-center space-y-4">
            <LuArrowUpLeftFromCircle className="text-cyan-900 text-4xl" />
            <div>
              <h2 className="text-lg md:text-xl font-semibold text-cyan-900">
                Learn online at your own pace
              </h2>
              <p className="text-sm text-center md:text-base text-cyan-800">
                Our trading courses are available 100% online and will fit
                perfectly into your daily routine. Learn proven trading strategies
                and get Free Robots.
              </p>
            </div>
          </div>
        </Tilt>
      </motion.div>

      <motion.div
        className="rounded-lg bg-cyan-100 shadow-md p-6"
        variants={cardVariants}
        initial="hidden"
        animate={controls}
        transition={{ delay: 0.2 }} 
      >
        <Tilt>
          <div className="flex flex-col items-center space-y-4 text-center">
            <LiaRobotSolid className="text-cyan-900 text-4xl" />
            <div>
              <h2 className="text-lg md:text-xl font-semibold text-cyan-900">
                Master trading with Robots
              </h2>
              <p className="text-sm md:text-base text-cyan-800">
                Use the trading robots carefully created by {""}
                <span className="text-cyan-900">Chime</span> Master your trading
                with backtested and proven Expert Advisors.
              </p>
            </div>
          </div>
        </Tilt>
      </motion.div>

      <motion.div
        className="rounded-lg bg-cyan-100 shadow-md p-6"
        variants={cardVariants}
        initial="hidden"
        animate={controls}
        transition={{ delay: 0.4 }} 
      >
        <Tilt>
          <div className="flex flex-col items-center space-y-4">
            <IoBarChartSharp className="text-cyan-900 text-4xl" />
            <div>
              <h2 className="text-lg md:text-xl font-semibold text-cyan-900">
                Professional Strategy Builders
              </h2>
              <p className="text-sm md:text-base text-cyan-800">
                At <span className="text-cyan-900">Chime</span> we not only record
                the best trading courses with Trading Robots included, but we are
                fully integrated with the Top EA Builders.
              </p>
            </div>
          </div>
        </Tilt>
      </motion.div>
    </div>
  );
};

export default Card;
