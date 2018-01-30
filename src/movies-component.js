import React from 'react';
import MoviesList from './movies-list';
import MoviesCounters from './movies-counters';
import AddMovieForm from './add-movie-form';
import MyLocalStorage from './local-storage';

export default class MoviesComponent extends React.Component {

    constructor(props) {
      super(props);
      this.myLocalStorage = new MyLocalStorage()
      this.state = {
        movies: this.myLocalStorage.get()
      }
      this._addNewMovie = this._addNewMovie.bind(this);
      this._changeSeenProperty = this._changeSeenProperty.bind(this);
    }

    _addNewMovie (title, year, genre, summary) {
      const moviesList = this.state.movies.slice();
      const movie = {
        id: this.state.movies[this.state.movies.length - 1].id +1, 
        title: title,
        year: year,
        genre: genre,
        summary: summary,
        seen: 'F'
      };
      moviesList.push(movie);
      this.setState({movies: moviesList});
      this.myLocalStorage.set(movie);
      }

      _changeSeenProperty (id) {
        const moviesList = this.state.movies.slice()
        const movie = moviesList.find(movie => movie.id === id)
        movie.seen === 'T' ? movie.seen = 'F' : movie.seen = 'T';
        this.setState({movies: moviesList})
        this.myLocalStorage.set(id, {
          seen: movie.seen
        });
      }
  


    render() {
      return (
        <div>
          <MoviesCounters movies={this.state.movies} />
          <AddMovieForm afterClick={this._addNewMovie} movies={this.state.movies} />
          <MoviesList movies={this.state.movies} changeSeenProperty={this._changeSeenProperty} />
        </div>
      );
    }
  }