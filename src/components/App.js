import React from 'react';
import '../main.css';

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

class App extends React.Component {
  render(){
    return(
    <div>
      <div className="title">{movies[0].title}</div>
      <div className="title">{movies[1].title}</div>
      <div className="title">{movies[2].title}</div>
      <div className="title">{movies[3].title}</div>
      <div className="title">{movies[4].title}</div>
    </div>
  )}
}

export default App;
