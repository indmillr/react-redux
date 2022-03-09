import React from "react";
import ReactDOM from "react-dom";
// import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  constructor(props) {
    // A reference to the parent constructor function
    super(props);

    // THIS IS THE ONLY TIME to directly assign this.state
    this.state = { lat: null, errorMessage: "" };

    // Do not put a call like this within the render method
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // to update state HAVE to use setState
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      },
    );
  }

  // React REQUIRES a render method!!!
  render() {
    // Conditional rendering to handle Errors
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div> 
    }
    return <div>Loading!</div>;
  }


ReactDOM.render(<App />, document.querySelector("#root"));
