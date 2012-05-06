(function() {
  window.classes.Enemies = (function() {
    function Enemies(context, player) {
      this.context = context;
      this.player = player;
      this.collection = [];
    }
    Enemies.prototype.add = function() {
      return this.collection.push(new window.classes.Enemy(this.context, this));
    };
    Enemies.prototype.remove = function(enemy) {
      return this.collection.splice(this.collection.indexOf(enemy), 1);
    };
    Enemies.prototype.animate = function() {
      var enemy, _i, _len, _ref;
      _ref = this.collection;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        enemy = _ref[_i];
        if (enemy.alive) {
          enemy.animate();
          if (utils.intersect(this.player, enemy)) {
            utils.fight(this.player, enemy);
          }
        }
      }
      if (this.collection.length < 30) {
        return this.add();
      }
    };
    return Enemies;
  })();
}).call(this);
