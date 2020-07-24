// reference type
var object1 = { value: 10 }
var object2 = object1
var object3 = { value: 10 }
console.log(object1 === object3)

// context vs scope
// scope
// function b() {
//   let a = 3
// }
// console.log(a)
// context
const object4 = {
  a: function() {
    console.log(this)
  }
}

// instantiation
class Player {
  constructor(name, type) {
    console.log('player', this)
    this.name = name
    this.type = type
  }
  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type)
    console.log('wizard', this)
  }
  play() {
    console.log(`Weeeeeee I'm a ${this.type}`)
  }
}

const wizard1 = new Wizard('Shelly', 'Healer')
const wizard2 = new Wizard('Shawn', 'Dark Magic')