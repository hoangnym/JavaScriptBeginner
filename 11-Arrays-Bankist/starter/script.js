'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function(movements) {
  containerMovements.innerHTML = '';
  // .textContent = 0

  movements.forEach(function(mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal'
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__value">${mov}</div>
      </div>
    `
    containerMovements.insertAdjacentHTML('afterbegin', html);
  })
}

displayMovements(account1.movements);

const calcDisplayBalance = function(movements) {
  const balance = movements.reduce((acc, cur) => {return acc + cur}, 0);
  labelBalance.textContent = `${balance} EUR`;
}

calcDisplayBalance(account1.movements);


const createUsernames = function(accs) {
  accs.forEach(function(acc) {
    acc.username = acc.owner.toLowerCase().split(' ').map((word) => {return word[0]}).join('');
  })
}

createUsernames(accounts);


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// map method
// convert movements to USD
const eurToUsd = 1.1;

const movementsUSD = movements.map((mov) => {return mov * eurToUsd});

console.log(movements);
console.log(movementsUSD);

const movementDescriptions = movements.map((mov, i) => {
  return `Movement ${i+1}: You ${mov > 0 ? 'deposited':'withdrew'} ${Math.abs(mov)}`;
})

console.log(movementDescriptions);

// filter method
// create array of deposits
const deposits = movements.filter((mov) => {return mov > 0;})

console.log(movements);
console.log(deposits);

const withdrawals = movements.filter((mov) => {return mov < 0;})
console.log(withdrawals);


// reduce method
// create global balance of account - accumulator -> Snowball
const balance = movements.reduce((acc, cur) => {return acc + cur; }, 0);
console.log(balance);

// Maximum value
const maxMovement = movements.reduce((acc, cur) => {
  if (acc > cur) return acc;
  else return cur;
}, movements[0])

console.log(maxMovement);


// const movementsUSDForOf = [];
// for (const mov of movements) {
//   movementsUSDForOf.push(mov * eurToUsd);
// }

// console.log(movementsUSDForOf);

// Coding Challanges

const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];
const dogsJulia2 = [9, 16, 6, 8, 3];
const dogsKate2 = [10, 5, 6, 1, 4];

const checkDogs = function(dogs1, dogs2) {
  const dogs1Copy = dogs1.slice();
  dogs1Copy.splice(0, 1);
  dogs1Copy.splice(-2);

  const dogsJuliaKate = [...dogs1Copy, ...dogs2];
  console.log(dogsJuliaKate);

  dogsJuliaKate.forEach((dogAge, i) => {
    if (dogAge > 3) {
      console.log(`Dog number ${i + 1} is an adult and is ${dogAge} years old.`)
    } else {
      console.log(`Dog number ${i + 1} is still a puppy.`)
    }
  })
}

// checkDogs(dogsJulia, dogsKate);
// checkDogs(dogsJulia2, dogsKate2);

const calcAverageHumanAge = function(dogAges) {
  // Calculate dog ages in human years
  const mapDogs = dogAges.map((age) => {
    return age <= 2 ? 2 * age : 16 + 4 * age;
  })

  // Exclude all the dogs less than 18 human years old
  const adultDogs = mapDogs.filter((humanAge) => {
    return humanAge >= 18;
  })

  // Calculate average human age of all adult dogs
  const averageHumanAge = adultDogs.reduce((acc, cur, i, array) => {
    return acc + cur / array.length
  },0)

  console.log('Average adult dog years: ',averageHumanAge);

  return averageHumanAge
}

const dogAges1 = [5, 2, 4, 1, 15, 8, 3];
const dogAges2 = [16, 6, 10, 5, 6, 1, 4];

calcAverageHumanAge(dogAges1);
calcAverageHumanAge(dogAges2);


/////////////////////////////////////////////////