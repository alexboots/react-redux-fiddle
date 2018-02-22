import React, { Component } from 'react'
import './App.less'

import ButtonContainer from './ButtonContainer'

class App extends Component {
  render() {
    const { clickButton, clicked } = this.props
    return (
      <div className="hello">
        Well, well, well 
        <ButtonContainer />
      </div>
    )
  }
}

export default App