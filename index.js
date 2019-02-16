// Code your solution in this file!
function distanceFromHqInBlocks(loc) {
    if (loc > 42) {
        return loc - 42
    }
    else if (loc < 42) {
        return 42 - loc
    }
}

function distanceFromHqInFeet (loc) {
    return distanceFromHqInBlocks(loc) * 264
}

function distanceTravelledInFeet(loc1, loc2) {
    if (loc1 > loc2) {
       return (loc1 - loc2) * 264
    }
    else if (loc2 > loc1) {
       return (loc2 - loc1) * 264
    } 
}

function calculatesFarePrice(start, destination) {
    let dist = distanceTravelledInFeet(start, destination)
    if (dist < 400) {
        return 0
    }
    
    else if (dist > 400 && dist < 2000) {
        return (dist - 400) * 0.02
        
    }
    
    else if (dist > 2000 && dist < 2500) {
        return 25
    }
    
    else if (dist > 2500) {
        return 'cannot travel that far'
    }
    
}


