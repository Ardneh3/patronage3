import React from 'react';
import AddMovieForm from './add-movie-form';

export default class FormErrors extends React.Component {

    render() {
        return <p style={{color: 'red'}}>{this.props.emptyError} <br /> {this.props.numberError}</p>
    }
}