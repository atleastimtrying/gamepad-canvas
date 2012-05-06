(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.classes.Canvas = (function() {
    function Canvas() {
      this.resize = __bind(this.resize, this);
      this.clear = __bind(this.clear, this);      this.canvas = $('<canvas></canvas>');
      this.ctx = this.canvas[0].getContext('2d');
      this.resize();
      this.bgColour = "grey";
      this.ctx.fillEllipse = function(x, y, radius) {
        this.beginPath();
        this.arc(x, y, radius, 0, Math.PI * 2, false);
        this.closePath();
        return this.fill();
      };
      $(window).resize(this.resize);
      $('body').append(this.canvas);
    }
    Canvas.prototype.clear = function() {
      this.ctx.fillStyle = this.bgColour;
      return this.ctx.fillRect(0, 0, this.width, this.height);
    };
    Canvas.prototype.resize = function() {
      this.width = $(window).width();
      this.height = $(window).height();
      this.canvas[0].width = this.width;
      return this.canvas[0].height = this.height;
    };
    Canvas.prototype.getContext = function() {
      return this.ctx;
    };
    return Canvas;
  })();
}).call(this);
