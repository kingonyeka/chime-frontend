import React, { useEffect, useState } from "react";
import RobotCard from "../robot/RobotCard";
import { chimeBaseURL } from "../utils/http";

const Robots = () => {
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await chimeBaseURL("robots");
        const shuffledRobots = data?.data.sort(() => 0.5 - Math.random());
        setRobots(shuffledRobots.slice(0, 3));
      } catch (error) {
        console.error("Error fetching the robots data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {robots.length > 0 && (
        <section className="py-14">
          <div className="w-full mx-auto px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-cyan-900 font-bold text-center mb-4">
              We trade the best Robots on the Market
            </h1>
            <p className="text-lg text-cyan-700 text-center mb-8">
              At Chime, we develop our own Robots and share our best Robots with
              our students and followers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10 py-14">
            {robots.map((robot, index) => (
              <RobotCard key={index} robot={robot} />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Robots;
