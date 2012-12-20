// Generated by CoffeeScript 1.3.3
(function() {

  window.App = (function() {

    function App() {
      this.deaths = 0;
      this.input = new window.classes.Input();
      this.canvas = new window.classes.Canvas();
      this.ctx = this.canvas.getContext();
      this.players = [];
      this.players.push(new window.classes.Player(this.ctx));
      this.players.push(new window.classes.Player(this.ctx));
      this.enemies = new window.classes.Enemies(this.ctx, this.players);
    }

    App.prototype.animate = function() {
      var results;
      this.canvas.clear();
      results = this.input.read();
      this.players[0].setVelocity(results[0], results[1]);
      this.players[1].setVelocity(results[2], results[3]);
      this.players[0].animate();
      this.players[1].animate();
      this.enemies.animate();
      $('#size').html(this.players[0].getSize() + "|" + this.players[1].getSize());
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
