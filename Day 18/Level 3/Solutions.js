// 1. Read the cats api and find the average weight of cat in metric unit.
let cats
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
fetch(catsAPI)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    cats = data
    cats.forEach(element => {
      let averageWeight
      let weightStr = element.weight.metric
      let weightNum = weightStr.match(/\d/gi)
      averageWeight = (weightNum[0] + weightNum[1]) / 2
      console.log(`name=> ${element.name}, averageWeight=> ${averageWeight}`)
    })
  })
  .catch(error => console.log(error))

// 2. Read the countries api and find out the 10 largest countries
// let countries
// const countriesAPI = 'https://restcountries.com/v2/all'
// fetch(countriesAPI)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//     countries = data
//     countries.sort((a, b) => b.area - a.area)
//     console.log(countries.slice(0, 10))
//   })
//   .catch(error => console.log(error))

// 3. Read the countries api and count total number of languages in the world used as officials.
let countries
const countriesAPI = 'https://restcountries.com/v2/all'
fetch(countriesAPI)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    countries = data
    let languagesArr = []
    countries.forEach(item => {
      let language = item.languages
      language.forEach(item => {
        languagesArr.push(item.name)
      })
    })
    console.log(`The number of language is ${languagesArr.length}`)
  })
  .catch(error => console.log(error))
