(function() {
  window.classes.Enemy = (function() {
    function Enemy(ctx, collection) {
      this.ctx = ctx;
      this.collection = collection;
      this.player = app.player;
      this.size = utils.roundom(10) + 1;
      this.x = utils.roundom(700);
      this.y = utils.roundom(500);
      this.xVel = 0;
      this.yVel = 0;
      this.aimlessX = Math.random(2) - 1;
      this.aimlessY = Math.random(2) - 1;
      this.sightRange = this.size * 10;
      this.alive = true;
      this.colour = "black";
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
    Enemy.prototype.sense = function() {
      if (utils.dist(this.player.getX(), this.player.getY(), this.x, this.y) < this.sightRange) {
        if (utils.isPlayerBigger(this.player, this)) {
          this.xVel -= 0.1;
          return this.yVel -= 0.1;
        } else {
          return this.colour = "red";
        }
      } else {

      }
    };
    Enemy.prototype.animate = function() {
      this.sense();
      this.move();
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
      return this.alive = false;
    };
    return Enemy;
  })();
}).call(this);
