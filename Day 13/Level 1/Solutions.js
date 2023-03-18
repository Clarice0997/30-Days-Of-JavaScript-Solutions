// 1. Display the countries array as a table
console.table(countries)

// 2. Display the countries object as a table
console.table(countries_data)

// 3. Use console.group() to group logs
console.group('group')
console.table(countries)
console.table(countries_data)
console.groupEnd()
