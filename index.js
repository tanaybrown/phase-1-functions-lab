// Code your solution in this file!

function distanceFromHqInBlocks(streetNumber) {
    return Math.abs(42 - streetNumber)
}

function distanceFromHqInFeet(streetNumber) {
    return distanceFromHqInBlocks(streetNumber)*264
}

function distanceTravelledInFeet(destination, start) {
    return Math.abs(destination - start) * 264
 }

function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet (start, destination)
    if (distanceInFeet < 400) {
        return 0
    }   else if (distanceInFeet >= 400 && distanceInFeet <=2000) {
        const totalDistanceInFeet2 = distanceInFeet - 400
        return totalDistanceInFeet2 * .02
    }   else if (distanceInFeet > 2000 && distanceInFeet <=2500) {
        return 25
    }   else {
        return "cannot travel that far"
    }
}

