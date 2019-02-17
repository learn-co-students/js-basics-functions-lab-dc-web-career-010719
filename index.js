// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
   return (someValue > 42) ? someValue - 42 : 42 - someValue;
}

function distanceFromHqInFeet(location) {
    return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet(start, destination) {
    let blocks = (start > destination) ? start - destination : destination - start;
    return blocks * 264;
}

function calculatesFarePrice(start, destination) {
    let footeth = distanceTravelledInFeet(start, destination);
    if (footeth < 400) {
        return 0;
    } else if (footeth > 400 && footeth < 2000) {
        return (footeth - 400) * 0.02;
    } else if (footeth > 2000 && footeth < 2500) {
        return 25;
    } else {
        return "cannot travel that far"
    }
}
