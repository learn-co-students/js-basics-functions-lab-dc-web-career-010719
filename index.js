// Code your solution in this file!
// console.log('this code was called')

function distanceFromHqInBlocks(block) {
  if (block > 42) {
    return block - 42
  } else {
    return 42 - block
  }
}

function distanceFromHqInFeet(block) {
  if (block > 42) {
    return (block - 42) * 264
  } else {
    return (42 - block) * 264
  }
}

function distanceTravelledInFeet(block1, block2) {
  if (block1 > block2) {
    return (block1 - block2) * 264
  } else {
    return (block2 - block1) * 264
  }
}

function calculatesFarePrice(block1, block2) {
  dist = distanceTravelledInFeet(block1, block2)
  if (dist < 400) {
    return 0
  } else if (dist >= 400 && dist <= 2000) {
    return (dist - 400) * 0.02
  } else if (dist > 2000 && dist <= 2500) {
    return 25
  } else {
    return 'cannot travel that far'
  }
}