import { moveFocus } from '../actionsCreators'
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
      default:
    }
}

}

export default initializer
