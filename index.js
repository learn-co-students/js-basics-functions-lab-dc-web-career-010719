
function distanceFromHqInBlocks(pickupLocation) {
  distance = Math.abs(pickupLocation - 42)
  return distance
}

function distanceFromHqInFeet(pickupLocation) {
  distance = distanceFromHqInBlocks(pickupLocation) * 264
  return distance
}

function distanceTravelledInFeet(beginning, destination) {
  distanceInBlocks = Math.abs(beginning - destination)
  distance = distanceInBlocks * 264
  return distance
}

function calculatesFarePrice(beginning, destination) {
  distance = distanceTravelledInFeet(beginning, destination)

  if (distance <= 400) {
    return 0
  } else if (distance > 400 && distance <= 2000) {
    return ((distance - 400)/50)
  } else if (distance > 2000 && distance <= 2500) {
    return 25
  } else {
    return 'cannot travel that far'
  }
  
}
