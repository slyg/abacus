import { TOGGLE_MUTE } from '../constants/actionTypes'

const initialState = {
  muted: false
}

const reducer = (state = initialState, action) => {

  const { type } = action

  switch (type) {
    case TOGGLE_MUTE:
      return {
        ...state,
        muted: !state.muted
      }

    default:
      return state

  }

}

export default reducer
