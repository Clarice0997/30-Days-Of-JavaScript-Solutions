// 1. Declare a function fullName and it print out your full name.
// function fullName() {
//   console.log('Clarice')
// }
// fullName()

// 2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`
}
console.log(fullName('Zheng', 'Clarice')) // Zheng Clarice

// 3. Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(a, b) {
  return a + b
}
console.log(addNumbers(2, 5)) // 7

// 4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length, width) {
  return length * width
}
console.log(areaOfRectangle(5, 5)) // 25

// 5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length, width) {
  return 2 * (length + width)
}
console.log(perimeterOfRectangle(5, 5)) // 20

// 6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length, width, height) {
  return length * width * height
}
console.log(volumeOfRectPrism(5, 5, 5)) // 125

// 7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(radius) {
  return Math.PI * radius * radius
}
console.log(areaOfCircle(5))

// 8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(radius) {
  return 2 * Math.PI * radius
}
console.log(circumOfCircle(5))

// 9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function density(mass, volume) {
  return mass / volume
}
console.log(density(4, 2))

// 10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function speed(distance, time) {
  return distance / time
}
console.log(speed(10, 2))

// 11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function weight(mass, gravity = 9.8) {
  return mass * gravity
}
console.log(weight(50))

// 12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertCelsiusToFahrenheit(oC) {
  return oC * (9 / 5) + 32
}
console.log(convertCelsiusToFahrenheit(30))

// 13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
function BMI(weight, height) {
  return (weight / (((height / 100) * height) / 100)).toFixed(1)
}

let bmi = BMI(55, 180)
if (bmi >= 30) {
  console.log('Obese')
} else if (bmi >= 25 && bmi <= 29.9) {
  console.log('Overweight')
} else if (bmi >= 18.5 && bmi <= 24.9) {
  console.log('Normal weight')
} else {
  console.log('Underweight')
}

// 14. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(month) {
  if ([3, 4, 5].indexOf(month) !== -1) {
    return 'Spring'
  } else if ([6, 7, 8].indexOf(month) !== -1) {
    return 'Summer'
  } else if ([9, 10, 11].indexOf(month) !== -1) {
    return 'Autumn'
  } else if ([12, 1, 2].indexOf(month) !== -1) {
    return 'Winter'
  } else {
    return NaN
  }
}

console.log(checkSeason(9)) // Autumn

// 15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function findMax() {
  return Math.max(...arguments)
}

console.log(findMax(0, 10, -5)) // 10
console.log(findMax(0, -10, -2)) // 0
