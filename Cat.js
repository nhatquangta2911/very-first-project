var chalk = require('chalk');

function Cat(name) {
  this.name = name;
}

Cat.prototype.sayHi = function () {
  console.log('Hi! My name is ' + chalk.yellow(this.name));
};

module.exports = Cat;
