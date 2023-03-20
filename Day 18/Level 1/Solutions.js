// 1. Read the countries API using fetch and print the name of country, capital, languages, population and area.
const countriesAPI = 'https://restcountries.com/v2/all'
fetch(countriesAPI)
  .then(response => response.json())
  .then(data => {
    data.forEach(country => {
      const { name, capital, languages, population, area } = country
      console.log(`Name: ${name} Capital: ${capital} Languages: ${languages.map(lang => lang.name).join(', ')} Population: ${population} Area: ${area}`)
    })
  })
  .catch(error => console.log(error))
