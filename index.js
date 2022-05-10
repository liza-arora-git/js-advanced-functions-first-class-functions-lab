// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = () => drivers.slice(0,2);
console.log(returnFirstTwoDrivers(drivers));

const returnLastTwoDrivers = () => drivers.slice(2);
console.log(returnLastTwoDrivers(drivers));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(multiplier) {
    return function(fare) {
        return (fare * multiplier);
    };
}

let fareDoubler = createFareMultiplier(2);
let fareTripler = createFareMultiplier(3);
let fareQuintupler = createFareMultiplier(5);

console.log(createFareMultiplier(5));
console.log(fareTripler(2));
console.log(fareQuintupler(10));

// function fareDoubler(fare) {
//     return function() {
//         return (fare * 2);
//     };
// }
// console.log(fareDoubler(10)());

// function fareTripler(tripleFare) {
//     return function() {
//         return (tripleFare * 3);
//     };
// }
// console.log(fareTripler(12)());


const selectDifferentDrivers = (drivers, returnFirstTwoDrivers) => {
    return returnFirstTwoDrivers();
};
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));