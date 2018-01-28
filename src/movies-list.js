import React from 'react';
import SeenButtons from './seen-buttons';

export default class MoviesList extends React.Component {

    handleClick() {
      
    }

    render() {

      const movies = this.props.movies.map((movie) => <div><li key={movie.id}>{movie.title} <br /> {movie.year} <br /> {movie.genre} <br /> {movie.summary}</li><SeenButtons id={movie.id} seen={movie.seen} /></div>);
      return (
        <div id="moviesListContainer">
        <ul id="moviesList">{movies}</ul>
        </div>
      );
    }
  }