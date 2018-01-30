import React from 'react';
import './form-errors.css';

export default class FormErrors extends React.Component {

    render() {
        return <p className="form-error">{this.props.emptyError} <br /> {this.props.numberError} <br /> {this.props.existError} </p>
    }
}