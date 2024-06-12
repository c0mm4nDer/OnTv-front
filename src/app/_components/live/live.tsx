"use client";
import React from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import VideoJS from "@/app/_components/video";

const Live = () => {
  const playerRef = React.useRef(null);

  const videoJsOptions1 = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: "https://picamo.arvanlive.ir/hls/ch1/ch1.m3u8",
        type: "application/x-mpegURL",
      },
    ],
  };
  const videoJsOptions2 = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: "https://picamo.arvanlive.ir/hls/ch2/ch2.m3u8",
        type: "application/x-mpegURL",
      },
    ],
  };
  const videoJsOptions3 = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: "https://picamo.arvanlive.ir/hls/ch3/ch3.m3u8",
        type: "application/x-mpegURL",
      },
    ],
  };

  const handlePlayerReady = (player: any) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };
  return (
       <div className="grid grid-cols-4 md:grid-cols-3 gap-4">
        <div className="col-span-4 md:col-span-2 row-span-2 rounded-[3px] overflow-hidden">
          <VideoJS options={videoJsOptions1} onReady={handlePlayerReady} />
        </div>
        <div className="col-span-2 md:col-span-1 rounded-[3px] overflow-hidden">
          <VideoJS options={videoJsOptions2} onReady={handlePlayerReady} />
        </div>
        <div className="col-span-2 md:col-span-1 mb-4 rounded-[3px] overflow-hidden">
          <VideoJS options={videoJsOptions3} onReady={handlePlayerReady} />
        </div>
      </div>
   );
};

export default Live;
