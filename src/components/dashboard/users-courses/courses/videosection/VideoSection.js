import React from 'react'
import { Tab } from "@headlessui/react";
import VideoPlayer from '../videoplayer/VideoPlayer';

const VideoSection = ({ videos }) => (
    <Tab.Panel className="mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {videos && videos.map((video, index) => (
          <div key={index}>
            <VideoPlayer videoUrl={video} />
          </div>
        ))}
      </div>
    </Tab.Panel>
  );

export default VideoSection