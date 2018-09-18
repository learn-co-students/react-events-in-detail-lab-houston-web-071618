// Code DelayedButton Component Here
import React, { Component } from 'react';


export default class DelayedButton extends Component {

  delay = (event)=>{
    event.persist();
    setTimeout(function(){
      this.props.onDelayedClick(event)
    }.bind(this),this.props.delay)
  }


  render() {
    return (
      <div>
        <button onClick ={this.delay}>Click Me</button>
      </div>
    )
  }

}
