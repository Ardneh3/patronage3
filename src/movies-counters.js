import React from 'react';

export default class MoviesCounter extends React.Component {

    render() {
        const moviesAll = this.props.movies.length;
        let moviesSeen = 0;
        for (let i = 0; i < moviesAll; i++) {
          if (this.props.movies[i].seen === 'T') {
            moviesSeen++;
          }
        }

        return (
          <div id="moviesCountersContainer">
          <p>All: <span className="moviesCounter" id="moviesCounterAll">{moviesAll}</span></p>
          <p>Viewed: <span className="moviesCounter" id="moviesCounterSeen">{moviesSeen}</span></p>
          </div>
        )
    }
}