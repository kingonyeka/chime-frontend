import React, { useEffect, useState, useRef } from "react";
import { useLoaderData, useParams, useNavigate, redirect } from "react-router-dom";
import { userFetch } from "../../../utils/http";
import InactiveM from "../../modals/InactiveM";
import { Player } from 'video-react';
import 'video-react/dist/video-react.css';
import "tailwindcss/tailwind.css";
import { store } from "../../../../store";

const VideoPlayer = ({ videoUrl, onEnded }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    const player = playerRef.current;
    if (player) {
      player.subscribeToStateChange((state) => {
        if (state.ended) {
          onEnded();
        }
      });
    }
  }, [onEnded]);

  return (
    <div className="p-4  shadow rounded">
      {videoUrl ? (
        <Player ref={playerRef} src={videoUrl} autoPlay />
      ) : (
        <div>No video available</div>
      )}
    </div>
  );
};

const VideoSidebar = ({ videos, onSelectVideo, selectedVideo }) => (
  <div className="bg-black rounded-md p-4 w-1/4 h-full">
    <h2 className="text-sm font-bold mb-4 text-cyan-800 uppercase text-center bg-white rounded-md md:text-lg">Chapters</h2>
    <ul>
      {videos.map((video, index) => (
        <li key={index} className="mb-3">
          <button
            className={`text-sm md:text-lg font-semibold ${selectedVideo === video ? "text-white" : "text-cyan-500"} hover:underline`}
            onClick={() => onSelectVideo(video)}
          >
            Chapter {index + 1}
          </button>
        </li>
      ))}
    </ul>
  </div>
);

const CustomTab = ({ tabs, currentTab, setCurrentTab }) => (
  <div className="flex space-x-1 bg-cyan-900 p-1 rounded-md mb-4">
    {tabs.map((tab, index) => (
      <button
        key={index}
        className={`p-2 rounded ${currentTab === index ? "bg-white shadow text-cyan-500" : "text-cyan-100 hover:bg-white/[0.12] hover:text-white"}`}
        onClick={() => setCurrentTab(index)}
      >
        {tab}
      </button>
    ))}
  </div>
);

const SingleCoursePur = () => {
  const { id } = useParams();
  const loaderData = useLoaderData();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");
  const [videos, setVideos] = useState([]);
  const [currentTab, setCurrentTab] = useState(0);

  useEffect(() => {
    const fetchRobot = async () => {
      try {
        const { data } = await userFetch.get(
          `https://chimetrading.com/api/chime/singleCourse?slug=${id}`
        );
        const courseData = data?.data;
        const tabVideos = [
          courseData.course_videos,
          courseData.live_session_videos,
          courseData.quiz_videos,
        ];
        setVideos(tabVideos[currentTab] || []);
        setSelectedVideo(tabVideos[currentTab]?.[0] || "");
      } catch (error) {
        console.error("Error fetching the robot data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRobot();
  }, [id, currentTab]);

  useEffect(() => {
    if (loaderData) {
      setLoading(false);
    }

    if (loaderData?.status === "banned") {
      alert("Unauthorized user");
      navigate("/");
    }

    if (loaderData?.status === "inactive") {
      setShowModal(true);
    }
  }, [loaderData, navigate]);

  useEffect(() => {
    if (loaderData?.data) {
      const tabVideos = [
        loaderData.data.course_videos,
        loaderData.data.live_session_videos,
        loaderData.data.quiz_videos,
      ];
      setVideos(tabVideos[currentTab] || []);
      if (tabVideos[currentTab]?.length > 0) {
        setSelectedVideo(tabVideos[currentTab][0]);
      } else {
        setSelectedVideo("");
      }
    }
  }, [currentTab, loaderData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const closeModal = () => {
    setShowModal(false);
  };

  const handleVideoEnd = () => {
    const currentIndex = videos.indexOf(selectedVideo);
    const nextIndex = currentIndex + 1;
    if (nextIndex < videos.length) {
      setSelectedVideo(videos[nextIndex]);
    }
  };

  const tabs = ["Courses", "Live Sessions", "Quizzes"];

  return (
    <div className="h-full mx-auto p-4 flex bg-gray-300  md:py-40">
      {showModal && <InactiveM onClose={closeModal} />}
      <VideoSidebar videos={videos} onSelectVideo={setSelectedVideo} selectedVideo={selectedVideo} />
      <div className="flex-1 p-4">
        <CustomTab tabs={tabs} currentTab={currentTab} setCurrentTab={setCurrentTab} />
        <VideoPlayer videoUrl={selectedVideo} onEnded={handleVideoEnd} />
      </div>
    </div>
  );
};

export default SingleCoursePur;

export const s_courseLoader = async () => {
  const state = store.getState();
  const user = state.usersState.user;

  if (!user) {
    return redirect("/");
  }

  try {
    const res = await userFetch.get("details", {
      params: { email: user.name },
    });

    const data = res?.data;
    return data;
  } catch (error) {
    console.error(error);
    return redirect("/");
  }
};
