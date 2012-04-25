var App = function(){

  var canvas = new Canvas();
  var ctx = canvas.getContext();
  var pointer = new Pointer();
  var player = new Player(ctx);
  var input = new Input();
  var selectOnce = true;
  
  this.animate = function(){
    results = input.read();
    
    player.setVelocity(results.leftStickX, results.leftStickY);
    
    pointer.move(player.getX(),player.getY());
    
    player.animate();
    if(results.faceButton0){
      player.draw();
    }
    
    if(results.faceButton1){
      canvas.clear();
    }
    
    if(results.faceButton2){
      canvas.makeImage();
    }
    
    if(results.faceButton3){
      player.randomColour();
    }
    
    if(results.select){
      if(selectOnce){
        canvas.randomFill();
        selectOnce = false;
      }
    }else{
      selectOnce = true;
    }
  };

  canvas.clear();
};

window.onload = function(){
  window.app = new App();
  animate();
};

var animate = function(){
  window.app.animate();
  requestAnimationFrame(animate);
};

var roundom = function(num){
  return Math.round(Math.random()*num);
};
