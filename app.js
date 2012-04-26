window.classes.App = function(){
  var input = new window.classes.Input();
  var canvas = new window.classes.Canvas();
  var ctx = canvas.getContext();
  var player = new window.classes.Player(ctx);
  var enemies = new window.classes.Enemies(ctx,player);
  this.animate = function(){
    canvas.clear();
    results = input.read();
    player.setVelocity(results.leftStickX, results.leftStickY);
    player.animate();
    enemies.animate();
  };

};

window.onload = function(){
  window.app = new window.classes.App();
  window.utils.animate();
};
