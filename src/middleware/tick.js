import { INC, DEC } from '../constants/actionTypes'

const soundOrigin = 'http://soundbible.com/grab.php?id=2108&type=mp3'
const tickDelay = 200 // ms
const poolSize = 3
const tickPool = Array.from(Array(poolSize)).map(() => new Audio(soundOrigin, {loop: false}))

function* gen (n = 0) {
  yield 0
  yield 1
  yield 2
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
      tickSound()
      break

    default:
  }

  next(action)

}

export default middleware
