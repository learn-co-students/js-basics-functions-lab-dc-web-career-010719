// Code your solution in this file!
function distanceFromHqInBlocks (someValue) {
  //returns the number of blocks given a value
  x = (someValue - 43)+1
  return Math.abs(x);
}

function distanceFromHqInFeet (someValue) {
  x = distanceFromHqInBlocks(someValue);
  return x * 264;
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  //the return value of distanceFromHqInBlocks can then be used to calculate feet
}


function distanceTravelledInFeet(x, y) {
  z = distanceFromHqInFeet (y)-distanceFromHqInFeet (x);
  return z;


}
function calculatesFarePrice(start, destination) {
  let x = distanceTravelledInFeet(start, destination);

  if (x <= 400) {
    return 0;
  } else if (x > 400 && x <= 2000) {
    return .02 * (x - 400);
  } else if (x > 2000 && x < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }

}
