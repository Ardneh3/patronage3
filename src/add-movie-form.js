import React from 'react';

export default class AddMovieForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {movies: this.props.movies};

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (event) {
        event.preventDefault();
        const title = this.refs.title.value;
        const year = this.refs.year.value;
        const genre = this.refs.year.value;
        const summary = this.refs.summary.value;
        const id = Math.floor((Math.random() * 100) + 1);
        this.setState({movies: this.state.movies.concat({id, title, year, genre, summary})})
    }

    render() {
 
      return (
        <div id="formContainer">
        <form id="adding_form" onSubmit={this.handleSubmit}>
            <div className="form-row">
                <label htmlFor="title">Title<span className="asterisk">*</span>:</label>
                <input type="text" id="title" name="title" ref="title" />
            </div>
            <div className="form-row">
                <label htmlFor="year">Year<span className="asterisk">*</span>:</label>
                <input type="text" id="year" name="year" ref="year" />
            </div>
            <div className="form-row">
                <label htmlFor="genre">Genre<span className="asterisk">*</span>:</label>
                <input type="text" id="genre" name="genre" ref="genre" />
            </div>
            <div className="form-row">
                <label htmlFor="summary">Summary:</label>
                <textarea id="summary" name="summary" ref="summary"></textarea>
            </div>
            <div id="form-requirements">
                <p>*required input</p>
            </div>
            <div className="add-btn">
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
      )
    }
}