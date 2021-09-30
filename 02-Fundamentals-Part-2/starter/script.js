// learn about strict mode
'use strict';

let hasDriversLicense = false;
let passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("passed the test.");

// const interface = 'Audio';
// const private = 543;

// functions
function logger() {
    console.log('My name is Hoang.');
}

logger(); // calling / invoking / running the function

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    console.log(applePieces, orangePieces);
    const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges.`
    return juice
}

let appleJuice = fruitProcessor(2, 3);
console.log(appleJuice);

let appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// functions calling other functions
function cutFruitPieces(fruit) {
    return fruit * 4
}


// coding challenge # 1
const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
};

function checkWinner(avg1, avg2) {
    if (avg1 >= 2 * avg2) {
        console.log(`Dolphins win (${avg1} vs. ${avg2}).`);
    } else if (avg2 >= 2 * avg1) {
        console.log(`Koalas win (${avg2} vs. ${avg1}).`);
    } else {
        console.log('It is a draw.')
    }
}

let dolphins = calcAverage(44, 23, 71);
let koalas = calcAverage(65, 54, 49);

checkWinner(dolphins, koalas);

dolphins = calcAverage(85, 54, 41);
koalas = calcAverage(23, 34, 27);

checkWinner(dolphins, koalas);


// arrays
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);

// methods: .push, .pop, .unshift(<ele>), .shift, .indexOf(<ele>), .includes(<ele>)

// coding challenge #2
const calcTip = (bill, percentage) => { return bill * percentage };
const bills = [125, 555, 44]
const tips = new Array()
const totals = new Array()

bills.forEach((num) => { 
    let tip = num >= 50 && num <= 300 ? calcTip(num, 0.15) : calcTip(num, 0.2);
    tips.push(tip)
    totals.push(num + tip);
})

console.log(bills);
console.log(tips);
console.log(totals);


// objects
const persona = {
    firstName: "Hoang",
    lastName: "Nguyen",
    birthYear: 1994,
    job: "programmer",
    friends: ["Kevin", "Nils", "Huy"],
    hasDriversLicense: true,

    calcAge: function () {
        console.log(this);
        return 2021 - this.birthYear; 
    }
}

console.log(persona);

// Dot vs. Bracket Notation
console.log(persona.firstName);
console.log(persona["lastName"]);

const nameKey = "Name";
console.log(persona["first" + nameKey]);
console.log(persona["last" + nameKey]);

// const interestedIn = prompt('What do you want to know about Hoang? Choose between firstName, lastName, age, job, and friends?');
// console.log(persona[interestedIn]);

console.log(`${persona.firstName} has ${persona.friends.length} friends, and his best friend is called ${persona.friends[0]}.`)

// object methods
console.log(persona.calcAge());