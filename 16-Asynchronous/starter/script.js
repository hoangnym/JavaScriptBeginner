'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  //   countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
        <img class="country__img" src="${data.flags.svg}" />
        <div class="country__data">
            <h3 class="country__name">${data.name.official}</h3>
            <h4 class="country__region">${data.subregion}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${
              Object.values(data.languages)[0]
            }</p>
            <p class="country__row"><span>💰</span>${
              Object.values(data.currencies)[0].name
            }</p>
        </div>
    </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

///////////////////////////////////////
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//     <article class="country">
//         <img class="country__img" src="${data.flags.svg}" />
//         <div class="country__data">
//             <h3 class="country__name">${data.name.official}</h3>
//             <h4 class="country__region">${data.subregion}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 1000000
//             ).toFixed(1)}</p>
//             <p class="country__row"><span>🗣️</span>${
//               Object.values(data.languages)[0]
//             }</p>
//             <p class="country__row"><span>💰</span>${
//               Object.values(data.currencies)[0].name
//             }</p>
//         </div>
//     </article>
//   `;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    // Render country 1
    renderCountry(data);

    // Get neighbour country (2)
    const [neighbour] = data.borders;

    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);
      // Render country 1
      renderCountry(data2, 'neighbour');
    });
  });
};

// getCountryData('portugal');
// getCountryData('usa');
// getCountryData('germany');
// getCountryData('vietnam');

// getCountryAndNeighbour('usa');

//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

// Consuming promises
// const getCountryData = function (country) {
//   // Return promise => pass callback function in then method
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       // json method available on all responses from fetch
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       // response.json also a promise object therefore call then again
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    console.log(response);

    if (!response.ok) throw new Error(`${errorMsg} (${response.status})!`);

    return response.json();
  });
};

const getCountryData = function (country) {
  // Return promise => pass callback function in then method
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0] ?? false;
      console.log(neighbour);

      if (!neighbour) {
        throw new Error('Neighbour not found!');
      }

      // Country 2
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.error(`${err}`);
      renderError(`Something went wrong! ${[err.message]} Try again.`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('france');
});

// getCountryData('australia');
// getCountryData('vietnam');
// getCountryData('usa');

// getCountryData('asjaosja');

// Coding Challenge 1
let lat = 48.84196;
let lng = 10.10336;

const reverseGeocoding = function (url, errorMsg = 'Problem with geocoding') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})!`);
    return response.json();
  });
};

const whereAmI = function (lat, lng) {
  reverseGeocoding(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(data => {
      console.log(`You are in ${data.city}, ${data.country}`);
      getCountryData(data.country.toLowerCase());
      return data;
    })
    .catch(err => {
      console.error(err.message);
    });
};

// whereAmI(lat, lng);
// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

/// Event Loop
// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));

// console.log('Test end');

// Building a simple promise with an executor
const lotteryPromise = new Promise(function (resolve, reject) {
  // contain asynchronous behaviour that consumes the promise
  console.log('Lottery draw is happening ...');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      // mark as fulfilled value
      resolve('You WIN');
    } else {
      // mark as failed value
      reject(new Error('You LOST your money.'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

// chain of asynchronous behaviour
wait(2)
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 1 second');
  });

Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem!')).catch(x => console.error(x));
