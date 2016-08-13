import { moveFocus, randomize, randomizeStorm, reset } from '../actionsCreators'
import { UP, DOWN, LEFT, RIGHT } from '../constants/directions'

const initializer = store => {

  const { dispatch } = store

  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 37:
        dispatch(moveFocus(LEFT))
        break
      case 38:
        dispatch(moveFocus(UP))
        break
      case 39:
        dispatch(moveFocus(RIGHT))
        break
      case 40:
        dispatch(moveFocus(DOWN))
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
