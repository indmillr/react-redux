import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  // What to do when the form is submitted?
  // Send the API request (async)
  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    // set State with the list of videos returned as 'response'
    this.setState({ videos: response.data.items });
  };

  // What to do when user selects a video?
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className='ui container'>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
