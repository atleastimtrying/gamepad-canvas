(function() {
  window.classes.Player = (function() {
    function Player(ctx, enemies) {
      this.ctx = ctx;
      this.size = 2;
      this.x = utils.roundom(600);
      this.y = utils.roundom(400);
      this.xVel = 0;
      this.yVel = 0;
      this.colour = "red";
    }
    Player.prototype.edges = function() {
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
    Player.prototype.move = function() {
      this.x += this.xVel;
      return this.y += this.yVel;
    };
    Player.prototype.draw = function() {
      this.ctx.translate(this.x, this.y);
      this.ctx.fillStyle = this.colour;
      this.ctx.fillEllipse(0, 0, this.size);
      return this.ctx.translate(-this.x, -this.y);
    };
    Player.prototype.animate = function() {
      this.move();
      this.edges();
      return this.draw();
    };
    Player.prototype.getX = function() {
      return this.x;
    };
    Player.prototype.getY = function() {
      return this.y;
    };
    Player.prototype.getSize = function() {
      return this.size;
    };
    Player.prototype.eat = function() {
      return this.size += 1;
    };
    Player.prototype.setVelocity = function(newX, newY) {
      this.xVel = newX * 2;
      return this.yVel = newY * 2;
    };
    Player.prototype.die = function() {
      this.x = 0;
      return this.y = 0;
    };
    return Player;
  })();
}).call(this);
