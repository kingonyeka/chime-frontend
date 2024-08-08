import React from "react";
import { Tilt } from "react-tilt";

const Steps = () => {
  return (
    <section className="bg-white py-20 px-20 text-center flex items-center flex-col">
      <div className="text-center py-8">
        <h1 className="text-cyan-900 mx-auto text-center text-xl tracking-wide leading-2 lg:text-3xl xl:text-5xl flex items-center">
          {/* <span className="text-2xl text-white bg-red-600 rounded-full h-10 w-10 flex justify-center items-center">
            3
          </span> */}
          <span className="ml-2">Easy Steps to Start Learning</span>
        </h1>
      </div>
      <div className="w-full grid grid-cols-1 gap-8 md:grid-cols-3 py-4">
        <Tilt className="rounded-lg  shadow-md p-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="text-2xl text-white bg-gray-600 rounded-full h-[40px] w-[40px] flex justify-center items-center">
              1
            </div>

            <div>
              <h2 className="text-lg md:text-xl font-semibold text-center text-cyan-900 py-4">
                Sign up
              </h2>
              <p className="text-sm text-center md:text-base text-cyan-800">
                An account is required to access Chime online courses. You can
                easily register for one from the “Start Your Journey” or
                “Register” button on top of our site.Join our ever-growing
                community through our telegram platform by clicking on the
                "Signal" link, meet fellow traders and learn from their
                experience.
              </p>
            </div>
          </div>
        </Tilt>

        <Tilt className="rounded-lg shadow-md p-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="text-2xl text-white bg-green-600 rounded-full h-[40px] w-[40px] flex justify-center items-center">
              2
            </div>

            <div>
              <h2 className="text-lg md:text-xl font-semibold text-center text-cyan-900 py-4">
                Select
              </h2>
              <p className="text-sm text-center md:text-base text-cyan-800">
                Now you can select any Trading course. We provide a full range
                of courses, from Forex trading to Crypto trading, Stock trading,
                and even Gold trading. You are free to choose any course/s you
                like. All courses are thought out and structured with detailed
                lessons, attachments and trading robots.
              </p>
            </div>
          </div>
        </Tilt>
        <Tilt className="rounded-lg  shadow-md p-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="text-2xl text-white bg-blue-600 rounded-full h-[40px] w-[40px] flex justify-center items-center">
              3
            </div>

            <div>
              <h2 className="text-lg md:text-xl font-semibold text-center text-white py-4">
                Enroll
              </h2>
              <p className="text-sm text-center md:text-base text-cyan-800">
                Once you enroll in the course, you can start your learning
                experience with us. All courses are divided into sections with
                multiple lessons, demonstrating many different live trading
                examples and aspects of trading. The robots included inour
                trading courses are updated monthly.
              </p>
            </div>
          </div>
        </Tilt>
      </div>
    </section>
  );
};

export default Steps;
