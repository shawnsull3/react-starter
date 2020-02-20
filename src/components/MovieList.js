import React from 'react';
import MovieListEntry from './MovieListEntry';


var MovieList = (props) => (
    <div className="movieList">
      {props.movies.length ? (props.movies.map((movie,i) =>
        <MovieListEntry movie={movie} key={i} i={i} watched={props.watched}/>
        )) 
      : 'Sorry, no movies match your search.'
      }
    </div>
);

export default MovieList;