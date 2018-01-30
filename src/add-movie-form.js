import React from 'react';
import FormErrors from './form-errors';

export default class AddMovieForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {validate: false,
        emptyError: '',
        numberError: ''};
        this._handleClick = this._handleClick.bind(this);
    }

    _handleClick (event) {
        event.preventDefault();
        this._isEmpty();
        this._isValidNumber();
        if (this.state.validate === true) {
            this.props.afterClick(this.title.value.trim(), this.year.value.trim(), this.genre.value.trim(), this.summary.value.trim());
            this._resetForm();
        }
      }

      _isEmpty = () => {
          if (this.title.value.trim() === '') {
            this.setState({validate: false, emptyError: 'Title is required'});
          } else if (this.year.value.trim() === '') {
            this.setState({validate: false, emptyError: 'Year is required'});
          } else if (this.genre.value.trim() === '') {
            this.setState({validate: false, emptyError: 'Genre is required'});
          } else {
            this.setState({validate: true, emptyError: ''});
          }

      }

      _isValidNumber = () => {
        const year = this.year.value.trim();
        let currentYear = new Date();
        if (isNaN(year)) {
            this.setState({validate: false, numberError: 'Input is not a number'});
        } else if (year < 1895 || year > currentYear.getFullYear()) {
            this.setState({validate: false, numberError: 'Invalid year'});
        } else {
            this.setState({validate: true, numberError: ''});
        }
      }

      _resetForm = () => { 
        document.getElementById("adding_form").reset();
      }

    render() {
 

        return (
        <div id="formContainer">
        <FormErrors emptyError={this.state.emptyError} numberError={this.state.numberError} />
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
                <button onClick={this._handleClick}>Submit</button>
            </div>
        </form>
    </div>
      )
    }
}