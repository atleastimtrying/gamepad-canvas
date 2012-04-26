window.classes.Canvas = function(){
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  var bgColour = "white";
  canvas.width = 600;
  canvas.height = 400;
  document.querySelector('body').appendChild(canvas);

  canvas.clear = function(){
    ctx.fillStyle = bgColour;
    ctx.fillRect(0,0,canvas.width,canvas.height);
  };
  
  ctx.fillEllipse = function(x,y,radius){
    this.beginPath();
    this.arc(x, y, radius, 0, Math.PI * 2, false);
    this.closePath();
    this.fill();
  };
  
  canvas.getContext = function(){
    return ctx;
  }

  return canvas;
};