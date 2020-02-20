import React from 'react';

var MovieListEntry = (props) => (
    <div className="movieListEntry">
        <div>
          {props.movie.title}
        </div>
        <button className="watchBtn" onClick={ () => props.watched(props.i) }>
            {props.movie.watched ? 'Watched' : 'Unwatched'}
        </button>
    </div>
);

export default MovieListEntry;
