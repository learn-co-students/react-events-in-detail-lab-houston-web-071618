import React, { Component } from 'react'

class DelayedButton extends Component {
  createArray(e) {
  }
  
  render() {
    return (
      <button onClick={e => setTimeout( this.onDelayedClick(e), this.props.delay)}></button>
    )
  }  
}

export default DelayedButton
