// Code your solution in this file!

function distanceFromHqInBlocks(blockNumber) {
  return Math.abs(blockNumber - 42)
}

function distanceFromHqInFeet(blockNumber) {
  return distanceFromHqInBlocks(blockNumber) * 264
}

function distanceTravelledInFeet(block1, block2) {
  return Math.abs(block1 - block2) * 264
}

function calculatesFarePrice(block1, block2) {
  const distance = distanceTravelledInFeet(block1, block2)

  switch (true) {
    case distance <= 400:
    return 0
    case distance > 400 && distance <= 2000:
    return (distance - 400) * .02
    case distance > 2000 && distance <= 2500:
    return 25
    default:
    return 'cannot travel that far'

  }
}
