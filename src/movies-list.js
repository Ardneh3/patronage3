import React from 'react';
import SeenButtons from './seen-buttons';
import './movies-list.css';

export default class MoviesList extends React.Component {    

    render() {
      const movies = this.props.movies.map((movie) => <li key={movie.id}><h3>{movie.title}</h3> <br /> 
      {movie.year} <br /> {movie.genre} <br /> {movie.summary} <br /> 
      <SeenButtons id={movie.id} seen={movie.seen} onButtonClick={this.props.changeSeenProperty} /></li>);
      
      return (
        <div id="moviesListContainer">
        <ul id="moviesList">{movies}</ul>
        </div>
      );
    }
  }