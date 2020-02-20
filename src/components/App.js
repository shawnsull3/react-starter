import React from 'react';
import Search from './Search.js';
import '../main.css';
import MovieList from './MovieList.js';

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      movies: movies, //array of objs
      text: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleText = this.handleText.bind(this);
  
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

  handleText (e) {
    this.setState({ text: e.target.value });
  }

  render(){
    return(
      <div>
        <nav className="navbar">
          <div>
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
