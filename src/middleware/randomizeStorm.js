import { RANSTORM } from '../constants/actionTypes'
import { randomize } from '../actionsCreators'

const middleware = store => next => action => {

  switch (action.type) {
    case RANSTORM:
      const effect = setInterval(() => {
        window.requestAnimationFrame(() => store.dispatch(randomize()))
      }, 125)
      setTimeout(() => clearInterval(effect), 1000)
      break

    default:
  }

  next(action)

}

export default middleware
