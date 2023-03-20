// 1. Create a personAccount out function. It has firstname, lastname, incomes, expenses  inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
const personAccount = (() => {
  // firstname, lastname, incomes, expenses
  let firstName = 'Clarice'
  let lastName = 'Zheng'
  let incomes = [
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
  ]
  let expenses = [
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
  function totalIncome() {
    let total = incomes.reduce((total, value) => {
      return (total += value.income)
    }, 0)
    return total
  }
  function totalExpense() {
    let total = expenses.reduce((total, value) => {
      return (total += value.expense)
    }, 0)
    return total
  }
  function accountInfo() {
    return {
      firstName,
      lastName
    }
  }
  function addIncome(obj) {
    incomes.push(obj)
    return incomes
  }
  function addExpense(obj) {
    expenses.push(obj)
    return expenses
  }
  function accountBalance() {
    return totalIncome() - totalExpense()
  }
  return {
    totalIncome,
    totalExpense,
    accountInfo,
    addIncome,
    addExpense,
    accountBalance
  }
})()

console.log(personAccount.totalIncome())
console.log(personAccount.totalExpense())
console.log(personAccount.accountInfo())
console.log(
  personAccount.addIncome({
    income: 6000,
    description: 'Salary'
  })
)
console.log(
  personAccount.addExpense({
    expense: 5000,
    description: 'Shopping'
  })
)
console.log(personAccount.accountBalance())
