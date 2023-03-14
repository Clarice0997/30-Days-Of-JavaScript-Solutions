// 1. Create an empty object called dog
const dog = {}

// 2. Print the the dog object on the console
console.log(dog)

// 3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = 'wolf'
dog.legs = 4
dog['color'] = 'gray'
dog['age'] = 8
dog['bark'] = function () {
  return 'woof woof'
}

console.log(dog)

// 4. Get name, legs, color, age and bark value from the dog object
console.log(Object.values(dog))

// 5. Set new properties the dog object: breed, getDogInfo
dog.breed = 'coyote'
dog.getDogInfo = function () {
  return {
    name: this.name,
    legs: this.legs,
    color: this.color,
    age: this.age,
    breed: this.breed
  }
}

console.log(dog.getDogInfo())
