window.classes.Enemy = function(context, collection){
  var ctx = context;
  var size = utils.roundom(5) + 1;
  var x = utils.roundom(600);
  var y = utils.roundom(400);
  var xVel = 0;
  var yVel = 0;
  var sightRange = size * 10;
  var alive = true;
  var colour = "black";

  var move = function(){
    x += xVel;
    y += yVel;
  };

  var draw = function(){
    ctx.translate(x,y);
    ctx.fillStyle = colour;
    ctx.fillEllipse(0, 0, size);
    ctx.fillStyle = "rgba(0,0,0,0.1)";
    ctx.fillEllipse(0, 0, sightRange);
    ctx.translate(-x,-y);
  };
  
  var sense = function(){
    //range = utils.dist(this, );
    console.log(collection);
  }

  this.animate = function(){
    sense();
    move();
    draw();
  };

  this.getX = function(){
    return x;
  };

  this.getY = function(){
    return y;
  };

  this.getSize = function(){
    return size;
  };

  this.setVelocity = function(newX, newY){
    xVel = newX;
    yVel = newY;
  };
  
  this.die = function(){
    alive = false;
  };

  this.isAlive = function(){
    return alive
  }
};