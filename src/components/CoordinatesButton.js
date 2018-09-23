import React from 'react';

class CoordinatesButton extends React.Component {
  handleClick = (e) => {
    let x = e.clientX;
    let y = e.clientY;
    this.props.onReceiveCoordinates([x, y]);
    // Pass this event data in as the argument for the onReceiveCoordinates prop.
  };

  // Render a button. On click of the button, create an array with two elements: the X and Y coordinates of the mouse. Find these using the event data.
  render() {
    return (
      <button onClick={this.handleClick.bind(this)}>
        Get coordinates array
      </button>
    );
  }
}

export default CoordinatesButton;
