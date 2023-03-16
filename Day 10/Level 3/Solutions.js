// 1. How many languages are there in the countries object file.
const languages = []

countries_data.forEach(item => {
  languages.push(...item.languages)
})

let countriesSet = new Set(languages)

console.group('Languages')
console.log(countriesSet)
console.log('size=>' + countriesSet.size)
console.groupEnd()

// 2. Use the countries data to find the 10 most spoken languages:
function mostSpokenLanguages(data, topNum) {
  const dataSet = new Set(data)
  const counts = []

  for (const variable of dataSet) {
    const filterData = data.filter(item => variable === item)
    const obj = {}
    obj[variable] = filterData.length
    counts.push(obj)
  }

  return counts
    .sort((a, b) => {
      return Object.values(b)[0] - Object.values(a)[0]
    })
    .slice(0, topNum)
}
// Data should be an array
console.log(mostSpokenLanguages(languages, 10))
