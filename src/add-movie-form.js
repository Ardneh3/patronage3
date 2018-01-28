import React from 'react';

export default class AddMovieForm extends React.Component {

    render() {

      return (
        <div id="formContainer">
        <form id="adding_form">
            <div className="form-row">
                <label for="title">Title<span className="asterisk">*</span>:</label>
                <input type="text" id="title" name="movie_name" />
            </div>
            <div className="form-row">
                <label for="year">Year<span className="asterisk">*</span>:</label>
                <input type="text" id="year" name="movie_year" />
            </div>
            <div className="form-row">
                <label for="genre">Genre<span className="asterisk">*</span>:</label>
                <input type="text" id="genre" name="movie_genre" />
            </div>
            <div className="form-row">
                <label for="summary">Summary:</label>
                <textarea id="summary" name="movie_summary"></textarea>
            </div>
            <div id="form-requirements">
                <p>*required input</p>
            </div>
            <div className="add-btn">
                <button name="submit_form" type="button" id="form_btn">Submit</button>
            </div>
        </form>
    </div>
      )
    }
}