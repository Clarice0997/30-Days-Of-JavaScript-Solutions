// array
const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya']
const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB']

// 1. Declare an empty array
const emptyArray = []

// 2. Declare an array with more than 5 number of elements
const numberArray = [1, 2, 3, 4, 5, 6, 7]

// 3. Find the length of your array
console.log(numberArray.length)

// 4. Get the first item, the middle item and the last item of the array
console.log(numberArray[0])
console.log(numberArray[Math.floor(numberArray.length / 2)])
console.log(numberArray[numberArray.length - 1])

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataArray = [1, 'string', null, undefined, true, Symbol, [1, 2, 3], { name: 'Bob' }]
console.log(mixedDataArray)

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
// 7. Print the array using console.log()
// 8. Print the number of companies in the array
// 9. Print the first company, middle and last company
// 10. Print out each company
// 11. Change each company name to uppercase one by one and print them out
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies)
console.log(itCompanies.length)
console.log(itCompanies[0])
console.log(itCompanies[Math.floor(itCompanies.length / 2)])
console.log(itCompanies[itCompanies.length - 1])

itCompanies.forEach(item => {
  console.log(item)
})

const itCompaniesUppercase = itCompanies.map(item => {
  return item.toUpperCase()
})
console.log(itCompaniesUppercase)

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
let str = `${itCompanies.slice(0, -1).join(', ')} and ${itCompanies[itCompanies.length - 1]} are big IT companies.`
console.log(str)

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let targetCompany = 'Facebook'
if (itCompanies.includes(targetCompany) !== -1) {
  console.log(targetCompany)
} else {
  console.log('a company is not found')
}

// 14. Filter out companies which have more than one 'o' without the filter method
let filterArray = []
itCompanies.forEach(item => {
  let oArray = item.match(/o/gi)
  if (typeof oArray != 'undefined' && oArray) {
    if (oArray.length >= 2) {
      filterArray.push(item)
    }
  }
})

console.log(filterArray)

// using filter
filterArray = itCompanies.filter(item => {
  let oArray = item.match(/o/gi)
  if (typeof oArray != 'undefined' && oArray) {
    if (oArray.length >= 2) {
      return item
    }
  }
})

console.log(filterArray)

// 15. Sort the array using sort() method
// console.log(itCompanies.sort())

// 16. Reverse the array using reverse() method
// console.log(itCompanies.reverse())

// 17. Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3))

// 18. Slice out the last 3 companies from the array
console.log(itCompanies.slice(-3))

// 19. Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(Math.floor(itCompanies.length / 2), Math.floor(itCompanies.length / 2) + 1))

// 20. Remove the first IT company from the array
console.log(itCompanies.shift())
console.log(itCompanies)

// 21. Remove the middle IT company or companies from the array
console.log(itCompanies.splice(Math.floor(itCompanies.length / 2), 1))
console.log(itCompanies)

// 22. Remove the last IT company from the array
console.log(itCompanies.pop())
console.log(itCompanies)

// 23. Remove all IT companies
console.log(itCompanies.splice(0, itCompanies.length))
