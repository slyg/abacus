import { INCREMENT, DECREMENT, RANDOM, RESET } from '../constants/actionTypes'
import { tick as soundOrigin } from '../constants/sounds'

const tickDelay = 200 // ms
const poolSize = 10 // number of audio channels

const audio = new Audio(soundOrigin, {loop: false})
const tickPool = Array.from(Array(poolSize)).map(() => audio.cloneNode())

function* gen() {
  yield* Array.from(Array(poolSize)).map((_, i) => i)
  yield* gen()
}

const getNextIndex = gen();

const tickSound = () => {
  const r = getNextIndex.next().value
  setTimeout(() => tickPool[r].play(), tickDelay)
}

const middleware = store => next => action => {

  switch (action.type) {
    case INCREMENT:
    case DECREMENT:
    case RANDOM:
      tickSound()
      break

    case RESET:
      if(store.getState().wiresCollection.some(({right}) => right > 0)) {
        tickSound()
      }
      break

    default:
  }

  next(action)

  tickPool.forEach(sound => {
    sound.muted = store.getState().sound.muted
    return sound
  })

}

export default middleware
