import React, { useRef } from "react";
import YouTube from "react-youtube";

const YoutubeVideo = ({ videoId }) => {
  const playerRef = useRef(null);

  const onPlayerReady = (event) => {
    // Start playing the video when the player is ready
    event.target.playVideo();
  };

  const onPlayerStateChange = (event) => {
    // Check if the video has ended, and replay it if it has
    if (event.data === window.YT.PlayerState.ENDED) {
      playerRef.current.internalPlayer.playVideo();
    }
  };

  const opts = {
    height: "350",
    width: "100%",
    playerVars: {
      // Enable autoplay
      autoplay: 1,
    },
  };

  return (
    <div className="relative w-full h-full ">
        <div  className="absolute -top-1 left-0 w-full h-full z-10 pointer-events-none" >
        <YouTube
    className="w-full pt-[50px] z-0  scale-sm md:scale-md lg:scale-lg"
      videoId={videoId}
      opts={opts}
      onReady={onPlayerReady}
      onStateChange={onPlayerStateChange}
      ref={playerRef}
    />
        </div>
    </div>
   
  );
};

export default YoutubeVideo;
