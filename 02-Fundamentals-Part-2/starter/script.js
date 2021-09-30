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