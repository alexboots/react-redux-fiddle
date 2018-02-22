import React, { Component } from 'react'
import { connect } from 'react-redux'

import { clickButton } from '../_actions/click'

import Button from './Button'

class ButtonContainer extends Component {
  render() {
    const { 
      clickButton, 
      clicked,
      timesClicked
    } = this.props

    return (
      <Button 
        clicked={ clicked }
        clickButton={ clickButton }
        timesClicked={ timesClicked }
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { clicked, timesClicked } = state.click

  return { 
    clicked,
    timesClicked
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  clickButton: () => {
    dispatch(clickButton())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ButtonContainer)