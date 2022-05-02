// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = () => drivers.slice(0,2);
console.log(returnFirstTwoDrivers(drivers));

const returnLastTwoDrivers = () => drivers.slice(2);
console.log(returnLastTwoDrivers(drivers));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(fareMultiplier) {
    return function() {
        return (fareMultiplier * fareMultiplier);
    };
}
console.log(createFareMultiplier(5)());

function fareDoubler(fare) {
    return function() {
        return (fare * 2);
    };
}
console.log(fareDoubler(10)());

function fareTripler(tripleFare) {
    return function() {
        return (tripleFare * 3);
    };
}
console.log(fareTripler(12)());


const selectDifferentDrivers = (drivers, returnFirstTwoDrivers) => {
    return returnFirstTwoDrivers();
};
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));