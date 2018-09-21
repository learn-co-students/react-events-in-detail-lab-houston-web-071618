import React, { Component } from "react";

// DelayedButton
// In the components/DelayedButton.js file, create a DelayedButton React component
//
// This component takes two props: onDelayedClick (a function), and delay (a number).
//
// Create a button that, when clicked, will pass the click event to the onDelayedClick prop within a setTimeout(). The setTimeout() should be set to this.props.delay.
//
// If successful, the event will be logged to the console once the timeout has finished.

class DelayedButton extends Component {
  handleClick = e => {
    e.persist();
    setTimeout(() => {
      this.props.onDelayedClick(e);
    }, this.props.delay);
    // debugger;
  };
  render() {
    return <button onClick={this.handleClick}>delayed</button>;
  }
}

export default DelayedButton;
