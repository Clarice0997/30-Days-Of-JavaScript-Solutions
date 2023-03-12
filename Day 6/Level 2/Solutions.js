const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya']
const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB']
const mernStack = ['MongoDB', 'Express', 'React', 'Node']

// 1. Develop a small script which generate any number of characters random id:
function generateId(num = 6) {
  const asciiChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let id = ''

  for (let i = 0; i < num; i++) {
    const randomIndex = Math.floor(Math.random() * asciiChars.length)
    id += asciiChars[randomIndex]
  }

  return id
}

console.log(generateId())
console.log(generateId(12))

// 2. Write a script which generates a random hexadecimal number.
function generateHex() {
  let hex = Math.floor(Math.random() * 16777215).toString(16)
  if (hex.length != 6) {
    hex = hex.padStart(6, '0')
  }
  return `#${hex}`
}

console.log(generateHex())

// 3. Write a script which generates a random rgb color number.
function generateRGB() {
  return `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
}

console.log(generateRGB())

// 4. Using the above countries array, create the following new array.
const upperCountries = countries.map(item => {
  return item.toUpperCase()
})

console.log(upperCountries)

// 5. Using the above countries array, create an array for countries length'.
const countriesLength = countries.map(item => {
  return item.length
})

console.log(countriesLength)

// 6. Use the countries array to create the following array of arrays:
const countriesArrayOfArrays = countries.map(item => [item, item.slice(0, 3).toUpperCase(), item.length])

console.log(countriesArrayOfArrays)

// 7. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
const landFilter = countries.filter(item => {
  if (item.indexOf('land') !== -1) return item
})

console.log(landFilter)

// 8. In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
const endWithia = countries.filter(item => {
  if (item.endsWith('ia')) return item
})

console.log(endWithia)

// 9. Using the above countries array, find the country containing the biggest number of characters.
let max = Math.max(...countriesLength)
let country = ''

for (let item of countries) {
  console.log(item)
  if (item.length === max) {
    country = item
  }
}

console.log(max)
console.log(country)

// 10. Using the above countries array, find the country containing only 5 characters.
const onlyFive = countries.filter(item => {
  if (item.length === 5) return item
})

console.log(onlyFive)

// 11. Find the longest word in the webTechs array
max = Math.max(...webTechs.map(item => item.length))
let tech = ''

for (let item of webTechs) {
  if (item.length === max) {
    tech = item
  }
}

console.log(max)
console.log(tech)

// 12. Use the webTechs array to create the following array of arrays:
const webTechsArrayOfArray = webTechs.map(item => [item, item.length])
console.log(webTechsArrayOfArray)

// 13. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
let mern = ''
for (let i = 0; i < mernStack.length; i++) {
  mern += mernStack[i].slice(0, 1)
}
console.log(mern) // MERN

// 14. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
for (let index = 0; index < webTechs.length; index++) {
  console.log(webTechs[index])
}

for (let item of webTechs) {
  console.log(item)
}

// 15. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
const fruits = ['banana', 'orange', 'mango', 'lemon']
const reversedFruits = []

for (let i = fruits.length - 1; i >= 0; i--) {
  reversedFruits.push(fruits[i])
}

console.log(reversedFruits) // ['lemon', 'mango', 'orange', 'banana']

// 16. Print all the elements of array as shown below.
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]

for (let i = 0; i < fullStack.length; i++) {
  for (let j = 0; j < fullStack[i].length; j++) {
    console.log(fullStack[i][j].toUpperCase())
  }
}
