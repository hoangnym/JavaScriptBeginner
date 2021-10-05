'use strict';

function calcAge(birthYear) {
    const age = 2021 - birthYear;
    
    function printAge() {
        const output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var milennial = true;
            const firstName = "Steven"; // looks for current scope first
            const str = `Oh, you are a milennial, ${firstName}`;
            console.log(str);

            function add(a, b) {return a + b};
        }
        // console.log(str); // block scoped
        console.log(milennial); // function scoped
        // add(2, 3); // block scoped
    }

    printAge();

    return age;
}

const firstName = "Hoang";
let age = calcAge(1994);
console.log(age);