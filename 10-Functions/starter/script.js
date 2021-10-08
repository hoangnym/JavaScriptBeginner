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

    // if (passenger.passport === 213492193) {
    //     alert("Checked in.");
    // } else {
    //     alert("Wrong passport.")
    // }
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

// Higher order function (includes a callback function)
const transformer = function(str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformey by: ${fn.name}`);
};

transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);

// JS uses callbacks all the time
const high5 = function() {
    console.log("High Five!");
}

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);


const greet = (greeting) => {
    return (name) => {
        console.log(`${greeting} ${name}`)
    }
}

const greeterHey = greet("Hey");
greeterHey("Hoang");
greeterHey("Steven");

greet("Hello")("Hoang");


const lufthansa = {
    airline: "Lufthansa",
    iataCode: "LH",
    bookings: [],
    book(flightNumber, passengerName) {
        console.log(`${passengerName} booked a seat on ${this.airline}, flight ${this.iataCode}${flightNumber}.`);
        this.bookings.push({
            flight: `${this.iataCode}${flightNumber}`,
            passengerName
        })
    },

}

lufthansa.book("239", "Hoang Nguyen");
lufthansa.book("635", "John Smith");
console.log(lufthansa.bookings);

const eurowings = {
    airline: "Eurowings",
    iataCode: "EW",
    bookings: []
}

const book = lufthansa.book;

// does not work
// book("23", "Sarah Williams");

// Call method: set the this keyword manually
book.call(eurowings, 23, "Sarah Williams");
console.log(eurowings);

book.call(lufthansa, 239, "Mary Cooper");
console.log(lufthansa);

const swiss = {
    airline: "Swiss Airline",
    iataCode: "LX",
    bookings: []
}

book.call(swiss, 345, "Mary Cooper");
console.log(swiss);

// Apply method (takes in an array as method)
const flightData = [583, "George Cooper"];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);
console.log(swiss);

// Bind method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

const bookEW23 = book.bind(eurowings, 23);
bookEW23("Hoang Nguyen");
bookEW23("Martha Cooper");

bookEW(23, "Steven Williams");
console.log(eurowings);

// With Event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function() {

    console.log(this);
    this.planes++;
    console.log(this.planes);
}

document.querySelector(".buy").addEventListener('click', lufthansa.buyPlane.bind(lufthansa));


// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(200));

// Coding challenge
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  
  // Methods
  registerNewAnswer() {
      // Get the answer
      const answer = Number(prompt(`${this.question}\n${this.options.join("\n")}\n(Write option number)`));

    // Register the answer using short circuting
      typeof answer === "number" && answer < this.answers.length && this.answers[answer]++;

      this.displayResults();
      this.displayResults("string");
  },

  displayResults(type = "array") {
    if (type === 'array') {
        console.log(this.answers);
    } else if (type === 'string') {
        console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  }
}

// linking poll object to button
document.querySelector(".poll").addEventListener("click", poll.registerNewAnswer.bind(poll));

// [5, 2, 3]
// [1, 5, 3, 9, 6, 1]

poll.displayResults.call({answers: [5, 2, 3]});
poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1]});