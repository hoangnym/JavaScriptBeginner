let js = "amazing";
console.log(40 + 8 + 23 - 10);

// variables and values
let PI = 3.1415

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

let countryName = 'Germany';
let countryContinent = 'Europe';
let countryPopulation = 80000000

console.log(countryName, countryContinent, countryPopulation)


// data types
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof(javascriptIsFun));

javascriptIsFun = 'Yes!';
console.log(javascriptIsFun);
console.log(typeof(javascriptIsFun));

let year; //undefined value and type
console.log(year) // undefined value
console.log(typeof(year)) // undefined type

year = 1991
console.log(year) // 1991
console.log(typeof(year)) // number

let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof countryPopulation);
console.log(typeof countryName);
console.log(typeof language);

// let, const and var
const birthYear = 1994; // not possible to change

language = 'German';
const areaOfCountry = 354;

console.log(language);
console.log(areaOfCountry);

// basic operators: comparison, mathematical, ...
const currentYear = 2021
const ageHoang = currentYear - 1994;
const ageDuong = currentYear - 1997;

console.log(ageHoang, ageDuong);
console.log(ageHoang * 2, ageHoang / 10, 2 ** 3);

const firstName = 'Hoang';
const lastName = 'Nguyen';
console.log(firstName + ' ' + lastName);

console.log(ageHoang > ageDuong);

// coding challenge # 1
let markHeight = 1.88
let markWeight = 95
let johnHeight = 1.76
let johnWeight = 85

const markBMI = markWeight / (markHeight ** 2)
const johnBMI = johnWeight / (johnHeight ** 2)

console.log(markBMI, johnBMI)

const markHigherBMI = markBMI > johnBMI

console.log(markHigherBMI)


// string literals
const fullName = 'Hoang';
const job = 'programmer';
const birth = 1994

const hoang = `I'm ${fullName}, a ${currentYear - birth} year old ${job}.`;

console.log(hoang);


// if-else
const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license.')
} else {
    console.log('Sarah is not old enough.')
}

