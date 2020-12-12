var highTemperatures = [55, 57, 53, 47, 56, 50];
var lowTemperatures = [33, 30, 29, 35, 31, 32];
// Print the first high temperature to the console.
// Print the last low temperature to the console.

// console.log(highTemperatures[0]);
// console.log(lowTemperatures[5]);

// In your JavaScript file, create an object that represents the current weather. Your can reuse your data from the first exercise. Your object should have the following properties:

// temperature
// conditions
// Log the current temperature to the console.

// Use string template literals to log a sentence about the weather console. (Example: "It's 64 degrees F and sunny.")

// let weatherObject = {
//   temperature: 60,
//   conditions: "sunny"
// }

// console.log(weatherObject.temperature);
// console.log(`It's ${weatherObject.temperature} degrees and ${weatherObject.conditions}.`);

// Refactor your weather object to include today's high and low temperature and sunrise/ sunset times. Now your object should look something like this:

let weatherObject = {
  temperature: {
    high: 60,
    low: 30
  },
  conditions: "sunny",
  astronomy: {
    sunrise: "7 AM",
    sunset: "5:30 PM"
  }
}

// Log today's high temperature to the console.
console.log(weatherObject.temperature.high);

// Log today's low temperature to the console.
console.log(weatherObject.temperature.low);

// Log today's conditions to the console.
console.log(weatherObject.conditions);

// Log today's sunrise time to the console.
console.log(weatherObject.astronomy.sunrise);

// Use string template literals to create a more detailed description of today's weather.
// console.log(`Today's high will be ${weatherObject.temperature.high} degrees, and the low will be ${weatherObject.temperature.low} degrees. Conditions will be ${weatherObject.conditions}. The sun will rise at ${weatherObject.astronomy.sunrise}, and the sun will set at ${weatherObject.astronomy.sunset}.`);

let weatherForecast = [
  {
   day: "Today",
   temperature: {
     high: 55,
     low: 32
   },
   conditions: "sunny",
   astronomy: {
     sunrise: "7:43 AM",
     sunset: "5:09 PM"
   }
  },
  {
   day: "Saturday",
   temperature: {
     high: 50,
     low: 29
    },
   conditions: "cloudy",
   astronomy: {
     sunrise: "7:44 AM",
     sunset: "5:08 PM"
   }
  },
  {
   day: "Sunday",
   temperature: {
     high: 47,
     low: 35
    },
   conditions: "chance of rain",
   astronomy: {
     sunrise: "7:45 AM",
     sunset: "5:07 PM"
   }
  }
 ]

//  Log today's weather conditions to the console.
console.log(weatherForecast[0].conditions);

// Log Saturday's high temperature to the console.
console.log(weatherForecast[1].temperature.high);

// Log Saturday's sunrise time to the console.
console.log(weatherForecast[1].astronomy.sunrise);

// Log Sunday's conditions to the console.
console.log(weatherForecast[2].conditions);

// Log Sunday's sunset time to the console.
console.log(weatherForecast[2].astronomy.sunset);

// Use string template literals to build few sentences about the weather forecast for Sunday. (Example: "The high on Sunday will be 47 and the low will be 35. We're predicting a chance of rain. The sun will rise at 7:45 AM and set at 5:07 PM.")

// console.log(`The high for Sunday will be ${weatherForecast[2].temperature.high} degrees, and the low will be ${weatherForecast[2].temperature.low} degrees. There will be a ${weatherForecast[2].conditions}. The sun will rise at ${weatherForecast[2].astronomy.sunrise}, and the sun will set at ${weatherForecast[2].astronomy.sunset}.`);

let williamGrades = [62, 97, 99, 85, 73, 97];

// Print the first grade in the array to the console.
console.log(williamGrades[0]);

// Print the last grade in the array to the console.
console.log(williamGrades[5]);

// Use JavaScript to find William's average grade.
let total = 0;
for(let i = 0; i < williamGrades.length; i++) {
    total += williamGrades[i];
}
let average = total / williamGrades.length;
console.log(average);
console.log(Math.floor(average));