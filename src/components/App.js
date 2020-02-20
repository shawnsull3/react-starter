import React from 'react';
import Search from './Search.js';
import '../main.css';

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
      movies: movies,
      text: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleText = this.handleText.bind(this);
  
  }

  handleSubmit() {
    
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
        <div className="movieList">
          <div className="title">{movies[0].title}</div>
          <div className="title">{movies[1].title}</div>
          <div className="title">{movies[2].title}</div>
          <div className="title">{movies[3].title}</div>
          <div className="title">{movies[4].title}</div>
        </div>
      </div>
  )}
}

export default App;
