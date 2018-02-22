import { CLICK_BUTTON } from '../_constants/actions'

const defaultState = {
  clicked: false,
  timesClicked: 0
}

const click = (state = defaultState, action) => {
  switch (action.type) {
    case CLICK_BUTTON:
      console.log('state', state);
      const increaseClickedCount = state.timesClicked + 1
      return {
        ...state,
        clicked: true,
        timesClicked: increaseClickedCount
      }
    default:
      return state
  }
}

export default click