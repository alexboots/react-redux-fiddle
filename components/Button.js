import React, { Component } from 'react'

class Button extends Component {
  render() {
    const { 
      clickButton, 
      clicked,
      timesClicked
    } = this.props

    return (
      <div>
        <button onClick={ clickButton }>clicky</button>
        <div>clicked: { clicked ? 'yup' : 'nope' }</div>
        { timesClicked !== 0 && <div>times clicked: { timesClicked }</div> }
      </div>
    )
  }
}

export default Button