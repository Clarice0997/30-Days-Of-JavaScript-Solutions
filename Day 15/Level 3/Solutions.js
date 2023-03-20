// 1. Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.
class Calculator {
  constructor(ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]) {
    this.ages = ages
  }
  count() {
    return this.ages.length
  }
  sum() {
    return this.ages.reduce((total, value) => (total += value), 0)
  }
  min() {
    return Math.min(...this.ages)
  }
  max() {
    return Math.max(...this.ages)
  }
  range() {
    return this.max() - this.min()
  }
  mean() {
    return this.sum() / this.count()
  }
  median() {
    if (this.count() % 2 === 0) {
      return (Math.ceil(this.count() / 2) + Math.floor(this.count() / 2)) / 2
    } else {
      return Math.ceil(this.count() / 2)
    }
  }
  mode() {
    let letterMap = new Set(this.ages)
    let counts = []

    for (const variable of letterMap) {
      const filterItem = this.ages.filter(item => item === variable)
      counts.push({ mode: variable, count: filterItem.length })
    }

    return counts
      .sort((a, b) => {
        return b.count - a.count
      })
      .slice(0, 1)
  }
  var() {
    let variance = 0
    this.ages.forEach(item => {
      variance += (item - this.mean()) ** 2
    })
    variance /= this.count()
    return variance.toFixed(1)
  }
  std() {
    return Math.sqrt(this.var()).toFixed(1)
  }
  freqDist() {
    let agesSet = new Set(this.ages)
    let counts = []
    let Frequency = 100 / this.count()

    for (const variable of agesSet) {
      const filterArr = this.ages.filter(item => variable === item)
      counts.push([(filterArr.length * Frequency).toFixed(1), variable])
    }

    return counts.sort((a, b) => Number(b[0]) - Number(a[0]))
  }
  describe() {
    console.log('Count:', statistics.count()) // 25
    console.log('Sum: ', statistics.sum()) // 744
    console.log('Min: ', statistics.min()) // 24
    console.log('Max: ', statistics.max()) // 38
    console.log('Range: ', statistics.range()) // 14
    console.log('Mean: ', statistics.mean()) // 30
    console.log('Median: ', statistics.median()) // 29
    console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
    console.log('Variance: ', statistics.var()) // 17.5
    console.log('Standard Deviation: ', statistics.std()) // 4.2
    console.log('Frequency Distribution: ', statistics.freqDist())
  }
}

const statistics = new Calculator()
statistics.describe()

// 2. Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
class PersonAccount {
  constructor(firstname, lastname, incomes, expenses) {
    this.firstname = firstname
    this.lastname = lastname
    this.incomes = incomes
    this.expenses = expenses
  }
  get totalIncome() {
    let total = this.incomes.reduce((total, value) => {
      return (total += value.income)
    }, 0)
    return total
  }
  get totalExpense() {
    let total = this.expenses.reduce((total, value) => {
      return (total += value.expense)
    }, 0)
    return total
  }
  get accountInfo() {
    return {
      firstName: this.firstName,
      lastName: this.lastName
    }
  }
  set addIncome(obj) {
    this.incomes.push(obj)
  }
  set addExpense(obj) {
    this.expenses.push(obj)
  }
  get accountBalance() {
    return this.totalIncome() - this.totalExpense()
  }
}

const person = new PersonAccount(
  'Clarice',
  'Zheng',
  [
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
  [
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
  ]
)

console.log(person)
