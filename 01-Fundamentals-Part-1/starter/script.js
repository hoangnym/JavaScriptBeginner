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
// let markHeight = 1.88
// let markWeight = 95
// let johnHeight = 1.76
// let johnWeight = 85

// const markBMI = markWeight / (markHeight ** 2)
// const johnBMI = johnWeight / (johnHeight ** 2)

// console.log(markBMI, johnBMI)

// const markHigherBMI = markBMI > johnBMI

// console.log(markHigherBMI)


// string literals
const fullName = 'Hoang';
const job = 'programmer';
const birth = 1994

const hoang = `I'm ${fullName}, a ${currentYear - birth} year old ${job}.`;

console.log(hoang);


// if-else
const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license.');
} else {
    console.log('Sarah is not old enough.');
}

// coding challenge # 2
let markHeight = 1.88
let markWeight = 95
let johnHeight = 1.76
let johnWeight = 85

const markBMI = markWeight / (markHeight ** 2)
const johnBMI = johnWeight / (johnHeight ** 2)
const markHigherBMI = markBMI > johnBMI

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI}).`)
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI}).`)
}

// type conversion
const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18); // transforms 18 to a string and concatenates
console.log(String(23)) // converts number to string

// type coercion // automatically in JavaScript
console.log('I am ' + 23 + ' years old.');
console.log('23' - '10' - 3); // converts string to number
console.log('23' + '10' + 3); // converts number to string
console.log('23' / '2') // converts string to number

// booleans -- falsy values: 0, '', undefined, null, NaN, false
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Hoang'));
console.log(Boolean({}));

const money = 0;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log("You should get a job."); // this will trigger, bc 0 is falsey value
}

let height;
if (height) {
    console.log('Yay! Height is defined.');
} else {
    console.log('Height is undefined.');
};


// equality operators
const favourite = Number(prompt("What is your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite == 23) {
    console.log("Cool! 23 is an amazing number!")
} else if (favourite === 7) {
    console.log("7 is also a cool number.")
}

if (favourite !== 23) console.log("Why not 23?");

// boolean logic
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision) //and
console.log(hasDriversLicense || hasGoodVision) //or
console.log(!hasDriversLicense) //not

const shouldDrive = hasDriversLicense && hasGoodVision;

if(shouldDrive) {
    console.log("Sarah is able to drive.");
} else {
    console.log("Someone else should drive...");
}

const isTired = true; //C
console.log(hasDriversLicense || hasGoodVision || isTired);

// coding challenge #3
let dolphinScores = [96, 108, 89];
let koalaScores = [96, 108, 89];
let dolphinsAvgScore = dolphinScores.reduce((a, b) => a + b, 0)/dolphinScores.length;
let koalaAvgScore = koalaScores.reduce((a, b) => a + b, 0)/koalaScores.length;

if (dolphinsAvgScore > koalaAvgScore) {
    console.log(`The winner are the dolphins. Score: ${dolphinsAvgScore} : ${koalaAvgScore}`);
} else if (koalaAvgScore > dolphinsAvgScore) {
    console.log(`The winner are the koalas. Score: ${dolphinsAvgScore} : ${koalaAvgScore}`);
} else {
    console.log(`It is a draw. Score: ${dolphinsAvgScore} : ${koalaAvgScore}`);
}