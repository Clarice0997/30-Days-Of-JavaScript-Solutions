const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}
// 1. Find the person who has many skills in the users object.
let legend
let max = 0

for (const property in users) {
  if (users[property].skills.length > max) {
    max = users[property].skills.length
    legend = property
  }
}

console.log(`The legend is ${legend}, he has ${max} skills`)

// 2. Count logged in users, count users having greater than equal to 50 points from the following object.
const loggedUsers = []
const topUsers = []

for (const property in users) {
  if (users[property].isLoggedIn) loggedUsers.push(property)
  if (users[property].points >= 50) topUsers.push(property)
}

console.log('loggedUsers=>' + loggedUsers)
console.log('topUsers=>' + topUsers)

// 3. Find people who are MERN stack developer from the users object
const MERN = ['MongoDB', 'Express', 'React', 'Node']
let MERNStackDeveloper = []

for (const property in users) {
  const skills = users[property].skills
  const skillsSet = new Set(skills)
  const diff = MERN.filter(item => !skillsSet.has(item))
  if (diff.length === 0) MERNStackDeveloper.push(property)
}

console.log(MERNStackDeveloper)

// 4. Set your name in the users object without modifying the original users object
const myUser = {
  email: 'myemail@domain.com',
  skills: ['HTML', 'CSS', 'JavaScript'],
  age: 25,
  isLoggedIn: true,
  points: 100
}
const newUsers = { ...users, Clarice: myUser }
console.log(newUsers)

// 5. Get all keys or properties of users object
console.log(Object.keys(users))

// 6. Get all the values of users object
console.log(Object.values(users))

// 7. Use the countries object to print a country name, capital, populations and languages.
countries_data.forEach(item => {
  console.log(item.name)
  console.log(item.capital)
  console.log(item.population)
  console.log(item.languages)
})
