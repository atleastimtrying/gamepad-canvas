(function() {
  window.classes.Enemy = (function() {
    function Enemy(ctx, collection) {
      this.ctx = ctx;
      this.collection = collection;
      this.id = Math.random();
      this.player = app.player;
      this.size = utils.roundom(utils.maxSize) + 1;
      this.x = utils.roundom(700);
      this.y = utils.roundom(500);
      this.xVel = (Math.random() * 2) - 1;
      this.yVel = (Math.random() * 2) - 1;
      this.sightRange = this.size * 10;
      this.chaseSpeed = 0.005;
      this.colour = "black";
      this.chasing = false;
    }
    Enemy.prototype.edges = function() {
      if (this.x > app.canvas.width) {
        this.x = 0;
      }
      if (this.y > app.canvas.height) {
        this.y = 0;
      }
      if (this.x < 0) {
        this.x = app.canvas.width;
      }
      if (this.y < 0) {
        return this.y = app.canvas.height;
      }
    };
    Enemy.prototype.move = function() {
      this.x += this.xVel;
      return this.y += this.yVel;
    };
    Enemy.prototype.draw = function() {
      this.ctx.translate(this.x, this.y);
      this.ctx.fillStyle = this.colour;
      this.ctx.fillEllipse(0, 0, this.size);
      this.ctx.fillStyle = "rgba(0,0,0,0.1)";
      this.ctx.fillEllipse(0, 0, this.sightRange);
      return this.ctx.translate(-this.x, -this.y);
    };
    Enemy.prototype.canSee = function(target) {
      return utils.dist(target.getX(), target.getY(), this.x, this.y) < this.sightRange;
    };
    Enemy.prototype.sense = function(target) {
      if (this.canSee(target) && !this.chasing && target.id !== this.id) {
        return this.chase(target);
      }
    };
    Enemy.prototype.senseOthers = function() {
      var enemy, _i, _len, _ref, _results;
      _ref = app.enemies.collection;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        enemy = _ref[_i];
        _results.push(this.sense(enemy));
      }
      return _results;
    };
    Enemy.prototype.chase = function(target) {
      var mod, xDiff, yDiff;
      this.chasing = true;
      if (utils.isBigger(target, this)) {
        mod = -this.chaseSpeed;
      } else {
        mod = this.chaseSpeed;
      }
      xDiff = target.getX() - this.x;
      yDiff = target.getY() - this.y;
      this.x += xDiff * mod;
      return this.y += yDiff * mod;
    };
    Enemy.prototype.animate = function() {
      this.chasing = false;
      this.sense(this.player);
      this.sense;
      if (!this.chasing) {
        this.move();
      }
      this.edges();
      return this.draw();
    };
    Enemy.prototype.eat = function() {
      return "wuh?";
    };
    Enemy.prototype.getX = function() {
      return this.x;
    };
    Enemy.prototype.getY = function() {
      return this.y;
    };
    Enemy.prototype.getSize = function() {
      return this.size;
    };
    Enemy.prototype.setVelocity = function(newX, newY) {
      this.xVel = newX;
      return this.yVel = newY;
    };
    Enemy.prototype.die = function() {
      this.size = utils.roundom(10) + 1;
      this.x = utils.roundom(app.canvas.width);
      this.y = utils.roundom(app.canvas.height);
      this.sightRange = this.size * 10;
      this.chaseSpeed = utils.maxSize - this.size;
      return this.chasing = false;
    };
    return Enemy;
  })();
}).call(this);
