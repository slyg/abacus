const tick = new Audio('http://soundbible.com/grab.php?id=2108&type=mp3', {loop: false})
const tickDelay = 200 // ms

export const tickSound = () =>
  setTimeout(() => tick.play(), tickDelay)
