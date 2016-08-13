import { INC, DEC, RAN, RES } from '../constants/actionTypes'

const soundOrigin = 'http://soundbible.com/grab.php?id=2108&type=mp3'
const tickDelay = 200 // ms
const poolSize = 10 // number of audio channels
const tickPool = Array.from(Array(poolSize)).map(() => new Audio(soundOrigin, {loop: false}))

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
    case INC:
    case DEC:
    case RAN:
      tickSound()
      break
      
    case RES:
      if(store.getState().wiresCollection.some(({right}) => right > 0)) {
        tickSound()
      }
      break

    default:
  }

  next(action)

}

export default middleware
