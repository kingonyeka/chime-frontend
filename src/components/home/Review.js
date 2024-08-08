import React from "react";
import { Tilt } from "react-tilt";
import star from "../../assets/star1.webp";

const Review = () => {
  return (
    <section className="py-14 bg-white px-4 lg:px-0">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold  text-center mb-6">
          What Our Students Say?​
        </h1>
        <div className="w-full grid grid-cols-1  gap-8 py-20 md:grid-cols-3 ">
          <Tilt className="rounded-lg bg-white shadow-md p-6">
            <div className="flex flex-col items-center space-y-10">
              <img src={star} alt="star" />
              <div className="flex flex-col space-y-8">
                <p className="text-sm  text-base text-cyan-800">
                  A very interesting program from an experienced trader !! I am
                  excited to test and continue to learn from them !!
                </p>
                <div>
                  <h7 className="text-cyan-900">Kingsley</h7>
                  <p className="text-gray-400">United Kingdom</p>
                </div>
              </div>
            </div>
          </Tilt>

          <Tilt className="rounded-lg bg-white shadow-md p-6">
            <div className="flex flex-col items-center space-y-10">
              <img src={star} alt="star" />
              <div className="flex flex-col space-y-8">
                <p className="text-sm  text-base text-cyan-800">
                  First of all, Academy’s concept is very attractive which
                  bundle education programs to the product. Secondly, the
                  communication to each customer to follow up the next actions
                  is outstanding. Finally, the quality of the education programs
                  is sophisticated. The length of each session is about 5 to 10
                  minutes then audience cannot give up.
                </p>
                <div>
                  <h7 className="text-cyan-900">Lee</h7>
                  <p className="text-gray-400">Japan</p>
                </div>
              </div>
            </div>
          </Tilt>

          <Tilt className="rounded-lg bg-white shadow-md p-6">
            <div className="flex flex-col items-center space-y-10">
              <img src={star} alt="star" />
              <div className="flex flex-col space-y-8">
                <p className="text-sm  text-base text-cyan-800">
                  I have been trading for almost 3 years now, and have enrolled
                  in a lot of courses along the way. Petko is, by far, the best
                  mentor I have ever encountered. He knows what he’s talking
                  about and he truly cares about his students.
                </p>
                <div>
                  <h7 className="text-cyan-900">Fati</h7>
                  <p className="text-gray-400">South Africa</p>
                </div>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default Review;
