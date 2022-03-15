import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

class App extends React.Component {
  // What to do when the form is submitted?
  // Send the API request (async)
  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
  };

  render() {
    return (
      <div className='ui container'>
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
