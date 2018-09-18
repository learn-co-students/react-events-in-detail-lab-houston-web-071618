import React, { Component } from 'react'

class CoordinatesButton extends Component {
  render () {
    return (
      <button onClick={this.handleClick}>Coordinates!</button>
    )
  }

  handleClick = (event) => {
    const cb = this.props.onReceiveCoordinates
    const coordinates = [event.clientX, event.clientY]
    cb(coordinates)
  }
}

export default CoordinatesButton
