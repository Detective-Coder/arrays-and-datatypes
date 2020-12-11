var highTemperatures = [55, 57, 53, 47, 56, 50];
var lowTemperatures = [33, 30, 29, 35, 31, 32];
// Print the first high temperature to the console.
// Print the last low temperature to the console.

console.log(highTemperatures[0]);
console.log(lowTemperatures[5]);

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
console.log(`Today's high will be ${weatherObject.temperature.high} degrees, and the low will be ${weatherObject.temperature.low} degrees. Conditions will be ${weatherObject.conditions}. The sun will rise at ${weatherObject.astronomy.sunrise}, and the sun will set at ${weatherObject.astronomy.sunset}.`);

