// 1. Print out all the cat names in to catNames variable.
let catNames
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
fetch(catsAPI)
  .then(response => response.json())
  .then(data => {
    catNames = data
    catNames.forEach(element => {
      console.log('name=> ' + element.name)
    })
  })
  .catch(error => console.log(error))
