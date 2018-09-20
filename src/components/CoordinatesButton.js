import React, { Component } from 'react'

class CoordinatesButton extends Component {

  handleClick = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render() {
    return (
      <button onClick={this.handleClick}>Coors</button>
    )
  }
}

export default CoordinatesButton