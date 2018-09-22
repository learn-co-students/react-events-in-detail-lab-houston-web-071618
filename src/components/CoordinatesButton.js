// Code CoordinatesButton Component Here
import React, { Component } from 'react'
  class CoordinatesButton extends Component {

      handleClick = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY]);
      }

      render() {
      return (
        <div className='CoordinatesButton'>
          <button type="submit" onClick={this.handleClick}>Coordinates</button>
        </div>
      )
    }
  }

export default CoordinatesButton;
