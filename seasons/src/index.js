import React from "react";
import ReactDOM from "react-dom";
// import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  // Good place to do one-time setup
    this.state = { lat: null, errorMessage: "" }
  }

  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

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

  componentDidMount() {
    console.log("Component loaded!");
  }

  componentDidUpdate() {
    console.log("Component rerendered");
  }
  
  componentWillUnmount() {
  }

}

ReactDOM.render(<App />, document.querySelector(#root));
