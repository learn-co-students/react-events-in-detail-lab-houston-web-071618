// Code DelayedButton Component Here

import React from 'react';
// import ReactDOM from 'react-dom';

class DelayedButton extends React.Component {

    handleClick = (event) => {
        event.persist();
        // can also use const target = event.target to prevent pooling and allow for asynchronicity
        setTimeout(() => {
          this.props.onDelayedClick(event);
        }, this.props.delay);
      }

      // how to set up a setTimeout per the React guide
    //   setTimeout(function() {
    //     console.log(event.type); // => null
    //     console.log(eventType); // => "click"
    //   }, 0);


    render() {
        return (
            <button onClick={this.handleClick}>Click</button>
        )
    }
}

export default DelayedButton;



// In the components/DelayedButton.js file, create a DelayedButton React component

// This component takes two props: onDelayedClick (a function), and delay (a number).

// Create a button that, when clicked, will pass the click event to the onDelayedClick prop within a setTimeout(). The setTimeout() should be set to this.props.delay.

// If successful, the event will be logged to the console once the timeout has finished.