function Mouse(name, color) {
  this.name = name;
  this.color = color;
  this.dead = false;
}

Mouse.prototype.killed = function () {
  this.dead = true;
};

module.exports = Mouse;
