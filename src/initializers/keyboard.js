import { moveFocus, randomize, randomizeStorm, reset } from '../actionsCreators'
import { UP, DOWN, LEFT, RIGHT } from '../constants/directions'

const initializer = store => {

  const { dispatch } = store

  document.onkeydown = function({keyCode, shiftKey}) {
    switch (keyCode) {
      case 37:
        dispatch(moveFocus(LEFT, shiftKey))
        break
      case 38:
        dispatch(moveFocus(UP, shiftKey))
        break
      case 39:
        dispatch(moveFocus(RIGHT, shiftKey))
        break
      case 40:
        dispatch(moveFocus(DOWN, shiftKey))
        break
      case 82:
        dispatch(randomize())
        break
      case 83:
        dispatch(randomizeStorm())
        break
      case 90:
        dispatch(reset())
        break
      default:
    }
}

}

export default initializer
