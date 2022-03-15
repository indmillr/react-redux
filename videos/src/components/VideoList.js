import React from "react";
import VideoItem from "./VideoItem";

// destructure from props.videos
const VideoList = ({ videos, onVideoSelect }) => {
  // return a new array
  const renderedList = videos.map((video) => {
    return <VideoItem onVideoSelect={onVideoSelect} video={video} />;
  });

  return <div className='ui relaxed divided list'>{renderedList}</div>;
};

export default VideoList;
