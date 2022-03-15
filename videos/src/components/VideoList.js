import React from "react";
import VideoItem from "./VideoItem";

// destructure from props.videos
const VideoList = ({ videos }) => {
  // return a new array
  const renderedList = videos.map((video) => {
    return <VideoItem />;
  });

  return <div>{renderedList}</div>;
};

export default VideoList;
