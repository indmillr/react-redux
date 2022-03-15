import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  // what happens when Input changes?
  onInputChange = (event) => {
    // updates state (term) with target (input) value
    this.setState({ term: event.target.value });
  };

  // what happens when Form is submitted?
  onFormSubmit = (event) => {
    // stop refresh from happening after each char
    event.preventDefault();

    // TODO: Make sure to call callback from Parent Component
  };

  render() {
    return (
      <div className='ui segment search-bar'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label>Video Search</label>
            <input
              type='text'
              // updates value with state
              value={this.state.term}
              // invokes onInputChange when changes occur
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
