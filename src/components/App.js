import React from 'react';
import Search from './Search.js';
import '../main.css';
import MovieList from './MovieList.js';
import AddMovie from './AddMovie.js';

var movies = [];

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      movies: movies, //array of objs
      text: '',
      inputMovie: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleText = this.handleText.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleSubmit() {
    let searchResult = [];
    movies.map((movie) => {
      if (movie.title.indexOf(this.state.text) !== -1){
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
      title: this.state.inputMovie
    };

    if (inputObj.title.length) {
      movies.push(inputObj);
    }
    this.setState({movies: movies});
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
        <div>
          <MovieList movies={this.state.movies}/>
        </div>
      </div>
  )}
}

export default App;



// var movies = [
//   {title: 'Mean Girls'},
//   {title: 'Hackers'},
//   {title: 'The Grey'},
//   {title: 'Sunshine'},
//   {title: 'Ex Machina'},
// ];

