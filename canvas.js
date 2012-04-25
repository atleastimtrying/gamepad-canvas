var Canvas = function(){
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  var bgColour = "white";
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.querySelector('body').appendChild(canvas);

  canvas.makeImage = function(){
    var favicon = document.getElementById('favicon');
    favicon.href = canvas.toDataURL();
  };

  canvas.clear = function(){
    ctx.fillStyle = bgColour;
    ctx.fillRect(0,0,canvas.width,canvas.height);
  };

  canvas.randomFill = function(){
    bgColour = "rgb(" + roundom(255) + "," + roundom(255) + "," + roundom(255) + ")";
    this.clear();
  };
  
  canvas.getContext = function(){
    return ctx;
  }

  return canvas;
};