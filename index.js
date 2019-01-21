var Cat = require('./Cat');
var Mouse = require('./Mouse');

var tom = new Cat('Tom');
var jerry = new Mouse('Jerry');

tom.eat(jerry);
console.log(tom);
