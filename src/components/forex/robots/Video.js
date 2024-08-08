import React from "react";
import ReactPlayer from "react-player";
import video from "../../../assets/forex/forex-robots.mp4";

const Video = () => {
  return (
    <div className="mb-8 py-10 px-20">
      <ReactPlayer url={video} width="100%" height="auto" controls />
    </div>
  );
};

export default Video;
