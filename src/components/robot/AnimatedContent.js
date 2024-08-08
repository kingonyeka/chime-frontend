import React from "react";
import { motion } from "framer-motion";

const AnimatedHeader = ({ children }) => (
  <motion.h1
    initial={{ x: "-100%", opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 1 }}
    className="text-3xl md:text-4xl lg:text-5xl text-cyan-900 font-bold text-center mb-4"
  >
    {children}
  </motion.h1>
);

const AnimatedParagraph = ({ children }) => (
  <motion.p
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1, delay: 0.5 }}
    className="text-lg text-cyan-700 text-center mb-8"
  >
    {children}
  </motion.p>
);

const AnimatedSection = ({ children }) => (
  <section className="py-14">
    <div className="w-full mx-auto px-4">
      {children}
    </div>
  </section>
);

const AnimatedContent = ({ children }) => (
  <AnimatedSection>
    <AnimatedHeader>We trade the best Robots on the Market</AnimatedHeader>
    <AnimatedParagraph>
      At Chime, we develop our own Robots and share our best Robots with our
      students and followers.
    </AnimatedParagraph>
    {children}
  </AnimatedSection>
);

export default AnimatedContent;
