import React, { Component } from 'react'


class DelayedButton extends Component {
  render () {
    return (
      <button onClick={this.handleClick}>Delay!</button>
    )
  }

  handleClick = (event) => {
    event.persist()
    const cb = this.props.onDelayedClick
    const delay = this.props.delay
    const clickEvent = event
    setTimeout(() => {
      cb(clickEvent)
    }, delay)
  }
}

export default DelayedButton
