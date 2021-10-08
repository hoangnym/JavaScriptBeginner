'use strict';

const bookings = []

const createBooking = function(flightNumber, numPassengers = 1, price = 199 * numPassengers) {
    // ES5
    // numPassengers = numPassengers ?? 1;
    // price = price ?? 199;

    const booking = {
        flightNumber,
        numPassengers,
        price
    };

    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', 8);
createBooking('LH123', undefined, 9);


const flight = 'LH234';
const hoang = {
    firstName: "Hoang Nguyen",
    passport: 213492193,
}

const checkIn = function(flightNum, passenger) {
    flightNum = 'LH199';
    passenger.firstName = "Mr. " + passenger.firstName

    if (passenger.passport === 213492193) {
        alert("Checked in.");
    } else {
        alert("Wrong passport.")
    }
}

checkIn(flight, hoang);
console.log(flight);
console.log(hoang);



const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(" ");
    return [first.toUpperCase(), ...others].join(" ")
}

// Higher order function
const transformer = function(str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformey by: ${fn.name}`);
};

transformer("JavaScript is the best!", upperFirstWord);