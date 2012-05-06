(function() {
  window.classes.Enemy = (function() {
    function Enemy(ctx, collection) {
      this.ctx = ctx;
      this.collection = collection;
      this.size = utils.roundom(7) + 1;
      this.x = utils.roundom(600);
      this.y = utils.roundom(400);
      this.xVel = 0;
      this.yVel = 0;
      this.sightRange = this.size * 10;
      this.alive = true;
      this.colour = "black";
    }
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
    Enemy.prototype.sense = function() {};
    Enemy.prototype.animate = function() {
      this.sense();
      this.move();
      return this.draw();
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
      return this.alive = false;
    };
    return Enemy;
  })();
}).call(this);
