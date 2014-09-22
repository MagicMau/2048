// 50 -> 25 -> 12.5 (12 1/2) -> 6.25 (6 1/4) -> 3.125 (3 1/6) -> 1.5625 (1 9/16)
function Tile(position, value) {
  this.x                = position.x;
  this.y                = position.y;
  this.value            = value || 1.5625;

  this.previousPosition = null;
  this.mergedFrom       = null; // Tracks tiles that merged together
}

Tile.prototype.savePosition = function () {
  this.previousPosition = { x: this.x, y: this.y };
};

Tile.prototype.updatePosition = function (position) {
  this.x = position.x;
  this.y = position.y;
};

Tile.prototype.serialize = function () {
  return {
    position: {
      x: this.x,
      y: this.y
    },
    value: this.value
  };
};
