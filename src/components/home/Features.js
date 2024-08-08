import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaRegChartBar } from "react-icons/fa";

const Features = () => {
  const controlsTop = useAnimation();
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();
  const { ref: refTop, inView: inViewTop } = useInView({
    threshold: 0.5, // Trigger animation when 50% of the section is in view
  });
  const { ref: refLeft, inView: inViewLeft } = useInView({
    threshold: 0.5, // Trigger animation when 50% of the section is in view
  });
  const { ref: refRight, inView: inViewRight } = useInView({
    threshold: 0.5, // Trigger animation when 50% of the section is in view
  });

  React.useEffect(() => {
    if (inViewTop) {
      controlsTop.start("visible");
    }
    if (inViewLeft) {
      controlsLeft.start("visible");
    }
    if (inViewRight) {
      controlsRight.start("visible");
    }
  }, [controlsTop, controlsLeft, controlsRight, inViewTop, inViewLeft, inViewRight]);

  const fadeInVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideInLeftVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideInRightVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-black py-10">
      <div ref={refTop}>
        <motion.div
          className="text-center"
          variants={fadeInVariants}
          initial="hidden"
          animate={controlsTop}
        >
          <h1 className="text-white text-xl tracking-wide leading-2 lg:text-3xl xl:text-5xl">
            Our Courses Cover The Major <br /> Aspects of Trading
          </h1>
          <div className="w-full max-w-[250px] h-1 bg-cyan-300 my-2 mx-auto mt-4 md:max-w-[350px]" />
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center py-10">
        <div className="px-10 text-center md:w-1/2 md:pr-4" ref={refLeft}>
          <motion.div
            variants={slideInLeftVariants}
            initial="hidden"
            animate={controlsLeft}
          >
            <FaRegChartBar className="text-cyan-300 h-10 w-10 xl:h-14 xl:w-14 mx-auto mb-4" />
            <h4 className="text-white py-4">
              Prepare for your trading journey with our expert-led online
              trading courses. At <span className="text-cyan-300">Chime</span>,
              you will learn to avoid the huge losses almost all beginner
              traders experience. Our mission is to turn beginners into pro
              traders! Gain valuable insights into market dynamics, risk
              management, and profitable trading strategies that will set you on
              the path to success.
            </h4>
          </motion.div>
        </div>
        <hr className="w-1 hidden h-[200px] md:w-1 bg-cyan-300 my-6 md:block md:my-0 md:mx-4" />
        <div className="px-10 text-center md:w-1/2 md:pr-4" ref={refRight}>
          <motion.div
            variants={slideInRightVariants}
            initial="hidden"
            animate={controlsRight}
          >
            <FaRegChartBar className="text-white h-10 w-10 xl:h-14 xl:w-14 mx-auto mb-4" />
            <h4 className="text-cyan-300">
              Learn how to trade currency pairs and make profits in the
              largest and most liquid financial market in the world. Master
              advanced trading strategies and gain insights into market trends
              to maximize your potential earnings. Enhance your trading skills
              through practical exercises, live trading sessions, and
              personalized guidance from industry experts.
            </h4>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
