import React from 'react';

var AddMovie = (props) => (
    <div className="addMovie">
      <input 
      className="inputbar" 
      type="text"
      placeholder="Add movie title here"
      onChange={(e)=>props.handleInput(e)}
      />
      <button 
        className="submitBtn"
        onClick={props.addMovie}
      >
        Submit
      </button>
    </div>
);

export default AddMovie;