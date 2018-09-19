import React, { Component } from 'react'

class CoordinatesButton extends Component {
  createArray(e) {
    // debugger
    this.onReceiveCoordinates([e.clientX, e.clientY])
  }
  
  render() {
    return (
      <button onClick={e => this.createArray(e)}></button>
    )
  }  
}

export default CoordinatesButton