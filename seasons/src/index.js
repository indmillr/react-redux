import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  constructor(props) {
    // A reference to the parent constructor function
    super(props);

    this.state = { lat: null };
  }

  // React REQUIRES a render method!!!
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err),
    );

    return <div>Latitude: </div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
