import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

  handleClick = (event) => {
    // console.log([event.clientX, event.clientY])
    const coordinates = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(coordinates)
  }

  render() {
    return(
      <button onClick={this.handleClick} >Coordinates Button</button>
    )
  }

}
