var chalk = require('chalk');
var Mouse = require('./Mouse');

function Cat(name) {
  this.name = name;
  this.stomach = [];
}

Cat.prototype.eat = function (animal) {
  if (animal instanceof Mouse) {
      this.stomach.push(animal);
      animal.isDead = true;
  } else {
    throw new Error('Cat can only eat a mouse!');
  }
};

Cat.prototype.sayHi = function () {
  console.log('Hi! My name is ' + chalk.yellow(this.name));
  console.log('Hi! My name is ' + chalk.green(this.name));
};

module.exports = Cat;
