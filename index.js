// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  return Math.abs(42 - block)
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264
}

function distanceTravelledInFeet(block1, block2) {
  return Math.abs(block1 - block2) * 264
}

function calculatesFarePrice(block1, block2) {
  let d = distanceTravelledInFeet(block1, block2)
  let p
  if (d < 400) {
    p = 0
  }
  else if (d < 2000) {
    p = (d - 400) * .02
  }
  else if (d < 2500) {
    p = 25
  }
  else {
    p = 'cannot travel that far'
  }
  return p
}
