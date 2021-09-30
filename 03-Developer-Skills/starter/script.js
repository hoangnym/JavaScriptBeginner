// Remember, we're gonna use strict mode in all scripts now!
'use strict';

console.log("Hello world.");
console.log("Hello");
console.log("What is going on.");


// coding challenge
let temperatures = [17, 21, 23];

function printForecast(arr) {
    let sentence = "..."
    for (let i = 0; i < arr.length; i++) {
        sentence += ` ${arr[i]}°C in ${i+1} ${i === 0 ? "day" : "days"} ...`
    }
    
    return sentence
}

let forecast = printForecast(temperatures);
console.log(forecast);

let temperatures2 = [12, 5, -5, 0, 4];
let forecast2 = printForecast(temperatures2);
console.log(forecast2);