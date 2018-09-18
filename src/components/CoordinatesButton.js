// Code CoordinatesButton Component Here
import React, { Component } from 'react';


export default class CoordinatesButton extends Component {

  coords =  (event)=>{

    const coordinates = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(coordinates)
  }

  render() {
    return (
      <div>
        <button onClick={this.coords}>Click Me</button>
      </div>
    )
  }

}
