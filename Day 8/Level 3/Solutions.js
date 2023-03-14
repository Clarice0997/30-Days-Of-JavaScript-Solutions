const users = [
  {
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt: '08/01/2020 9:00 AM',
    isLoggedIn: false
  },
  {
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt: '08/01/2020 9:30 AM',
    isLoggedIn: true
  },
  {
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt: '08/01/2020 9:45 AM',
    isLoggedIn: true
  },
  {
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt: '08/01/2020 9:50 AM',
    isLoggedIn: false
  },
  {
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false
  }
]

const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

// 1. Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
const personAccount = {
  firstName: 'Clarice',
  lastName: 'Zheng',
  incomes: [
    {
      income: 5000,
      description: 'Salary'
    },
    {
      income: 6000,
      description: 'Salary'
    },
    {
      income: 7000,
      description: 'Salary'
    }
  ],
  expenses: [
    {
      expense: 3000,
      description: 'Shopping'
    },
    {
      expense: 4000,
      description: 'Shopping'
    },
    {
      expense: 5000,
      description: 'Shopping'
    }
  ],
  totalIncome: function () {
    let total = this.incomes.reduce((total, value) => {
      return (total += value.income)
    }, 0)
    return total
  },
  totalExpense: function () {
    let total = this.expenses.reduce((total, value) => {
      return (total += value.expense)
    }, 0)
    return total
  },
  accountInfo: function () {
    return {
      firstName: this.firstName,
      lastName: this.lastName
    }
  },
  addIncome: function (obj) {
    this.incomes.push(obj)
    return this.incomes
  },
  addExpense: function (obj) {
    this.expenses.push(obj)
    return this.expenses
  },
  accountBalance: function () {
    return this.totalIncome() - this.totalExpense()
  }
}

console.log(personAccount)
console.log(personAccount.totalIncome())
console.log(personAccount.totalExpense())
console.log(personAccount.accountInfo())
console.log(
  personAccount.addIncome({
    income: 3000,
    description: 'part-time job'
  })
)
console.log(
  personAccount.addExpense({
    expense: 2000,
    description: 'Shopping'
  })
)
console.log(personAccount.accountBalance())

// 2. Imagine you are getting the above users collection from a MongoDB database.
// a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
function signUp(user) {
  if (users.some(item => item.username === user.username)) {
    return {
      code: 409,
      message: 'User already exist!'
    }
  }
  user['_id'] = 'jgowdk'
  users.push(user)
  return {
    code: 200,
    message: 'Add to the collection!'
  }
}

console.log(signUp({ username: 'Alex', email: 'Alex@Alex.com', password: '123123', createdAt: '08/01/2020 9:00 AM', isLoggedIn: false }))
console.log(signUp({ username: 'Clarice', email: 'Clarice@Clarice.com', password: '123123', createdAt: '08/01/2020 9:00 AM', isLoggedIn: false }))
console.log(users)

// b. Create a function called signIn which allows user to sign in to the application
function signIn(username) {
  let logIndex = false
  users.forEach((item, index) => {
    if (item.username === username) {
      users[index].isLoggedIn = true
      logIndex = true
    }
  })
  if (logIndex) {
    return {
      code: 200,
      message: `${username} login successful!`
    }
  }
}

console.log(signIn('Alex'))

// 3. The products array has three elements and each of them has six properties.
// a. Create a function called rateProduct which rates the product
const rateProduct = name => {
  let productIndex = -1

  products.forEach((item, index) => {
    if (item.name === name) productIndex = index
  })

  if (productIndex !== -1) {
    let ratings = products[productIndex].ratings
    if (ratings.length !== 0) {
      return ratings
    } else {
      return 'no rating'
    }
  }
}

console.log(rateProduct('mobile phone')) // [ { userId: 'fg12cy', rate: 5 }, { userId: 'zwf8md', rate: 4.5 } ]
console.log(rateProduct('Laptop')) // no rating
console.log(rateProduct('TV')) // [ { userId: 'fg12cy', rate: 5 } ]
// b. Create a function called averageRating which calculate the average rating of a product
function averageRating(name) {
  let productIndex = -1

  products.forEach((item, index) => {
    if (item.name === name) productIndex = index
  })

  if (productIndex !== -1) {
    let ratings = products[productIndex].ratings
    if (ratings.length !== 0) {
      return ratings.reduce((total, value) => (total += value.rate), 0) / ratings.length
    } else {
      return 'no rating'
    }
  }
}

console.log(averageRating('mobile phone')) // 4.75
console.log(averageRating('Laptop')) // no rating
console.log(averageRating('TV')) // 5
// 4. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
function likeProduct(uid, pname) {
  let productIndex = -1

  products.forEach((item, index) => {
    if (item.name === pname) productIndex = index
  })

  if (productIndex !== -1) {
    let likes = products[productIndex].likes
    let likeIndex = likes.indexOf(uid)
    console.log(likeIndex)
    if (likeIndex !== -1) {
      products[productIndex].likes = likes.filter(item => item != uid)
    } else {
      products[productIndex].likes.push(uid)
    }
  }
}

likeProduct('fg12cy', 'mobile phone')
likeProduct('fg12cy', 'TV')

console.log(products)
