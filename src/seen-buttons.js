import React from 'react';

export default class SeenButtons extends React.Component {

    render() {
        let buttonText = null;
        if (this.props.seen === 'T') {
            buttonText = 'Seen';
        } else {
            buttonText = 'Unseen';
        }

        return <button>{buttonText}</button>;
    }
}