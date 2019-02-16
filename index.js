// Code your solution in this file!
function distanceFromHqInBlocks(value){
  if (value < 42){
    return 42 - value;
  }
  return value - 42
}

function distanceFromHqInFeet(value){
  return distanceFromHqInBlocks(value) * 264
}

function distanceTravelledInFeet(value1, value2){
  return distanceFromHqInFeet(value2) - distanceFromHqInFeet(value1)
}

function calculatesFarePrice(start, destination){
   if (distanceTravelledInFeet(start, destination) < 400 ){
    return 0
  } else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000) {
  return (distanceTravelledInFeet(start, destination) - 400) * 0.02
} else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500) {
    return 25
  } else {
    return 'cannot travel that far'
  }
}
