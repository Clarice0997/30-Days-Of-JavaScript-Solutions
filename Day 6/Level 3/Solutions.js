const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB']
const mernStack = ['MongoDB', 'Express', 'React', 'Node']

// 1. Copy countries array(Avoid mutation)
const copyArray = JSON.parse(JSON.stringify(countries))
console.log(copyArray)

// 2. Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
const sortedCountries = copyArray.sort()
console.log(sortedCountries)

// 3. Sort the webTechs array and mernStack array
webTechs.sort()
mernStack.sort()

console.log(webTechs)
console.log(mernStack)

// 4. Extract all the countries contain the word 'land' from the countries array and print it as array
const landArray = countries.filter(item => {
  if (item.indexOf('land') !== -1) return item
})
console.log(landArray)

// 5. Find the country containing the hightest number of characters in the countries array
let max = 0
let country = ''
countries.forEach((item, index) => {
  if (item.length > max) {
    max = item.length
    country = item
  }
})

console.log(country)

// 7. Extract all the countries containing only four characters from the countries array and print it as array
const fourArray = countries.filter(item => {
  if (item.length === 4) return item
})

console.log(fourArray)

// 8. Extract all the countries containing two or more words from the countries array and print it as array
const twoWordsArray = countries.filter(item => {
  if (item.split(' ').length !== 1) return item
})

console.table(twoWordsArray)

// 9. Reverse the countries array and capitalize each country and stored it as an array
let reverseCountries = countries.reverse()
reverseCountries = reverseCountries.map(item => {
  return item.toUpperCase()
})

console.log(reverseCountries)
