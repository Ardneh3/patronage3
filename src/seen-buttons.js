import React from 'react';
import './seen-buttons.css';

export default class SeenButtons extends React.Component {
    constructor(props) {
      super(props);
      this._handleOnClick = this._handleOnClick.bind(this);
    }

    _handleOnClick () {
      this.props.onButtonClick(this.props.id)
      }

    render() {
      let buttonText = null;
      if (this.props.seen === 'T') {
        buttonText = 'Seen';
      } else {
        buttonText = 'Unseen';
      }

      return <button className={buttonText} onClick={this._handleOnClick}>{buttonText}</button>;
    }
}