import { Tab } from "@headlessui/react";
import React from "react";
import VideoSection from "../videosection/VideoSection";

const TabGrp = ({ course_videos, live_session_videos, quiz_videos }) => {
  return (
    <Tab.Group>
      <Tab.List className="flex space-x-1 bg-cyan-900 p-1 rounded-md">
        <Tab
          className={({ selected }) =>
            selected
              ? "bg-white shadow text-cyan-500 p-2 rounded"
              : "text-cyan-100 hover:bg-white/[0.12] hover:text-white p-2 rounded"
          }
        >
          Course Videos
        </Tab>
        <Tab
          className={({ selected }) =>
            selected
              ? "bg-white shadow text-cyan-500 p-2 rounded"
              : "text-cyan-100 hover:bg-white/[0.12] hover:text-white p-2 rounded"
          }
        >
          Live Session Videos
        </Tab>
        <Tab
          className={({ selected }) =>
            selected
              ? "bg-white shadow text-cyan-500 p-2 rounded"
              : "text-cyan-100 hover:bg-white/[0.12] hover:text-white p-2 rounded"
          }
        >
          Quiz Videos
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <VideoSection videos={course_videos} />
        <VideoSection videos={live_session_videos} />
        <VideoSection videos={quiz_videos} />
      </Tab.Panels>
    </Tab.Group>
  );
};

export default TabGrp;
