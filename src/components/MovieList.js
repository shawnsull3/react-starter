import React from 'react';
import MovieListEntry from './MovieListEntry';

let sorry = 'Sorry, no movies match your search';

var MovieList = (props) => (
    <div className="movieList">
      {props.movies.length ? (props.movies.map((movie,i) =>
        <MovieListEntry movie={movie} key={i}/>
        )) 
      : 'Sorry, no movies match your search. Reload the page to re-search.'
      }
    </div>
);

export default MovieList;