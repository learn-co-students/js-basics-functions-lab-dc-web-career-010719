// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  if (block > 42) {
    return (block - 42)
  } else (block < 42) 
  {
    return (42 - block)
  }
}

function distanceFromHqInFeet(block) {
  if (block > 42) {
    return (block - 42 ) * 264
  } else {
    return (42-block) * 264
  }
}

function distanceTravelledInFeet(block1, block2) {
  if (block1 > block2) {
    return (block1 - block2) * 264
  } else {
    (block2 < block1) 
    return (block2 - block1) * 264
  }
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination)
  if (distance < 400) {
    return (0)
  } else if (distance > 400 && distance <= 2000) {
    return .02 * (distance - 400)
  } else if (distance > 2500) {
    return 'cannot travel that far'
  } else {
    return 25
  }
}
