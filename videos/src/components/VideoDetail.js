import React from "react";

// deconstruct props
const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  return <div>{video.snippet.title}</div>;
};

export default VideoDetail;
