import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");

  useEffect(() => {
    // the 2nd arg in useEffect determines WHEN it rerenders
    // one of these: (nothing), empty arr, arr with contents
  });

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className='input'
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
