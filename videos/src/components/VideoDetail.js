import React from "react";

// deconstruct props
const VideoDetail = ({ video }) => {
  return <div>{video.snippet.title}</div>;
};

export default VideoDetail;
