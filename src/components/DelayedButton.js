// Code DelayedButton Component Here
import React, {Component} from 'react'

export default class DelayedButton extends Component{

 handleOnClickDelay = (event) => {
   event.persist();
   setTimeout( () => {
     this.props.onDelayedClick(event);
   }, this.props.delay);
 }//end handleOnClickDelay

  render(){

    return(
      <button onClick={this.handleOnClickDelay}>Delay Button</button>
    )
  }

}//end class DelayedButton
