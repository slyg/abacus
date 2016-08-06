const soundOrigin = 'http://soundbible.com/grab.php?id=2108&type=mp3'
const tickDelay = 200 // ms
const tick = new Audio(soundOrigin, {loop: false})

export const tickSound = () => {
  setTimeout(() => tick.play(), tickDelay)
}
