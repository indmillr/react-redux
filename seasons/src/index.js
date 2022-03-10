import React from "react";
import ReactDOM from "react-dom";
// import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  // Good place to do one-time setup
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
  // Avoid anything besides returning JSX
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
  // Content visible on the screen

  // Good place to do data-loading
  componentDidMount() {
    console.log("Component loaded!");
  }
  // Sit and Wait for updates

  // Good place to do more data-loading when state/props change
  componentDidUpdate() {
    console.log("Component rerendered");
  }
  // Sit and wait until this component is no longer shown
  
  // Good place to do cleanup (especially for non-React stuff)
  componentWillUnmount() {
  }

}

ReactDOM.render(<App />, document.querySelector(#root));
