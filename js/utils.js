(function() {
  window.classes.Utils = (function() {
    function Utils() {}
    Utils.prototype.animate = function() {
      window.app.animate();
      return requestAnimationFrame(window.utils.animate);
    };
    Utils.prototype.roundom = function(num) {
      return Math.round(Math.random() * num);
    };
    Utils.prototype.dist = function(x1, y1, x2, y2) {
      var xs, ys;
      xs = x2 - x1;
      xs = xs * xs;
      ys = y2 - y1;
      ys = ys * ys;
      return Math.sqrt(xs + ys);
    };
    Utils.prototype.intersect = function(obj1, obj2) {
      var distance, range;
      distance = this.dist(obj1.getX(), obj1.getY(), obj2.getX(), obj2.getY());
      range = obj1.getSize() + obj2.getSize();
      return distance < range;
    };
    Utils.prototype.fight = function(player, enemy) {
      var loser, winner;
      if (player.getSize() < enemy.getSize()) {
        loser = player;
        winner = enemy;
      } else {
        loser = enemy;
        winner = player;
      }
      loser.die();
      return winner.eat();
    };
    Utils.prototype.amIBigger = function(player, enemy) {
      return player.getSize() < enemy.getSize();
    };
    return Utils;
  })();
}).call(this);
