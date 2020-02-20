import React from 'react';

var Search = (props) => (
    <div className="search">
      <input 
      className="searchbar" 
      type="text"
      placeholder="Search..."
      onChange={(e)=>props.handleText(e)}
      />
      <button 
        className="submitBtn"
        onClick={props.handleSubmit}
      >
        Submit
      </button>
    </div>
);

export default Search;