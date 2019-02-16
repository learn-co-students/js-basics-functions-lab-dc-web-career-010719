// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  if (distance >= 42) {
    return distance - 42;
  } else {
    return 42 - distance;
  }
}

function distanceFromHqInFeet(distance) {
  if (distance >= 42) {
    return (distance - 42) * 264;
  } else {
    return (42 - distance) * 264;
  }
}

function distanceTravelledInFeet(start, destination) {
  if (destination >= start) {
    return (destination - start) * 264;
  } else {
    return (start - destination) * 264;
  }
}

function calculatesFarePrice(start, destination) {
  let drive = distanceTravelledInFeet(start, destination);
  if (drive <= 400) {
    return 0;
  } else if (drive > 400 && drive <= 2000) {
    return 0.02 * (drive - 400);
  } else if (drive >= 2000 && drive <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
