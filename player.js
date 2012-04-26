window.classes.Player = function(context){
  var ctx = context;
  var size = 1;
  var x = 80;
  var y = 80;
  var xVel = 0;
  var yVel = 0;
  var colour = "rgb(0,0,0)";

  var move = function(){
    x += xVel;
    y += yVel;
  };

  this.draw = function(){        
    ctx.fillStyle = colour;
    ctx.fillRect(x,y,size,size);
  };

  this.animate = function(){
    move();
  };

  this.getX = function(){
    return x;
  };

  this.getY = function(){
    return y;
  };

  this.setVelocity = function(newX, newY){
    xVel = newX;
    yVel = newY;
  };
  
  this.randomColour = function(){
    colour = "rgb(" + roundom(255) + "," + roundom(255) + "," + roundom(255) + ")";
  }
};