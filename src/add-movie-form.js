import React from 'react';
import FormErrors from './form-errors';
import './add-movie-form.css';

export default class AddMovieForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {validate: false,
        emptyError: '',
        numberError: '',
        existError: ''};
        this._handleClick = this._handleClick.bind(this);
    }

    _handleClick (event) {
        this._formValidator();
        event.preventDefault();
    }

      _addMovie = () => {
        this.props.afterClick(this.title.value, this.year.value, this.genre.value, this.summary.value);
        this._resetForm();
        this.setState({validate: false, existError: ''});
      }

      _isEmpty = () => {
          const year = this.year.value.trim();
          const title = this.title.value.trim();
          const genre = this.genre.value.trim();
          let currentYear = new Date();
          if (title === '') {
            this.setState({emptyError: 'Title is required'});
          } else if (year === '') {
            this.setState({emptyError: 'Year is required'});
          } else if (genre === '') {
            this.setState({emptyError: 'Genre is required'});
          } else if (isNaN(year)) {
            this.setState({validate: false, numberError: 'Input is not a number', emptyError: ''});
          } else if (year < 1895 || year > currentYear.getFullYear()) {
            this.setState({validate: false, numberError: 'Invalid year', emptyError: ''});
          } else {
            this.setState({validate: true, numberError: '', emptyError: ''});
          }
        }

        _isExisting = () => {
            for (let i = 0; i < this.props.movies.length; i++) {
                if (this.title.value.trim() === this.props.movies[i].title) {
                    this.setState({validate: false, existError: this.title.value + ' is already in database'});
                } 
            }
        }

        _formValidator = () => {
            this._isEmpty();
            if (this.state.validate === true) {
                this._isExisting();
                if (this.state.validate === true) {
                    this._addMovie();
                }
            }
        }

      _resetForm = () => { 
        document.getElementById("adding_form").reset();
      }

    render() {
 
      return (
        <div id="formContainer">
        <FormErrors emptyError={this.state.emptyError} numberError={this.state.numberError} existError={this.state.existError} />
        <form id="adding_form">
            <div className="form-row">
                <label htmlFor="title">Title<span className="asterisk">*</span>:</label>
                <input type="text" id="title" name="title" ref={title => this.title = title} />
            </div>
            <div className="form-row">
                <label htmlFor="year">Year<span className="asterisk">*</span>:</label>
                <input type="text" id="year" name="year" ref={year => this.year = year} />
            </div>
            <div className="form-row">
                <label htmlFor="genre">Genre<span className="asterisk">*</span>:</label>
                <input type="text" id="genre" name="genre" ref={genre => this.genre = genre} />
            </div>
            <div className="form-row">
                <label htmlFor="summary">Summary:</label>
                <textarea id="summary" name="summary" ref={summary => this.summary = summary}></textarea>
            </div>
            <div id="form-requirements">
                <p>*required input</p>
            </div>
            <div className="add-btn">
                <button id="btn-form" onClick={this._handleClick}>Submit</button>
            </div>
        </form>
    </div>
      )
    }
}