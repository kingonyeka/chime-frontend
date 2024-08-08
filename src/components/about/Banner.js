import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Banner = () => {
  const [counters, setCounters] = useState({
    students: 0,
    lessons: 0,
    courses: 0,
  });

  const numbers = {
    students: 10000,
    lessons: 1090,
    courses: 400,
  };

  useEffect(() => {
    let counterInterval = null;

    const countUp = () => {
      setCounters((prevCounters) => ({
        students:
          prevCounters.students < numbers.students
            ? prevCounters.students + Math.ceil(numbers.students / 100)
            : numbers.students,
        lessons:
          prevCounters.students < numbers.lessons
            ? prevCounters.lessons + Math.ceil(numbers.lessons / 100)
            : numbers.lessons,
        courses:
          prevCounters.courses < numbers.courses
            ? prevCounters.lessons + Math.ceil(numbers.courses / 100)
            : numbers.courses,
      }));
    };

    counterInterval = setInterval(countUp, 20);

    return () => clearInterval(counterInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-black text-white flex flex-col justify-center px-10 items-center py-32">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-center">
        Chime Trading Academy Statistics
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-screen-lg">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h3 className="text-3xl sm:text-4xl font-semibold mb-2">
            {counters.students.toLocaleString()}+
          </h3>
          <p className="text-lg capitalize sm:text-xl">students learning</p>
        </motion.div>
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h3 className="text-3xl sm:text-4xl font-semibold mb-2">
            {counters.lessons.toLocaleString()}+
          </h3>
          <p className="text-lg capitalize sm:text-xl">online lessons</p>
        </motion.div>
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h3 className="text-3xl sm:text-4xl font-semibold mb-2">
            {counters.courses.toLocaleString()}+
          </h3>
          <p className="text-lg capitalize sm:text-xl">online courses</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
