(function() {
  window.App = (function() {
    function App() {
      this.deaths = 0;
      this.input = new window.classes.Input();
      this.canvas = new window.classes.Canvas();
      this.ctx = this.canvas.getContext();
      this.player = new window.classes.Player(this.ctx);
      this.enemies = new window.classes.Enemies(this.ctx, this.player);
    }
    App.prototype.animate = function() {
      var results;
      this.canvas.clear();
      results = this.input.read();
      this.player.setVelocity(results.leftStickX, results.leftStickY);
      this.player.animate();
      this.enemies.animate();
      $('#size').html(this.player.getSize());
      return $('#deaths').html(this.deaths);
    };
    return App;
  })();
  $(function() {
    window.utils = new window.classes.Utils();
    window.app = new window.App();
    return window.utils.animate();
  });
}).call(this);
