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

export const tickSound = () => {
  const r = getNextIndex.next().value
  setTimeout(() => tickPool[r].play(), tickDelay)
}
