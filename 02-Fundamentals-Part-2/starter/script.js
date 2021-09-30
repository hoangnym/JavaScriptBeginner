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
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice
}

let appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

let appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

