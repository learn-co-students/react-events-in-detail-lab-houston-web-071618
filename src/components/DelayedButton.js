// Code DelayedButton Component Here
import React, { Component } from 'react'
  class DelayedButton extends Component {

    //onDelayedClick (a function), and delay (a number).
    //this.props.delay

    // Create a button that, when clicked, will pass the click event to the onDelayedClick prop within a setTimeout(). The setTimeout() should be set to this.props.delay.

    // If successful, the event will be logged to the console once the timeout has finished.

      handleClick = (event) => {
        // Event pooling means that whenever an event fires, its event data (an object) is sent to the callback. The object is then immediately cleaned up for later use. This is what we mean by 'pooling': the event object is in effect being sent back to the pool for use in a later event. 
        event.persist();
        setTimeout(() => {
          this.props.onDelayedClick(event);
        }, this.props.delay);
      }

      render() {
      return (
        <div className='DelayedButton'>
          <button type="submit" onClick={this.handleClick}>Delay</button>
        </div>
      )
    }
  }

export default DelayedButton;
