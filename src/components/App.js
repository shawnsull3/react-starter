import React from 'react';
import Search from './Search.js';
import '../main.css';
import MovieList from './MovieList.js';
import AddMovie from './AddMovie.js';

var movieStorage = [];

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      movies: movieStorage, //array of objs
      text: '',
      inputMovie: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleText = this.handleText.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.watched = this.watched.bind(this);
    this.showWatched = this.showWatched.bind(this);
    this.showUnwatched = this.showUnwatched.bind(this);
  }

  handleSubmit() {
    let searchResult = [];
    movieStorage.map((movie) => {
      if (movie.title.toLowerCase().indexOf(this.state.text.toLowerCase()) !== -1){
        searchResult.push(movie);
      }
    })
    this.setState({movies: searchResult});
  }

  handleText(e) {
    this.setState({ text: e.target.value });
  }

  handleInput(e) {
    this.setState({ inputMovie: e.target.value });
  }

  addMovie() {
    let inputObj = {
      title: this.state.inputMovie,
      watched: false
    };

    if (inputObj.title.length) {
      movieStorage.push(inputObj);
    }
    this.setState({ movies: movieStorage });
  }

  watched (i) {
    movieStorage[i].watched = !movieStorage[i].watched;
    this.setState({movies: movieStorage});
  }

  showWatched () {
    let watchResult = [];
    movieStorage.map((movie) => {
      if (movie.watched){
        watchResult.push(movie);
      }
    })
    this.setState({movies: watchResult});
  }

  showUnwatched () {
    let watchResult = [];
    movieStorage.map((movie) => {
      if (!movie.watched){
        watchResult.push(movie);
      }
    })
    this.setState({movies: watchResult});
  }

  render(){
    return(
      <div>
        <nav className="navbar">
          <div>
            <h4>Add Movie</h4>
            <AddMovie 
            addMovie={this.addMovie}
            handleInput={this.handleInput}/>
          </div>
          <div>
          <h4>Search</h4>
            <Search
              handleText={this.handleText}
              handleSubmit={this.handleSubmit}/>
          </div>
        </nav>
        <div className="filter">
          <button className="submitBtn" onClick={this.handleSubmit}>All Movies</button>
          <button className="submitBtn" onClick={this.showWatched}>Watched</button>
          <button className="submitBtn" onClick={this.showUnwatched}>To Watch</button>
        </div>
        <div>
          <MovieList movies={this.state.movies} watched={this.watched}/>
        </div>
      </div>
  )}
}

export default App;



// var movies = [
//   {title: 'Mean Girls', watched: true},
//   {title: 'Hackers', watched: false},
//   {title: 'The Grey'},
//   {title: 'Sunshine'},
//   {title: 'Ex Machina'},
// ];

