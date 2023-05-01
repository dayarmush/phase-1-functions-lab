// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    let result
    if ((block - 42) < 0) {
        result = (block - 42) * -1;
        return result;
    } else {
        result = block - 42;
        return result;
    }
};

function distanceFromHqInFeet(block) {
    let blocksAway = distanceFromHqInBlocks(block) 
    return blocksAway * 264;
};

function distanceTravelledInFeet(start, stop) {
    let feetTravelled;
    let result;
    if (start - stop < 0 ) {
        result = (start - stop) * -1
    } else {
        result = start - stop;
    }
    feetTravelled = result * 264;
    return feetTravelled;
};

function calculatesFarePrice(pickUp, dropOff) {
    let feet = distanceTravelledInFeet(pickUp, dropOff)
    let price;
    if (feet <= 400) {
        price = 0;
        return price
    } else if (feet > 400 && feet <= 2000) {
        price = feet - 400;
    return price * .02;
    } else if (feet > 2000 && feet <= 2500) {
        return price = 25;
    } 
    return 'cannot travel that far';
};