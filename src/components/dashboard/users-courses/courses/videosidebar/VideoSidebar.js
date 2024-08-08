import React from "react";

const VideoSidebar = ({ videos, onSelectVideo, selectedVideo }) => (
  <div className="bg-b p-4  h-full">
    <h2 className="text-[14px] w-full font-bold mb-4 text-white  bg-cyan-900 border rounded-md px-4 py-2 md:text-lg">
      Chapters
    </h2>
    <ul>
      {videos.map((video, index) => (
        <li key={index} className="mb-3">
          <button
            className={`text-lg font-semibold ${
              selectedVideo === video ? "text-yellow-300" : "text-cyan-500"
            } hover:underline`}
            onClick={() => onSelectVideo(video)}
          >
            Chapter {index + 1}
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default VideoSidebar;
