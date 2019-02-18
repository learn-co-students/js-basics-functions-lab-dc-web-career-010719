function distanceFromHqInBlocks(dist) {
  return (dist > 42) ? dist - 42 : 42 - dist;
}

function distanceFromHqInFeet(dist) {
  return distanceFromHqInBlocks(dist) * 264;
}

function distanceTravelledInFeet(start, dest) {
  return (start < dest) ? (dest - start) * 264 : (start - dest) * 264;
}

function calculatesFarePrice(start, dest) {
  const distance = distanceTravelledInFeet(start, dest);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return .02 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  } 
}
