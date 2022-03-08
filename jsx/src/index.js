// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

function getButtonText() {
  return "Click On Me!";
}

// Create a React Component
const App = () => {
  return (
    <div>
      <label className='label' for='name'>
        Enter Name:
      </label>
      <input id='name' type='text' />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {getButtonText()}
      </button>
    </div>
  );
};

// Take the React Component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
