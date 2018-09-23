// Code CoordinatesButton Component Here
import React, {Component} from 'react';

export default class CoordinatesButton extends Component{

  handleOnClick = (event) =>{
    let newArray = [];
    newArray.push(event.clientX);
    newArray.push(event.clientY);
    console.log(newArray);
    this.props.onReceiveCoordinates(newArray);
  }

  render(){

    return(
      <button onClick={this.handleOnClick} >Coordinates</button>
    )
  }

}//end CoordinatesButton
