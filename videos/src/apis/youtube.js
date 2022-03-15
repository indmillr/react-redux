import axios from "axios";

const KEY = "AIzaSyDhqj-xzcSPvUBy3qcJM1FIwt7dANuKRiY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
