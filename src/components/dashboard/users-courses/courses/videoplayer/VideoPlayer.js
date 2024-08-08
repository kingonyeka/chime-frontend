import React, { useEffect, useRef } from "react";
import { Player } from "video-react";
import "video-react/dist/video-react.css";

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
    <div className="p-4 shadow rounded">
      <Player ref={playerRef} src={videoUrl} />
    </div>
  );
};

export default VideoPlayer;
