import React from "react";

class SearchBar extends React.Component {
  onInputChange(event) {
    event.target.value;
  }

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form'>
          <div className='field'>
            <label>Image Search</label>
            <input type='text' onChange={this.onInputChage} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
