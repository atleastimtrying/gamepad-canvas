window.classes.Player = function(context, enemies){
  var ctx = context;
  var size = 5;
  var x = utils.roundom(600);
  var y = utils.roundom(400);
  var xVel = 0;
  var yVel = 0;
  var colour = "red";

  var move = function(){
    x += xVel;
    y += yVel;
  };

  var draw = function(){
    ctx.translate(x,y);
    ctx.fillStyle = colour;
    ctx.fillEllipse(0, 0, size);
    ctx.translate(-x,-y);
  };

  this.animate = function(){
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
    alert('player died');
    x = 0;
    y = 0;
  };
};