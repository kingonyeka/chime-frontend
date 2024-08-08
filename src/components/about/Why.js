import React, { useRef, useEffect } from "react";
import WhyImg from "../../assets/why.jpg";
import { motion, useAnimation } from "framer-motion";

const Why = () => {
  const sectionRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const sectionRefCurrent = sectionRef.current; // Copy ref value to a variable

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({
            opacity: 1,
            x: 0,
            transition: { duration: 0.5 },
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRefCurrent) {
      observer.observe(sectionRefCurrent);
    }

    return () => {
      if (sectionRefCurrent) {
        observer.unobserve(sectionRefCurrent);
      }
    };
  }, [controls]);

  return (
    <div ref={sectionRef}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={controls}
        className="flex flex-col items-center justify-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="capitalize text-center text-4xl my-4 py-10 sm:text-5xl md:text-6xl font-bold mb-8"
        >
          why chime
        </motion.h2>
        <motion.section
          className="py-8 grid grid-cols-1 gap-4 xl:grid-cols-2 items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-md mx-auto"
          >
            <motion.img
              src={WhyImg}
              alt="why section img"
              className="w-full"
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            />
          </motion.div>
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.p
              className="text-lg text-gray-500 px-10"
              initial={{ x: 50 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              More than 90% of traders begin their forex trading journey online
              without any prior knowledge, often relying on a few free videos or
              random articles from forex forums. Unfortunately, 95% of these
              traders swiftly lose their initial capital, with 80% of them
              experiencing this loss within the first month alone. Our courses
              leverage the best and most advanced software in the market for
              developing forex strategies and expert advisors. This approach helps
              to eliminate the two primary emotions that lead to trading losses:
              greed and fear. We aim to provide a comprehensive and professional
              learning experience for aspiring traders.
            </motion.p>
          </motion.div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default Why;
