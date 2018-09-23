import React from 'react';
/* 

This component takes two props: onDelayedClick (a function), and delay (a number).

Create a button that, when clicked, will pass the click event to the onDelayedClick prop within a setTimeout(). The setTimeout() should be set to this.props.delay.

If successful, the event will be logged to the console once the timeout has finished.

*/

class DelayedButton extends React.Component {
  handleClick = (e) => {
    e.persist(); // Use to access event properties asynchronously
    setTimeout(() => {
      this.props.onDelayedClick(e);
    }, this.props.delay);
  };

  render() {
    return <button onClick={this.handleClick.bind(this)}>Delay</button>;
  }
}

export default DelayedButton;
