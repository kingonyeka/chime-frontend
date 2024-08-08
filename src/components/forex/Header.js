import React from "react";
import ReactPlayer from "react-player";

const Header = ({heading , textOne, video, textTwo}) => {
  return (
    <section className="bg-cyan-100 text-black py-[150px] px-4 md:px-10">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
       {heading}
        </h1>
        <p className="text-lg md:text-xl mb-8">
         {textOne}
        </p>
        <div className="mb-8">
          {/* Video Player */}
          <ReactPlayer
            url={video}
            width="100%"
            height="auto"
            controls
          />
        </div>
        <p className="text-lg md:text-xl">
         {textTwo}
        </p>
      </div>
    </section>
  );
};

export default Header;
