import React, { Component } from 'react'


export default class DelayedButton extends Component {

  handleClick = (event) => {
    event.persist()
    let x = this.props
    setTimeout(() => x.onDelayedClick(event), x.delay)
  }

  render(){
      return(
        <button onClick={this.handleClick}>Delay Button</button>
    )
  }
}
