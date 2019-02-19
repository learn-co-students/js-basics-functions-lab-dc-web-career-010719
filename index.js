// Code your solution in this file!
function distanceFromHqInBlocks(street){
  return Math.abs(42 - street)
}

function distanceFromHqInFeet(street){
  return distanceFromHqInBlocks(street)*264
}

function distanceTravelledInFeet(start, end){
  return Math.abs(end - start)*264
}

function calculatesFarePrice(start, end){

  distance = distanceTravelledInFeet(start, end) - 400

  if (distance < 0) {
    return 0
  } else if (distance < 1600){
    return distance*.02
  } else if (distance > 1600 && distance < 2100){
    return 25
  } else {
    return 'cannot travel that far'
  }

}
