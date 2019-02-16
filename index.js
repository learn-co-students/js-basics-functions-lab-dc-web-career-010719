// Code your solution in this file!
function distanceFromHqInBlocks(street){
 return Math.abs(street-42)
}

function distanceFromHqInFeet(street){
  return distanceFromHqInBlocks(street)*264
}

function distanceTravelledInFeet(start, end){
  return Math.abs(start-end)*264
}

function calculatesFarePrice(start, destination){

  if (distanceTravelledInFeet(start, destination)>2500){
    return "cannot travel that far"
  }
  else if (distanceTravelledInFeet(start, destination)<= 400){
    return 0
  }
  else if (distanceTravelledInFeet(start, destination) <= 2000){
    return (distanceTravelledInFeet(start, destination)-400)*.02
  }
  else {
    return 25
  }

}
