import React, { Component } from 'react';
import './App.css';
import MoviesComponent from './movies-component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MoviesComponent />
      </div>
    );
  }
}

export default App;